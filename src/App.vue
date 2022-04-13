<template>
  <div class="Body">
    <router-view v-if="isRouterAlive" />
    <router-link to="/Service" id="Service" v-if="showService">
      <img :src="`./static/icon/customer.png`" width="55">
      {{$t('common[0]')}}
    </router-link>
    <div class="MiLineBox" v-if="showMiliao">
      <div class="MiLine" id="MiLine" v-show="minMiliao">
        <a href="javascript:;" class="MiLineFixedBtn" @click="openMiliao">密聊</a>
      </div>
      <div class="CancelMiLine" id="CancelMiLine" v-show="minMiliao">
        <img :src="`./static/miliao/icon/icon-cancel.svg`" height="30">
        {{$t('common[1]')}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide () {
    return {
      reloadHtml: this.reloadHtml
    }
  },
  components: {

  },
  props: [],
  data() {
    return {
      percentNum: 0,
      showEntrance: false,
      networkState: 1,
      isQuit: false,
      isView: true,
      isRouterAlive: true,
      showNotice: false,
      isInit: false,
      showMiliao: false,
      minMiliao: false,
      translateX: '0',
      translateY: '-150',
      isCancel: false,
      showService: true,
    }
  },
  computed: {

  },
  watch: {
    '$route'(to, from) {
      this.isQuit = false;
      if(to.meta.active=='miliao'){
        this.showService = false
      }else{
        localStorage['BackUrl'] = to.name
        this.showService = true
      }
      if(from.name=='line'){
        this.$Model.GetBackData()
      }
    },
  },
  created() {
	  this.$SetLanguage('en-US')
    this.$Model.GetBackData()
    this.isInit = true
  },
  mounted() {
    $('body').on('click','#MiLineBtn',()=>{
      this.openMiliao()
    });
    $('body').on('click','#CloseAlert',()=>{
      this.$dialog.close();
    });
    /*APP初始化启动*/
    document.addEventListener("plusready", () => {
      document.addEventListener("pause", ()=>{
        this.isView = false
        console.log('后台')
      }, false);
      document.addEventListener("resume", ()=>{
        this.isView = true
        console.log('前台')
      }, false);
      document.addEventListener("newintent", ()=>{
        var args = plus.runtime.arguments;
        if(args){
          this.$router.push(args)
        }
        console.log(args)
      }, false);
      this.winH = document.body.clientHeight;
      plus.runtime.getProperty(plus.runtime.appid, wgtinfo => {
        localStorage["AppVersion"] = wgtinfo.version;
        checkUpdate(wgtinfo.version);
      });
      // document.addEventListener("netchange",() => {
      //   var nt = plus.networkinfo.getCurrentType();
      //   switch (nt) {
      //     case plus.networkinfo.CONNECTION_ETHERNET:
      //     case plus.networkinfo.CONNECTION_WIFI:
      //     case plus.networkinfo.CONNECTION_CELL2G:
      //     case plus.networkinfo.CONNECTION_CELL3G:
      //     case plus.networkinfo.CONNECTION_CELL4G:
      //       console.log("有网络");
      //       this.networkState = 1;
      //       break;
      //     case plus.networkinfo.CONNECTION_UNKNOW:
      //     case plus.networkinfo.CONNECTION_NONE:
      //       console.log("无网络");
      //       this.networkState = 0;
      //       break;
      //     default:
      //       console.log("未知网络");
      //       this.networkState = 2;
      //       break;
      //   }
      // },false);
      if (plus.os.name == "iOS") {
        iosBack();
      }
      plus.key.addEventListener("backbutton", () => {
        appBack();
      });
    });
    let retry = 0;
    var checkUrl = UpdateUrl[0];
    const checkUpdate = (wgtVer) => {
      $.ajax({
        url: checkUrl,
        dataType: "json",
        data: {
          version: wgtVer
        },
        timeout: 2000,
        success: data => {
          if(data.code==0){
            this.$Dialog.Confirm(data.code_dec,()=>{
              downWgt(data.url);
            })
          }
        },
        error: (xhr, type, errorThrown) => {
          retry+=1
          if(retry<2){
            checkUpdate(wgtVer)
          }else{
            if (checkUrl != UpdateUrl[1]) {
              retry = 0;
              checkUrl = UpdateUrl[1];
              checkUpdate(wgtVer)
            } else {
              console.log("网络错误，无法更新");
            }
          }
        }
      });
    };
    const downWgt = (wgtUrl) => {
      const downToast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '准备下载更新...',
      });
      var task = plus.downloader.createDownload(wgtUrl,{filename: "_doc/update/"},(d, status) => {
            if (status == 200) {
              console.log("下载更新成功：" + d.filename);
              this.$toast.clear();
              this.$Dialog.Confirm('下载完成，是否安装更新包',()=>{
                installWgt(d.filename);
              })
            } else {
              console.log("下载更新失败");
              this.$toast.fail('下载更新失败');
            }
          }
      );

      task.addEventListener("statechanged", (download, status) => {
        switch (download.state) {
          case 2:
            downToast.message = '已下载0%';
          case 3:
            this.percentNum = parseInt(
                (download.downloadedSize / download.totalSize) * 100
            );
            downToast.message = '已下载'+this.percentNum+'%';
            break;
          case 4:
            break;
        }
      });
      task.start();
    };
    const installWgt = path => {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '正在更新...',
      });
      plus.runtime.install( path, {}, () => {
        console.log("安装更新文件成功");
        localStorage.clear();
        this.$toast.success({
          forbidClick: true,
          message: '更新成功，即将重启',
          onClose() {
            plus.runtime.restart();
          }
        });
      }, e => {
        console.log("安装更新文件失败[" + e.code + "]：" + e.message);
        this.$toast.success('更新失败');
      });
    };
    const iosBack = () => {
      var startX = 0;
      var endX = 0;
      document.addEventListener(
          "touchstart",
          event => {
            if (event.targetTouches.length == 1) {
              var touch = event.targetTouches[0];
              startX = touch.screenX;
            }
          },
          { passive: false }
      );
      document.addEventListener(
          "touchend",
          event => {
            if (event.changedTouches.length == 1) {
              var touch = event.changedTouches[0];
              endX = touch.screenX;
              if (startX <= 20 && endX >= 80) {
                appBack();
              }
            }
          },
          { passive: false }
      );
    };
    const appBack = () => {
      if (
          this.$route.name == "home") {
        if (this.isQuit) {
          plus.runtime.quit();
          this.isReconnect = false
          this.Socket&&this.Socket.close();
        } else {
          this.$toast({
            message: "再按一次退出应用",
            position: "bottom"
          });
          this.isQuit = true;
        }
      } else {
        if ($(".van-nav-bar__left").length) {
          $(".van-nav-bar__left").click();
        } else {
          this.$router.go(-1);
        }
      }
    };
    // 拖动
    var obj = document.getElementById('Service');
    var drag = false;
    var screenHeight = document.documentElement.clientHeight;
    var screenWidth = document.documentElement.clientWidth;
    var pageX = screenWidth;
    obj.addEventListener('touchstart',(ev)=>{
      drag = true;
      if (obj.setCapture) {
        obj.setCapture();
      }
      $('#Service').removeClass('move')
    });
    obj.addEventListener('touchmove',(ev)=>{
      $('#Service').removeClass('move')
      ev.preventDefault();
      ev = ev.touches?ev.touches[0]:event;
      if(drag){
        if(ev.pageY<obj.clientHeight/2){
          obj.style.bottom = screenHeight-obj.clientHeight+'px';
        }else if(ev.pageY>screenHeight-5-obj.clientHeight/2){
          obj.style.bottom = '5px';
        }else{
          obj.style.bottom = screenHeight-ev.pageY-obj.clientHeight/2+'px';
        }
        if(ev.pageX<obj.clientWidth/2){
          obj.style.right = screenWidth-obj.clientWidth+'px';
        }else if(ev.pageX>screenWidth-obj.clientWidth/2){
          obj.style.right = '0px';
        }else{
          obj.style.right = screenWidth-ev.pageX-obj.clientWidth/2+'px';
        }
        pageX = ev.pageX
      }
    });
    obj.addEventListener('touchend',(ev)=>{
      drag = false;
      $('#Service').addClass('move')
      if(pageX>screenWidth/2){
        obj.style.right = 0;
      }else{
        obj.style.right = screenWidth-obj.clientWidth+'px';
      }
    })
  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    reloadHtml () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    dragElement() {
      var obj = document.getElementById('MiLine');
      var drag = false;
      var maxX,maxY,objX,objY,curX,curY;
      obj.addEventListener('touchstart',(ev)=>{
        ev = ev.touches?ev.touches[0]:event;
        maxX = $('#MiLine').outerWidth()-$(window).width();
        maxY = $('#MiLine').outerHeight()-$(window).height();
        objX = Number(this.translateX);
        objY = Number(this.translateY);
        drag = true;
        curX = ev.clientX;
        curY = ev.clientY;
        if (obj.setCapture) {
          obj.setCapture();
        }
      });
      obj.addEventListener('touchmove',(ev)=>{
        ev.preventDefault();
        ev = ev.touches?ev.touches[0]:event;
        if(drag){
          $('#MiLine').addClass('touchmove');
          this.translateX = objX+ev.clientX-curX;
          this.translateY = objY+ev.clientY-curY;

          this.translateX = this.translateX<maxX?maxX:this.translateX;
          this.translateX = this.translateX>=0?0:this.translateX;
          this.translateY = this.translateY<maxY?maxY:this.translateY;
          this.translateY = this.translateY>=0?0:this.translateY;

          obj.style.transform = 'translate3d('+this.translateX+'px,'+this.translateY+'px,0)';
          obj.style.WebkitTransform = 'translate3d('+this.translateX+'px,'+this.translateY+'px,0)';
          $('#CancelMiLine').addClass('open');
          var posY = Math.abs(this.translateY);
          $('#CancelMiLine').removeClass('on');
          this.isCancel = false;
          var cancelY = $('#CancelMiLine').outerHeight()/1.5;
          if(posY<cancelY){
            $('#CancelMiLine').addClass('on');
            this.isCancel = true;
          }
        }
      });
      document.addEventListener('touchend',(ev)=>{
        $('#MiLine').removeClass('touchmove');
        $('#CancelMiLine').removeClass('open');
        drag = false;
        if(this.isCancel){
          this.clearMiliao();
        }
        if (obj.releaseCapture) {
          obj.releaseCapture();
        }
      })
    },
    clearMiliao() {
      this.showMiliao = false
      this.minMiliao = false
      this.translateX = '0'
      this.translateY = '-150'
      this.isCancel = false
      localStorage.removeItem('MiLogin')
    },
    openMiliao() {
      if(this.InitData.setting.chat_url){
        this.$Util.OpenUrl(this.InitData.setting.chat_url)
      }else{
        if(!localStorage['Token']){
          this.clearMiliao()
          this.$router.push('/login')
        }else{
          if(this.showMiliao){
            this.$router.push({name: 'miliao'})
            this.minMiliao = false
          }else{
            localStorage.removeItem('Home_Active')
            this.$MiModel.PhoneLogin({
              username: this.UserInfo.username,
              susername: this.UserInfo.susername||''
            },res => {
              this.$toast.clear()
              if (res.code == 1) {
                this.showMiliao = true
                this.minMiliao = false
                this.$router.push({name: 'miliao'})
                this.$nextTick(()=>{
                  this.dragElement()
                  $('#MiLine').removeClass('open').css({
                    'transform': 'translate3d('+this.translateX+'px,'+this.translateY+'px,0)',
                    'webkitTransform': 'translate3d('+this.translateX+'px,'+this.translateY+'px,0)'
                  });
                })
              }
            })
          }
        }
      }
    },
  }
}
</script>
<style scoped>
.MiLineBtn{
  position: absolute;
  left: 0;
  z-index: 99;
  color: #fff;
  font-size: 16px;
  line-height: 3em;
  display: block;
  padding: 0 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.MiLineBtn:before{
  content: "\E909";
  font-size: 20px;
  font-family: iconfont;
  vertical-align: middle;
  margin-right: 5px;
}
.MiLine{
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99999;
  border: 6px solid rgba(55, 210, 59, .35);
  border-radius: 100%;
  width: 58px;
  height: 58px;
  opacity: 1;
  overflow: hidden;
  -webkit-transition: .3s;
  transition: .3s;
}
.MiLine.open{
  width: 100%;
  height: 100%;
  border-radius: 0;
  border-width: 0;
  overflow: inherit;
  opacity: 1;
}
.MiLine.touchmove{
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
}
.MiLineFixedBtn{
  font-size: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: url('../public/static/miliao/icon/icon-miliao.svg') no-repeat;
  background-size: cover;
}
.CancelMiLine{
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: -100%;
  height: 60px;
  -webkit-transition: bottom .2s;
  transition: bottom .2s;
  background: linear-gradient(-90deg, transparent, #000);
  background: -webkit-linear-gradient(-90deg, transparent, #000);
  font-size: 14px;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.CancelMiLine img{
  margin-right: 10px;
}
.CancelMiLine.open{
  bottom: 0;
}
.CancelMiLine.on{
  background: rgba(0, 0, 0, .8);
  color: #fff;
}
.CancelMiLine.on img{
  height: 40px;
}
</style>
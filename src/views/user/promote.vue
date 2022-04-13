<template>
  <div class="PageBox" style="padding: 0">
    <div class="ScrollBox">
      <div class="PromoteInfo" :style="`background-image: url('./static/zxwlpic/share-${$i18n.locale}.png')`">
        <div style="background-color: #12324b;padding: 16px 12px;width:100%">
          <h4>{{$t('promote[0]')}}{{UserInfo.username}}</h4>
          <h4>{{$t('promote[1]',{title:docTitle})}}</h4>
          <div id="QRCode"></div>
          <h4 class="m0">{{$t('promote[2]')}}：<span id="IosCode">{{UserInfo.idcode}}</span></h4>
          <input id="AppCode" type="text" readonly :value="UserInfo.idcode" style="position: absolute;opacity: 0">
          <a href="javascript:;" @click="$Util.CopyText('IosCode','AppCode')"><van-icon name="description" />{{$t('promote[3]')}}</a>
          <div>
            <span id="IosLink">{{promoteUrl}}</span>
            <input id="AppLink" type="text" readonly :value="promoteUrl" style="position: absolute;opacity: 0">
          </div>
          <a href="javascript:;" @click="$Util.CopyText('IosLink','AppLink')"><van-icon name="description" />{{$t('promote[4]')}}</a>
        </div>
        <div style="margin-top: 20px;display: flex;justify-content: space-between;">
          <van-button block style="font-size: 16px;background: transparent;color: #fff;margin-right: 8px" @click="saveQRCode">{{$t('promote[5]')}}</van-button>
          <!-- <van-button block type="info" style="font-size: 16px;margin-left: 8px" @click="showReward=true">{{$t('promote[6]')}}</van-button> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import QRCode from "qrcodejs2"
export default {
  name: 'Promote',
  components: {
  },
  props: ['isReward'],
  data() {
    return {
      promoteUrl: '',
      saveN: 0,
      showReward: false,
      docTitle: document.title,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    if(this.isReward){
      this.showReward = true
    }
    this.$parent.navBarTitle = ''
    this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`
  },
  mounted() {
    new QRCode(document.getElementById("QRCode"), {
      text: this.promoteUrl,
      width: 110,
      height: 110,
      correctLevel : QRCode.CorrectLevel.H
    });
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    saveQRCode() {
      if(window.plus){
        this.saveN+=1
        var img = $('#QRCode').find('img').attr('src').replace('data:image/png;base64,','')
        var bm = new plus.nativeObj.Bitmap()
        bm.loadBase64Data(img, ()=>{
          bm.save( '_doc/promote'+this.saveN+'.jpg', {'overwrite':true,'format':'jpg'}, (e)=>{
            plus.gallery.save( e.target, (e)=>{
              this.$Dialog.Toast(this.$t('promote[7]'))
            },(err)=>{  
              this.$Dialog.Toast(this.$t('promote[8]'))
            }); 
          }, (error)=>{
            this.$Dialog.Toast(this.$t('promote[8]'))
          });
          setTimeout(function(){
            bm.recycle();
          },1000);
        }, (err)=>{  
          this.$Dialog.Toast(this.$t('promote[8]'))
        });
      }else{
        var img = $('#QRCode').find('img').attr('src')
        this.downCanvas(img)
      }
    },
    downCanvas(url) {
      var a = document.createElement('a')
      var event = new MouseEvent('click')
      a.download = 'promote'
      a.href = url
      a.dispatchEvent(event)
      if(!url){
        this.$Dialog.Toast(this.$t('promote[9]'))
      }
    },
  }
}
</script>
<style scoped>
.PromoteInfo{
  background-color: #09273f;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 150px 50px 50px;
  color: #eee;
  text-align: center;
  min-height: 100%;
}

.PromoteInfo h4{
  margin-bottom: 20px;
}
.PromoteInfo a{
  color: #1a6ba1;
  margin-top: 15px;
  display: inline-block;
}
.PromoteInfo a .van-icon{
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
.PromoteInfo #IosLink{
  word-break: break-all;
  text-align: left;
  margin-top: 15px;
  display: block;
  text-align: left;
}
#QRCode{
  margin-bottom: 16px;
  display: inline-block;
  padding: 5px;
  background-color: #fff;
  font-size: 0;
}
</style>
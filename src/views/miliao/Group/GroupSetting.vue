<template>
  <div class="Animate Background">
    <van-nav-bar
        class="NavBar"
        :title="setType=='qrcode'?'群二维码名片':setType=='manage'?'群管理':setType=='promote'?'群推广链接':'隐私设置'"
        :border="false"
        @click-left="onClickBack"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="UserQRcode" v-if="setType=='qrcode'">
      <van-cell class="Info" :title="GroupInfo.group_name" :label="'密群号：'+GroupInfo.gid" :border="false" size="large">
        <div class="head-img" slot="icon">
          <img :src="'./static/miliao/images/headimg/'+GroupInfo.header" width="100%" v-if="GroupInfo.header">
          <b v-else>{{GroupInfo.group_name.slice(0,2)}}</b>
        </div>
      </van-cell>
      <div class="Code">
        <img :src="GroupInfo.code_url" width="100%">
        <p>使用密聊扫一扫功能<br>扫描上面的二维码图案，加入密群</p>
      </div>
    </div>
    <div class="UserQRcode" v-if="setType=='promote'">
      <van-cell class="Info" :title="GroupInfo.group_name" :label="'密群号：'+GroupInfo.gid" :border="false" size="large">
        <div class="head-img" slot="icon">
          <img :src="'./static/miliao/images/headimg/'+GroupInfo.header" width="100%" v-if="GroupInfo.header">
          <b v-else>{{GroupInfo.group_name.slice(0,2)}}</b>
        </div>
      </van-cell>
      <div class="Code" style="text-align: left;position: relative">
        <!-- <div id="QRCode"></div> -->
        <p>链接地址</p>
        <input id="AppUrl" type="text" :value="$ApiUrl+'/#/miliao/sendMsg?id='+GroupInfo.id+'&chat_type=2'" style="width: 100%;border:0;color: #333;font-size: 12px" readonly>
        <span id="IosUrl" style="position: absolute;opacity: 0">{{$ApiUrl+'/#/miliao/sendMsg?id='+GroupInfo.id+'&chat_type=2'}}</span>
        <p style="text-align: center;margin-top: 20px">
          <van-button type="primary" size="small" round @click="$MiUtil.CopyText('IosUrl','AppUrl',2)">复制地址</van-button>
          <!-- <van-button type="primary" size="small" round @click="saveCode" style="margin-left: 20px;">保存二维码</van-button> -->
        </p>
      </div>
    </div>
    <div class="Box UserInfo" v-else-if="setType=='manage'">
      <van-cell class="Head" title="头像" size="large" is-link @click="showPopup=true,popupType='header'">
        <div class="head-img">
          <img :src="'./static/miliao/images/headimg/'+GroupInfo.header" width="100%" v-if="GroupInfo.header">
          <b v-else>{{GroupInfo.group_name.slice(0,2)}}</b>
        </div>
      </van-cell>
      <van-cell title="群名称" :value="GroupInfo.group_name" size="large" is-link @click="showPopup=true,popupType='name'" />
      <van-cell title="密群号" :value="GroupInfo.gid" size="large">
        <van-icon slot="right-icon" name="none" class="van-cell__right-icon" />
      </van-cell>
      <van-cell class="mt20" title="管理员" size="large" is-link @click="showPopup=true,popupType='manage'" v-if="GroupInfo.user_type==1" />
      <van-cell title="成员禁言" size="large" is-link @click="showPopup=true,popupType='notsay'" />
    </div>
    <div class="UserInfo" v-else-if="setType=='privacy'">
      <van-cell-group>
        <van-switch-cell v-model="isValidate" title="加群需要验证" size="26px" active-color="#44db5e" @change="onChangeSwitch('validate')" />
        <van-switch-cell v-model="isCard" title="允许发送名片" size="26px" active-color="#44db5e" @change="onChangeSwitch('card')" />
        <van-switch-cell v-model="isGid" title="允许通过群号找到群" size="26px" active-color="#44db5e" @change="onChangeSwitch('gid')" />
        <van-switch-cell v-model="isInvite" title="允许成员邀请好友加群" size="26px" active-color="#44db5e" @change="onChangeSwitch('invite')" />
        <van-switch-cell v-model="isInfo" title="允许查看群成员信息" size="26px" active-color="#44db5e" @change="onChangeSwitch('info')" />
      </van-cell-group>
    </div>
    <van-popup class="SetPopup" v-model="showPopup" position="bottom" :overlay="false" :lock-scroll="false" @opened="initPopup">
      <SetInfo ref="SetInfo" :gid="GroupInfo.id" :popupType="popupType" @triggerPopup="triggerPopup" v-if="popupType" />
    </van-popup>
  </div>
</template>

<script>
import SetInfo from './SetInfo'
// import QRCode from "qrcodejs2"
// import Html2Canvas from "html2canvas"
export default {
  name: 'GroupSetting',
  components: {
    SetInfo
  },
  props: {
    setType: {
      type: String,
      default: ''
    },
    gid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showPopup: false,
      popupType: '',
      isValidate: false,
      isCard: false,
      isGid: false,
      isInvite: false,
      isInfo: false,
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.isValidate = this.GroupInfo.is_f_d?true:false
    this.isCard = this.GroupInfo.is_h_d?true:false
    this.isGid = this.GroupInfo.is_q_d?true:false
    this.isInvite = this.GroupInfo.is_g_d?true:false
    this.isInfo = this.GroupInfo.is_s_d?true:false
  },
  mounted() {
    // if(this.setType=='promote'){
    //   new QRCode(document.getElementById("QRCode"), {
    //     text: this.$ApiUrl+'/#/miliao/sendMsg?id='+this.GroupInfo.id+'&chat_type=2',
    //     width: $('#QRCode').width(),
    //     height: $('#QRCode').width(),
    //     correctLevel : QRCode.CorrectLevel.H
    //   });
    // }
  },
  activated() {

  },
  destroyed() {},
  methods: {
    saveCode() {
      Html2Canvas(document.getElementById("QRCode")).then((canvas) => {
        if(window.plus){
          var saveN = 0;
          var saveImg = (img)=>{
            saveN+=1;
            var bm = new plus.nativeObj.Bitmap();
            bm.loadBase64Data(img, ()=>{
              bm.save( '_doc/密群推广二维码'+saveN+'.jpg', {'overwrite':true,'format':'jpg'}, (e)=>{
                plus.gallery.save( e.target, (e)=>{
                  this.$MiDialog.Toast('保存二维码成功')
                },(err)=>{
                  this.$MiDialog.Toast('保存二维码失败')
                });
              }, (error)=>{
                this.$MiDialog.Toast('保存二维码失败')
              });
              setTimeout(function(){
                bm.recycle();
              },1000);
            }, (err)=>{
              this.$MiDialog.Toast('保存海报失败')
            });
          };
          this.$MiDialog.Alert('保存二维码到手机<br>如不成功请多试几次或截屏保存',()=>{
            saveImg(canvas.toDataURL().replace('data:image/png;base64,',''))
          })
        }else{
          this.downCanvas(canvas.toDataURL())
        }
      });
    },
    downCanvas(url) {
      var a = document.createElement('a')
      var event = new MouseEvent('click')
      a.download = '密群推广二维码'
      a.href = url
      a.dispatchEvent(event)
    },
    onClickBack() {
      this.$emit('onCloseSet');
    },
    triggerPopup(refresh) {
      this.showPopup = false;
      this.popupType = '';
      if(refresh){
        this.$MiModel.GetGroupsInfo(this.gid)
      }
    },
    initPopup() {
      if(this.popupType=='header'){
        this.$refs.SetInfo.initScrollWrap();
      }
    },
    onChangeSwitch(type) {
      var json = {
        gid: this.GroupInfo.id
      }
      if(type=='validate'){
        json.is_f_d = this.isValidate?1:0;
      }
      if(type=='card'){
        json.is_h_d = this.isCard?1:0;
      }
      if(type=='gid'){
        json.is_q_d = this.isGid?1:0;
      }
      if(type=='invite'){
        json.is_g_d = this.isInvite?1:0;
      }
      if(type=='info'){
        json.is_s_d = this.isInfo?1:0;
      }
      this.$MiModel.SetGroupsInfo(json,(data)=>{
        if(!data){
          if(type=='validate'){
            this.isValidate = this.GroupInfo.is_f_d?true:false;
          }
          if(type=='card'){
            this.isCard = this.GroupInfo.is_h_d?true:false;
          }
          if(type=='gid'){
            this.isGid = this.GroupInfo.is_q_d?true:false;
          }
          if(type=='invite'){
            this.isInvite = this.GroupInfo.is_g_d?true:false;
          }
          if(type=='info'){
            this.isInfo = this.GroupInfo.is_s_d?true:false;
          }
        }
      });
    }
  }
}
</script>
<style scoped>
#QRCode{
  width: 80%;
  margin: 20px auto;
}
</style>
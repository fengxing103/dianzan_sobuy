<template>
  <div class="Animate Background">
    <van-nav-bar
        class="NavBar"
        :title="setType=='newmsg'?'新消息通知':setType=='private'?'隐私设置':'存储空间'"
        :border="false"
        @click-left="onClickBack"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="UserInfo">
      <van-cell-group v-if="setType=='newmsg'">
        <van-switch-cell v-model="isVoice" title="声音" size="26px" active-color="#44db5e" @change="onChangeSwitch('voice')" />
      </van-cell-group>
      <van-cell-group v-else-if="setType=='private'">
        <van-switch-cell v-model="isFriendCheck" title="加我为好友时需要验证" size="26px" active-color="#44db5e" @change="onChangeSwitch('validate')" />
        <van-switch-cell v-model="isAllowMid" title="允许通过密聊号找到我" size="26px" active-color="#44db5e" @change="onChangeSwitch('mid')" />
        <van-switch-cell v-model="isAllowGroup" title="允许好友邀请我加群" size="26px" active-color="#44db5e" @change="onChangeSwitch('invite')" />
      </van-cell-group>
      <van-cell style="text-align: center" title="清空密聊缓存" size="large" v-else-if="setType=='storage'" @click="onClearCache" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetSetting',
  components: {},
  props: {
    setType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVoice: false,
      isFriendCheck: false,
      isAllowMid: false,
      isAllowGroup: false
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.isVoice = this.MiUserInfo.is_v_d?true:false
    this.isFriendCheck = this.MiUserInfo.is_f_d?true:false
    this.isAllowMid = this.MiUserInfo.is_m_d?true:false
    this.isAllowGroup = this.MiUserInfo.is_g_d?true:false
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickBack() {
      this.$emit('onCloseSet');
    },
    onChangeSwitch(type) {
      var json = {}
      if(type=='voice'){
        json.is_v_d = this.isVoice?1:0;
      }
      if(type=='validate'){
        json.is_f_d = this.isFriendCheck?1:0;
      }
      if(type=='mid'){
        json.is_m_d = this.isAllowMid?1:0;
      }
      if(type=='invite'){
        json.is_g_d = this.isAllowGroup?1:0;
      }
      this.$MiModel.SetUserInfo(json,(data)=>{
        if(!data){
          if(type=='voice'){
            this.isVoice = this.MiUserInfo.is_v_d?true:false;
          }
          if(type=='validate'){
            this.isFriendCheck = this.MiUserInfo.is_f_d?true:false;
          }
          if(type=='mid'){
            this.isAllowMid = this.MiUserInfo.is_m_d?true:false;
          }
          if(type=='invite'){
            this.isAllowGroup = this.MiUserInfo.is_g_d?true:false;
          }
        }
      });
    },
    onClearCache() {
      this.$MiDialog.Confirm('将删除密聊所有缓存。',()=>{
        localStorage.removeItem('ChatData');
      });
    }
  }
}
</script>

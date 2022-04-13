<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        title="聊天设置"
        :border="false"
        @click-left="onClickBack"
        @click-right="showMenu=true"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box UserCenter">
          <van-cell class="Info" :border="false" size="large" is-link :to="{name:'friendInfo',query: {id: friendId}}">
            <div class="head-img" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+chatInfo.header" width="100%" v-if="chatInfo.header">
              <b v-else>{{chatInfo.memo_name?chatInfo.memo_name.slice(0,2):chatInfo.nickname.slice(0,2)}}</b>
            </div>
            <template slot="title">
              <span>{{chatInfo.memo_name?chatInfo.memo_name:chatInfo.nickname}}</span>
              <div class="van-cell__label">
                密聊号：{{chatInfo.mid}}
              </div>
            </template>
          </van-cell>
          <van-cell-group class="mt20">
            <van-switch-cell v-model="isVoice" title="消息免打扰" size="26px" active-color="#44db5e" @change="onChangeSwitch" />
            <van-switch-cell v-model="isTop" title="置顶聊天" size="26px" active-color="#44db5e" @change="onChangeSwitch" />
          </van-cell-group>
          <van-cell-group class="mt20">
            <van-cell title="清空聊天记录" size="large" is-link @click="clearChat" />
          </van-cell-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatInfo',
  components: {

  },
  props: {},
  data() {
    return {
      chatInfo: {
        nickname: ''
      },
      friendId: Number(this.$route.query.id),
      isVoice: false,
      isTop: false
    }
  },
  computed: {},
  watch: {},
  created() {
    this.$MiModel.GetFriendsInfo(this.friendId,(data)=>{
      this.chatInfo = data.info;
      this.isVoice = data.info.is_v_d?true:false;
      this.isTop = data.info.is_z_d?true:false;
    });
  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$el);
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickBack() {
      this.$router.go(-1);
      this.$route.params.isBack = true;
    },
    onChangeSwitch() {
      this.$MiModel.SetFriendsInfo({is_v_d:this.isVoice?1:0,is_z_d:this.isTop?1:0,id:this.friendId},(data)=>{
        if(!data){
          this.isVoice = this.FriendInfo.is_v_d?true:false;
          this.isTop = this.FriendInfo.is_z_d?true:false;
        }
      });
    },
    clearChat() {
      this.$MiDialog.Confirm('确定清空聊天记录？',()=>{
        this.$MiModel.SetFriendsInfo({state:9,id:this.friendId});
      })
    }
  }
}
</script>

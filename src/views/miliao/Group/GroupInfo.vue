<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        title="详细信息"
        :border="false"
        @click-left="onClickBack"
        @click-right="showMenu=true"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box UserCenter" v-if="groupId">
          <van-cell class="Info" :title="groupInfo.nickname" :label="'密聊号：'+groupInfo.mid" :border="false" size="large">
            <div class="head-img" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+groupInfo.header" width="100%" v-if="groupInfo.header">
              <b v-else>{{groupInfo.nickname.slice(0,2)}}</b>
            </div>
          </van-cell>
          <van-cell-group class="mt20">
            <van-cell title="性别" :value="groupInfo.sex?groupInfo.sex:'保密'" size="large" />
            <van-cell title="地区" :value="groupInfo.area?groupInfo.area:'未设置'" size="large" />
            <van-cell class="Autograph" title="个性签名" :label="groupInfo.autograph" v-if="groupInfo.autograph" />
          </van-cell-group>
          <van-button class="PrimaryBtn" type="primary" @click="setGroupsnewInfo(3)" v-if="groupInfo.new_type==2">同意进群</van-button>
          <van-button class="PrimaryBtn" type="default" @click="setGroupsnewInfo(4)" v-if="groupInfo.new_type==2">拒绝进群</van-button>
          <center style="color: #999;line-height: 50px" v-if="groupInfo.new_type==4||groupInfo.new_type==5">{{groupInfo.new_type==4?'已同意':'已拒绝'}}"{{groupInfo.nickname}}"加入群聊</center>
        </div>
        <div class="Box UserCenter" v-else>
          <van-cell class="Info" :border="false" size="large">
            <div class="head-img" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+groupInfo.header" width="100%" v-if="groupInfo.header">
              <b v-else>{{groupInfo.nickname.slice(0,2)}}</b>
            </div>
            <template slot="title">
              <span>{{groupInfo.nickname}}</span>
              <div class="van-cell__label">
                密群号：{{groupInfo.gid}}
              </div>
            </template>
          </van-cell>
          <van-cell-group>
            <van-cell class="Autograph mt20" title="群介绍" :label="groupInfo.introduce?groupInfo.introduce:'暂时没有群介绍'" />
          </van-cell-group>
          <van-button class="PrimaryBtn" type="primary" @click="goToSendMsg(groupInfo.id)" v-if="groupInfo.is_groups==1">发送消息</van-button>
          <van-button class="PrimaryBtn" type="primary" @click="addGroups(groupInfo.gid)" v-else>申请加群</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GroupInfo',
  components: {

  },
  props: {},
  data() {
    return {
      groupInfo: {
        nickname: ''
      },
      showPopup: false,
      popupType: 'validate',
      showMenu: false,
      groupGid: this.$route.query.gid,
      groupId: this.$route.query.id,
      isMsg: this.$route.query.msg || false,
      msgList: [],
      replyCon: '',
      showReply: false
    }
  },
  computed: {},
  watch: {},
  created() {
    if(this.groupId){
      this.$MiModel.GetGroupsnewInfo(this.groupId,(data)=>{
        this.groupInfo = data.info;
      });
    }else{
      this.$MiModel.SoGroups(this.groupGid,(data)=>{
        if(data.code==1){
          this.groupInfo = data.info;
        }
      });
    }
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
      if(localStorage['MiLogin']){
        this.$router.go(-1);
      }else{
        this.$router.push('/')
      }
      this.$route.params.isBack = true;
    },
    onClickRight() {

    },
    addGroups(gid) {
      this.$MiModel.AddGroups(gid,(data)=>{
        if(data.code==1){
          this.$MiDialog.Confirm(data.code_dec,()=>{
            this.$router.push({name: 'sendMsg',query: {id: data.id,chat_type:2}});
          });
        }else{
          this.$MiDialog.Alert(data.code_dec);
        }
        this.$MiModel.SoGroups(gid,(data)=>{
          this.groupInfo = data.info;
        });
      });
    },
    setGroupsnewInfo(state) {
      this.$MiModel.SetGroupsnewInfo({id:this.groupId,state:state},(data)=>{
        if(data.code==1){
          this.$MiModel.GetGroupsnewInfo(this.groupId,(data)=>{
            this.groupInfo = data.info;
          });
        }
      });
    },
    goToSendMsg(id) {
      this.$router.push({name: 'sendMsg',query: {id: id,chat_type:2}});
    }
  }
}
</script>

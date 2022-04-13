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
        <div class="Box UserCenter">
          <van-cell class="Info" :class="{haveMark:friendInfo.memo_name}" :border="false" size="large">
            <div class="head-img" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+friendInfo.header" width="100%" v-if="friendInfo.header">
              <b v-else>{{friendInfo.nickname.slice(0,2)}}</b>
            </div>
            <template slot="title">
              <span>{{friendInfo.memo_name?friendInfo.memo_name:friendInfo.nickname}}</span>
              <div class="van-cell__label">
                密聊号：{{friendInfo.mid}}
                <p v-if="friendInfo.memo_name">昵称：{{friendInfo.nickname}}</p>
              </div>
            </template>
          </van-cell>
          <div class="ValidateMsg" v-if="isMsg&&msgList.length>0">
            <div style="max-height:95px;margin-bottom: 5px;overflow:hidden">
              <ul id="ReplyList">
                <li v-for="(item,index) in msgList" :key="index">{{item.is_send==0?(item.title?item.title:'昵称未设置'):'我'}}：{{item.content}}</li>
              </ul>
            </div>
            <van-button size="small" @click="showReply=true">回复</van-button>
          </div>
          <van-cell class="mt20" title="设置备注" size="large" is-link v-if="friendInfo.is_friends==1||(friendId&&friendInfo.state==1)" @click="showPopup=true,popupType='remark'" />
          <van-cell class="mt20" title="性别" :value="friendInfo.sex?friendInfo.sex:'保密'" size="large" />
          <van-cell title="地区" :value="friendInfo.area?friendInfo.area:'未设置'" size="large" />
          <van-cell class="Autograph" title="个性签名" :label="friendInfo.autograph" v-if="friendInfo.autograph" />
          <div v-if="friendId">
            <van-button class="PrimaryBtn" type="primary" @click="setFriendValidate(3)" v-if="friendInfo.state==3&&friendInfo.new_type==2">通过验证</van-button>
            <van-button class="PrimaryBtn" type="default" @click="setFriendValidate(4)" v-if="friendInfo.state==3&&friendInfo.new_type==2">拒绝好友</van-button>
            <van-button class="PrimaryBtn" type="primary" @click="showPopup=true,popupType='validate'" v-if="friendInfo.new_type==1||friendInfo.new_type==5||friendInfo.new_type==6||friendInfo.new_type==7">请求加为好友</van-button>
            <van-button class="PrimaryBtn" type="primary" @click="sendMsg(friendInfo.id)" v-if="friendInfo.state!=3&&friendInfo.state!=4&&friendInfo.new_type!=7">发送消息</van-button>
            <van-button class="PrimaryBtn" type="danger" @click="deleteFriend" v-if="friendInfo.state==1||friendInfo.new_type==8">删除好友</van-button>
          </div>
          <div v-else>
            <van-button class="PrimaryBtn" type="primary" @click="sendMsg(friendInfo.id)" v-if="friendInfo.is_friends==1">发送消息</van-button>
            <van-button class="PrimaryBtn" type="primary" @click="showPopup=true,popupType='validate'" v-else>请求加为好友</van-button>
            <van-button class="PrimaryBtn" type="danger" @click="deleteFriend" v-if="friendInfo.is_friends==1">删除好友</van-button>
          </div>

        </div>
      </div>
    </div>
    <van-popup class="SetPopup" v-model="showPopup" position="bottom" :overlay="false">
      <SendValidate :friendMid="friendInfo.mid" @triggerPopup="triggerPopup" v-if="popupType=='validate'" />
      <SetRemark :friendId="friendInfo.id" :remarkName="friendInfo.memo_name?friendInfo.memo_name:friendInfo.nickname" @triggerPopup="triggerPopup" v-else />
    </van-popup>
    <van-dialog
        v-model="showReply"
        class-name="D-confirm"
        title="回复"
        show-cancel-button
        close-on-click-overlay
        @cancel="replyCon=''"
        @confirm="sendReply"
    >
      <van-field class="Border" v-model="replyCon" type="textarea" rows="2" />
    </van-dialog>
  </div>
</template>

<script>
import SendValidate from './SendValidate'
import SetRemark from './SetRemark'
export default {
  name: 'FriendInfo',
  components: {
    SendValidate,
    SetRemark
  },
  props: {},
  data() {
    return {
      friendInfo: {
        nickname: ''
      },
      showPopup: false,
      popupType: 'validate',
      showMenu: false,
      friendMid: this.$route.query.mid,
      friendId: this.$route.query.id,
      isMsg: this.$route.query.msg || false,
      msgList: [],
      replyCon: '',
      showReply: false
    }
  },
  computed: {},
  watch: {},
  created() {
    if(this.friendId){
      this.getFriendsInfo();
    }else{
      this.getSoMi();
    }
    if(this.isMsg){
      this.$MiModel.GetRecordList({id: this.friendId,chat_type:3},(data)=>{
        if(data.code==1){
          this.msgList = this.$MiUtil.SortBy(data.list,'id');
          this.$nextTick(()=>{
            this.$MiInitial.InitScroll(this.$el);
          });
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
    getFriendsInfo() {
      this.$MiModel.GetFriendsInfo(this.friendId,(data)=>{
        this.friendInfo = data.info;
        this.$nextTick(()=>{
          this.$MiInitial.InitScroll(this.$el);
        });
      });
    },
    getSoMi() {
      this.$MiModel.SoMi(this.friendMid,(data)=>{
        if(data.code==1){
          this.friendInfo = data.info;
          this.$nextTick(()=>{
            this.$MiInitial.InitScroll(this.$el);
          });
        }
      });
    },
    triggerPopup() {
      this.showPopup = false;
      if(this.friendId){
        this.getFriendsInfo();
      }else{
        this.getSoMi();
      }
    },
    deleteFriend() {
      this.$MiDialog.Confirm('确定要删除该好友吗？',()=>{
        this.setFriendValidate(5);
      });
    },
    setFriendValidate(state) {
      this.$MiModel.SetFriendsInfo({id:this.friendInfo.id,state:state},(data)=>{
        if(state==5){
          localStorage['Home_Active'] = 'contact';
          this.$router.replace('/miliao');
        }else{
          this.getFriendsInfo();
        }
      });
    },
    sendReply() {
      this.$MiModel.SendRecord({id:this.friendId,chat_type:3,content:this.replyCon},(data)=>{
        if(data.code==1){
          $("#ReplyList").append('<li>我：'+this.replyCon+'</li>');
          this.$nextTick(()=>{
            this.$MiInitial.InitScroll(this.$el);
          });
        }else{
          this.$toast({message:data.code_dec,position:'bottom'});
        }
        this.replyCon = '';
      });
    },
    sendMsg(id) {
      this.$router.push({name: 'sendMsg',query: {id: id,chat_type:1}});
    }
  }
}
</script>

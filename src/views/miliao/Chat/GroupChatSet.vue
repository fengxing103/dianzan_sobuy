<template>
  <div class="Main Background">
    <transition :name="animateType" @after-enter="afterEnter">
      <div class="Animate" v-if="!showSet">
        <van-nav-bar
            class="NavBar"
            title="群聊设置"
            :border="false"
            @click-left="onClickBack"
            @click-right="showMenu=true"
        >
          <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
        </van-nav-bar>
        <div class="Scroll-Wrap" ref="Scroll">
          <div class="Scroll-Con">
            <div class="Box UserCenter">
              <van-cell class="Info" :border="false" size="large" @click="$MiUtil.CopyText('IosCopy','AppCopy',1)">
                <div class="head-img" slot="icon">
                  <img :src="'./static/miliao/images/headimg/'+groupInfo.header" width="100%" v-if="groupInfo.header">
                  <b v-else>{{groupInfo.group_name.slice(0,2)}}</b>
                </div>
                <template slot="title">
                  <span>{{groupInfo.group_name}}</span>
                  <div class="van-cell__label">
                    密群号：{{groupInfo.gid}}
                  </div>
                </template>
              </van-cell>
              <div class="GroupMember" v-if="!isRoom">
                <ul>
                  <li v-for="item in groupMember" :key="item.id" @click="openFriendInfo(item.mid,item.fid)">
                    <van-tag round type="danger" v-if="item.user_type==1">群主</van-tag>
                    <van-tag round type="success" v-else-if="item.user_type==4">管理</van-tag>
                    <div class="head">
                      <img :src="'./static/miliao/images/headimg/'+item.header" width="100%" v-if="item.header">
                      <b v-else>{{item.nickname?item.nickname.slice(0,2):'昵称'}}</b>
                    </div>
                    <p>{{item.nickname?item.nickname:'昵称未设置'}}</p>
                  </li>
                  <li v-if="groupInfo.is_g_d==1||groupInfo.user_type==1||groupInfo.user_type==4">
                    <a class="add" href="javascript:;" @click="showPopup=true,popupType='invite'"><img :src="'./static/miliao/icon/icon-add-black.svg'" width="30" style="vertical-align: middle"></a>
                  </li>
                  <li v-if="groupInfo.user_type==1||groupInfo.user_type==4">
                    <a class="sub" href="javascript:;" @click="showPopup=true,popupType='remove'"><img :src="'./static/miliao/icon/icon-sub-black.svg'" width="30" style="vertical-align: middle"></a>
                  </li>
                  <li v-if="memberList.length>22">
                    <a href="javascript::" @click="showMember('all')" v-if="showBtn!='all'">全部...</a>
                    <a href="javascript::" @click="showMember('part')" v-else>收起...</a>
                  </li>
                </ul>
              </div>
              <van-cell-group class="mt20">
                <!-- <van-cell title="设置群密码" size="large" is-link @click="showPopup=true,popupType='pass'" v-if="groupInfo.user_type==1" /> -->
                <!-- <van-cell title="群推广链接" size="large" is-link @click="showSet=true,setType='promote',animateType='open'" v-if="groupInfo.user_type==1||groupInfo.user_type==4" /> -->
                <!-- <van-cell title="群二维码" size="large" is-link @click="showSet=true,setType='qrcode',animateType='open'" /> -->
                <van-cell title="群管理" size="large" is-link @click="showSet=true,setType='manage',animateType='open'" v-if="groupInfo.user_type==1||groupInfo.user_type==4" />
                <!-- <van-cell title="隐私设置" size="large" is-link @click="showSet=true,setType='privacy',animateType='open'" v-if="groupInfo.user_type==1||groupInfo.user_type==4" /> -->
                <van-cell class="Autograph" title="群公告" :label="groupInfo.notice?groupInfo.notice:'暂无群公告'" size="large" is-link  @click="openGroupInfo('notice')" />
                <van-cell class="Autograph" title="群介绍" :label="groupInfo.introduce?groupInfo.introduce:'暂无群介绍'" size="large" is-link @click="openGroupInfo('introduce')" />
              </van-cell-group>
              <van-cell-group class="mt20">
                <van-cell title="我在本群的昵称" :value="groupInfo.nickname" size="large" is-link @click="showPopup=true,popupType='nickname'" />
                <van-switch-cell v-model="isVoice" title="消息免打扰" size="26px" active-color="#44db5e" @change="onChangeSwitch('voice')" />
                <van-switch-cell v-model="isTop" title="置顶聊天" size="26px" active-color="#44db5e" @change="onChangeSwitch('top')" />
              </van-cell-group>
              <van-cell-group class="mt20">
                <van-cell title="清空聊天记录" size="large" is-link @click="clearChat" v-if="groupInfo.user_type==1||groupInfo.user_type==4" />
              </van-cell-group>
              <div v-if="isRoom!=1">
                <van-button class="PrimaryBtn" type="danger" @click="groupState('disband')" v-if="groupInfo.user_type==1">解散该群</van-button>
                <van-button class="PrimaryBtn" type="danger" @click="groupState('quit')" v-else>退出该群</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupSetting @onCloseSet="onCloseSet" :gid="groupId" :setType="setType" v-else />
    </transition>
    <van-popup class="SetPopup" v-model="showPopup" position="bottom" :overlay="false" :lock-scroll="false">
      <InviteMember :gid="groupId" @triggerPopup="triggerPopup" v-if="popupType=='invite'" />
      <RemoveMember :gid="groupId" @triggerPopup="triggerPopup" v-else-if="popupType=='remove'" />
      <SetInfo :gid="groupInfo.id" :popupType="popupType" @triggerPopup="triggerPopup" v-else />
    </van-popup>
    <input type="text" id="AppCopy" :value="groupInfo.gid" readonly>
    <span id="IosCopy">{{groupInfo.gid}}</span>
  </div>
</template>

<script>
import InviteMember from '../Group/InviteMember'
import RemoveMember from '../Group/RemoveMember'
import GroupSetting from '../Group/GroupSetting'
import SetInfo from '../Group/SetInfo'
export default {
  name: 'GroupChatSet',
  components: {
    InviteMember,
    RemoveMember,
    GroupSetting,
    SetInfo
  },
  props: {},
  data() {
    return {
      isRoom: Number(localStorage['isRoom']),
      groupInfo: {
        group_name: ''
      },
      memberList: '',
      groupMember: '',
      groupId: Number(this.$route.query.id),
      isVoice: false,
      isTop: false,
      showPopup: false,
      popupType: '',
      showSet: false,
      setType: '',
      animateType: 'open',
      showBtn: 'all',
    }
  },
  computed: {},
  watch: {},
  created() {
    this.$MiModel.GetGroupsInfo(this.groupId,(data)=>{
      this.groupInfo = data.info;
      this.isVoice = data.info.is_v_d?true:false;
      this.isTop = data.info.is_z_d?true:false;
      this.$nextTick(()=>{
        this.$MiInitial.InitScroll(this.$el);
        this.ScrollWrap.refresh();
      })
    });
    this.getGroupsMember();
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
    onChangeSwitch(type) {
      var json = {
        gid: this.groupInfo.id
      }
      if(type=='voice'){
        json.is_v_d = this.isVoice?1:0;
      }
      if(type=='top'){
        json.is_z_d = this.isTop?1:0;
      }
      this.$MiModel.SetGroupsInfo(json,(data)=>{
        if(!data){
          if(type=='voice'){
            this.isVoice = this.FriendInfo.is_v_d?true:false;
          }
          if(type=='top'){
            this.isTop = this.FriendInfo.is_z_d?true:false;
          }
        }
      });
    },
    clearChat() {
      this.$MiDialog.Confirm('确认清空聊天记录？',()=>{
        this.$MiModel.SetGroupsInfo({state:14,gid:this.groupInfo.id});
      })
    },
    showMember(type) {
      this.showBtn = type
      if(type=='all'){
        this.groupMember = this.memberList
      }else{
        this.groupMember = this.memberList.slice(0, 21)
      }
    },
    getGroupsMember() {
      this.$MiModel.GroupsMember(this.groupId,(data)=>{
        this.memberList = data.list || [];
        if(this.memberList.length>22){
          this.groupMember = this.memberList.slice(0, 21)
        }else{
          this.groupMember = this.memberList
        }
        this.$nextTick(()=>{
          this.$MiInitial.InitScroll(this.$el);
          this.ScrollWrap.refresh();
        });
      });

    },
    triggerPopup(refresh) {
      this.showPopup = false;
      if(refresh){
        if(this.popupType=='invite'||this.popupType=='remove'){
          this.getGroupsMember();
        }else{
          this.$MiModel.GetGroupsInfo(this.groupId,(data)=>{
            this.groupInfo = data.info;
          });
        }
      }
      this.popupType = '';
    },
    onCloseSet(){
      this.animateType = 'close';
      this.showSet = false;
      if(this.setType=='manage'){
        this.groupInfo = this.GroupInfo;
        this.getGroupsMember();
      }
      this.setType = '';
    },
    afterEnter(el) {
      if(this.animateType=='close'){
        this.$MiInitial.InitScrollWrap(this.$el);
        this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
          click: true
        });
      }
    },
    openFriendInfo(mid,fid) {
      if((this.groupInfo.user_type==1||this.groupInfo.user_type==4)&&fid!=localStorage['userUid']){
        this.$router.push({name: 'friendInfo',query: {mid: mid}});
      }
      if(this.groupInfo.is_s_d){
        if(fid!=localStorage['userUid']){
          this.$router.push({name: 'friendInfo',query: {mid: mid}});
        }
      }
    },
    openGroupInfo(type) {
      if(this.groupInfo.user_type==1||this.groupInfo.user_type==4){
        this.showPopup = true;
        this.popupType = type;
      }
    },
    groupState(state) {
      var json = {gid:this.groupInfo.id}, msg = '';
      if(state=='disband'){
        msg = '确定要解散该密群？';
        json.disbanded_groups = 1;
      }
      if(state=='quit'){
        msg = '退出后不会再接收此群的消息';
        json.quit_groups = 1;
      }
      this.$MiDialog.Confirm(msg,()=>{
        this.$MiModel.SetGroupsInfo(json,(data)=>{
          if(data){
            localStorage['Home_Active'] = 'group';
            this.$router.replace('/miliao');
          }
        });
      },'温馨提示');
    }
  }
}
</script>

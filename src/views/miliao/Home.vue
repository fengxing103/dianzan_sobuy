<template>
  <div class="Main" :class="{Background:active!='message'}" v-if="!isRoom">
    <van-nav-bar
        class="NavBar"
        :title="active=='message'?'密聊':active=='contact'?'通讯录':active=='group'?'群聊':active=='find'?'发现':'我的'"
        :border="false"
        @click-left="onClickClose"
        @click-right="onClickRight"
    >
      <img class="icon-left" :src="'./static/miliao/icon/'+(active=='group'?'icon-back':'icon-close')+'.svg'" slot="left">
      <img class="icon-right" :src="rightIcon" slot="right" v-if="active!='user'&&active!='find'" />
    </van-nav-bar>
    <div class="DropDown" :class="{show:isDropDown}" v-if="active=='message'">
      <ul>
        <li @click="showPopup=true,isDropDown=false">
          <img :src="'./static/miliao/icon/icon-newmq.svg'" width="18" />
          <i>新建群聊</i>
        </li>
        <li @click="$router.push({name: 'addFG',query: {type:'friend'}})">
          <img :src="'./static/miliao/icon/icon-friend-add-w.svg'" width="24" style="margin: 0 7px 0 -3px" />
          <i>添加密友</i>
        </li>
        <!-- <li @click="openScan()">
          <img :src="'./static/miliao/icon/icon-scan.svg'" width="18" />
          <i>扫一扫</i>
        </li> -->
      </ul>
    </div>
    <MiNoContent v-if="active=='message'&&!chatList.length" />
    <Search @closeDropDown="isDropDown=false" v-if="active!='user'&&active!='find'" />
    <ChatList :chatList='chatList' v-if="active=='message'" />
    <keep-alive>
      <FriendList @showGroup="changeActive('group')" v-if="active=='contact'" />
      <GroupList v-if="active=='group'" />
    </keep-alive>
    <Find v-if="active=='find'" />
    <UserCenter v-if="active=='user'" />
    <van-tabbar
        class="TabBar"
        v-model="active"
        active-color="#03b703"
        :z-index="999"
        @change="changeActive"
    >
      <van-tabbar-item name="message">
        <span>密聊</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon_ml.active : icon_ml.normal" />
        <div class="van-info" v-if="isSee.ml_num">{{isSee.ml_num}}</div>
      </van-tabbar-item>
      <van-tabbar-item name="contact">
        <span :style="{color: active=='group'?'#03b703':''}">通讯录</span>
        <img slot="icon" slot-scope="props" :fdsfd="props.active" :src="active=='contact'||active=='group' ? icon_my.active : icon_my.normal" />
        <div class="van-info" v-if="isSee.my_num">{{isSee.my_num}}</div>
      </van-tabbar-item>
      <van-tabbar-item name="find">
        <span>发现</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon_fx.active : icon_fx.normal" />
        <div class="van-info" v-if="isSee.mq_num">{{isSee.mq_num}}</div>
      </van-tabbar-item>
      <van-tabbar-item name="user">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon_me.active : icon_me.normal" />
      </van-tabbar-item>
    </van-tabbar>
    <van-popup
        class="SetPopup"
        v-model="showPopup"
        position="bottom"
        :overlay="false"
        :lock-scroll="false"
    >
      <BuildGroup @triggerPopup="triggerPopup" v-if="showPopup" />
    </van-popup>
  </div>
</template>

<script>
import Search from "@/components/miliao/Search";
import BuildGroup from "./Group/BuildGroup";
import ChatList from "./Chat/ChatList";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import UserCenter from "./User/UserCenter";
import Find from "./Find";

export default {
  name: "Home",
  components: {
    Search,
    BuildGroup,
    ChatList,
    FriendList,
    GroupList,
    UserCenter,
    Find
  },
  props: {},
  data() {
    return {
      isRoom: Number(localStorage["isRoom"]),
      userName: "",
      active: localStorage["Home_Active"]||'message',
      icon_ml: {
        normal: "./static/miliao/icon/icon-ml-o.svg",
        active: "./static/miliao/icon/icon-ml.svg"
      },
      icon_my: {
        normal: "./static/miliao/icon/icon-my-o.svg",
        active: "./static/miliao/icon/icon-my.svg"
      },
      icon_fx: {
        normal: "./static/miliao/icon/icon-find-o.svg",
        active: "./static/miliao/icon/icon-find.svg"
      },
      icon_me: {
        normal: "./static/miliao/icon/icon-me-o.svg",
        active: "./static/miliao/icon/icon-me.svg"
      },
      isDropDown: false,
      showPopup: false,
      systemVObj: null,
      msgVObj: null,
      isVoice: false
    };
  },
  computed: {
    rightIcon() {
      switch (this.active) {
        case 'contact':
          return "./static/miliao/icon/icon-friend-add.svg";
          break;
        case 'group':
          return "./static/miliao/icon/icon-group-add.svg";
          break;
        default:
          return "./static/miliao/icon/icon-add.svg";
      }
    },
    isSee() {
      return this.ChatData.is_see||{ml_num:0,my_num:0,mq_num:0};
    },
    chatList() {
      return this.ChatData.mldata || [];
    },
  },
  watch: {
    'isSee.ml_num'() {
      if (this.isVoice) {
        this.msgVObj.play();
      }
    },
    'isSee.my_num'() {
      if (this.isVoice) this.systemVObj.play();
    },
    'isSee.mq_num'() {
      if (this.isVoice) this.systemVObj.play();
    },
  },
  created() {
    this.$MiModel.GetUserData()
  },
  mounted() {
    this.systemVObj = document.getElementById("SystemVoice");
    this.msgVObj = document.getElementById("MsgVoice");
    var checkVoice = this.systemVObj.canPlayType("audio/mpeg");
    if (!checkVoice) {
      this.$MiDialog.Alert("你的浏览器不支持音频文件");
    }
  },
  activated() {},
  destroyed() {

  },
  methods: {
    onClickClose() {
      if(this.active=='group'){
        this.active = 'contact';
        localStorage["Home_Active"] = 'contact'
      }else{
        this.$router.replace({name: localStorage['BackUrl']})
        this.$root.$children[0].minMiliao = true
      }
    },
    onClickRight() {
      if (this.active == 'message') {
        this.isDropDown = !this.isDropDown;
      }
      if (this.active == 'contact') {
        this.$router.push({ name: "addFG", query: { type: "friend" } });
      }
      if (this.active == 'group') {
        this.$router.push({ name: "addFG", query: { type: "group" } });
      }
    },
    triggerPopup(state) {
      this.showPopup = false;
      if (state) {
        this.active = 'group';
      }
    },
    changeActive(val) {
      this.active = val;
      this.isDropDown = false;
      localStorage["Home_Active"] = val;
      if(val!='user'){
        this.$MiModel.GetUserData()
      }
    },
    openScan() {
      this.$router.push({ name: "scan" });
    }
  }
};
</script>

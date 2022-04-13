<template>
  <div class="Main Background DisplayFlex">
    <van-nav-bar class="NavBar" :title="chatTitle" :border="false" @click-left="onClickBack">
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left" />
      <img
          class="icon-right"
          :src="'./static/miliao/icon/icon-menu.svg'"
          slot="right"
          @click="chatSet(postData.chat_type)"
      />
    </van-nav-bar>
    <a href="javascript:;" class="ChatTips" v-if="chatNum" @click="setRead">{{chatNum}} 条未读消息 点击标记全部已读</a>
    <div class="Scroll-Wrap" ref="Scroll" id="ScrollWrap" @click="closeChatInput">
      <van-pull-refresh
          v-model="isLoading"
          pulling-text="下拉加载更多消息"
          loosing-text="释放即刻加载"
          :success-text="pullDownTxt"
          @refresh="onRefresh"
      >
        <div class="MsgList" id="MsgList">
          <dl
              class="item"
              :class="(item.chat_type==5||item.chat_type==6)?'wrap':(item.is_send!=1&&item.send_id!=userUid)?'':'self'"
              v-for="(item,index) in msgList"
              :key="item.id"
          >
            <dt v-if="item.chat_type!=5&&item.chat_type!=6">
              <img :src="'./static/miliao/images/headimg/'+item.header" width="100%" v-if="item.header" />
              <b v-else>{{item.title?item.title.slice(0,2):'昵称'}}</b>
            </dt>
            <dd v-if="item.chat_type==5||item.chat_type==6">
              <div class="notice">{{item.content}}</div>
            </dd>
            <dd v-else>
              <div
                  class="MsgTit"
                  v-if="item.is_send!=1&&item.send_id!=userUid"
              >{{item.title?item.title:'昵称未设置'}}，{{item.time}}</div>
              <div class="MsgTit" v-else>{{item.time}}</div>
              <div :data-type="item.content_type" :data-id="item.id" :class="`MsgBox BillState${item.is_q||''}${item.content_type==4||item.content_type==2||item.content_type==9||item.content_type==8?' NoBG':''}`" v-html="item.content"></div>
            </dd>
          </dl>
        </div>
      </van-pull-refresh>
    </div>
    <van-cell-group class="ChatInput">
      <van-cell :border="false" class="ChatEdit">
        <van-icon slot="icon" name="smile-o" @click="onClickEmoji" />
        <div
            slot="title"
            :contenteditable="isEdit"
            id="EditBox"
            class="ViewHtml"
            @input="editChat"
            @click="onClickEdit"
            style="-webkit-user-select:text"
        ></div>
        <van-button
            slot="right-icon"
            size="small"
            round
            type="primary"
            @click="sendMsg"
            v-if="msgCon"
        >发送</van-button>
        <van-icon slot="right-icon" name="add-o" @click="onClickChatTool" v-else />
      </van-cell>
      <Emoji @insertHtml="insertHtml" v-if="showEmoji" />
      <ChatTool
          :id="postData.id"
          :chat_type="postData.chat_type"
          :card="isSendCard"
          :goid="gOwnerId"
          :isNotSay="isNotSay"
          @getToolType="getToolType"
          @sendRecord="sendRecord"
          v-if="showChatTool"
      />
    </van-cell-group>
    <van-popup
        class="SetPopup"
        v-model="showPopup"
        position="bottom"
        :overlay="false"
        :lock-scroll="false"
    >
      <Bill :chatId="postData.id" :chatType="chatType" @sendRecord="sendRecord" @triggerPopup="triggerPopup" v-if="toolType=='bill'" />
      <!-- <FriendCard @triggerPopup="triggerPopup" v-if="toolType=='friend'" />
      <GroupCard @triggerPopup="triggerPopup" v-if="toolType=='group'" /> -->
    </van-popup>
    <van-popup
        v-model="showBill"
        :close-on-click-overlay="false"
        :overlayStyle="{backgroundColor:'rgba(255,255,255,.6)'}"
        style="background: none;height: 100%;width: 100%"
    >
      <div class="RobBill" :class="{none:billInfo.is_q==2}" v-if="isRob">
        <a class="rob" href="javascript:;" @click="robBill" v-if="billInfo.is_q==0"></a>
        <dl>
          <dt>
            <img :src="'./static/miliao/images/headimg/'+billInfo.header" height="24" v-if="billInfo.header">
            <b v-else>{{billInfo.nick_name||'昵称'}}</b>
            <span>{{billInfo.nick_name||'昵称未设置'}}的红包</span>
          </dt>
          <dd>{{billInfo.is_q==2?'手慢了，红包派完了':billInfo.explain}}</dd>
        </dl>
        <a class="href" href="javascript:;" @click="isRob=false" v-if="billInfo.is_q==2">看看大家的手气<van-icon name="arrow" /></a>
        <van-icon class="close" name="close" @click="showBill=false" />
      </div>
      <BillInfo :billInfo="billInfo" :billList="billList" :isPrivate="isPrivate" @triggerPopup="showBill=false" v-else />
    </van-popup>
    <van-popup
        v-model="showVideo"
        closeable
        :overlayStyle="{backgroundColor:'rgba(0,0,0,.9)'}"
        style="background: none;width: 100%;height: 100%"
    >
      <VideoPlay :videoImg="videoImg" :videoUrl="videoUrl" :videoId="videoId" v-if="showVideo" />
    </van-popup>
    <van-dialog
        class="D-confirm"
        v-model="showDialog"
        title="添加密友"
        message-align="center"
        show-cancel-button
        confirm-button-text="发送"
        @confirm="addFriend"
        style="width: 80%"
    >
      <div class="van-dialog__message" style="font-weight: 400">
        填写验证信息，并发送申请添加好友。
        <van-field
            placeholder="请输入验证内容"
            v-model="validateCon"
            style="border:1px #ddd solid;padding:5px 10px;margin-top: 10px"
        />
      </div>
    </van-dialog>
    <!-- @成员 -->
    <van-popup
        v-model="showAt"
        :overlayStyle="{backgroundColor:'transparent'}"
        style="height: 100%;width: 100%"
    >
      <GroupMember :groupId="postData.id" @selectAt="selectAt" @triggerPopup="closeAt" />
    </van-popup>
    <van-action-sheet
        v-model="showMsgTool"
        :actions="msgToolAction"
        @select="onSelectMsgTool"
    />
  </div>
</template>

<script>
import Emoji from "@/components/miliao/Emoji";
import ChatTool from "@/components/miliao/ChatTool";
import Bill from "@/components/miliao/Bill";
import BillInfo from "@/components/miliao/BillInfo";
import GroupMember from "@/components/miliao/GroupMember";
import VideoPlay from "@/components/miliao/VideoPlay";

import { ImagePreview } from "vant";
export default {
  name: "SendMsg",
  components: {
    Emoji,
    ChatTool,
    Bill,
    BillInfo,
    GroupMember,
    VideoPlay,
  },
  props: {},
  data() {
    return {
      isWsOk: false,
      sendPost: {},
      chatType: Number(this.$route.query.chat_type),
      postData: {
        id: Number(this.$route.query.id || 0),
        chat_type: Number(this.$route.query.chat_type) == 1 ? 1 : 2,
        password: "",
        page_no: 1
      },
      pageNo: 1,
      msgList: [],
      chatTitle: "",
      chatNum: "",
      showEmoji: false,
      showChatTool: false,
      cursorPos: {},
      msgCon: "",
      beforePullDown: true,
      isPullingDown: true,
      pullDownTxt: "消息加载成功",
      totalPage: 1,
      posY: 0,
      showPopup: false,
      toolType: "friend",
      isResize: false,
      groupNum: 0,
      isSendCard: true,
      showDialog: false,
      validateCon: "我是" + localStorage["userNickName"],
      friendMid: "",
      isNotSay: false,
      isGroupSay: true,
      gOwnerId: 0,
      isHistory: false,
      msgVObj: document.getElementById("MsgVoice"),
      isVoice: localStorage['systemVoice']==1?true:false,
      showLongTap: false,
      Socket: null,
      lockReconnect: false,
      userUid: localStorage["userUid"] || new Date().getTime(),
      contentType: 1,
      userType: Number(localStorage["userType"]),
      groupPass: localStorage["groupPass"]
          ? JSON.parse(localStorage["groupPass"])
          : [],
      groupId: "",
      isVisitor: false,
      sendNo: 0,
      isEdit: false,
      isInView: true,
      isScrollB: false,
      showSend: false,
      showVideo: false,
      videoImg: '',
      videoId: '',
      videoUrl: '',
      showAt: false,
      showBill: false,
      billId: '',
      billInfo: '',
      billList: '',
      isRob: true,
      isPrivate: false,
      isLoading: false,
      isDestroyed: false,
      isAdmin: false,
      msgToolAction: [{name: '删除此消息',id: 1}],
      showMsgTool: false,
      selectMsg: '',
      copyMsg: '',
    };
  },
  computed: {

  },
  watch: {
    isVisitor(val) {
      if (val) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    },
    isNotSay(val) {
      if (val) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    },
    isGroupSay(val) {
      if (val) {
        this.isEdit = true;
      } else {
        this.isEdit = true;
      }
    },
    isInView(val) {
      if (val) {
        this.chatNum = 0;
      }
    },
  },
  created() {
    this.isDestroyed = false;
    this.createWebSocket();
    this.$MiModel.GetGroupsInfo(this.postData.id,(data)=>{
      if(data.info.user_type==1||data.info.user_type==4){
        this.isAdmin = true
      }
    });
  },
  mounted() {
    // 消息操作
    $('body').on('click','#MsgList .item .MsgBox',(ev)=>{
      this.selectDid = $(ev.currentTarget).data('id');
      const type = $(ev.currentTarget).data('type');
      if(this.isAdmin&&type==1&&!$(ev.target).hasClass('photo')&&!$(ev.target).hasClass('VideoBox')){
        this.showMsgTool = true;
      }
    });
    // 图片长按
    this.$MiUtil.LongTap('#MsgList .photo',data=>{
      this.selectDid = $(data.event.currentTarget).parent().data('id');
      if(data.state=='click'){
        this.imagePreview = ImagePreview({
          images: [data.event.target.src],
          showIndex: false
        });
      }else{
        this.showMsgTool = true;
      }
    });
    // 视频长按
    this.$MiUtil.LongTap('#MsgList .VideoBox',data=>{
      this.selectDid = $(data.event.currentTarget).parent().data('id');
      if(data.state=='click'){
        this.showVideo = true;
        this.videoImg = $(event.target).find('img').attr('src');
        this.videoUrl = $(event.target).data('url');
        this.videoId = $(event.target).data('vid');
      }else{
        this.showMsgTool = true;
      }
    });
    // 领红包
    $('body').on('click','.BillBox',(ev)=>{
      this.isRob = true;
      this.billId = $(ev.currentTarget).data('id');
      this.getBillInfo();
    });
    // 选择@成员
    $('body').on('click','.selectAt',(ev)=>{
      var name = $(ev.currentTarget).data('name');
      var sensor = $('<span>@'+ name +'</span>').css({display: 'none',fontSize: '16px'});
      $('body').append(sensor);
      var valW = sensor.width()+'px';
      sensor.remove();
      this.insertHtml('<input class="at" type="text" disabled value="@'+name+'" style="width:'+valW+'">');
    });

    $("body").on("blur", "input,textarea,#EditBox", function() {
      window.scrollTo(0, 0);
    });
    // 鼠标离开页面
    $(window).on("blur", () => {
      if (this.isScrollB) {
        this.isInView = false;
      }
    });
    // 消息框滚动事件
    $("#ScrollWrap").scroll(() => {
      var sT = event.target.scrollTop;
      var sH = event.target.scrollHeight - event.target.clientHeight;
      if (sT == sH) {
        this.isScrollB = true;
        this.isInView = true;
      } else {
        this.isScrollB = false;
      }
      if (sT < sH - 10) {
        this.isInView = false;
      }
      unReadCount(sT, event.target.clientHeight);
    });
    // 未读消息事件
    var unReadCount = (st, sh) => {
      $('#MsgList dl[read="false"]').each((index, el) => {
        var elT = el.offsetTop + el.offsetHeight - 20 - st;
        if (elT < sh) {
          $(el).attr("read", "true");
          this.chatNum -= 1;
        }
      });
    };
    $("body").on("click", "#AddFriend", () => {
      this.showDialog = true;
    });
    $("body").on("click", "#MsgList .photo", event => {
      this.imagePreview = ImagePreview({
        images: [event.target.src],
        showIndex: false
      });
    });
    $("body").on("click", ".van-image-preview", event => {
      /*PC关闭图片预览*/
      this.imagePreview.close();
    });
  },
  activated() {},
  destroyed() {
    this.isDestroyed = true;
    this.isInView = false;
    this.$toast.clear();
    this.Socket&&this.Socket.close();
  },
  methods: {
    onSelectMsgTool(item) {
      this.showMsgTool = false;
      if(item.id==1){
        this.$MiModel.DelRecord({gid: this.postData.id,id: this.selectDid},data=>{
          if(data.code==1){
            this.getRecordList(true)
          }
        });
      }
    },
    closeAt() {
      this.showAt = false;
      document.getElementById("EditBox").focus();
    },
    onRefresh() {
      this.postData.page_no = this.pageNo += 1;
      if (this.pageNo > this.totalPage) {
        this.isLoading = false;
        this.pullDownTxt = "没有更多消息了";
        this.pageNo -= 1;
        return false;
      }
      this.initRecordList(this.chatType, data => {
        this.totalPage = data.data_total_page;
        this.chatNum = data.is_see_num;
        this.isLoading = false;
        if (data.code == 1) {
          this.pullDownTxt = "消息加载成功";
          var html = "";
          const list = data.list || [];
          for (var i = 0; i < list.length; i++) {
            html +=
                '<dl class="' +
                (list[i].chat_type == 5 || list[i].chat_type == 6
                    ? "item wrap"
                    : list[i].is_send != 1 && list[i].send_id != this.userUid
                        ? "item"
                        : "item self") +
                '">' +
                (list[i].chat_type != 5 &&
                list[i].chat_type != 6
                    ? "<dt>" +
                    (list[i].header
                        ? '<img src="./static/miliao/images/headimg/' +
                        list[i].header +
                        '" width="100%">'
                        : "<b>" +
                        (list[i].title ? list[i].title.slice(0, 2) : "昵称") +
                        "</b>") +
                    "</dt>"
                    : "") +
                (list[i].chat_type == 5 || list[i].chat_type == 6
                    ? '<dd><div class="notice">' +
                    list[i].content +
                    "</div></dd>"
                    : "<dd>" +
                    (list[i].is_send != 1 && list[i].send_id != this.userUid
                        ? '<div class="MsgTit">' +
                        (list[i].title ? list[i].title : "昵称未设置") +
                        "，" +
                        list[i].time +
                        "</div>"
                        : '<div class="MsgTit">' + list[i].time + "</div>") +
                    '<div data-type="'+list[i].content_type+'" data-id="'+list[i].id+'" class="MsgBox BillState'+(list[i].is_q||'')+
                    (list[i].content_type == 4 || list[i].content_type == 2 || list[i].content_type == 9|| list[i].content_type == 8 ? " NoBG" : "") +
                    '">' +
                    list[i].content +
                    "</div></dd>") +
                "</dl>";
          }
          $("#MsgList").prepend(html);
        } else {
          this.pullDownTxt = "消息加载失败";
        }
      })
    },
    getBillInfo() {
      this.$MiModel.GetUserInfo()
      this.$MiModel.BillInfo(this.billId,(data)=>{
        if(data.code==1){
          if(data.info.type==2&&this.userUid==data.info.fuid){
            this.isPrivate = true;
            this.isRob = false;
          }
          if(data.info.is_q==1){
            this.isRob = false;
          }
          this.billInfo = data.info;
          this.billList = data.hongbaolist||[];
          this.showBill = true;
        }
      });
    },
    robBill() {
      this.showBill = false;
      this.$MiModel.RobBill(this.billId,(data)=>{
        if(data.code==1){
          this.getBillInfo();
          this.getRecordList(true);
        }
      })
    },
    selectAt(name) {
      this.showAt = false;
      var sensor = $('<span>@'+ name +'</span>').css({display: 'none',fontSize: '16px'});
      $('body').append(sensor);
      var valW = sensor.width()+'px';
      sensor.remove();
      // 删除@字符
      this.cursorPos.node.replaceData(this.cursorPos.offset-=1, 1, '');
      this.insertHtml('<input class="at" type="text" disabled value="@'+name+'" style="width:'+valW+'">');
    },
    closeChatInput() {
      this.showAt = false;
      this.showSend = false;
      document.getElementById("EditBox").blur();
      this.showEmoji = false;
      this.showChatTool = false;
    },
    refreshScroll(scrollWrap) {
      scrollWrap.refresh();
      scrollWrap.scrollTo(0, scrollWrap.maxScrollY);
    },
    createWebSocket() {
      this.getRecordList();
      this.sendPost = {
        id: this.postData.id,
        chat_type: this.postData.chat_type,
        content: "",
        content_type: 1
      };
      try {
        if ("WebSocket" in window) {
          this.Socket = new WebSocket(WsUrl);
        } else if ("MozWebSocket" in window) {
          this.Socket = new MozWebSocket(WsUrl);
        } else {
          this.$MiDialog.Alert(
              "您的浏览器不支持WebSocket协议,建议使用新版谷歌、火狐等浏览器，请勿使用IE10以下浏览器，360浏览器请使用极速模式，不要使用兼容模式！"
          );
        }
        this.$toast.loading({ message: "通信连接中...", duration: 0 });
        var heartCheck = {
          timeout: 60000, //60s
          timeoutObj: null,
          reset: () => {
            clearInterval(heartCheck.timeoutObj);
            heartCheck.start();
          },
          start: () => {
            heartCheck.timeoutObj = setInterval(() => {
              if (this.Socket.readyState == 1) {
                this.Socket.send("ping");
              }
            }, heartCheck.timeout);
          }
        };
        this.Socket.onclose = evnt => {
          console.log("连接关闭");
          if(!this.isDestroyed){
            this.reconnectWebSocket();
          }
        };
        this.Socket.onerror = () => {
          this.isWsOk = false;
          console.log("连接错误");
        };
        this.Socket.onopen = evnt => {
          console.log("连接成功");
          heartCheck.start();
        };
        this.Socket.onmessage = evnt => {
          var data = JSON.parse(evnt.data);
          var type = data.type || "";
          var bid = this.postData.id;
          switch (type) {
            case "init":
              if (this.postData.chat_type == 1) {
                bid = this.userUid;
              }
              this.sendPost.client_id = data.client_id;
              localStorage["clientId"] = data.client_id;
              if (this.chatType == 1) {
                this.$MiModel.BindUid(
                    {
                      type: this.postData.chat_type,
                      client_id: data.client_id,
                      id: bid
                    },
                    data => {
                      this.$toast.clear();
                      if (data.code == 1) {
                        this.isWsOk = true;
                        console.log("绑定成功");
                      } else {
                        this.reconnectWebSocket();
                      }
                    }
                );
              } else {
                this.$MiModel.GetUserInfo(data => {
                  if (data.code > 200 && data.code < 206) {
                    localStorage.removeItem("isLogin");
                    localStorage.removeItem("userUid");
                    localStorage.removeItem("userToken");
                    this.userUid = new Date().getTime();
                    this.isVisitor = true;
                  }
                  var userData = {
                    uid: this.userUid,
                    header: data.info.header,
                    name: data.info.nickname
                  };
                  var bindData = {
                    sendType: "bind",
                    id: bid,
                    userData: userData
                  };
                  this.socketSend(bindData);
                });
              }
              break;
            case "bind":
              console.log("绑定成功");
              this.$toast.clear();
              this.isWsOk = true;
              break;
            case "close":
              console.log("连接关闭");
              this.isWsOk = false;
              if(!this.isDestroyed){
                this.reconnectWebSocket();
              }
              break;
            case 'refresh':
              console.log("更新消息");
              this.getRecordList(true)
              break;
            default:
              console.log("收到消息");
              var msg = JSON.parse(evnt.data);
              if (msg.group_notsay == 1) {
                this.isGroupSay = false;
              }
              if (msg.group_notsay == 2) {
                if (msg.fid) {
                  if (msg.fid == this.userUid) {
                    this.isNotSay = true;
                  } else {
                    this.isNotSay = false;
                  }
                } else {
                  this.isGroupSay = true;
                  this.isNotSay = false;
                }
              }
              if (msg.group_notsay == 3 && msg.fid == this.userUid) {
                this.$MiDialog.Alert("你已被移出该群", () => {
                  this.$router.replace('/miliao');
                });
                this.isVisitor = true;
              }
              if (msg.send_id != this.userUid) {
                if (!this.isInView) {
                  this.chatNum += 1;
                }
              }
              this.appendMyMsg(msg);
              heartCheck.reset();
          }
        };
      } catch (e) {
        this.reconnectWebSocket();
      }
    },
    socketSend(post) {
      var BlobData = new Blob([JSON.stringify(post)]);
      this.Socket.send(BlobData);
    },
    reconnectWebSocket() {
      if (this.lockReconnect) return;
      this.lockReconnect = true;
      if(this.isDestroyed){
        this.Socket&&this.Socket.close();
      }else{
        setTimeout(()=>{
          this.createWebSocket();
          this.lockReconnect = false;
        }, 2000);
      }
    },
    initRecordList(type, callback) {
      if (type == 1) {
        this.$MiModel.GetRecordList(this.postData, data => {
          callback(data);
        });
      } else {
        this.$MiModel.GetGroupRecordList(this.postData, data => {
          callback(data);
        });
      }
    },
    getRecordList(isHtml) {
      this.postData.page_no = 1;
      this.initRecordList(this.chatType, data => {
        this.totalPage = data.data_total_page;
        this.chatTitle = data.tit;
        this.chatNum = data.is_see_num;

        if(this.chatType==1){
          this.friendMid = data.mid;
          this.isEdit = true;
        }else{
          this.groupNum = data.num || 0;
          this.groupId = data.gid;
          this.isNotSay = data.state == 6 ? true : false;
          this.isGroupSay = data.group_notsay == 2 ? true : false;
          this.isSendCard = data.is_h_d ? true : false;
          this.isVisitor = data.is_visitor == 1 ? true : false;
          if(data.is_visitor==1){
            this.isEdit = false
          }else{
            this.isEdit = true
          }
        }
        if (data.code == 0||data.code == 1) {
          if(isHtml){
            var html = '';
            const list = data.list || [];
            for (var i = 0; i < list.length; i++) {
              html +=
                  '<dl class="' +
                  (list[i].chat_type == 5 || list[i].chat_type == 6
                      ? "item wrap"
                      : list[i].is_send != 1 && list[i].send_id != this.userUid
                          ? "item"
                          : "item self") +
                  '">' +
                  (list[i].chat_type != 5 &&
                  list[i].chat_type != 6
                      ? "<dt>" +
                      (list[i].header
                          ? '<img src="./static/miliao/images/headimg/' +
                          list[i].header +
                          '" width="100%">'
                          : "<b>" +
                          (list[i].title ? list[i].title.slice(0, 2) : "昵称") +
                          "</b>") +
                      "</dt>"
                      : "") +
                  (list[i].chat_type == 5 || list[i].chat_type == 6
                      ? '<dd><div class="notice">' +
                      list[i].content +
                      "</div></dd>"
                      : "<dd>" +
                      (list[i].is_send != 1 && list[i].send_id != this.userUid
                          ? '<div class="MsgTit">' +
                          (list[i].title ? list[i].title : "昵称未设置") +
                          "，" +
                          list[i].time +
                          "</div>"
                          : '<div class="MsgTit">' + list[i].time + "</div>") +
                      '<div data-type="'+list[i].content_type+'" data-id="'+list[i].id+'" class="MsgBox BillState'+(list[i].is_q||'')+
                      (list[i].content_type == 4 || list[i].content_type == 2 || list[i].content_type == 9|| list[i].content_type == 8 ? " NoBG" : "") +
                      '">' +
                      list[i].content +
                      "</div></dd>") +
                  "</dl>";
            }
            $('#MsgList').html(html);
          }else{
            this.msgList = data.list||[];
          }
        } else {
          this.$MiDialog.Alert(data.code_dec, () => {
            this.onClickBack();
          });
        }
        this.$nextTick(() => {
          var imgObj = [],
              mulitImg = [],
              imgTotal,
              flag = 0;
          $(".photo,.video").each(function(index, el) {
            mulitImg.push(el.src);
          });
          imgTotal = mulitImg.length;
          if (imgTotal) {
            for (var i = 0; i < imgTotal; i++) {
              imgObj[i] = new Image();
              imgObj[i].src = mulitImg[i];
              imgObj[i].onerror = (el) => {
                flag++;
                if (flag == imgTotal) {
                  this.scrollBottom();
                }
              }
              imgObj[i].onload = (el) => {
                flag++;
                if (flag == imgTotal) {
                  this.scrollBottom();
                }
              }
            }
          } else {
            this.scrollBottom();
          }
        });
      });
    },
    onClickBack() {
      if (localStorage["MiLogin"]) {
        this.$router.go(-1)
      } else {
        this.$router.push("/")
      }
      this.$route.params.isBack = true
    },
    setCursorPos(obj) {
      const selObj = obj || window.getSelection();
      this.cursorPos = {
        node: selObj.anchorNode,
        offset: selObj.anchorOffset
      };
    },
    editChat(e) {
      if (e.inputType === "insertParagraph") {
        e.target.innerHTML = e.target.innerHTML.replace("<div><br></div>", "");
        e.target.innerHTML !== "<div><br></div>" && this.sendMsg();
      } else {
        this.msgCon = e.target.innerHTML;
        this.setCursorPos();
        var nodeValue = this.cursorPos.node.nodeValue;
        if(nodeValue&&nodeValue.slice(-1)=='@'){
          if(this.chatType==2){
            this.showAt = true;
            document.getElementById("EditBox").blur();
          }
        }else{
          this.showAt = false;
        }
      }
    },
    onClickEdit(e) {
      if (this.isVisitor) {
        this.$MiDialog.Alert("你不是该群成员，不能发言");
        return;
      }
      if (!this.isGroupSay) {
        this.$MiDialog.Alert("该群已禁言，不能发送消息");
        return;
      }
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.showEmoji = false;
      this.showChatTool = false;
      this.setCursorPos();

    },
    onClickEmoji() {
      if (this.isVisitor) {
        this.$MiDialog.Alert("你不是该群成员，不能发言");
        return;
      }
      if (!this.isGroupSay) {
        this.$MiDialog.Alert("该群已禁言，不能发送消息");
        return;
      }
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.showEmoji = !this.showEmoji;
      this.showChatTool = false;
      const selObj = window.getSelection();
      selObj.collapse(this.cursorPos.node, this.cursorPos.offset);
      document.getElementById("EditBox").focus();

    },
    onClickChatTool() {
      this.showSend = false;
      if (this.isVisitor) {
        this.$MiDialog.Alert("你不是该群成员，不能发言");
        return;
      }
      if (!this.isGroupSay) {
        this.$MiDialog.Alert("该群已禁言，不能发送消息");
        return;
      }
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.showChatTool = !this.showChatTool;
      this.showEmoji = false;
      document.getElementById("EditBox").blur();
    },
    insertHtml(html) {
      // 插入内容
      window.getSelection().collapse(this.cursorPos.node,this.cursorPos.offset);
      document.getElementById("EditBox").focus();
      var sel, range;
      if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          var el = document.createElement("div");
          el.innerHTML = html;
          var frag = document.createDocumentFragment(), node, lastNode;
          while ( (node = el.firstChild) ) {
            lastNode = frag.appendChild(node);
          };
          range.insertNode(frag);
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          };
        };
        this.setCursorPos(sel);
      } else if (document.selection && document.selection.type != "Control") {
        // IE9以下
        document.selection.createRange().pasteHTML(html);
      } else{
        this.$toast('你的浏览器不支持');
      }
      this.msgCon = this.isEdit?document.getElementById('EditBox').innerHTML:'';
    },
    sendMsg() {
      this.msgCon = document.getElementById("EditBox").innerHTML;
      if(this.msgCon){
        this.sendRecord(this.msgCon, this.contentType);
      }else{
        this.setCursorPos();
        document.getElementById("EditBox").focus();
      }
    },
    sendRecord(content, content_type,bill_id) {
      if (!this.isWsOk) {
        this.$MiDialog.Alert("聊天通信未接通，无法发送信息");
        return;
      }
      if (this.isVisitor) {
        this.$MiDialog.Alert("你不是该群成员，不能发言");
        return;
      }
      if (!this.isGroupSay) {
        this.$MiDialog.Alert("该群已禁言，不能发送消息");
        return;
      }
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.isInView = true;
      if (content_type != 3) {
        $("#MsgState").remove();
        var html =
            '<dl id="MsgState" class="item self"><dd>' +
            '<div class="state"><i class="van-loading__spinner van-loading__spinner--circular"><svg viewBox="25 25 50 50" class="van-loading__circular"><circle cx="50" cy="50" r="20" fill="none"></circle></svg></i><span>正在发送...</span></div>' +
            "</dd></dl>";
        $("#MsgList").append(html);
      }
      this.sendPost.content = content;
      this.sendPost.content_type = content_type;
      if(bill_id){
        this.sendPost.hb_id = bill_id;
      }else{
        delete this.sendPost.hb_id;
      }
      if (this.chatType == 1) {
        this.$MiModel.SendRecord(this.sendPost, data => {
          if (data.code == 0) {
            $("#MsgState .state").html(
                '<i class="van-icon van-icon-fail"></i><span>发送失败</span>'
            );
            setTimeout(() => {
              $("#MsgState").remove();
            }, 2000);
          } else {
            if (data.code == 7) {
              this.reconnectWebSocket();
            }
            $("#EditBox").empty();
            $("#MsgState").remove();
            this.cursorPos = {};
            this.msgCon = "";
            if (data.code == 4) {
              var html =
                  '<dl class="item wrap"><dd>' +
                  '<div class="notice" id="AddFriend">你还不是' +
                  this.chatTitle +
                  "的朋友，成为朋友后才能聊天。<p><i>点击这里马上发送好友申请</i></p></div>" +
                  "</dd></dl>";
              $("#MsgList").append(html);
            } else {
              this.appendMyMsg(data.message);
            }
          }
        });
      } else {
        var msgData = this.sendPost;
        msgData.uid = this.userUid;
        msgData.sendType = "chat";
        this.socketSend(msgData);
        $("#EditBox").empty();
        $("#MsgState").remove();
        this.cursorPos = {};
        this.msgCon = "";
        this.$MiModel.SendRecord(this.sendPost);
      }
      if(content_type!=2&&content_type!=9){
        document.getElementById("EditBox").focus();
        this.setCursorPos();
      }
    },
    appendMyMsg(msg) {
      if(msg.send_id!=this.userUid&&this.isVoice){
        this.msgVObj.play();
      }
      var html =
          '<dl read="' +
          this.isInView +
          '" class="' +
          (msg.chat_type == 5 || msg.chat_type == 6
              ? "item wrap"
              : msg.is_send != 1 && msg.send_id != this.userUid
                  ? "item"
                  : "item self") +
          '">' +
          (msg.chat_type != 5 &&
          msg.chat_type != 6
              ? "<dt>" +
              (msg.header
                  ? '<img src="./static/miliao/images/headimg/' +
                  msg.header +
                  '" width="100%">'
                  : "<b>" + (msg.title ? msg.title.slice(0, 2) : "昵称") + "</b>") +
              "</dt>"
              : "") +
          (msg.chat_type == 5 || msg.chat_type == 6
              ? '<dd><div class="notice">' + msg.content + "</div></dd>"
              : "<dd>" +
              (msg.is_send != 1 && msg.send_id != this.userUid
                  ? '<div class="MsgTit">' +
                  (msg.title ? msg.title : "昵称未设置") +
                  "，" +
                  msg.time +
                  "</div>"
                  : '<div class="MsgTit">' + msg.time + "</div>") +
              '<div data-type="'+msg.content_type+'" data-id="'+msg.id+'" class="MsgBox BillState'+(msg.is_q||'')+
              (msg.content_type == 4||msg.content_type == 2||msg.content_type == 9||msg.content_type == 8 ? " NoBG" : "") +
              '">' +
              msg.content +
              "</div></dd>") +
          "</dl>";
      $("#MsgList").append(html);
      this.scrollBottom(msg.content);
    },
    scrollBottom(msg) {
      if (!this.isInView) {
        return;
      }
      var el = document.getElementById("ScrollWrap");
      try {
        if ($(msg)[0].nodeName == "IMG") {
          var loadImg = new Image();
          loadImg.src = $(msg)[0].src;
          loadImg.onerror = (el) => {
            el.scrollTop = el.scrollHeight;
          }
          loadImg.onload = () => {
            el.scrollTop = el.scrollHeight;
          };
        } else if ($(msg).find('img')[0].nodeName == "IMG"){
          var loadImg = new Image();
          loadImg.src = $(msg).find('img')[0].src;
          loadImg.onerror = (el) => {
            el.scrollTop = el.scrollHeight;
          }
          loadImg.onload = () => {
            el.scrollTop = el.scrollHeight;
          };
        } else {
          el.scrollTop = el.scrollHeight;
        }
      } catch(err) {
        el.scrollTop = el.scrollHeight;
      }
    },
    triggerPopup(refresh, content, content_type) {
      this.showPopup = false;
      if (refresh) {
        this.sendRecord(content, content_type);
      }
    },
    getToolType(val) {
      this.showPopup = true;
      this.toolType = val;
    },
    chatSet(type) {
      if (type == 1) {
        this.$router.push({
          name: "friendChatSet",
          query: { id: this.postData.id }
        });
      }
      if (type == 2) {
        this.$router.push({
          name: "groupChatSet",
          query: { id: this.postData.id }
        });
      }
    },
    addFriend() {
      this.$MiModel.AddFriends(this.friendMid, this.validateCon, data => {
        this.$MiDialog.Alert(data.code_dec);
      });
    },
    setRead() {
      this.$MiModel.SeeAllRecord({id:this.postData.id,type:this.chatType},(data)=>{
        if(data.code==1){
          this.chatNum = 0
          this.$MiModel.GetUserData()
        }
      })
    }
  }
};
</script>
<style scoped>
.van-pull-refresh{
  min-height: 100%;
}
</style>
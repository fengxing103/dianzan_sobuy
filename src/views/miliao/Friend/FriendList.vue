<template>
  <div>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="FriendList">
          <van-cell class="new" title="新的密友" to="/miliao/friendNotice">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/icon/icon-friend-add-w.svg'">
            </div>
            <van-tag round type="danger" v-if="myNum">{{myNum}}</van-tag>
          </van-cell>
          <van-cell class="new" title="群聊" @click="$emit('showGroup')">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/icon/icon-group-add-w.svg'">
            </div>
            <van-tag round type="danger" v-if="mqNum">{{mqNum}}</van-tag>
          </van-cell>
          <div class="FriendCount">
            {{friendList.length}} 位密友
          </div>
          <van-swipe-cell :right-width="140" :on-close="onClickDel" v-for="item in friendList" :key="item.id">
            <van-cell :title="item.fname?item.fname:'昵称未设置'" clickable @click="onOpenInfo(item.id)">
              <div class="head" slot="icon">
                <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
                <b v-else>{{item.fname?item.fname.slice(0,2):'昵称'}}</b>
              </div>
            </van-cell>
            <span slot="right" @click="delFriend(item.id)"><i>删除</i></span>
            <span class="grey" slot="right" @click="setRemark(item.id,item.fname)"><i>备注</i></span>
          </van-swipe-cell>
        </div>
      </div>
    </div>
    <van-popup class="SetPopup" v-model="showPopup" position="bottom" :overlay="false">
      <SetRemark :friendId="friendId" :remarkName="remarkName" @triggerPopup="triggerPopup" v-if="showPopup" />
    </van-popup>
  </div>
</template>

<script>
import Search from '@/components/miliao/Search'
import SetRemark from './SetRemark'
export default {
  name: 'FriendList',
  components: {
    Search,
    SetRemark
  },
  props: {

  },
  data() {
    return {
      showPopup: false,
      remarkName: '',
      friendId: ''
    }
  },
  computed: {
    isSee() {
      return this.ChatData.is_see||{ml_num:0,my_num:0,mq_num:0};
    },
    myNum() {
      return this.isSee.my_num;
    },
    mqNum() {
      return this.isSee.mq_num;
    },
    friendList() {
      return this.FriendList || [];
    },
  },
  watch: {},
  created() {

  },
  mounted() {
    this.$MiInitial.InitScroll(this.$parent.$el);
  },
  activated() {
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
    this.getFriendsList();
  },
  destroyed() {},
  methods: {
    onClickDel(clickPosition, instance) {
      instance.close();
    },
    onOpenInfo(id) {
      this.$router.push({name: 'friendInfo',query: {id: id}});
    },

    setRemark(id,remark) {
      this.showPopup = true;
      this.friendId = id;
      this.remarkName = remark;
    },
    getFriendsList() {
      this.$MiModel.FriendsList('',(data)=>{
        this.$nextTick(()=>{
          this.$MiInitial.InitScroll(this.$parent.$el);
          this.ScrollWrap.refresh();
        })
      });
    },
    triggerPopup() {
      this.showPopup = false;
    },
    delFriend(id) {
      this.$MiDialog.Confirm('确定要删除该好友吗？',()=>{
        this.$MiModel.SetFriendsInfo({id:id,state:5},(data)=>{
          if(data){
            this.getFriendsList();
          }
        });
      });
    }
  }
}
</script>

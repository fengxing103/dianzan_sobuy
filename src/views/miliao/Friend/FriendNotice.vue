<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        title="新的密友"
        :border="false"
        @click-left="onClickBack"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box FriendNotice">
          <van-swipe-cell :right-width="70" :on-close="onClickDel" v-for="item in friendList" :key="item.id">
            <van-cell :title="item.fname?item.fname:'昵称未设置'" :label="item.content|quotes" clickable @click="onOpenInfo(item.id)">
              <div class="head" slot="icon">
                <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
                <b v-else>{{item.fname?item.fname.slice(0,2):'昵称'}}</b>
              </div>
              <i slot="icon" class="UnreadDot" v-if="!item.is_see"></i>
              <div class="status" slot="right-icon">
                <van-button type="primary" size="mini" v-if="item.new_type==2">查看</van-button>
                <span v-else>{{item.new_type_name}}</span>
              </div>
            </van-cell>
            <span slot="right" @click="delNotice(item.id)"><i>删除</i></span>
          </van-swipe-cell>
          <center class="NullTips" v-if="friendList&&!friendList.length">暂无新的密友消息</center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendNotice',
  components: {
  },
  props: {},
  data() {
    return {
      friendList: ''
    }
  },
  filters: {
    quotes(val) {
      return '"'+val+'"';
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getNewsFriendsList();
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
    getNewsFriendsList() {
      this.$MiModel.NewsFriendsList((data)=>{
        this.friendList = data.list||[];
        this.$nextTick(()=>{
          this.$MiInitial.InitScroll(this.$el);
        })
      });
    },
    onOpenInfo(id) {
      this.$router.push({name: 'friendInfo',query: {id: id,msg: 1}});
    },
    onClickDel(clickPosition, instance) {
      instance.close();
    },
    delNotice(id) {
      this.$MiModel.DelUserNew({id:id,type:1},(data)=>{
        this.getNewsFriendsList();
      });
    }
  }
}
</script>

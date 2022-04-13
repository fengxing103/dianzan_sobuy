<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        title="群通知"
        :border="false"
        @click-left="onClickBack"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box FriendNotice">
          <van-swipe-cell :right-width="70" :on-close="onClickDel" v-for="item in groupList" :key="item.id">
            <van-cell clickable @click="onOpenInfo(item.id,item.new_type)">
              <div class="head" slot="icon">
                <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
                <b v-else>{{item.gname?item.gname.slice(0,2):'密群'}}</b>
              </div>
              <i slot="icon" class="UnreadDot" v-if="item.new_type==2&&!item.is_see"></i>
              <template slot="title">
                <span>{{item.gname?item.gname:'密群名未设置'}}</span>
                <div class="van-cell__label" v-html="item.content"></div>
              </template>
              <div class="status" slot="right-icon">
                <van-button type="primary" size="mini" v-if="item.new_type==2">查看</van-button>
                <span v-else>{{item.new_type_name}}</span>
              </div>
            </van-cell>
            <span slot="right" @click="delNotice(item.id)"><i>删除</i></span>
          </van-swipe-cell>
          <center class="NullTips" v-if="groupList&&!groupList.length">暂时没有群通知</center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupNotice',
  components: {
  },
  props: {},
  data() {
    return {
      groupList: ''
    }
  },
  filters: {

  },
  computed: {},
  watch: {},
  created() {
    this.getGroupsNotice();
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
    getGroupsNotice() {
      this.$MiModel.NewGroupsList((data)=>{
        this.groupList = data.list||[];
        this.$nextTick(()=>{
          this.$MiInitial.InitScroll(this.$el);
        });
      });
    },
    onOpenInfo(id,type) {
      if(type==2||type==4||type==5){
        this.$router.push({name: 'groupInfo',query: {id: id}});
      }
    },
    onClickDel(clickPosition, instance) {
      instance.close();
    },
    delNotice(id) {
      this.$MiModel.DelUserNew({id:id,type:2},(data)=>{
        this.getGroupsNotice();
      });
    }
  }
}
</script>

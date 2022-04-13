<template>
  <div class="Scroll-Wrap" ref="Scroll">
    <div class="Scroll-Con">
      <div class="ChatList">
        <van-swipe-cell :right-width="140" :on-close="onClickDel" v-for="(item,index) in listData" :key="index" :class="{top:item.is_z_d}">
          <van-cell size="large" clickable :to="{name:'sendMsg',query: {id: item.recordId,chat_type:item.record_types}}">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.title?item.title.slice(0,2):(item.record_types==1?'昵称':'密群')}}</b>
            </div>
            <van-tag round type="danger" slot="icon" v-if="item.is_see_num">{{item.is_see_num}}</van-tag>
            <template slot="title">
              <span>{{item.title?item.title:(item.record_types==1?'昵称未设置':'密群名未设置')}}</span>
              <div class="van-cell__label" v-html="item.content"></div>
            </template>
            <span>{{item.time}}</span>
            <p><i class="my-icon my-icon-notice" v-if="item.is_v_d"></i></p>
          </van-cell>
          <span slot="right" @click="clearChat(item.recordId,item.record_types)"><i>删除</i></span>
          <span class="grey" slot="right" @click="setRead(item.recordId,item.record_types)"><i>已读</i></span>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatList',
  components: {},
  props: ['chatList'],
  data() {
    return {
      listData: this.chatList,
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$parent.$el);
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickDel(clickPosition, instance) {
      instance.close();
    },
    clearChat(id,type) {
      this.$MiDialog.Confirm('删除会话的同时，也会同时清空聊天记录，确认删除吗？',()=>{
        if(type==1){
          this.$MiModel.SetFriendsInfo({state:9,id:id});
        }else{
          this.$MiModel.SetGroupsInfo({state:9,id:id});
        }
      });
    },
    setRead(id,type) {
      this.$MiModel.SeeAllRecord({id:id,type:type},(data)=>{
        if(data.code==1){
          this.$MiModel.GetUserData(data=>{
            this.listData =  data.mldata
          })
        }
      })
    }
  }
}
</script>

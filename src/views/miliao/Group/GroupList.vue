<template>
  <div class="Scroll-Wrap" ref="Scroll">
    <div class="Scroll-Con">
      <div class="FriendList">
        <van-cell class="new" title="群通知" to="/miliao/groupNotice">
          <div class="head" slot="icon" style="background-color: #fd664d">
            <van-icon name="bell" />
          </div>
          <van-tag round type="danger" v-if="mqNum">{{mqNum}}</van-tag>
        </van-cell>
        <div class="FriendCount" v-if="groupList">
          {{groupList.length}} 个密群
        </div>
        <van-cell v-for="item in groupList" :key="item.id" :title="item.gname?item.gname:'密群名未设置'" :to="{name:'sendMsg',query: {id: item.id,chat_type:item.record_types}}">
          <div class="head" slot="icon">
            <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
            <b v-else>{{item.gname?item.gname.slice(0,2):'密群'}}</b>
          </div>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/miliao/Search'
export default {
  name: 'GroupList',
  components: {
    Search
  },
  props: {
  },
  data() {
    return {

    }
  },
  computed: {
    isSee() {
      return this.ChatData.is_see||{ml_num:0,my_num:0,mq_num:0};
    },
    mqNum() {
      return this.isSee.mq_num;
    },
    groupList() {
      return this.GroupList || [];
    },
  },
  watch: {},
  created() {

  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$parent.$el);
  },
  activated() {
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
    this.$MiModel.GroupsList((data)=>{
      this.$nextTick(()=>{
        this.$MiInitial.InitScrollWrap(this.$parent.$el);
        this.ScrollWrap.refresh()
      })
    });
  },
  destroyed() {},
  methods: {
    onOpenInfo(id) {
      this.$router.push({name: 'groupInfo',query: {id: id}});
    },
  }
}
</script>

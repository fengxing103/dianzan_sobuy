<template>
  <div class="SearchBox">
    <van-search
        class="SearchBar"
        placeholder="搜索"
        shape="round"
        background="#f5f6f9"
        :readonly="isReadonly"
        :show-action="showCancel"
        v-model="searchCon"
        @click="onOpenSearch"
        @cancel="onCancel"
        @input="onSearch"
    />
    <div class="Scroll-Wrap" ref="Scroll" v-if="showCon">
      <div class="Scroll-Con">
        <div class="ChatList" v-if="searchList.friends.length>0">
          <div class="row-title">密友</div>
          <van-cell v-for="item in searchList.friends" :key="item.id" :title="item.nickname?item.nickname:'昵称未设置'" :label="'密聊号:'+item.mid" size="large" :to="{name:'sendMsg',query: {id: item.id,chat_type:1}}">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.nickname?item.nickname.slice(0,2):'昵称'}}</b>
            </div>
          </van-cell>
        </div>
        <div class="ChatList" v-if="searchList.groups.length>0">
          <div class="row-title">密群</div>
          <van-cell v-for="item in searchList.groups" :key="item.id" :title="item.group_name?item.group_name:'密群名未设置'" :label="'密群号:'+item.gid" size="large" :to="{name:'sendMsg',query: {id: item.id,chat_type:2}}">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.group_name?item.group_name.slice(0,2):'密群'}}</b>
            </div>
          </van-cell>
        </div>
        <div class="ChatList" v-if="searchList.record.length>0">
          <div class="row-title">密聊记录</div>
          <van-cell v-for="item in searchList.record" :key="item.recordId" size="large" :to="{name:'sendMsg',query: {id: item.recordId,chat_type:item.record_types}}">
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.title?item.title.slice(0,2):(item.record_types==1?'昵称':'密群')}}</b>
            </div>
            <template slot="title">
              <span>{{item.title?item.title:(item.record_types==1?'昵称未设置':'密群名未设置')}}</span>
              <div class="van-cell__label">{{item.countNo}} 条相关记录</div>
            </template>
          </van-cell>
        </div>
        <div class="Box"></div>
        <div class="SearchTips" v-if="!searchCon">点击搜索框输入内容搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {

  },
  props: {},
  data() {
    return {
      isReadonly: true,
      showCancel: false,
      showCon: false,
      searchList: {
        friends: '',
        groups: '',
        record: ''
      },
      searchCon: ''
    }
  },
  computed: {},
  watch: {

  },
  created() {

  },
  mounted() {

  },
  activated() {

  },
  destroyed() {},
  methods: {
    onOpenSearch() {
      this.$emit('closeDropDown');
      if(this.showCon){
        return false;
      }
      $('.SearchBox').addClass('show');
      this.isReadonly = false;
      this.showCancel = true;
      this.showCon = true;
      this.$nextTick(()=>{
        this.$Initial.InitScrollWrap(this.$el);
        this.ScrollWrap = new this.$BScroll(this.$refs.Scroll,{
          click: true
        });
      })
    },
    onCancel() {
      $('.SearchBox').removeClass('show');
      this.isReadonly = true;
      this.showCancel = false;
      this.showCon = false;
    },
    onSearch() {
      this.$MiModel.SoRecord(this.searchCon,(data)=>{
        if(data.code==1){
          this.searchList = data.dataArray;
        }else{
          this.searchList = {
            friends: '',
            groups: '',
            record: ''
          }
        }
        this.$nextTick(()=>{
          this.$Initial.InitScroll(this.$el);
        })
      })
    }
  }
}
</script>

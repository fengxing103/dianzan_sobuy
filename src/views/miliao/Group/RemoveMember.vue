<template>
  <div class="SetBox">
    <van-nav-bar
        title="移除成员"
        left-text="取消"
        :right-text="'完成'+(checkList.length?'('+checkList.length+')':'')"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />

    <van-search class="SearchFriend mb10" placeholder="搜索" v-model="searchVal" @input="onSearch" />
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <van-checkbox-group class="FriendList" v-model="checkList">
          <van-cell
              v-for="(item,index) in searchList"
              clickable
              :title="item.nickname?item.nickname:'昵称未设置'"
              :key="index"
              @click="toggleCheckbox(index)"
          >
            <van-checkbox class="mr15" slot="icon" :name="item.fid" ref="checkboxes" checked-color="#06bf04" />
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.nickname?item.nickname.slice(0,2):'昵称'}}</b>
            </div>
          </van-cell>
        </van-checkbox-group>
        <MiNoContent :msg="['你没有任何好友可以选择','快去添加好友吧']" v-if="memberList&&!memberList.length" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemoveMember',
  components: {},
  props: {
    gid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      memberList: '',
      searchList: [],
      searchVal: '',
      checkList: []
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.$MiModel.GroupsMember(this.gid,(data)=>{
      this.memberList = data.list?data.list.filter(item => item.fid!=localStorage['userUid']&&item.user_type!=1):[];
      this.searchList = this.memberList;
      this.$nextTick(()=>{
        this.$MiInitial.InitScrollWrap(this.$el,$('.SearchFriend').outerHeight(true));
      })
    });

  },
  mounted() {
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickCancel() {
      this.$emit('triggerPopup');
    },
    onClickConfirm() {
      if(this.checkList.length){
        this.$MiModel.SetGroupsInfo({gid:this.gid,remove_groups:this.checkList.join()},(data)=>{
          this.$emit('triggerPopup',true);
        });
      }else{
        this.$MiDialog.Alert('请选择成员');
      }
    },
    onSearch() {
      this.searchList = [];
      this.memberList.forEach((item)=>{
        if(item.nickname.indexOf(this.searchVal)>-1){
          this.searchList.push(item);
          this.$nextTick(()=>{
            this.$MiInitial.InitScroll(this.$el);
          })
        }
      });
    },
    toggleCheckbox(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
</script>

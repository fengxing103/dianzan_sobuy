<template>
  <div class="SetBox">
    <van-nav-bar
        title="邀请进群"
        left-text="取消"
        :right-text="'完成'+(groupArr.length?'('+groupArr.length+')':'')"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />

    <van-search class="SearchFriend mb10" placeholder="搜索" v-model="searchVal" @input="onSearch" />
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <van-checkbox-group class="FriendList" v-model="newcheckList" @change="changeCheckbox">
          <van-cell
              v-for="(item,index) in searchList"
              clickable
              :title="item.fname?item.fname:'昵称未设置'"
              :key="index"
              @click="toggleCheckbox(index)"
          >
            <van-checkbox class="mr15" slot="icon" :name="item.fid" ref="checkboxes" checked-color="#06bf04" :disabled="checkList.indexOf(item.fid)>-1?true:false" />
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.fname?item.fname.slice(0,2):'昵称'}}</b>
            </div>
          </van-cell>
        </van-checkbox-group>
        <MiNoContent :msg="['你没有任何好友可以选择','快去添加好友吧']" v-if="friendList&&!friendList.length" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteMember',
  components: {},
  props: {
    gid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      friendList: '',
      searchList: [],
      searchVal: '',
      groupArr: [],
      checkList: [],
      newcheckList: []
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.$MiModel.FriendsList({gid:this.gid},(data)=>{
      var listArr = data.list||[];
      this.friendList = [];
      listArr.forEach((item)=>{
        if(item.is_g_d==1){
          this.friendList.push(item);
        }
        if(item.is_g_d==1&&item.is_groups==1){
          this.checkList.push(item.fid);
          this.newcheckList.push(item.fid);
        }
      });
      this.searchList = this.friendList;
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
      if(this.groupArr.length){
        this.$MiModel.InvitationJoinGroups(this.gid,this.groupArr.join(),(data)=>{
          this.$emit('triggerPopup',true);
        });
      }else{
        this.$MiDialog.Alert('请选择好友');
      }
    },
    onSearch() {
      this.searchList = [];
      this.friendList.forEach((item)=>{
        if(item.fname.indexOf(this.searchVal)>-1){
          this.searchList.push(item);
          this.$nextTick(()=>{
            this.$MiInitial.InitScroll(this.$el);
          })
        }
      });
    },
    toggleCheckbox(index) {
      if(!this.$refs.checkboxes[index].disabled){
        this.$refs.checkboxes[index].toggle();
      }
    },
    changeCheckbox() {
      this.groupArr = [];
      this.newcheckList.forEach((item)=>{
        if(this.checkList.indexOf(item)<0){
          this.groupArr.push(item);
        }
      });
    }
  }
}
</script>

<template>
  <div class="SetBox">
    <van-nav-bar
        title="新建群聊"
        left-text="取消"
        :right-text="'完成'+(checkList.length?'('+checkList.length+')':'')"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm('open')"
    />

    <van-search class="SearchFriend" placeholder="搜索" v-model="searchVal" @input="onSearch" />
    <van-cell-group class="SearchResult mb10">
      <van-cell class="BuildGroupTips" value="选择一个或多个好友发起聊天，你也可以不选" center v-show="!checkList.length" />
      <div class="CheckGroupList" v-show="checkList.length>0">
        <div ref="CheckListScroll">
          <ul>
            <li v-for="(item,index) in checkList" :key="index" @click="delCheck(index)">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.fname?item.fname.slice(0,2):'昵称'}}</b>
            </li>
          </ul>
        </div>
      </div>
    </van-cell-group>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <van-checkbox-group class="FriendList" v-model="checkList">
          <van-cell
              v-for="(item,index) in searchList"
              clickable
              :title="item.fname?item.fname:'昵称未设置'"
              :key="index"
              @click="toggleCheckbox(index)"
          >
            <van-checkbox class="mr15" slot="icon" :name="item" ref="checkboxes" checked-color="#06bf04" />
            <div class="head" slot="icon">
              <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
              <b v-else>{{item.fname?item.fname.slice(0,2):'昵称'}}</b>
            </div>
          </van-cell>
        </van-checkbox-group>
        <MiNoContent :msg="['你没有任何好友可以选择','快去添加好友吧']" v-if="friendList&&!friendList.length" />
      </div>
    </div>
    <van-popup class="GroupPass" v-model="showPass" :close-on-click-overlay="false">
      <h3>设置群密码</h3>
      <van-icon class="close" name="cross" @click="showPass=false,groupPass=''" />
      <van-password-input
          :value="groupPass"
          info="密码为 6 位数字"
          @focus="showKeyboard=true"
      />
      <van-button class="fl" type="primary" :disabled="isPassDisabled" @click="onClickConfirm('yes')">设置并建群</van-button>
      <van-button class="fr" type="default" @click="onClickConfirm('no')">不设置只建群</van-button>
    </van-popup>
    <van-number-keyboard
        :show="showKeyboard"
        :z-index="9999"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard=false"
    />
  </div>
</template>

<script>
export default {
  name: 'BuildGroup',
  components: {},
  props: {

  },
  data() {
    return {
      friendList: '',
      searchList: [],
      searchVal: '',
      checkList: [],
      winW: $(window).width(),
      groupArr: [],
      showPass: false,
      showKeyboard: false,
      groupPass: '',
      isPassDisabled: true,
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.$MiModel.FriendsList('',(data)=>{
      this.friendList = data.list||[];
      this.searchList = this.friendList;
      this.$MiInitial.InitScroll(this.$el);
    });
  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$el,$('.SearchFriend').outerHeight()+$('.SearchResult').outerHeight(true));
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
    this.CheckListScroll = new this.$MiBScroll(this.$refs.CheckListScroll,{
      scrollX: true,
      scrollY: false,
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
    onClickConfirm(step) {
      this.checkList.forEach((item)=>{
        this.groupArr.push(item.fid);
      })
      // this.showPass = true;
      // var password = ''
      // if(step=='yes'){
      //   password = this.groupPass;
      // }
      this.$MiModel.CreateGroups(this.groupArr.join(),'',(data)=>{
        this.$emit('triggerPopup',true);
      });
    },
    onSearch() {
      this.searchList = [];
      this.friendList.forEach((item)=>{
        if(item.fname.indexOf(this.searchVal)>-1){
          this.searchList.push(item);
        }
      });
    },
    toggleCheckbox(index) {
      this.$refs.checkboxes[index].toggle();
      this.$nextTick(()=>{
        var checkW = ($('.CheckGroupList li').outerWidth(true)||0)*this.checkList.length;
        if(checkW>this.winW){
          $('.CheckGroupList ul').width(checkW);
        }
      })
    },
    delCheck(index) {
      this.checkList.splice(index,1);
    },
    onInput(key) {
      this.groupPass = (this.groupPass + key).slice(0, 6);
      if(this.groupPass.length==6){
        this.isPassDisabled = false;
        this.showKeyboard = false;
      }
    },
    onDelete() {
      this.isPassDisabled = true;
      this.groupPass = this.groupPass.slice(0, this.groupPass.length - 1);
    },
  }
}
</script>

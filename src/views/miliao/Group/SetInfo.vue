<template>
  <div class="SetBox">
    <van-nav-bar
        :title="'设置'+(popupType=='pass'?'群密码':popupType=='header'?'群头像':popupType=='name'?'群名称':popupType=='manage'?'群管理员':popupType=='notsay'?'成员禁言':popupType=='notice'?'群公告':popupType=='introduce'?'群介绍':'我在本群的昵称')"
        left-text="取消"
        :right-text="'完成'+(checkList.length?'('+checkList.length+')':'')"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />
    <div class="FormBox" v-if="popupType=='header'">
      <div class="title">选择头像</div>
      <div class="Scroll-Wrap" ref="Scroll">
        <div class="Scroll-Con">
          <van-radio-group class="HeadList" v-model="groupInfo.header">
            <van-cell v-for="item in headData" :key="item" :border="false" clickable @click="groupInfo.header=item">
              <img :src="'./static/miliao/images/headimg/'+item">
              <van-radio :name="item" />
            </van-cell>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="FormBox" v-else-if="popupType=='pass'">
      <div class="title">群密码</div>
      <van-password-input
          :value="groupPass"
          info="请输入群密码 6 位数字"
          @focus="showKeyboard=true"
      />
      <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard=false"
      />
    </div>
    <div class="FormBox" v-else-if="popupType=='name'">
      <div class="title">新群名称</div>
      <van-field v-model="groupInfo.group_name" placeholder="请输入群名称" />
    </div>
    <div class="SetBox" v-else-if="popupType=='manage'||popupType=='notsay'">
      <van-search class="SearchFriend" placeholder="搜索" v-model="searchVal" @input="onSearch" />
      <van-cell-group class="AllMember mb10">
        <van-switch-cell v-model="isNotSay" title="全员禁言" size="26px" active-color="#44db5e" @change="onChangeSwitch" v-if="popupType=='notsay'" />
      </van-cell-group>
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
              <van-checkbox class="mr15" slot="icon" :name="item.id" ref="checkboxes" checked-color="#06bf04" />
              <div class="head" slot="icon">
                <img :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
                <b v-else>{{item.nickname?item.nickname.slice(0,2):'昵称'}}</b>
              </div>
            </van-cell>
          </van-checkbox-group>
          <MiNoContent :msg="['你没有任何成员可以选择']" v-if="memberList&&!memberList.length" />
        </div>
      </div>
    </div>
    <div class="FormBox" v-else-if="popupType=='notice'">
      <div class="title">群公告</div>
      <van-field
          v-model="groupInfo.notice"
          type="textarea"
          placeholder="请输入群公告"
          rows="5"
          :autosize="{maxHeight:220}"
          size="large"
      />
    </div>
    <div class="FormBox" v-else-if="popupType=='introduce'">
      <div class="title">群介绍</div>
      <van-field
          v-model="groupInfo.introduce"
          type="textarea"
          placeholder="请输入群介绍"
          rows="5"
          :autosize="{maxHeight:220}"
          size="large"
      />
    </div>
    <div class="FormBox" v-else-if="popupType=='nickname'">
      <div class="title">我在本群的昵称</div>
      <van-field v-model="groupInfo.nickname" placeholder="请输入你在本群的昵称" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetInfo',
  components: {},
  props: {
    popupType: {
      type: String,
      default: ''
    },
    gid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      groupPass: '',
      showKeyboard: false,
      groupInfo: JSON.parse(localStorage['GroupInfo']),
      headData: [
        '0A472675E5E5AF50.jpg',
        '5C5A53823438F2CD.jpg',
        '6a177290f93a82c9.jpg',
        '6f1e9c6698d41c02.jpg',
        '7debbc56b4b1e837.jpg',
        '9A9C9E1A719CE536.jpg',
        '072ad9cd79456bcf.jpg',
        '81e8ebc3eedde4e1.jpg',
        '775f5994a0568972.jpg',
        '831CA133362DE10D.jpg',
        '1362fa92410f5466.jpg',
        '367498B6A748D910.jpg',
        'a6e6f42b144b2954.jpg',
        'af43698834aecd89.jpg',
        'b6a3d95c75208113.jpg',
        'be83d242f47468f2.jpg',
        'C7BB5088540C8040.jpg',
        'C6021F3486D2B2DB.jpg',
        'EED50A5799E76E58.jpg',
        'F0E57CF931E45118.jpg',
        '1B6A214FF62BD91F.jpg',
        '1EF6FC3ACCBCD762.jpg',
        '02c5f9ba752fdfcf.jpg',
        '2ccae7bb8c67d793.jpg',
        '4da6df95555c869a.jpg',
        '4eda6ad3f56b4f17.jpg',
        '6F1A99A3D02A6DEC.jpg',
        '08cbc7e637921f36.jpg',
        '9f42ce18775ccc25.jpg',
        '82c23ac3f9aacda5.jpg',
        '779d89d0bf5536a7.jpg',
        '3154a95056dea33d.jpg',
        '3578E1EB410B49C7.jpg',
        '84238fb2538d1899.jpg',
        '274692371a941235.jpg',
        'b1f0c081f76388a5.jpg',
        'C707188A6E10AED4.jpg',
        'd86c69601267c45a.jpg',
        'd9452aa12dee4037.jpg',
        'f9276d61473ac65d.jpg'
      ],
      memberList: '',
      searchList: [],
      searchVal: '',
      checkList: [],
      isNotSay: false
    }
  },
  computed: {},
  watch: {

  },
  created() {
    if(this.popupType=='manage'||this.popupType=='notsay'){
      this.$MiModel.GroupsMember(this.gid,(data)=>{
        if(this.popupType=='manage'){
          this.memberList = data.list?data.list.filter(item => item.user_type!=1):[];
          this.memberList.forEach((item)=>{
            if(item.user_type==4){
              this.checkList.push(item.id);
            }
          });
        }
        if(this.popupType=='notsay'){
          this.memberList = data.list?data.list.filter(item => item.user_type!=1&&item.user_type!=4):[];
          this.memberList.forEach((item)=>{
            if(item.state==6){
              this.checkList.push(item.id);
            }
          });
        }
        this.searchList = this.memberList;
        this.$nextTick(()=>{
          this.$MiInitial.InitScrollWrap(this.$el,$('.SearchFriend').outerHeight(true)+($('.AllMember').outerHeight(true)||0));
        })
      });
    }
  },
  mounted() {
    if(this.popupType=='manage'||this.popupType=='notsay'){
      this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
        click: true
      });
    }
  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickCancel() {
      this.$emit('triggerPopup');
      this.groupInfo = JSON.parse(localStorage['GroupInfo']);
      this.groupPass = '';
    },
    onClickConfirm() {
      var json = '';
      switch(this.popupType){
        case 'pass':
          if(this.groupPass.length<6){
            this.$toast('群密码最少6位数字');
            return;
          }
          json = this.groupPass?{password: this.groupPass}:'';
          break;
        case 'header':
          json = this.groupInfo.header?{header: this.groupInfo.header}:'';
          break;
        case 'name':
          json = this.groupInfo.group_name?{group_name: this.groupInfo.group_name}:'';
          break;
        case 'manage':
          json = {setGroupAdmin: this.checkList.length?this.checkList.join():'none'};
          break;
        case 'notsay':
          json = {notsay_arr: this.isNotSay?'all':(this.checkList.length?this.checkList.join():'none')};
          break;
        case 'notice':
          json = this.groupInfo.notice?{notice: this.groupInfo.notice}:'';
          break;
        case 'introduce':
          json = this.groupInfo.introduce?{introduce: this.groupInfo.introduce}:'';
          break;
        case 'nickname':
          json = this.groupInfo.nickname?{nickname: this.groupInfo.nickname}:'';
          break;
      }
      if(json){
        json.gid = this.gid;
        this.$MiModel.SetGroupsInfo(json,(data)=>{
          if(this.popupType=='manage'||this.popupType=='notsay'){
            this.$emit('triggerPopup');
          }else if(this.popupType=='pass'){
            this.groupPass = '';
            this.$emit('triggerPopup');
          }else{
            this.$emit('triggerPopup',true);
          }
        });
      }else{
        this.$emit('triggerPopup');
      }
    },
    onSearch() {
      this.searchList = [];
      this.memberList.forEach((item)=>{
        if(item.nickname.indexOf(this.searchVal)>-1){
          this.searchList.push(item);
        }
      });
      this.$nextTick(()=>{
        this.$MiInitial.InitScroll(this.$el);
      })
    },
    toggleCheckbox(index) {
      this.$refs.checkboxes[index].toggle();
      if(this.checkList.length<this.memberList.length){
        this.isNotSay = false;
      }
      if(this.checkList.length==this.memberList.length){
        this.isNotSay = true;
      }
    },
    onChangeSwitch(state) {
      if(state){
        this.searchVal = '';
        this.onSearch();
        this.searchList.forEach((item)=>{
          this.checkList.push(item.id);
        });
      }else{
        this.checkList = [];
      }
    },
    initScrollWrap(){
      this.$MiInitial.InitScrollWrap(this.$el,$('.FormBox .title').outerHeight());
      this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
        click: true
      });
    },
    onInput(key) {
      this.groupPass = (this.groupPass + key).slice(0, 6);
      if(this.groupPass.length==6){
        this.showKeyboard = false;
      }
    },
    onDelete() {
      this.groupPass = this.groupPass.slice(0, this.groupPass.length - 1);
    },
  }
}
</script>

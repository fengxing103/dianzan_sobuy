<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        :border="false"
        left-arrow
        @click-left="onClickBack"
    >
      <ul slot="title" class="NavTab">
        <li :class="{active:tabActive=='friend'}" @click="onChangeTab('friend')">添加密友</li>
        <li :class="{active:tabActive=='group'}" @click="onChangeTab('group')">添加密群</li>
      </ul>
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box AddSearch">
          <van-search :placeholder="tabActive=='friend'?'手机号/密聊号':'密聊群号'" v-model="searchId" @search="onSearch" @input="onInput" />
          <van-cell class="FindVal" :title="'查找：'+searchId" @click="onSearch" v-show="showFind">
            <div class="icon" slot="icon">
              <img :src="'./static/miliao/icon/icon-friend-add-w.svg'" height="25">
            </div>
          </van-cell>
          <div class="UserQRcode">
            <van-cell class="Info" :title="userInfo.nickname" :label="'密聊号：'+userInfo.mid" :border="false" size="large" @click="$MiUtil.CopyText('IosCopy','AppCopy')">
              <div class="head-img" slot="icon">
                <img :src="'./static/miliao/images/headimg/'+userInfo.header" width="100%" v-if="userInfo.header">
                <b v-else>{{userInfo.nickname.slice(0,2)}}</b>
              </div>
            </van-cell>
            <!-- <div class="Code">
              <img :src="qrCode" width="100%">
              <p>使用密聊扫一扫功能<br>扫描上面的二维码图案，加我密聊</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <input type="text" id="AppCopy" :value="userInfo.mid" readonly>
    <span id="IosCopy">{{userInfo.mid}}</span>
  </div>
</template>

<script>
export default {
  name: 'AddFriend',
  components: {},
  props: {

  },
  data() {
    return {
      userInfo: {
        header: localStorage['userHeader'],
        nickname: localStorage['userNickName'],
        mid: localStorage['userMid']
      },
      searchId: '',
      showFind: false,
      tabActive: this.$route.query.type,
      qrCode: localStorage['userQRCode']
    }
  },
  computed: {},
  watch: {

  },
  created() {

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
      this.$router.push({name:'miliao'});
      this.$route.params.isBack = true;
    },
    onChangeTab(type) {
      this.$router.push({name: 'addFG',query: {type:type}});
      this.tabActive = type;
      this.searchId = '';
      this.showFind = '';
    },
    onSearch() {
      if(!this.searchId) return;
      if(this.tabActive=='friend'){
        this.$MiModel.SoMi(this.searchId,(data)=>{
          if(data.code==1){
            this.$router.push({name: 'friendInfo',query: {mid: data.info.mid}});
          }else{
            this.$MiDialog.Alert(data.code_dec);
          }
        });
      }
      if(this.tabActive=='group'){
        this.$MiModel.SoGroups(this.searchId,(data)=>{
          if(data.code==1){
            this.$router.push({name: 'groupInfo',query: {gid: data.info.gid}});
          }else{
            this.$MiDialog.Alert(data.code_dec);
          }
        });
      }
    },
    onInput() {
      this.searchId = this.searchId.toUpperCase();
      if(this.searchId && !this.showFind){
        this.showFind = true;
      }
      if(this.searchId.length<1){
        this.showFind = false;
      }
    }
  }
}
</script>

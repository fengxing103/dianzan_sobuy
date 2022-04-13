<template>
  <div class="Main Background">
    <van-nav-bar
        class="NavBar"
        title="个人信息"
        :border="false"
        @click-left="onClickBack"
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
    </van-nav-bar>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box UserInfo">
          <van-cell class="Head" title="头像" size="large" is-link @click="showSet=true,setType='header'">
            <div class="head-img">
              <img :src="'./static/miliao/images/headimg/'+MiUserInfo.header" width="100%" v-if="MiUserInfo.header">
              <b v-else>{{MiUserInfo.nickname.slice(0,2)}}</b>
            </div>
          </van-cell>
          <!-- <van-cell title="设置密码" size="large" is-link @click="showSet=true,setType='newpass'" /> -->
          <van-cell title="昵称" :value="MiUserInfo.nickname" size="large" is-link @click="showSet=true,setType='nickname'" />
          <van-cell title="密聊号" :value="MiUserInfo.mid" size="large" @click="$MiUtil.CopyText('IosCopy','AppCopy')">
            <van-icon slot="right-icon" name="none" class="van-cell__right-icon" />
          </van-cell>
          <van-cell title="性别" :value="MiUserInfo.sex?MiUserInfo.sex:'保密'" size="large" is-link @click="showSet=true,setType='sex'" />
          <van-cell title="地区" :value="MiUserInfo.area?MiUserInfo.area:'未设置'" size="large" is-link @click="showArea=true" />
          <van-cell title="个性签名" :value="MiUserInfo.autograph" size="large" is-link @click="showSet=true,setType='autograph'" />
        </div>
      </div>
    </div>
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" :columns-num="2" title="选择地区" @cancel="showArea=false" @confirm="getArea" />
    </van-popup>
    <van-popup class="SetPopup" v-model="showSet" position="bottom" :overlay="false" :lock-scroll="false">
      <SetInfo ref="SetInfo" :setType="setType" @triggerPopup="triggerPopup" v-if="setType" />
    </van-popup>
    <input type="text" id="AppCopy" :value="MiUserInfo.mid" readonly>
    <span id="IosCopy">{{MiUserInfo.mid}}</span>
  </div>
</template>

<script>
import SetInfo from './SetInfo'
import Area from '@/common/miliao/Area'
export default {
  name: 'UserInfo',
  components: {
    SetInfo
  },
  props: {},
  data() {
    return {
      showSet: false,
      setType: '',
      areaList: Area,
      showArea: false
    }
  },
  computed: {
  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$el);
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      probeType: 1,
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
    triggerPopup() {
      this.showSet = false;
      this.showArea = false;
      this.setType = '';
    },
    initPopup() {

    },
    getArea(area) {
      this.$MiModel.SetUserInfo({area:area[0].name+' '+area[1].name},(data)=>{
        if(data){
          this.triggerPopup();
        }
      });
    }
  }
}
</script>

<template>
  <div class="Main Background">
    <transition :name="animateType">
      <div class="Animate" v-if="!showSet">
        <van-nav-bar
            class="NavBar"
            title="设置"
            :border="false"
            @click-left="onClickBack"
        >
          <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
        </van-nav-bar>
        <div class="Scroll-Wrap" ref="Scroll">
          <div class="Scroll-Con">
            <div class="UserInfo">
              <van-cell title="新消息通知" size="large" is-link @click="showSet=true,setType='newmsg',animateType='open'" />
              <!-- <van-cell title="隐私设置" size="large" is-link @click="showSet=true,setType='private',animateType='open'" /> -->
              <van-cell title="存储空间" size="large" is-link @click="showSet=true,setType='storage',animateType='open'" />
            </div>
          </div>
        </div>
      </div>
      <SetSetting :setType="setType" @onCloseSet="onCloseSet" v-else />
    </transition>
  </div>
</template>

<script>
import SetSetting from './SetSetting'
export default {
  name: 'Setting',
  components: {
    SetSetting
  },
  props: {},
  data() {
    return {
      showSet: false,
      setType: '',
      animateType: 'open',
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
      this.$router.go(-1);
      this.$route.params.isBack = true;
    },
    onCloseSet() {
      this.animateType = 'close';
      this.showSet = false;
    },
    loginOut() {
      this.$MiModel.Logout((data)=>{
        this.$router.replace('/miliao');
      });
    }
  }
}
</script>

<template>
  <div class="Scroll-Wrap" ref="Scroll">
    <div class="Scroll-Con">
      <div class="Box UserCenter">
        <van-cell class="Info" :title="userInfo.nickname" :label="'密聊号：'+userInfo.mid" :border="false" size="large">
          <div class="head-img" slot="icon">
            <img :src="'./static/miliao/images/headimg/'+userInfo.header" width="100%" v-if="userInfo.header">
            <b v-else>{{userInfo.nickname.slice(0,2)}}</b>
          </div>
        </van-cell>
        <van-cell class="Setting" title="个人信息" size="large" is-link to="/miliao/userInfo">
          <van-icon slot="icon" name="manager" color="#1caaff" size="22px" style="margin-right: 10px;" />
        </van-cell>
        <van-cell class="Setting" title="设置" :border="false" size="large" is-link to="/miliao/userSetting">
          <van-icon slot="icon" class-prefix="my-icon" name="setting" color="#1caaff" />
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  components: {},
  props: {},
  data() {
    return {

    }
  },
  computed: {
    userInfo() {
      return this.MiUserInfo || {nickname:'昵称未设置',mid:''};
    }
  },
  watch: {},
  created() {
    this.$MiModel.GetUserInfo();
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

  }
}
</script>
<style scoped>
.money .van-cell__value{
  font-size: 18px;
  color: #1caaff
}
.money .van-cell__value em{
  font-size: 14px;
}
</style>
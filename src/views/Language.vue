<template>
  <div class="Site PageBox">
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('language')"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox">


     
      <!-- <van-cell :icon="`./static/icon/zh-FT.png`" title="繁体中文" is-link @click="changeLanguage('zh-TW')" v-if="InitData.setting.ft==1" /> -->

      <van-cell :icon="`./static/icon/en-US.png`" title="English" is-link @click="changeLanguage('en-US')" v-if="InitData.setting.en==1" />

    <!-- <van-cell :icon="`./static/icon/zh-CN.png`" title="简体中文" is-link @click="changeLanguage('zh-CN')" v-if="InitData.setting.cn==1" /> -->

   <!--   <van-cell :icon="`./static/icon/id-ID.png`" title="IndonesiaName" is-link @click="changeLanguage('id-ID')" v-if="InitData.setting.yny==1" />
      <van-cell :icon="`./static/icon/yd-YD.png`" title="हिंदीName" is-link @click="changeLanguage('yd-YD')" v-if="InitData.setting.yd==1" />
      <van-cell :icon="`./static/icon/zh-YN.png`" title="ViệtName" is-link @click="changeLanguage('vi-VN')" v-if="InitData.setting.vi==1" />

      <van-cell :icon="`./static/icon/zh-XBY.png`" title="Español" is-link @click="changeLanguage('es-ES')" v-if="InitData.setting.es==1" />

      <van-cell :icon="`./static/icon/zh-RY.png`" title="日本語" is-link @click="changeLanguage('ja-JP')" v-if="InitData.setting.jp==1" />
      <van-cell :icon="`./static/icon/th-TH.png`" title="ภาษาไทย" is-link @click="changeLanguage('th-TH')" v-if="InitData.setting.ty==1" /> -->


    </div>
  </div>
</template>
<script>
export default {
  name: 'Language',
  components: {

  },
  props: {},
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    
  },
  mounted() {
    
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    changeLanguage(lan) {
      this.$SetLanguage(lan)
      this.$Model.GetBackData()
      this.$router.go(-1)
    },
  }
}
</script>
<style scoped>
.van-cell__left-icon{
  height: auto;
  line-height: 1;
}
</style>
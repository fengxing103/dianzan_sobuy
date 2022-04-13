<template>
  <div class="Main">
    <van-nav-bar
        fixed
        :border="false"
        :title="$t('help[0]')"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="PageBox">
      <div class="ScrollBox">
        <van-cell size="large" :title="item.title" is-link v-for="item in InitData.helpList" :key="item.id" @click="openShow(item)" />
        <van-empty :description="$t('help[1]')" v-if="!InitData.helpList.length" />
      </div>
    </div>
    <van-popup v-model="showCon" position="bottom" closeable close-on-popstate  style="width: 100%;height: 100%;background-color:rgb(14, 21, 38);color:#fff;">
      <div class="ScrollBox" style="padding: 16px 20px;">
        <h3 style="text-align: center;margin-bottom: 20px">{{infoData.title}}</h3>
        <div class="Content" style="text-align: justify;" v-html="infoData.content"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Help',
  components: {
  },
  props: [],
  data() {
    return {
      showCon: false,
      infoData: '',
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
    openShow(data) {
      this.showCon = true
      this.infoData = data
    }
  }
}
</script>
<style scoped>
.Content>>>img{
  max-width: 100%;
}
</style>
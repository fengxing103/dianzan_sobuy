<template>
  <div class="Site PageBox" v-if="articleId">
    <van-nav-bar
      fixed
      :border="false"
      :title="showInfo.title"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox" style="background-color: white;">
      <div class="Content" style="padding: 10px 20px 20px;" v-html="showInfo.content"></div>
    </div>
  </div>
  <div class="Site PageBox" v-else>
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('home.menu[1]')"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox"  >
      <van-cell size="large" :title="item.title" is-link v-for="item in InitData.videovTutorial" :key="item.id" :to="`/article/video/${item.id}`" />
      <van-empty :description="$t('help[1]')" v-if="!InitData.videovTutorial.length" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  components: {
  },
  props: ['articleType','articleId'],
  data() {
    return {
      showInfo: {
        title: ''
      },
    }
  },
  computed: {

  },
  watch: {
    $route(){
      if(this.articleType=='video'){
        this.showInfo = this.InitData.videovTutorial.find(item=>item.id==this.articleId)
      }
      if(this.articleType=='help'){
        this.showInfo = this.InitData.helpList.find(item=>item.id==this.articleId)
      }
      if(this.articleType=='notice'){
        this.showInfo = this.InitData.noticelist.find(item=>item.id==this.articleId)
      }
    }
  },
  created() {
    if(this.articleType=='video'){
      this.showInfo = this.InitData.videovTutorial.find(item=>item.id==this.articleId)
    }
    if(this.articleType=='help'){
      this.showInfo = this.InitData.helpList.find(item=>item.id==this.articleId)
    }
    if(this.articleType=='notice'){
      this.showInfo = this.InitData.noticelist.find(item=>item.id==this.articleId)
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    
  }
}
</script>
<style scoped>
.Content>>>img{
  max-width: 100%;
}
</style>
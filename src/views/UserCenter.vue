<template>
  <div class="Main">
    <van-nav-bar
        fixed
        :border="false"
        :title="navBarTitle"
        :left-arrow="$route.name=='user'?false:true"
        :right-text="rightText"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        v-if="$route.name!='user'&&$route.name!='myTask'"
        :style="$route.name=='promote'?'background:transparent':''"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  components: {
  },
  props: [],
  data() {
    return {
      rightText: '',
      navBarTitle: '',
    }
  },
  computed: {

  },
  watch: {
    $route(to,from){
      switch(to.name) {
        case 'recharge':
          this.rightText = this.$t('recharge.default[2]');
          break;
        case 'postRecord':
          this.rightText = 'release';
          break;
        case 'newLc':
          this.rightText = 'History';
          break;
        default:
          this.rightText = '';
      }
    }
  },
  created() {
    switch(this.$route.name) {
      case 'recharge':
        this.rightText = this.$t('recharge.default[2]');
        break;
      case 'postRecord':
        this.rightText = 'release';
        break;
      case 'newLc':
        this.rightText = 'History';
        break;
      default:
        this.rightText = '';
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onClickLeft() {
      switch(this.$route.name) {
        case 'taskRecord':
        case 'postRecord':
        case 'auditRecord':
          this.$router.push('/user')
          break;
        case 'recharge':
          if(this.$children[1].showPrice){
            this.$children[1].showPrice = false
          }else{
            this.$router.go(-1)
          }
          break;
        default:
          this.$router.go(-1)
      }
    },
    onClickRight() {
      if(this.$route.name=='recharge'){
        this.$router.push('/user/wallet')
      }
      if(this.$route.name=='postRecord'){
        this.$router.push('/user/postTask')
      }
      if(this.$route.name=='newLc'){
        this.$router.push('/user/newlist')
      }
    }
  }
}
</script>
<style scoped>

</style>
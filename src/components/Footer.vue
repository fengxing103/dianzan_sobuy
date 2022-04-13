<template>
  <van-tabbar
      v-model="tabbarIndex"
      safe-area-inset-bottom
      :border="false"
      inactive-color="#fff"
      z-index="99"
      :fixed="false"
  >
    <van-tabbar-item to="/" name="home">
      <img slot="icon" slot-scope="props" :src="props.active ? icon_nav1.active : icon_nav1.normal" size="30">
      {{$t('home.tabBar[0]')}}
    </van-tabbar-item>
    <van-tabbar-item to="/mytask" name="task">
      <img slot="icon" slot-scope="props" :src="props.active ? icon_nav2.active : icon_nav2.normal" />
      {{$t('home.tabBar[1]')}}
    </van-tabbar-item>
    <van-tabbar-item to="/vip" name="vip">
      <img slot="icon" slot-scope="props" :src="props.active ? icon_nav4.active : icon_nav4.normal" />
      {{$t('home.tabBar[2]')}}
    </van-tabbar-item>
    <van-tabbar-item to="/user/teamReport" name="TeamReport">
      <img slot="icon" slot-scope="props" :src="props.active ? icon_nav3.active : icon_nav3.normal" />
      {{$t('home.tabBar[3]')}}
    </van-tabbar-item>
    <van-tabbar-item to="/user" name="user">
      <img slot="icon" slot-scope="props" :src="props.active ? icon_nav5.active : icon_nav5.normal" />
      {{$t('home.tabBar[4]')}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  components: {

  },
  props: [],
  data() {
    return {
      tabbarIndex: this.$route.matched[0].meta.active,
      icon_nav1: {
        normal: "./static/icon/index.png",
        active: "./static/icon/index_select.png"
      },
      icon_nav2: {
        normal: "./static/icon/task.png",
        active: "./static/icon/task_select.png"
      },
      icon_nav3: {
        normal: "./static/icon/team.png",
        active: "./static/icon/team_select.png"
      },
      icon_nav4: {
        normal: "./static/icon/vip.png",
        active: "./static/icon/vip_select.png"
      },
      icon_nav5: {
        normal: "./static/icon/user.png",
        active: "./static/icon/user_select.png"
      },
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

  }
}
</script>


<style scoped>
.van-tabbar {
  height: 52px;
  background: #0e1526;
}
.van-tabbar-item__icon {
  font-size: 24px;
}
.van-tabbar-item__icon img{
  height: 24px;
}
.van-tabbar-item__icon .addTask{
  height: 72px;
  margin: -38px 0 -10px;
}
.van-tabbar-item--active{
  background: linear-gradient(to right, #2ddaff, #0049e7);
  -webkit-background-clip: text;
}
</style>
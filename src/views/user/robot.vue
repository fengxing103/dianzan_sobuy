<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <div class="Robot">
      	
      	
      	
<img class="main_img img-hover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598761754018&di=9329f4ee9ecae1358c7052b5b91aeda5&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1599042042%2C1018978572%26fm%3D214%26gp%3D0.jpg" style="background-color: rgb(143, 163, 167); width: 100%;">

        <h2 style="font-size:19px;color:#FF8C00;font-weight: 800">服务说明</h2> 
        <p  style="font-size:14px;color:#FF0000;font-weight: 600">1.开通管家服务费用为99/月,次日生效</p>
        <p  style="font-size:14px;color:#FF0000;font-weight: 600">2.生效以后将自动替您完成每日任务,每天早上8点之前自动完成当天任务并结算收益</p>
        <van-button class="mt15" type="danger" block style="font-size: 16px;" :disabled="UserInfo.is_housekeeper==1?true:false" @click="onSubmit">开通云管家</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Robot',
  components: {
  },
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = '云管家'
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onSubmit() {
      this.$Model.SetUserInfo({is_housekeeper:1})
    }
  }
}
</script>
<style scoped>
.Robot{
  padding: 16px;
}
.Robot h2{
  text-align: center;
  margin-bottom: 10px;
}
.Robot p{
  margin-top: 5px;
}
</style>
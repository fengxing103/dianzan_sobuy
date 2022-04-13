<template>
  <div class="Site PageBox">
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('serviceCenter[0]')"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox">
      <van-cell class="VipService" is-link  :title="$t('serviceCenter[1]')" :label="$t('serviceCenter[2]')"  @click="tourl(1)"  >
        <template #icon>
          <img :src="`./static/icon/msg.png`" width="50">
        </template>
      </van-cell>
	  <van-cell class="VipService" is-link title="Hi, telegram customer service" :label="$t('serviceCenter[2]')"  @click="tourl(2)">
	    <template #icon>
	      <img :src="`./static/icon/telegram.png`" width="50">
	    </template>
	  </van-cell>
	  <van-cell class="VipService" is-link title="Hi, whatsapp customer service" :label="$t('serviceCenter[2]')"  @click="tourl(3)">
	    <template #icon>
	      <img :src="`./static/icon/whatsapp.png`" width="50">
	    </template>
	  </van-cell>
      <van-cell-group :title="$t('serviceCenter[3]')" v-if="InitData.serviceList&&InitData.serviceList.length">
        <van-grid :column-num="3" :gutter="15" :border="false" icon-size="36">
          <van-grid-item :icon="InitData.setting.q_server_name+item.cover_img" :text="item.title" @click="openService(item.url)" v-for="item in InitData.serviceList" :key="item.id" />
        </van-grid>
      </van-cell-group>
      <van-cell-group :title="$t('help[0]')" v-if="InitData.helpList&&InitData.helpList.length">
        <van-cell :title="item.title" is-link v-for="item in InitData.helpList" :key="item.id" :to="`/article/help/${item.id}`" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import axios from '../common/Axios'
export default {
  name: 'ServiceCenter',
  components: {

  },
  props: [],
  data() {
    return {
		kefu:''
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
	  var that = this;
  axios.post('https://abc.2225192.com/api/line/getservice',
  {
	  code:1,
  }
  ).then(function(res){
	  console.log(res.data)
	  that.kefu = res.data
  });
  },
  mounted() {
	
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    openService(url){
      const urlArr = url.split(",")
      this.$Util.OpenUrl(urlArr[this.getRandom(urlArr.length)])
    },
    getRandom(len) {
      return Math.floor(Math.random()*(len) + 0);
    },
	tourl(type){
		// console.log(this.kefu.service_url.service_url);
		// return false;
		if(type==1){
			window.open(this.kefu.service_url.service_url)
		}else if(type == 2){
			window.open(this.kefu.telegram.telegram)
		}else{
			window.open(this.kefu.whatsapp.whatsapp)
		}
	}
  }
}
</script>
<style scoped>
.VipService .van-cell__title{
  margin-left: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}
.VipService .van-cell__label{
  font-weight: 400;
}
.van-cell-group{
  background: transparent;
  margin-bottom: 16px;
}
.van-cell-group__title{
  font-size: 16px;
  color: #fff;
  font-weight: 600;
}
.van-grid-item>>>.van-grid-item__content{
  padding: 25px 8px;
  border-radius: 5px;
  text-align: center;
}
.van-grid-item:nth-of-type(1)>>>.van-grid-item__content{
  background-color: #fe424d;
}
.van-grid-item:nth-of-type(2)>>>.van-grid-item__content{
  background-color: #f2c75a;
}
.van-grid-item:nth-of-type(3)>>>.van-grid-item__content{
  background-color: #34dc97;
}
.van-grid-item>>>.van-grid-item__text{
  color: #fff;
  font-size: 15px;
  line-height: 1;
}
</style>
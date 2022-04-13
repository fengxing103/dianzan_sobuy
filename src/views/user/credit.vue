<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <canvas class="Gauge" canvas-id="canvasGauge" id="canvasGauge" :width="$domWidth" height="230"></canvas>
      <van-cell class="title" icon="info" :title="$t('credit[1]')" :value="$t('credit[2]')" is-link :border="false" @click="openList" />
      <div class="info" style="padding: 0 16px 16px;" v-html="$t('credit[3]')">

      </div>
    </div>
    <van-popup v-model="showList" close-on-popstate position="right" closeable style="width: 100%;height: 100%;">
      <div class="ScrollBox">
        <h4 style="text-align: center;line-height: 46px">{{$t('credit[2]')}}</h4>
        <van-cell :title="item.remarks" :label="item.time" :value="item.credit" v-for="(item,index) in listData" :key="index" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import uCharts from '@/assets/js/u-charts.js'
export default {
  name: 'Credit',
  components: {

  },
  props: [],
  data() {
    return {
      showList: false,
      listData: '',
      canvaGauge: null,
      chartData: {
        categories: [
          {
            value: 0.5,
            color: '#1890ff'
          },
          {
            value: 0.8,
            color: '#2fc25b'
          },
          {
            value: 1,
            color: '#f04864'
          }
        ],
        series: [{
          name: this.$t('credit[4]'),
          data: 0
        }]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('credit[0]')
    this.chartData.series[0].data = this.UserInfo.credit/100
  },
  mounted() {
    this.canvaGauge = new uCharts({
      $this: this,
      canvasId: 'canvasGauge',
      type: 'gauge',
      legend: false,
      fontSize: 12,
      title: {
        name: this.UserInfo.credit,
        color: this.chartData.categories[1].color,
        fontSize: 26,
        offsetY:50,
      },
      subtitle: {
        name: this.chartData.series[0].name,
        color: '#bbb',
        fontSize: 15,
        offsetY:-50,
      },
      extra: {
        gauge:{
          type:'default',
          width: 15,
          startAngle:0.75,
          endAngle:0.25,
          startNumber:0,
          endNumber:100,
          splitLine:{
            fixRadius:0,
            splitNumber:10,
            width: 15,
            childNumber:5,
            childWidth: 7,
          },
          pointer:{
            width: 15,
            color:'auto'
          }
        }
      },
      pixelRatio:1,
      categories: this.chartData.categories,
      series: this.chartData.series,
      animation: true,
      width: this.$domWidth,
      height: 250,
      dataLabel: true,
    });
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    openList() {
      this.$Model.CreditList(data=>{
        if(data.code==1){
          this.showList = true
          this.listData = data.info
        }else{
          this.$Dialog.Toast(this.$t('credit[5]'))
        }
      })
    }
  }
}
</script>
<style scoped>
.title .van-cell__left-icon{
  color: #4087f1;
}
.title .van-cell__title{
  color: #4087f1;
  font-weight: 600;
}
.Gauge{
  margin-top: 15px;
}
.info{
  margin-top: 10px;
}
.info p{
  margin-bottom: 5px;
  color: #bbb;
}
</style>
<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-cell class="mt15" icon="cluster" :title="`${$t('dayReport[1]')}${InitData.currency}${reportData.myTotalProfit}`" :value="$Util.DateFormat('YY-MM-DD',new Date())" />
      <van-grid class="MyEarnings" :column-num="2" :border="false" gutter="1">
        <van-grid-item>
          <template #icon>
            {{$t('dayReport[2]')}}({{$t('dayReport[6]')}})
          </template>
          <template #text>
            {{reportData.myTaskFinish}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('dayReport[3]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{reportData.myTaskProfit}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('dayReport[4]')}}({{$t('dayReport[6]')}})
          </template>
          <template #text>
            {{reportData.branchTaskFinish}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('dayReport[5]')}}({{InitData.currency}}) 
          </template>
          <template #text>
            {{reportData.branchTaskProfit}}
          </template>
        </van-grid-item>
      </van-grid>
      <van-cell class="mt10" :border="false" icon="cluster" :title="$t('dayReport[0]')" :value="$t('dayReport[7]')" />
      <table width="100%">
        <thead>
          <tr>
            <th>{{$t('dayReport[8]')}}</th>
            <th>{{$t('dayReport[9]')}}</th>
            <th>{{$t('dayReport[10]')}}</th>
            <th>{{$t('dayReport[11]')}}</th>
            <th>{{$t('dayReport[12]')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in reportData.daily" :key="index">
            <td>{{item.count}}</td>
            <td><em>{{item.task}}</em></td>
            <td>{{item.branch}}</td>
            <td><em>{{item.consume}}</em></td>
            <td>{{item.date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayReport',
  components: {
  },
  props: [],
  data() {
    return {
      reportData: {
        myTotalProfit: '0.00',
        myTaskFinish: '0',
        myTaskProfit: '0.00',
        branchTaskFinish: '0',
        branchTaskProfit: '0.00',
        daily: []
      },
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('dayReport[0]')
    this.$Model.DailyReport(data=>{
      if(data.code==1){
        this.reportData = data.data
      }
    })
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
table{
  background-color: #151d31;
  text-align: center;
  margin-bottom: 20px;
}
table tr th{
  padding: 6px 5px;
  background-color: #0e1526;
  color: #bbb;
}
table tr td{
  border: 1px #0e1526 solid;
  padding: 10px 5px;
  color: #fff;
}
table tr td:first-child,table tr td:last-child{
  border-left: 0;
}
table tr td em{
  color: #4087f1;
}
.van-cell .van-cell__left-icon{
  color: #4087f1;
}
.van-cell .van-cell__title{
  color: #4087f1;
  font-weight: 600;
}
</style>
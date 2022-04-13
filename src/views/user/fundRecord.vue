<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-tabs :ellipsis="false" :border="false" color="rgb(254, 92, 68)" title-active-color="rgb(254, 92, 68)" background="#ffffff" title-inactive-color="rgb(0, 0, 0)" line-width="60" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in taskTabs" :title="item.text" :key="item.state" style="padding: 0 12px;">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="isLoad"
              :finished="isFinished"
              :finished-text="listData[tabsIndex].length?$t('vanPull[0]'):$t('vanPull[1]')"
              @load="onLoad"
              :class="{Empty:!listData[tabsIndex].length}"
            >
              <div v-if="tabsIndex==2">
                <van-cell class="FundItem" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.dan" :to="`/user/recharge/${item.dan}`" style="background-color: white;color: #000000;">
                  <div :class="`icon tag${tabsIndex}`" slot="icon">
                    {{$t('fundRecord.default[3]')}}
                  </div>
                  <template #title>
                    <div style="color: #000000;">
                      <span>{{item.dan}}</span>
                      <span>{{item.adddate}}</span>
                    </div>
                    <div>
                      <span class="money" style="color: #000000;">+{{Number(item.money)}}</span>
                      <span>{{item.status_desc}}</span>
                    </div>
                  </template>
                </van-cell>
              </div>
              <div v-else>
                <van-cell class="FundItem" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.order_id" style="background-color: white;color: #000000;"> 
                  <div :class="`icon tag${tabsIndex}`" slot="icon">
                    {{tabsIndex==0?$t('fundRecord.default[4]'):$t('fundRecord.default[5]')}}
                  </div>
                  <template #title>
                    <div style="color: #000000;">
                      <span>{{item.trade_number}}</span>
                      <span>{{item.trade_time}}</span>
                    </div>
                    <div>
                      <span class="money" style="color: #000000;">{{item.jj}}{{item.trade_amount}}</span>
                      <span>{{item.remarks}}</span>
                    </div>
                  </template>
                </van-cell>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FundRecord',
  components: {
  },
  props: ['fundState'],
  data() {
    return {
      listData: '',
      isLoad: false,
      isFinished: false,
      isRefresh: false,
      pageNo: 1,
      tabsState: 4,
      tabsIndex: 0,
      taskTabs: [
        {state: 4, text: this.$t('fundRecord.tabs[0]')},
        {state: 3, text: this.$t('fundRecord.tabs[1]')},
        {state: 1, text: this.$t('fundRecord.tabs[2]')}
      ],
    }
  },
  computed: {

  },
  watch: {
    $route(){
      if(this.fundState){
        this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
        this.tabsState = this.fundState
      }else{
        this.tabsState = 4
        this.tabsIndex = 0
      }
      this.getListData('init')
    }
  },
  created() {
    this.listData = this.taskTabs.flatMap(item=>[''])
    if(this.fundState){
      this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
      this.tabsState = this.fundState
    }
    switch(this.fundState){
      case '3':
        this.$parent.navBarTitle = this.$t('fundRecord.default[0]')
        break;
      case '1':
        this.$parent.navBarTitle = this.$t('fundRecord.default[1]')
        break;
      default:
        this.$parent.navBarTitle = this.$t('fundRecord.default[2]')
    }
    this.getListData('init')
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    onLoad() {
      this.getListData('load')
    },
    changeTabs(index) {
      this.tabsState = this.taskTabs[index].state
      this.getListData('init')
      // this.$router.push(`/user/fundRecord/${this.tabsState}`)
      switch(this.tabsState){
        case 3:
          this.$parent.navBarTitle = this.$t('fundRecord.default[0]')
          break;
        case 1:
          this.$parent.navBarTitle = this.$t('fundRecord.default[1]')
          break;
        default:
          this.$parent.navBarTitle = this.$t('fundRecord.default[2]')
      }
    },
    getListData(type) {
      this.isLoad = true
      this.isRefresh = false
      if(type=='load'){
        this.pageNo+=1
      }else{
        this.pageNo = 1
        this.isFinished = false
      }
      if(this.tabsIndex==2){
        this.$Model.GetRechargeRecord({state: 0,page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            if(type=='load'){
              this.listData[this.tabsIndex] = this.listData[this.tabsIndex].concat(data.info);
            }else{
              this.listData[this.tabsIndex] = data.info
            }
            if(this.pageNo==data.data_total_page){
              this.isFinished = true
            }else{
              this.isFinished = false
            }
          }else{
            this.listData[this.tabsIndex] = ''
            this.isFinished = true
          }
        })
      }else{
        this.$Model.FundDetails({trade_type:this.tabsState,page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            if(type=='load'){
              this.listData[this.tabsIndex] = this.listData[this.tabsIndex].concat(data.list);
            }else{
              this.listData[this.tabsIndex] = data.list
            }
            if(this.pageNo==data.data_total_page){
              this.isFinished = true
            }else{
              this.isFinished = false
            }
          }else{
            this.listData[this.tabsIndex] = ''
            this.isFinished = true
          }
        })
      }
      
    },
    onRefresh() {
      this.getListData('init')
    },
  }
}
</script>
<style scoped>
.van-pull-refresh{
  min-height: calc(100vh - 90px);
}
</style>
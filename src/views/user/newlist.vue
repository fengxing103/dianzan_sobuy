<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <!-- <van-tabs :border="false" color="#dd6161" title-active-color="#dd6161" line-width="50" v-model="tabsIndex" @change="changeTabs"> -->
        <!-- <van-tab v-for="item in taskTabs" :title="item.text" :key="item.state" style="padding: 0 12px;"> -->
          <!-- <van-pull-refresh v-model="isRefresh" @refresh="onRefresh"> -->
            <!-- <van-list
                v-model="isLoad"
                :finished="isFinished"
                :finished-text="listData.length?'没有更多数据了':'没有数据'"
                @load="onLoad"
                :class="{Empty:!listData.length}"
            > -->
              <div>
                <div style="text-align:center" v-if="listData.length <= 0">No records</div>
                        <div v-if="listData.length > 0">
                        <van-cell  class="FundItem" :border="false" v-for="(item,index) in listData" :key="item.dan">
                          <!-- <div :class="`icon tag${tabsIndex}`" slot="icon">
                            充
                          </div> -->
                          <template #title>
                            <div>
                             <span class="money">Expected earnings:{{Number(item.money) * item.lilv}}</span>
                              <span>amount:{{item.money}}</span>
                            </div>
                            <div>
                              
                               <span  style="flex:none">purchase time:{{item.start_time}}</span>
                              <span style="color:green">{{item.yuebaoid_name}}state:({{item.status_label}})</span>
                            </div>
                          </template>
                        </van-cell>
                        </div>
              </div>
            </van-list>
          <!-- </van-pull-refresh> -->
        <!-- </van-tab> -->
      <!-- </van-tabs> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'newlist',
  components: {
  },
  props: [],
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
        {state: 1, text: ''}
      ],
    }
  },
  computed: {

  },
  watch: {
    // $route(){
    //   if(this.fundState){
    //     this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
    //     this.tabsState = this.fundState
    //   }else{
    //     this.tabsState = 4
    //     this.tabsIndex = 0
    //   }
    //   this.getListData('init')
    // }
  },
  created() {
    this.$parent.navBarTitle = 'Purchase History'
    // this.listData = this.taskTabs.flatMap(item=>[''])
    // if(this.fundState){
    //   this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.fundState)
    //   this.tabsState = this.fundState
    // }
    // switch(this.fundState){

    // }
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
       this.$Model.newList({userid:JSON.parse(localStorage.getItem("UserInfo")).userid},data=>{
            this.isLoad = false
            this.listData = data.info
        })

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
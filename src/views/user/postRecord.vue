<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-tabs :ellipsis="false" :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in InitData.taskclasslist.filter(obj=>obj.state==1)" :title="item.group_name" :key="item.group_id">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="isLoad"
              :finished="isFinished"
              :finished-text="listData[tabsIndex].length?$t('vanPull[0]'):$t('vanPull[1]')"
              @load="onLoad"
              :class="{Empty:!listData[tabsIndex].length}"
            >
              <div class="TaskItem" v-for="item in listData[tabsIndex]" :key="item.task_id">
                <van-cell :border="false" title-class="post">
                  <div class="icon" slot="icon">
                    <a href="javascript:;" @click.stop="$Util.OpenUrl(item.link_info)">
                      <img :src="item.icon">
                    </a>
                    <van-tag type="primary">{{item.vip_dec}}</van-tag>
                  </div>
                  <template #title>
                    <h4>{{item.title}}</h4>
                    <p>
                      <span>{{$t('postRecord[2]')}}:<em>{{item.total_number}}</em></span>
                      <span>{{$t('postRecord[3]')}}:<em>{{Number(item.total_number)-Number(item.surplus_number)}}</em></span>
                    </p>
                    <p>{{$t('postRecord[4]')}}:{{item.end_time}}</p>
                  </template>
                  <p :class="`state${item.status}`">{{item.status_dec}}</p>
                  {{InitData.currency}}<b>{{Number(item.reward_price)}}</b>
                </van-cell>
                <div class="button" v-if="item.status!=2&&item.status!=5">
                  <van-button type="info" round size="mini" v-if="item.status==3" @click="$router.push(`/user/auditRecord?taskId=${item.task_id}`)">{{$t('postRecord[5]')}}</van-button>
                  <van-button round size="mini" v-if="item.status==1" @click="cancelTask(item.task_id)">{{$t('postRecord[6]')}}</van-button>
                  <van-button type="info" round size="mini" v-if="item.status==1" @click="$router.push(`/user/postTask/${item.task_id}`)">{{$t('postRecord[7]')}}</van-button>
                </div>
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
  name: 'PostRecord',
  components: {
  },
  props: ['taskType'],
  data() {
    return {
      listData: '',
      isLoad: false,
      isFinished: false,
      isRefresh: false,
      pageNo: 1,
      taskGroupId: '',
      tabsIndex: 0,
      isStore: false,
    }
  },
  computed: {

  },
  watch: {
    $route(){
      this.initData(this.InitData.taskclasslist.filter(obj=>obj.state==1))
    }
  },
  created() {
    this.$parent.navBarTitle = this.$t('postRecord[0]')
    this.listData = this.InitData.taskclasslist.filter(obj=>obj.state==1).flatMap(item=>[''])
    if(this.InitData.taskclasslist.length){
      this.initData(this.InitData.taskclasslist.filter(obj=>obj.state==1))
    }
  },
  mounted() {
    
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    initData(data) {
      if(this.taskType){
        this.tabsIndex = data.findIndex(item=>item.group_id==this.taskType);
        this.taskGroupId = this.taskType
      }else{
        this.tabsIndex = 0
        this.taskGroupId = data[0].group_id
      }
      this.getListData('init')
    },
    onLoad() {
      this.getListData('load')
    },
    changeTabs(index) {
      this.taskGroupId = this.InitData.taskclasslist.filter(obj=>obj.state==1)[index].group_id
      this.$router.push(`/user/postRecord/${this.taskGroupId}`)
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
      this.$Model.GetTaskList({group_id: this.taskGroupId,page_no: this.pageNo,is_u: 1},data=>{
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
    },
    onRefresh() {
      this.getListData('init')
    },
    auditTask() {

    },
    cancelTask(id) {
      this.$Model.CancelTask(id,data=>{
        if(data.code==1){
          this.getListData('init')
        }
      })
    },

  }
}
</script>
<style scoped>
.van-pull-refresh{
  min-height: calc(100vh - 90px);
}
.van-list{
  overflow: hidden;
}
</style>
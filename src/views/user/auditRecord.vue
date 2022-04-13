<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-tabs :ellipsis="false" :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in taskTabs" :title="item.text" :key="item.state">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="isLoad"
              :finished="isFinished"
              :finished-text="listData[tabsIndex].length?$t('vanPull[0]'):$t('vanPull[1]')"
              @load="onLoad"
              :class="{Empty:!listData[tabsIndex].length}"
            >
              <van-cell class="TaskItem" title-class="record" value-class="audit" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.order_id" :to="`/user/auditInfo/${item.order_id}`">
                <div class="icon" slot="icon">
                  <h4>{{item.group_name}}</h4>
                  <a href="javascript:;" @click.stop="$Util.OpenUrl(item.link_info)">
                    <img :src="item.icon">
                  </a>
                  <van-tag type="primary">{{item.vip_dec}}</van-tag>
                </div>
                <template #title>
                  <h4>{{item.title}}</h4>
                  <p>{{$t('audit.default[1]')}}:{{item.o_username}}</p>
                  <p>{{$t('audit.default[2]')}}:{{item.add_time}}</p>
                  <p>{{$t('audit.default[3]')}}:{{tabsIndex==0?item.add_time:item.trial_time}}</p>
                </template>
                <p :class="`state${item.status}`">{{item.status_dec}}</p>
                <p>{{InitData.currency}}<b>{{Number(item.reward_price)}}</b></p>
                <van-button type="info" round size="mini" v-if="tabsIndex==1">{{$t('audit.default[4]')}}</van-button>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskRecord',
  components: {
  },
  props: ['taskState'],
  data() {
    return {
      listData: '',
      isLoad: false,
      isFinished: false,
      isRefresh: false,
      pageNo: 1,
      tabsState: 1,
      tabsIndex: 0,
      taskTabs: [
        {state: 1, text: this.$t('audit.tabs[0]')},
        {state: 2, text: this.$t('audit.tabs[1]')},
        {state: 3, text: this.$t('audit.tabs[2]')},
        {state: 4, text: this.$t('audit.tabs[3]')}
      ],
      fileList: []
    }
  },
  computed: {

  },
  watch: {
    $route(){
      if(this.taskState){
        this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.taskState);
        this.tabsState = this.taskState
      }else{
        this.tabsState = 1
        this.tabsIndex = 0
      }
      this.getListData('init')
    }
  },
  created() {
    this.$parent.navBarTitle = this.$t('audit.default[0]')
    this.listData = this.taskTabs.flatMap(item=>[''])
    if(this.taskState){
      this.tabsIndex  = this.taskTabs.findIndex(item=>item.state==this.taskState);
      this.tabsState = this.taskState
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
      if(this.$route.query.taskId){
        this.$router.push(`/user/auditRecord/${this.tabsState}?taskId=${this.$route.query.taskId}`)
      }else{
        this.$router.push(`/user/auditRecord/${this.tabsState}`)
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
      let post = {status: this.tabsState,page_no: this.pageNo,is_u: 1}
      if(this.$route.query.taskId){
        post.task_id = this.$route.query.taskId
      }
      this.$Model.GetTaskRecord(post,data=>{
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
  }
}
</script>
<style scoped>
.van-list>>>.TaskItem{
  padding: 10px;
  align-items: center!important;
}
.van-uploader{
  display: block;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image{
  width: 50px;
  height: 50px;
  margin-right: 0;
}
.van-uploader>>>.van-uploader__preview{
  margin-right: 0;
}
.van-uploader>>>.van-uploader__mask-message{
  white-space: nowrap;
}
.van-pull-refresh{
  min-height: calc(100vh - 90px);
}
.TaskItem .van-cell__value{
  overflow: visible;
}
.van-list{
  overflow: hidden;
}
</style>
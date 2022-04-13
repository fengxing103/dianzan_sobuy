<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-tabs :border="false" color="#dd6161" title-active-color="#dd6161" line-width="50" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in taskTabs" :title="item.text" :key="item.state" style="padding: 0 12px;">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
                v-model="isLoad"
                :finished="isFinished"
                :finished-text="listData[tabsIndex].length?'没有更多数据了':'没有数据'"
                @load="onLoad"
                :class="{Empty:!listData[tabsIndex].length}"
            >
              <van-cell class="TaskItem" title-class="record" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.order_id" @click="onClickCell(item.order_id)">
                <div class="icon" slot="icon">
                  <h4>{{item.group_name}}</h4>
                  <a href="javascript:;" @click.stop="$Util.OpenUrl(item.link_info)">
                    <img :src="item.icon">
                  </a>
                  <p class="price"><b>{{Number(item.reward_price)}}</b>元</p>
                </div>
                <template #title>
                  <h4>要求:{{item.group_info}}</h4>
                  <p>创建:{{item.add_time}}</p>
                  <p>审核:{{tabsIndex==0||tabsIndex==4?item.add_time:item.handle_time}}</p>
                  <a href="javascript:;" v-if="tabsIndex==0">点击 图标 打开链接</a>
                  <a href="javascript:;" v-else>点击查看任务详情</a>
                </template>
                <div class="state" v-if="tabsIndex==0">
                  <van-uploader v-model="fileList[index]" :after-read="afterRead" :max-count="1" />
                  <van-button color="#dd6161" size="mini" block @click.stop="submitTask(item.order_id,index)">提交</van-button>
                  <van-button style="margin: 5px 0" color="#aaa" size="mini" block @click.stop="cancelTask(item.order_id)">放弃</van-button>
                </div>
                <div class="state" v-else>
                  <img :src="`./static/icon/state${item.status}.png`" height="50">
                  <van-button style="margin: 5px 0" color="#aaa" size="mini" block @click.stop="cancelTask(item.order_id,index)" v-if="tabsIndex==1">放弃</van-button>
                </div>
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
        {state: 1, text: '进行中'},
        {state: 2, text: '审核中'},
        {state: 3, text: '已完成'},
        {state: 4, text: '已失败'},
        {state: 6, text: '已放弃'}
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
    this.$parent.navBarTitle = '任务记录'
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
    onClickCell(id) {
      if(!$(event.target).hasClass('van-uploader__input')){
        this.$router.push(`/user/taskInfo/${id}`)
      }
    },
    onLoad() {
      this.getListData('load')
    },
    changeTabs(index) {
      this.tabsState = this.taskTabs[index].state
      this.$router.push(`/user/taskRecord/${this.tabsState}`)
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
      this.$Model.GetTaskRecord({status: this.tabsState,page_no: this.pageNo,is_u: 2},data=>{
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
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      this.uploadImgs(file);
    },
    uploadImgs(file){
      if (!file.file.type.match(/image/)){
        file.status = 'failed'
        file.message = '错误格式'
        return;
      }
      this.$Util.CompressImg(file.file.type,file.content,750,(image)=>{
        let param = new FormData();
        param.append('token',localStorage['Token']);
        param.append('type',3);
        param.append('image',image,file.file.name);
        this.$Model.UploadImg(param,(data)=>{
          if(data.code==1){
            file.message = '上传成功'
            file.status = 'success'
            file.url = data.url
          }else{
            file.status = 'failed'
            file.message = '上传失败'
          }
        });
      })
    },
    submitTask(id,index) {
      if(this.fileList[index]){
        this.$Model.SubmitTask({order_id: id,examine_demo: this.fileList[index][0].url},data=>{
          if(data.code==1){
            this.fileList[index] = []
            this.getListData('init')
          }
        })
      }else{
        this.$Dialog.Toast('请上传完成任务图片');
      }
    },
    cancelTask(id,index) {
      this.$Model.SubmitTask({order_id: id,status: 6},data=>{
        if(data.code==1){
          this.fileList[index] = []
          this.getListData('init')
        }
      })
    },
  }
}
</script>
<style scoped>
.TaskItem{
  padding: 10px;
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
<template>
  <div class="Site IndexBox" style="padding-top: 48px">
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('task.default[0]')"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox">
      <van-tabs :ellipsis="false" :border="false" color="rgb(254, 92, 68)" background="#ffffff" title-active-color="rgb(254, 92, 68)" title-inactive-color="rgb(102, 102, 102)" line-width="60" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in taskTabs" :title="item.text" :key="item.state">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="isLoad"
              :finished="isFinished"
              :finished-text="listData[tabsIndex].length?$t('vanPull[0]'):$t('vanPull[1]')"
              @load="onLoad"
              :class="{Empty:!listData[tabsIndex].length}"
            >
              <van-cell class="TaskItem" title-class="record" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.order_id" @click="onClickCell(item.order_id)">
                <div class="icon" slot="icon">
                  <a href="javascript:;" v-if="item.is_fx==1">
                    <img :src="item.icon">
                  </a>
                  <a href="javascript:;" @click.stop="$Util.OpenUrl(item.link_info)" v-else>
                    <img :src="item.icon">
                  </a>
                </div>
                <template #title>
                  <h4>{{item.group_name}}{{$t('task.default[1]')}}：{{item.group_info}}</h4>
                  <p style="color: #fff" v-if="item.requirement">({{item.requirement}})</p>
                  <p>{{$t('task.default[2]')}}：{{item.add_time}}</p>
                  <p>{{$t('task.default[3]')}}：{{tabsIndex==0||tabsIndex==4?item.add_time:item.handle_time}}</p>
                  <p class="href" v-if="item.is_fx!=1">
                    <a :href="item.link_info" target="_blank" @click.stop="">{{$t('task.default[4]')}}</a>
                    <a href="javascript:;" @click.stop="$Util.CopyText(`IosLink${index}`,`AppLink${index}`)">{{$t('task.default[5]')}}</a>
                  </p>
                  <span :id="`IosLink${index}`" style="position: absolute;opacity: 0">{{item.link_info}}</span>
                  <input :id="`AppLink${index}`" type="text" :value="item.link_info" style="position: absolute;opacity: 0">
                </template>
                <div class="state" v-if="tabsIndex==0">
                  <div class="price">
                    {{$t('task.default[6]')}}
                    <p>{{InitData.currency}}{{Number(item.reward_price)}}</p>
                  </div>
                  <!-- <van-uploader upload-icon="photo" v-model="fileList[index]" :after-read="afterRead" multiple /> -->
				  <div style="height: 40px;">
					  
				  </div>
                  <van-button type="info" size="mini" round @click.stop="submitTask(item.order_id,index)">{{$t('task.default[7]')}}</van-button>
                  <!-- <van-button style="margin: 5px 0" color="#aaa" size="mini" block @click.stop="cancelTask(item.order_id)">放弃</van-button> -->
                </div>
                <div class="state" v-else>
                  <p>
                    <img :src="`./static/zxwlpic/state${item.status}-${$i18n.locale}.png`" height="50">
                  </p>
                  <van-button style="margin-top: 15px;" color="#aaa" size="mini" round @click.stop="cancelTask(item.order_id,index)" v-if="tabsIndex==1">{{$t('task.default[8]')}}</van-button>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
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
        {state: 1, text: this.$t('task.tabs[0]')},
        // {state: 2, text: this.$t('task.tabs[1]')},
        {state: 3, text: this.$t('task.tabs[2]')},
        // {state: 4, text: this.$t('task.tabs[3]')},
        // {state: 5, text: this.$t('task.tabs[4]')},
        // {state: 6, text: this.$t('task.tabs[5]')}
      ],
      fileList: [],
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.listData = this.taskTabs.flatMap(item=>[''])
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
      this.getListData('init')
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
      file.status = 'uploading'
      file.message = this.$t('upload[0]')
      this.uploadImgs(file)
    },
    compressImg(file) {
      this.$Util.CompressImg(file.file.type,file.content,750,(image)=>{
        let param = new FormData();
        param.append('token',localStorage['Token']);
        param.append('type',3);
        param.append('image',image,file.file.name);
        this.$Model.UploadImg(param,(data)=>{
          if(data.code==1){
            file.message = this.$t('upload[2]')
            file.status = 'success'
            file.url = data.url
          }else{
            file.status = 'failed'
            file.message = this.$t('upload[3]')
          }
        });
      })
    },
    uploadImgs(file){
      if(file.length){
        file.forEach(item=>{
          if (!item.file.type.match(/image/)){
            item.status = 'failed'
            item.message = this.$t('upload[1]')
            return;
          }
          this.compressImg(item)
        })
      }else{
        if (!file.file.type.match(/image/)){
          file.status = 'failed'
          file.message = this.$t('upload[1]')
          return;
        }
        this.compressImg(file)
      }
    },
    submitTask(id,index) {
      // if(this.fileList[index]){
		  console.log(111);
        const examine_demo = "http://www.baidu.com";
        this.$Model.SubmitTask({order_id: id,examine_demo: examine_demo},data=>{
          if(data.code==1){
            this.fileList[index] = []
            this.getListData('init')
          }
        })
      // }else{
      //   this.$Dialog.Toast(this.$t('task.msg'));
      // }
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
.van-tabs>>>.van-tab{
  padding: 0 10px;
}
.van-uploader{
  display: block;
  margin-top: 10px;
}
.van-uploader>>>.van-uploader__upload-icon{
  opacity: .3;
  font-size: 16px;
}
.van-uploader>>>.van-uploader__wrapper{
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image{
  width: 36px;
  height: 36px;
  margin-right: 0;
  background-color: #0b273f;
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
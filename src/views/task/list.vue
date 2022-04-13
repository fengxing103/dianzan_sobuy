<template>
  <div class="Site PageBox">
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('task.list[0]')"
      left-arrow
      @click-left="$router.go(-1)"
    />
	<van-tabs :ellipsis="false" :border="false" color="rgb(254, 92, 68)" title-active-color="rgb(254, 92, 68)" background="#ffffff" title-inactive-color="#bbb" line-width="60" v-model="tabsIndex" @change="changeTabs">
	  <van-tab v-for="item in viplist" :title="item.en_name" :key="item.grade" style="padding: 0 12px;">
	  </van-tab>
	</van-tabs>
    <div class="ScrollBox" >
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <van-list
          v-model="isLoad"
          :finished="isFinished"
          :finished-text="listData.length?$t('vanPull[0]'):$t('vanPull[1]')"
          @load="onLoad"
          :class="{Empty:!listData.length}"
        >
		
		<van-grid :column-num="2" style="display: none;">
		  <!-- <van-grid-item style="color: #000000;" v-for="item in listData" :key="item.task_id" :to="`/taskShow/${item.task_id}`"> -->
		   <van-grid-item style="color: #000000;" v-for="item in listData" :key="item.task_id"  @click="onSubmit(item.task_id,item)" > 
		   <div data-v-f5123cc2="" align="center" class="font-bold14 vipDec" style="
    background-color: #fe5c44;
    color: #fff;
    padding: 5px;
    z-index: 2;
    height: 25px;
    top: 0;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;left: 0px;
"   > VIP{{item.task_level}} </div>
		     <van-image :src="item.icon" />
			 <span style="background-color: #000000;opacity: 0.7;color: white;width: 100%;padding: 2px;">{{item.group_name}}</span>
			 <div style="width: 100%;">
				
				 <span style="padding: 0px 5px 5px;">{{item.title}}</span><br>
				 <div data-v-f5123cc2="" align="left" style="padding: 0px 5px 5px; justify-content: space-between; display: flex;margin-top: 3%;"><div data-v-f5123cc2=""><a data-v-f5123cc2="" style="font-size: 10px;">commodity price</a></div><div data-v-f5123cc2=""><a data-v-f5123cc2="" style="font-size: 5px;">{{InitData.currency}} </a><a data-v-f5123cc2="" class="font-bold12">{{Number(item.total_price)}}</a></div></div>
<div data-v-f5123cc2="" style="padding: 0px 5px 5px; color: rgb(254, 92, 68); justify-content: space-between; display: flex;">
	<div data-v-f5123cc2=""><a data-v-f5123cc2="" style="font-size: 10px; color: rgb(254, 92, 68);">pay commission</a></div><div data-v-f5123cc2=""><a data-v-f5123cc2="" style="font-size: 5px; color: rgb(254, 92, 68);">AUD </a><a data-v-f5123cc2="" class="font-bold16" style="color: rgb(254, 92, 68);">{{Number(item.reward_price)}}</a></div></div>				 
<div data-v-f5123cc2="" style="padding: 0px 5px 5px; align-items: center; display: flex; justify-content: flex-end;"><i data-v-f5123cc2="" class="van-icon" style="margin: 0px 5px; font-size: 16px;"><img data-v-f5123cc2="" src="../../../public/static/new/tether.png" class="van-icon__image"><!----></i><a data-v-f5123cc2="" style="font-size: 5px; color: rgb(254, 92, 68);">AUD </a><a data-v-f5123cc2="" class="font-bold16" style="color: rgb(254, 92, 68);"> +0</a></div>
<!-- 
<span>
				  
				  {{InitData.currency}}
				   <em>{{Number(item.reward_price)}}</em>
				 </span> -->
				<!-- <div>
				   <span>{{$t('task.list[3]')}}:{{item.group_info}}</span>
				   <span style="display: block;margin-top: 5px;float: right;background-color: rgb(254, 92, 68);" ><van-button type="info" size="mini" @click.stop="receiveTask(item.task_id,item)" :disabled="item.is_l==0?false:true">{{$t('task.list[4]')}}</van-button></span>
				 </div> -->
			 </div>
		   </van-grid-item>
		</van-grid>
		
          <!-- <van-cell class="TaskItem" :border="false" v-for="item in listData" :key="item.task_id" :to="`/taskShow/${item.task_id}`"  > -->
		  <van-cell class="TaskItem" :border="false" v-for="item in listData" :key="item.task_id" @click="onSubmit(item.task_id,item)" style="background-color: white;color: #000000;">
			  
            <div class="icon" slot="icon">
              <h4>{{item.group_name}}</h4>
              <a href="javascript:;">
                <img :src="item.icon">
              </a>
              <van-tag type="primary" style="background-color: #fe5c44;">{{item.vip_dec}}</van-tag>
            </div>
            <template #title>
              <div style="color: #000000;">
                <span>{{$t('task.list[1]')}}:{{item.username}}</span>
                <i>{{item.status_dec}}</i>
              </div>
              <div style="color: #000000;">
                <span>{{$t('task.list[2]')}}:<b>{{item.surplus_number}}</b></span>
                <span>
                  {{InitData.currency}}
                  <em>{{Number(item.reward_price)}}</em>
                </span>
              </div>
              <div style="color: #000000;">
                <span>{{$t('task.list[3]')}}:{{item.group_info}}</span>
                <span><van-button type="info" size="mini" @click="onSubmit(item.task_id,item)" :disabled="item.is_l==0?false:true">{{$t('task.list[4]')}}</van-button></span>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  components: {
  },
  props: ['taskType','taskGrade'],
  data() {
    return {
      listData: '',
      isLoad: false,
      isFinished: false,
      isRefresh: false,
      pageNo: 1,
	  taskType: '',
	  tabsIndex: 0,
	  isStore: false,
	  viplist:"",
	  task_level:0,
	  task_class:25,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getListData('init')
  },
  mounted() {
    
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
	  changeTabs(index) {
	    console.log(this.taskType);
		console.log(this.viplist[index])
		this.task_level = this.viplist[index].grade
		this.getListData("inittab")
	  },
	  openTaskList(grade,name) {
	    if(this.UserInfo.vip_level<grade){
	      const html = this.$t('task.index[1]',{currVip: this.UserInfo.useridentity,vip:name})
	      this.$Dialog.Confirm(html,()=>{
	        this.$router.push('/vip')
	      }, this.$t('task.index[2]'))
	    }else{
	      if(this.taskType){
	        this.$router.push(`/taskList/${this.taskType}/${grade}`)
	      }else{
	        this.$Dialog.Toast(this.$t('task.index[3]'))
	      }
	    }
	  },
    onLoad() {
      this.getListData('load')
    },
	onSubmit(id,item) {
	  // this.isSubmit = true
	  this.$Model.ReceiveTask(id,data=>{
		  console.log("2322");
		  // return false;
	    // this.isSubmit = false
	    if(data.code==1){
	      // this.getTaskinfo()
		  this.$router.push('/mytask')
	    }
		if(data.code ==852){
			this.$dialog.alert({
			      message: 'The trial period has ended. Upgrade your membership. ',
				  showCancelButton:true,
				  confirmButtonText:"Upgrade VIP",
				  confirmButtonColor:"#000",
				  cancelButtonText:"Continuar",
				  cancelButtonColor:"#000",
				  
				  
			    });
		}
	  })
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
	  
	  if(type == 'inittab'){
		  var taskType = this.task_class;
	  }else{
		  var taskType = this.taskType;
	  }
	  
      this.$Model.GetTaskList({group_id: taskType,task_level:this.task_level,page_no: this.pageNo,is_u: 0},data=>{
		  this.viplist = data.viplist
		  this.task_class = data.task_class
        this.$nextTick(()=>{
          this.isLoad = false
        })
        if(data.code==1){
          if(type=='load'){
            if(this.pageNo==1){
              this.listData = data.info
            }else{
              this.listData = this.listData.concat(data.info)
            }
          }else{
            this.listData = data.info
          }
          if(this.pageNo==data.data_total_page){
            this.isFinished = true
          }else{
            this.isFinished = false
          }
        }else{
          this.listData = ''
          this.isFinished = true
        }
      })
    },
    onRefresh() {
      this.getListData('init')
    },
    receiveTask(id,item) {
      if(!localStorage['Token']){
        this.$router.push('/login')
      }else{
        this.$Model.ReceiveTask(id,data=>{
          if(data.code==1){
            item.is_l = 1
            this.pageNo = 0
          }
        })
      }
    },
  }
}
</script>
<style scoped>
	.van-dialog {
	    position: fixed;
	    top: 45%;
	    left: 50%;
	    width: 320px;
	    overflow: hidden;
	    font-size: 16px;
	    background-color: #bb4848;
	    border-radius: 16px;
	    -webkit-transform: translate3d(-50%,-50%,0);
	    transform: translate3d(-50%,-50%,0);
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	    -webkit-transition: .3s;
	    transition: .3s;
	    -webkit-transition-property: opacity,-webkit-transform;
	    transition-property: opacity,-webkit-transform;
	    transition-property: transform,opacity;
	    transition-property: transform,opacity,-webkit-transform;
	}
	.van-button--mini {
	    height: 1.625rem;
	    background-color: rgb(254, 92, 68);
	    border: .0625rem solid rgb(254, 92, 68);
	}
.van-tabs>>>.van-tabs__wrap{
  height: 55px;
}
.van-tabs>>>.van-tabs__nav--line{
  padding-bottom: 6px;
}
.van-list>>>.TaskItem{
  align-items: center!important;
}
.van-list>>>.TaskItem .icon{
  min-width: 60px;
}
.van-list>>>.TaskItem .van-button--disabled{
  background: #888!important;
  border-color: #888!important;
}
.van-pull-refresh{
  min-height: calc(100vh - 46px);
}



</style>
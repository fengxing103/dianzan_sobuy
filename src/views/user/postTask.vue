<template>
  <div class="PageBox" style="padding-bottom: 54px">
    <div class="ScrollBox">
      <van-form label-width="70">
        <van-field
            class="m0"
            :label="$t('postTask.field[0].label')"
            :border="false"
        >
          <van-dropdown-menu slot="input">
            <van-dropdown-item v-model="postData.task_class" :options="taskType" @change="changeDropdown" />
          </van-dropdown-menu>
        </van-field>
        <van-divider class="m0" content-position="left" style="font-size: 12px;">{{taskTips}}</van-divider>
        <van-field
            :border="false"
            v-model.trim="postData.title"
            :label="$t('postTask.field[1].label')"
            :placeholder="$t('postTask.field[1].placeholder')"
        />
        <van-field
            :border="false"
            v-model.trim="postData.content"
            rows="1"
            autosize
            :label="$t('postTask.field[2].label')"
            type="textarea"
            :placeholder="$t('postTask.field[2].placeholder')"
        />
        <van-field
            :border="false"
            v-model.trim="postData.reward_price"
            type="number"
            :label="$t('postTask.field[3].label')"
            :placeholder="$t('postTask.field[3].placeholder')"
            @input="totalPrice"
        >
          <template #right-icon>{{$t('postTask.field[3].right')}}</template>
        </van-field>
        <van-field
            :border="false"
            v-model.trim="postData.total_number"
            type="digit"
            :label="$t('postTask.field[4].label')"
            :placeholder="$t('postTask.field[4].placeholder')"
            @input="totalPrice"
        />
        <van-field
            :border="false"
            v-model.trim="postData.person_time"
            type="digit"
            :label="$t('postTask.field[5].label')"
            :placeholder="$t('postTask.field[5].placeholder')"
        >
          <template #right-icon>{{$t('postTask.field[5].right')}}</template>
        </van-field>
        <van-field
            :border="false"
            v-model="postData.total_price"
            :label="$t('postTask.field[6].label')"
            readonly
        />
        <van-field
            :border="false"
            v-model.trim="postData.link_info"
            :label="$t('postTask.field[7].label')"
            :placeholder="$t('postTask.field[7].placeholder')"
        />
        <van-field
            :label="$t('postTask.field[8].label')"
            :border="false"
        >
          <van-dropdown-menu slot="input">
            <van-dropdown-item v-model="postData.task_level" :options="levelOptions" />
          </van-dropdown-menu>
        </van-field>
        <van-field
            :border="false"
            v-model="postData.end_time"
            :label="$t('postTask.field[9].label')"
            :placeholder="$t('postTask.field[9].placeholder')"
            readonly
            @click="showCalendar=true"
        />
        <van-field
            :border="false"
            :label="$t('postTask.field[10].label')"
        >
          <template #input>
            <van-checkbox-group v-model="conditionArr">
              <van-checkbox :name="index" v-for="(item,index) in InitData.authenticationList" :key="index">{{item}}</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field
            :label="$t('postTask.field[11].label')"
        >
          <template #input>
            <van-uploader class="Example" v-model="fileList" max-count="4" image-fit="contain" :after-read="afterRead" />
          </template>
        </van-field>
        <van-field
            :border="false"
            :label="$t('postTask.field[12].label')"
            :placeholder="$t('postTask.field[12].placeholder')"
            readonly
            is-link
            @click="showSteps=true"
        />
        <!-- <div class="Tips" v-html="$t('postTask.tips',{pump: UserInfo.pump,price:postData.total_price})"></div> -->
        <i18n path="postTask.tips[0]" tag="div" class="Tips" :places="{ pump: UserInfo.pump,price: postData.total_price}">
          <br place="br">
          <router-link place="url" to="/user/recharge">{{$t('postTask.tips[1]')}}</router-link>
        </i18n>
      </van-form>
    </div>
    <div style="position: fixed;bottom: 5px;left: 10px;right: 10px">
      <van-button block type="danger" style="font-size: 16px;" @click="onSubmit">{{$t('postTask.button')}}</van-button>
    </div>
    <van-calendar v-model="showCalendar" :show-confirm="false" @confirm="onConfirm" />
    <van-popup v-model="showSteps" position="right" style="height: 100%;width:100%;background-color:rgb(14, 21, 38);overflow: hidden;">
      <div class="PageBox">
        <van-nav-bar
            fixed
            :border="false"
            :title="$t('postTask.step.title')"
            :right-text="$t('postTask.step.right')"
            @click-right="showSteps=false"
        />
        <div class="ScrollBox">
          <van-cell class="Steps" v-for="(item,index) in stepData" :key="index">
            <template #icon>
              <i class="tag">{{index+1}}</i>
            </template>
            <template #title>
              <van-uploader v-model="item.img" image-fit="contain" :after-read="afterRead" :max-count="1" />
            </template>
            <textarea rows="2" v-model="item.describe" :placeholder="$t('postTask.step.placeholder')"></textarea>
          </van-cell>
          <div style="text-align: center;padding: 10px 0;">
            <van-button size="small" icon="cross" @click="minusSteps" style="margin-right: 10px">{{$t('postTask.step.button[0]')}}</van-button>
            <van-button size="small" icon="plus" color="#dd6161" @click="pushSteps" style="background-color:#1989fa;border-color:#1989fa;">{{$t('postTask.step.button[1]')}}</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'PostTask',
  components: {
  },
  props: ['taskId'],
  data() {
    return {
      taskType: [],
      taskTips: '',
      levelOptions: [],
      showCalendar: false,
      fileList: [],
      conditionArr: [],
      showSteps: false,
      stepData: [
        {
          img: [],
          describe: ''
        }
      ],
      postData: {
        task_class: 0,
        title: '',
        content: '',
        reward_price: 1,
        total_number: '',
        person_time: 1,
        total_price: 0,
        link_info: '',
        task_level: 1,
        end_time: '',
        finish_condition: '',
        examine_demo: '',
        task_step: [],
      },
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('postTask.navBar.title')
    this.taskType = this.InitData.taskclasslist.flatMap(item => [{text: item.group_name,value: item.group_id}])
    this.levelOptions = this.InitData.UserGradeList.flatMap(item => [{text: item.name,value: item.grade}])
    if(this.taskId){
      this.$Model.GetTaskinfo(this.taskId,data=>{
        if(data.code==1){
          this.postData = {
            id: this.taskId,
            task_class: data.info.task_class,
            title: data.info.title,
            content: data.info.content,
            reward_price: Number(data.info.reward_price),
            total_number: Number(data.info.total_number),
            person_time: Number(data.info.person_time),
            total_price: Number(data.info.total_price)+Number(data.info.total_price)*this.UserInfo.pump,
            link_info: data.info.link_info,
            task_level: data.info.task_level,
            end_time: data.info.end_time,
            finish_condition: data.info.finish_condition||'',
            examine_demo: data.info.examine_demo||'',
            task_step: data.info.task_step||[]
          }
          this.taskTips = this.InitData.taskclasslist.find(item=>item.group_id==data.info.task_class).group_info
          this.conditionArr = data.info.finish_condition||[]
          this.fileList = data.info.examine_demo?data.info.examine_demo.flatMap(item=>[{url: this.ApiUrl+item}]):[]
          this.stepData = data.info.task_step?data.info.task_step.flatMap(item=>[{img:[{url: this.ApiUrl+item.img}],describe:item.describe}]):[]
        }
      })
    }else{
      this.taskTips = this.InitData.taskclasslist[0].group_info
      this.postData.task_class = this.InitData.taskclasslist[0].group_id
      this.postData.task_level = this.InitData.UserGradeList[0].grade
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    changeDropdown(val) {
      this.taskTips = this.InitData.taskclasslist.find(item=>item.group_id==val).group_info
    },
    onConfirm(date) {
      this.showCalendar = false
      this.postData.end_time = this.$Util.DateFormat('YY-MM-DD',date)
    },
    afterRead(file) {
      file.status = 'uploading';
      file.message = this.$t('upload[0]')
      this.uploadImgs(file);
    },
    uploadImgs(file){
      if (!file.file.type.match(/image/)){
        file.status = 'failed'
        file.message = this.$t('upload[1]')
        return;
      }
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
    minusSteps() {
      if(this.stepData.length==1){
        this.$Dialog.Toast(this.$t('postTask.tips[2]'));
      }
      if(this.stepData.length>1){
        this.stepData.pop()
      }
    },
    pushSteps() {
      if(this.stepData.length==10){
        this.$Dialog.Toast(this.$t('postTask.tips[3]'));
      }
      if(this.stepData.length<10){
        this.stepData.push({
          img: [],
          describe: ''
        })
      }

    },
    totalPrice() {
      this.postData.total_price = this.postData.reward_price*this.postData.total_number+this.postData.reward_price*this.postData.total_number*this.UserInfo.pump
    },
    onSubmit() {
      const emptyIndex = this.stepData.findIndex(item=>!item.img.length)+1
      if(!emptyIndex){
        this.postData.task_step = []
        this.stepData.forEach(item=>{
          this.postData.task_step.push({img: item.img[0].url.replace(this.ApiUrl,''),describe: item.describe})
        })
      }else{
        this.postData.task_step = []
      }
      if(!this.postData.title){
        this.$Dialog.Toast(this.$t('postTask.field[1].error'));
        return
      }
      if(!this.postData.reward_price){
        this.$Dialog.Toast(this.$t('postTask.field[3].error[0]'));
        return
      }
      if(this.postData.reward_price<1){
        this.$Dialog.Toast(this.$t('postTask.field[3].error[1]'));
        return
      }
      if(!this.postData.total_number){
        this.$Dialog.Toast(this.$t('postTask.field[4].error'));
        return
      }
      if(!this.postData.person_time){
        this.$Dialog.Toast(this.$t('postTask.field[5].error'));
        return
      }
      if(!this.postData.total_price){
        this.$Dialog.Toast(this.$t('postTask.field[6].error'));
        return
      }
      if(!this.postData.link_info){
        this.$Dialog.Toast(this.$t('postTask.field[7].error'));
        return
      }
      if(!this.postData.end_time){
        this.$Dialog.Toast(this.$t('postTask.field[9].error'));
        return
      }
      if(!this.postData.task_step.length){
        this.$Dialog.Toast(this.$t('postTask.field[12].error'));
        return
      }
      if(this.conditionArr.length){
        this.postData.finish_condition = this.conditionArr
      }else{
        this.postData.finish_condition = ''
      }
      if(this.fileList.length){
        this.postData.examine_demo = this.fileList.flatMap(item=>item.url.replace(this.ApiUrl,''))
      }else{
        this.postData.examine_demo = ''
      }
      this.$Model.PostTask(this.postData,data=>{
        if(data.code==1){
          if(this.taskId){
            this.postData = {
              task_class: this.InitData.taskclasslist[0].group_id,
              title: '',
              content: '',
              reward_price: 1,
              total_number: '',
              person_time: 1,
              total_price: 0,
              link_info: '',
              task_level: 1,
              end_time: '',
              finish_condition: '',
              examine_demo: '',
              task_step: [],
            }
            this.conditionArr = []
            this.fileList = []
            this.stepData = [
              {
                img: [],
                describe: ''
              }
            ]
            $('.ScrollBox')[0].scrollTop = 0
          }else{
            this.$router.go(-1)
          }
        }
      })
    },
  }
}
</script>
<style scoped>
.van-form{
  padding: 10px;
}
.van-form .van-field{
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
}
.van-form>>>.van-field__label{
  color: #999;
}
.van-form>>>.van-field__control--custom{
  min-height: auto;
}
.van-dropdown-menu{
  width: 100%;
}
.van-dropdown-menu>>>.van-dropdown-menu__bar{
  background: transparent;
  box-shadow: none;
  height: auto;
}
.van-dropdown-menu>>>.van-dropdown-menu__title{
  font-size: 14px;
  width: 100%;
  padding: 0;
}
.van-dropdown-menu>>>.van-dropdown-menu__title::after{
  border-color: transparent transparent #888 #888;
  right: 0;
}
.van-checkbox-group{
  display: flex;
  white-space: nowrap;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.van-checkbox-group>>>.van-icon{
  display: none;
}
.van-checkbox-group>>>.van-checkbox__label{
  margin: 3px 0;
  border: 1px #bbb solid;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
  color: #888;
}
.van-checkbox-group>>>.van-checkbox__icon--checked~.van-checkbox__label{
  color: #fff;
  background-color: #dd6161;
  border-color: #dd6161;
}
.Example>>>.van-uploader__wrapper{
  width: 105%;
}
.Example>>>.van-uploader__upload{
  background-color: #fff;
  margin: 4px 8px 4px 0;
}
.Example>>>.van-uploader__preview{
  margin: 4px 8px 4px 0;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image{
  width: 60px;
  height: 60px;
}

.Steps{
  padding: 10px;
}
.Steps .tag{
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background-color: #4087f1;
  color: #fff;
  border-radius: 100%;
  margin-right: 10px;
}
.Steps>>>.van-uploader{
  vertical-align: top;
}
.Steps>>>.van-uploader__upload,.Steps>>>.van-uploader__preview{
  margin: 0;
}
.Steps .van-cell__title,.Steps .van-cell__value{
  flex: none;
}
.Steps .van-cell__value{
  margin-left: 10px;
  flex: auto;
}
.Steps .van-cell__value textarea{
  width: 100%;
  min-height: 60px;
  border: 1px #ddd solid;
  display: block;
  padding: 0 5px;
  font-size: 12px;
}
.Tips{
  font-size: 12px;
  margin-top: 10px;
}
.Tips>>>a{
  color: #1989fa;
}
</style>
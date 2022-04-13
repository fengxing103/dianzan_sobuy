<template>
  <div class="Site PageBox" style="padding-bottom: 44px">
    <van-nav-bar
      fixed
      :border="false"
      :title="$t('task.show[0]')"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="ScrollBox" v-if="infoData">
      <div class="Details">
        <dl>
          <dt>
            <label>{{infoData.title}}</label>
            <i>+{{InitData.currency}}{{infoData.reward_price}}</i>
          </dt>
          <dd style="padding-top: 0;justify-content: space-between">
            <em>{{infoData.y_surplus_number}}{{$t('task.show[1]')}}</em>
            <em>{{$t('task.show[2]',{num:infoData.surplus_number})}}</em>
            <em>{{$t('task.show[3]')}}</em>
          </dd>
          <dd style="border-top: 1px #2d3446 solid">
            <label>{{$t('task.show[4]')}}：</label>
            <span>{{infoData.content}}</span>
          </dd>
        </dl>
        <dl>
          <dt style="justify-content: flex-start">
            <label>
              <img :src="`./static/head/${infoData.f_header}`" height="40" style="border-radius: 100%;vertical-align: middle;margin-right: 10px">
            </label>
            <span>
              <p>{{$t('task.show[5]')}}</p>
              {{infoData.f_username}}
            </span>
          </dt>
          <dd style="border-top: 1px #2d3446 solid">
            <label>{{$t('task.show[6]')}}：</label>
            <div style="flex: auto">
              <van-checkbox-group v-model="conditionArr">
                <van-checkbox :name="index" v-for="(item,index) in InitData.authenticationList" :key="index" disabled>{{item}}</van-checkbox>
              </van-checkbox-group>
            </div>
          </dd>
          <dd v-if="infoData.is_fx==1">
            <input class="link" id="AppLink" type="text" readonly :value="infoData.link_info" style="position: relative;z-index: 9">
            <span id="IosLink" style="position: absolute;opacity: 0">{{infoData.link_info}}</span>
            <div>
              <van-button block size="mini" plain round @click="$Util.CopyText('IosLink','AppLink')">{{$t('task.show[7]')}}</van-button>
              <van-button block size="mini" type="info" round style="margin: 5px 0 0;" @click="$Util.OpenUrl(infoData.link_info)">{{$t('task.show[8]')}}</van-button>
            </div>
            
          </dd>
          <dd v-else>
            <label>{{$t('task.show[17]')}}：</label>
            <textarea rows="3" style="width: 100%;flex: 1;margin-right: 5px;border-radius: 10px;padding: 5px 8px;border:0;background-color: #f5f5f5;color: #888;position: relative;z-index: 9">{{infoData.link_info}}</textarea>
            <input class="link" id="AppLink" type="text" readonly :value="infoData.link_info" style="position: absolute;opacity: 0">
            <span id="IosLink" style="position: absolute;opacity: 0">{{infoData.link_info}}</span>
            <div>
              <van-button block size="mini" type="info" round @click="$Util.CopyText('IosLink','AppLink')">{{$t('task.show[7]')}}</van-button>
              <van-button block size="mini" type="info" round style="margin: 5px 0 0;" @click="$Util.OpenUrl(infoData.link_info)">{{$t('task.show[8]')}}</van-button>
            </div>
          </dd>
        </dl>
      </div>
      <van-tabs :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60">
        <van-tab :title="$t('task.show[9]')">
          <dl v-for="(item,index) in infoData.task_step" :key="index">
            <dt>
              <label>{{$t('task.show[10]',{index: index+1})}}：</label>
              <span>{{item.describe}}</span>
            </dt>
            <dd>
              <van-image fit="cover" :src="`${ApiUrl}${item.img}`" @click="$ImagePreview([`${ApiUrl}${item.img}`])" />
            </dd>
          </dl>
        </van-tab>
        <van-tab :title="$t('task.show[11]')">
          <div v-if="infoData.examine_demo">
            <van-image fit="cover" :src="`${ApiUrl}${item}`" v-for="(item,index) in infoData.examine_demo" :key="index" @click="$ImagePreview([`${InitData.setting.up_url}${item}`])" />
          </div>
          <van-empty image="error" :description="$t('task.show[12]')" v-else />
        </van-tab>
      </van-tabs>
    </div>
    <van-loading class="DataLoad" size="60px" vertical v-if="isLoad">{{$t('task.show[13]')}}</van-loading>
    <div class="Button" style="position: fixed;bottom: 0;width: 100%;">
      <van-button block type="danger" style="font-size: 16px;" :loading="isSubmit" :loading-text="$t('task.show[14]')" @click="onSubmit" :disabled="infoData.is_l==0?false:true" v-if="isLogin">{{$t('task.show[15]')}}</van-button>
      <van-button block type="danger" style="font-size: 16px;" to="/login" v-else>{{$t('task.show[16]')}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  components: {

  },
  props: ['taskId'],
  data() {
    return {
      isLoad: true,
      infoData: '',
      conditionArr: [],
      isLogin: localStorage['Token']?true:false,
      isSubmit: false
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getTaskinfo()
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    getTaskinfo() {
      this.$Model.GetTaskinfo(this.taskId,data=>{
        this.isLoad = false
        if(data.code==1){
          this.infoData = data.info
          this.conditionArr = data.info.finish_condition||[]
        }
      })
    },
    onSubmit() {
      this.isSubmit = true
      this.$Model.ReceiveTask(this.taskId,data=>{
        this.isSubmit = false
        if(data.code==1){
          this.getTaskinfo()
        }
      })
    },
  }
}
</script>
<style scoped>
.Details dl{
  background-color: #151d31;
  margin-bottom: 10px;
  overflow: hidden;
}
.Details dl dt{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  overflow: hidden;
}
.Details dl dd{
  display: flex;
  align-items: center;
  padding: 15px;
  overflow: hidden;
}
.Details dl label{
  font-weight: 600;
}
.Details dl dt i{
  color: #4087f1;
}
.Details dl dd em{
  color: #999;
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
  border: 2px #ddd solid;
  padding: 0 5px;
  border-radius: 3px;
  font-size: 12px;
}
.van-checkbox-group>>>.van-checkbox__icon--checked~.van-checkbox__label{
  color: #4087f1;
  border-color: #4087f1;
}
.Details .link{
  background-color: #f5f5f5;
  border: 0;
  flex: auto;
  margin-right: 10px;
  border-radius: 10px;
  padding: 15px 10px;
  color: #888;
  text-align: center;
}
.van-tabs>>>.van-tabs__content{
  overflow: hidden;
  min-height: 150px;
}
.van-tabs>>>.van-tabs__content dl dt{
  display: flex;
  align-items: center;
  padding: 15px;
}
.van-tabs>>>.van-tabs__content dl dt label{
  font-weight: 600;
}
.van-tabs>>>.van-tabs__content dl dd{
  padding: 0 15px;
  margin-bottom: 15px;
}
.van-tabs>>>.van-tabs__content img{
  max-width: 100%;
}
.Button .van-button--disabled{
  background: #888!important;
  border-color: #888!important;
}
.PromoteInfo{
  position: relative;
  max-height: 410px;
  overflow: hidden;
}
.PromoteInfo>div{
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
  color: #fff;
}
.PromoteInfo>div h4{
  margin-bottom: 10px;
}
#QRCode>>>img{
  margin: 0 auto 10px;
  display: block;
  border: 8px #fff solid;
}
</style>
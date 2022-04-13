<template>
  <div class="PageBox" :style="infoData.o_status==2&&'padding-bottom: 44px'">
    <div class="ScrollBox" v-if="infoData">
      <div class="Details">
        <dl>
          <dd>
            <label>{{$t('audit.info[1]')}}：</label>
            <span>{{infoData.title}}</span>
          </dd>
          <dd>
            <label>{{$t('audit.info[2]')}}：</label>
            <span>{{InitData.currency}}<i>{{infoData.reward_price}}</i></span>
          </dd>
          <dd style="padding-top: 0;justify-content: space-between">
            <em>{{infoData.y_surplus_number}}{{$t('audit.info[3]')}}</em>
            <em>{{$t('audit.info[4]',{num:infoData.surplus_number})}}</em>
          </dd>
          <dd style="border-top: 1px #2d3446 solid;padding-top: 13px">
            <label>{{$t('audit.info[5]')}}：</label>
            <span>{{infoData.content}}</span>
          </dd>
          <dd>
            <label>{{$t('audit.info[6]')}}：</label>
            <span>{{infoData.link_info}}</span>
          </dd>
          <dd>
            <label>{{$t('audit.info[7]')}}：</label>
            <div style="display: flex;flex-wrap: wrap">
              <van-image fit="cover" width="49" :src="`${ApiUrl}${item}`" v-for="(item,index) in infoData.examine_demo" :key="index" @click="$ImagePreview([`${ApiUrl}${item}`])" />
            </div>
          </dd>
        </dl>
        <dl>
          <dt style="justify-content: flex-start">
            <label>
              <img :src="`./static/head/${infoData.j_header}`" height="40" style="border-radius: 100%;vertical-align: middle;margin-right: 10px">
            </label>
            <span>
              <p>{{$t('audit.info[8]')}}</p>
              <div style="display: flex;justify-content: space-between;align-items: center">{{infoData.j_username}} <em style="color:#999;font-size: 12px">{{infoData.add_time}} {{$t('audit.info[9]')}}</em></div>
            </span>
          </dt>
          <dd style="border-top: 1px #2d3446 solid;padding-top: 13px;">
            <label>{{$t('audit.info[10]')}}：</label>
            <span :class="`state${infoData.o_status}`">{{infoData.o_status_dec}}</span>
          </dd>
          <dd v-if="infoData.o_status!=1">
            <label>{{$t('audit.info[11]')}}：</label>
            <div v-if="infoData.o_examine_demo.length">
              <van-image fit="cover" width="49" height="49" :src="`${ApiUrl}${item}`" v-for="(item,index) in infoData.o_examine_demo" :key="index" @click="$ImagePreview([`${ApiUrl}${item}`])" />
            </div>
            <span v-else>{{$t('audit.info[12]')}}</span>
          </dd>
          <dd v-if="infoData.o_status!=6">
            <label>{{$t('audit.info[13]')}}：</label>
            <span>{{infoData.trial_time}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <van-loading class="DataLoad" size="60px" vertical v-if="isLoad">{{$t('audit.info[14]')}}</van-loading>
    <div style="position: fixed;bottom: 0;width: 100%;display: flex;align-items: center;justify-content: space-between;padding: 10px 5px" v-if="infoData.o_status==2">
      <van-button type="warning" style="font-size: 14px;flex: 1;margin: 0 5px" @click="onSubmit(5)" size="small">{{$t('audit.info[15]')}}</van-button>
      <van-button type="primary" style="font-size: 14px;flex: 1;margin: 0 5px" @click="onSubmit(2)" size="small">{{$t('audit.info[16]')}}</van-button>
      <van-button color="#aaa" style="font-size: 14px;flex: 1;margin: 0 5px" @click="onSubmit(4)" size="small">{{$t('audit.info[17]')}}</van-button>
      <van-button type="danger" style="font-size: 14px;flex: 1;margin: 0 5px" @click="onSubmit(3)" size="small">{{$t('audit.info[18]')}}</van-button>
    </div>
    <van-dialog 
      class="SiteDialog"
      v-model="showDialog" 
      :title="$t('audit.info[19]')" 
      show-cancel-button 
      close-on-popstate
      close-on-click-overlay
      @confirm="confirmSubmit"
      @closed="auditRemarks=''"
    >
      <van-field
        label-width="70"
        v-model="auditRemarks"
        rows="1"
        autosize
        :label="`${$t('audit.info[20]')}:`"
        type="textarea"
        :placeholder="$t('audit.info[21]')"
        :autosize="{maxHeight: 50}"
        clearable
        style="padding: 16px"
      />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'Show',
  components: {
    
  },
  props: ['auditId'],
  data() {
    return {
      isLoad: true,
      infoData: '',
      showDialog: false,
      auditRemarks: '',
      currState: 2,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('audit.info[0]')
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
      this.$Model.TaskOrderInfo(this.auditId,data=>{
        this.isLoad = false
        if(data.code==1){
          this.infoData = data.info
        }
      })
    },
    onSubmit(state) {
      this.currState = state
      this.showDialog = true
      switch(state) {
        case 2:
          this.auditRemarks = this.$t('audit.info[22]')
          break;
        case 3:
          this.auditRemarks = this.$t('audit.info[23]')
          break;
        case 4:
          this.auditRemarks = this.$t('audit.info[24]')
          break;
        case 5:
          this.auditRemarks = this.$t('audit.info[25]')
          break;
      }
    },
    confirmSubmit() {
      this.$Model.AuditTask({order_id: this.auditId,handle_remarks: this.auditRemarks,status: this.currState},data=>{
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
  padding: 0 13px;
  overflow: hidden;
  margin: 13px 0;
}
.Details dl dd{
  display: flex;
  align-items: center;
  padding: 0 13px;
  overflow: hidden;
  margin: 13px 0;
}
.Details dl dd .van-image{
  margin: 3px;
}
.Details dl label{
  font-weight: 600;
  white-space: nowrap;
}
.Details dl span{
  flex: 1;
}
.Details dl dd i{
  color: #4087f1;
}
.Details dl dd em{
  color: #999;
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

.state1{
  color: #f1c70d;
}
.state2{
  color: #dd6161;
}
.state3,.state4{
  color: #bbb;
}

</style>
<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <div class="RechargeInfo" v-if="rechargeId">
        <van-cell :title="$t('recharge.info[0]')">
          <template>
            {{InitData.currency}}<em>{{Number(rechargeData.money||0).toLocaleString()}}</em>
          </template>
        </van-cell>
        <van-field 
          readonly 
          :label="$t('recharge.info[1]')" 
          :value="rechargeData.orderNumber"
        >
          <template #button>
            <span id="IosOrder" style="position: absolute;opacity: 0">{{rechargeData.orderNumber}}</span>
            <input id="AppOrder" type="text" readonly :value="rechargeData.orderNumber" style="position: absolute;opacity: 0">
            <van-button size="mini" type="primary" @click="$Util.CopyText('IosOrder','AppOrder')">{{$t('recharge.info[5]')}}</van-button>
          </template>
        </van-field>
        <van-field 
          readonly 
          :label="$t('recharge.info[11]')" 
          :value="rechargeData.remarks"
          v-if="rechargeData.remarks"
        />


        <van-divider :hairline="false" style="text-align: center;margin: 10px 0" v-if="rechargeData&&rechargeData.receive.length"><span v-html="$t('recharge.tips[0]')"></span></van-divider>
        <van-divider :hairline="false" style="text-align: center;margin: 10px 0" v-else><span v-html="$t('recharge.tips[5]')"></span></van-divider>
        <van-panel :title="$t('recharge.info[6]',{type:item.typeName})" :desc="item.qrcodenew?$t('recharge.tips[1]'):$t('recharge.tips[2]')" v-for="(item,index) in rechargeData.receive" :key="item.id" :border="false">
          <div style="padding: 16px" v-if="item.qrcodenew">
            <img :src="`${InitData.setting.up_url}${item.qrcodenew}`">
          </div>
          <div v-else>
            <van-field 
              :border="false" 
              readonly 
              :value="item.name" 
              :label="$t('recharge.info[4]')"
            >
              <template #button>
                <span :id="`IosName${index}`" style="position: absolute;opacity: 0">{{item.name}}</span>
                <input :id="`AppName${index}`" type="text" readonly :value="item.name" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosName${index}`,`AppName${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field>
            <van-field
              readonly 
              :value="item.typeName" 
              :label="$t('recharge.info[2]')"
            >
              <template #button>
                <span :id="`IosBank${index}`" style="position: absolute;opacity: 0">{{item.typeName}}</span>
                <input :id="`AppBank${index}`" type="text" readonly :value="item.typeName" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosBank${index}`,`AppBank${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field>
            <van-field 
              :border="false" 
              readonly 
              :value="item.account" 
              :label="$t('recharge.info[3]')"
            >
              <template #button>
                <span :id="`IosAccount${index}`" style="position: absolute;opacity: 0">{{item.account}}</span>
                <input :id="`AppAccount${index}`" type="text" readonly :value="item.account" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosAccount${index}`,`AppAccount${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field>
            <!-- <van-field 
              :border="false" 
              readonly 
              :value="item.bank" 
              :label="$t('recharge.info[9]')"
            >
              <template #button>
                <span :id="`IosIFSC${index}`" style="position: absolute;opacity: 0">{{item.bank}}</span>
                <input :id="`AppIFSC${index}`" type="text" readonly :value="item.bank" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosIFSC${index}`,`AppIFSC${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field> -->
            <!-- <van-field 
              :border="false" 
              readonly 
              :value="item.account_type" 
              :label="$t('recharge.info[10]')"
            >
              <template #button>
                <span :id="`IosType${index}`" style="position: absolute;opacity: 0">{{item.account_type}}</span>
                <input :id="`AppType${index}`" type="text" readonly :value="item.account_type" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosType${index}`,`AppType${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field> -->
          </div>
        </van-panel>
        <van-divider :hairline="false">{{$t('recharge.tips[3]')}}</van-divider>
        <van-divider :hairline="false">{{$t('recharge.tips[4]')}}</van-divider>
      </div>
      <div v-else>
        <div v-if="!showPrice">
          <van-divider content-position="left">
            <i18n path="recharge.default[3]">
              <em style="color:#4087f1" slot="money">{{InitData.currency}}{{Number(UserInfo.balance).toLocaleString()}}</em>
            </i18n>
          </van-divider>
          <van-cell-group class="RechargeList" :border="false" v-if="rechargeList">
            <van-cell v-for="item in rechargeList" :key="item.id" is-link @click="selectType(item.id)">
              <template #icon>
                <img :src="`${InitData.setting.q_server_name}${item.qrcode}`" height="40" style="border-radius: 100%;margin-right: 10px">
              </template>
              <template #title>
                <b>{{item.name}}</b>
              </template>
              <template #label>
                {{$t('recharge.default[4]',{currency:InitData.currency,min:item.minPrice,max:item.maxPrice,fee:item.fee})}}
              </template>
            </van-cell>
          </van-cell-group>
        </div>
        <div class="mt15" v-else>
          <van-field
            class="MoneyList" 
            :label="$t('recharge.label[0]')" 
            size="large"
            label-width="80"
            v-if="rechargeInfo.fixed"
          >
            <template #input>
              <van-radio-group v-model="postData.money" direction="horizontal">
                <van-radio :name="item" v-for="item in rechargeInfo.fixed.split(',')" :key="item">{{item}}</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field 
            v-model.trim="postData.money"
            type="number"
            :label="$t('recharge.label[0]')" 
            :placeholder="$t('recharge.placeholder[0]')" 
            size="large"
            label-width="80"
            v-else
          />
          <van-field
            size="large"
            :label="$t('recharge.label[1]')" 
            label-width="80"
            v-if="pickerList.length"
          >
            <template #input>
              <van-radio-group v-model="jumpData.result.bid" direction="horizontal" @change="onConfirm">
                <van-radio :name="item.id" v-for="item in pickerList" :key="item.id">{{item.bank_name}}</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field 
            v-model.trim="postData.name"
            type="text"
            :label="$t('recharge.label[2]')" 
            :placeholder="$t('recharge.placeholder[2]')" 
            size="large"
            label-width="80"
          />
          <van-field 
            v-model.trim="upiData.pay_name"
            type="text"
            :label="$t('recharge.label[3]')" 
            :placeholder="$t('recharge.placeholder[5]')" 
            size="large"
            label-width="80"
            v-if="rechargeInfo.mode=='upi'"
          />
          <van-field 
            v-model.trim="upiData.pay_mobile"
            type="tel"
            :label="$t('recharge.label[4]')" 
            :placeholder="$t('recharge.placeholder[6]')" 
            size="large"
            label-width="80"
            v-if="rechargeInfo.mode=='upi'"
          />
          <van-field 
            v-model.trim="upiData.pay_account"
            type="text"
            :label="$t('recharge.label[5]')" 
            :placeholder="$t('recharge.placeholder[7]')" 
            size="large"
            label-width="80"
            v-if="rechargeInfo.mode=='upi'"
          />
          <van-field 
            v-model.trim="upiData.pay_email"
            type="text"
            :label="$t('recharge.label[6]')" 
            :placeholder="$t('recharge.placeholder[8]')" 
            size="large"
            label-width="80"
            v-if="rechargeInfo.mode=='upi'"
          />
          <div style="padding: 20px 15px;">
            <van-button block type="danger" :loading="isSubmit" :loading-text="$t('recharge.default[5]')" style="font-size: 18px;" @click="onSubmit">{{$t('recharge.default[6]')}}</van-button>
            <van-button block style="font-size: 18px;margin-top: 10px;" @click="showPrice=false">{{$t('recharge.default[7]')}}</van-button>
          </div>
        </div>
      </div>
      <van-loading class="Loading" size="50" vertical v-if="isLoad">{{$t('recharge.default[8]')}}</van-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  components: {

  },
  props: ['rechargeId'],
  data() {
    return {
      amountMoney: this.$route.query.amount||'',
      postData: {
        money: this.$route.query.amount||'',
        recharge_id: '',
        name: ''
      },
      rechargeList: '',
      pickerList: '',
      showPicker: false,
      isSubmit: false,
      rechargeData: '',
      rechargeInfo: '',
      showPrice: false,
      pickerName: '',
      jumpData: {
        result: {
          bid: ''
        }
      },
      isLoad: true,
      fileList: [],
      upiData: {
        pay_name: '',
        pay_mobile: '',
        pay_account: '',
        pay_email: ''
      },
    }
  },
  computed: {

  },
  watch: {
    $route(){
      if(this.rechargeId){
        this.$parent.navBarTitle = this.$t('recharge.default[1]')
        this.getRechargeInfo()
      }else{
        this.$parent.navBarTitle = this.$t('recharge.default[0]')
        this.$Model.GetRechargeType(data=>{
          this.isLoad = false
          this.rechargeList = data.info
        })
      }
    },
  },
  created() {
    if(this.rechargeId){
      this.$parent.navBarTitle = this.$t('recharge.default[1]')
      this.getRechargeInfo()
    }else{
      this.$parent.navBarTitle = this.$t('recharge.default[0]')
      this.$Model.GetRechargeType(data=>{
        this.isLoad = false
        this.rechargeList = data.info
      })
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    selectType(typeid) {
      this.postData = {
        money: this.$route.query.amount||'',
        recharge_id: typeid,
        name: ''
      }
      this.jumpData = {
        result: {
          bid: ''
        }
      }
      this.rechargeInfo = this.rechargeList.find(item=>item.id==typeid)
      this.showPrice = true
      if(this.rechargeInfo.bankList){
        this.pickerList = this.rechargeInfo.bankList
      }else{
        this.pickerList = ''
      }
      switch(this.rechargeInfo.mode) {
        case "wap":
        case "scan":
          this.jumpData.url = this.rechargeInfo.submitUrl
          this.jumpData.result = {
            uid: this.UserInfo.userid,
            typeid: typeid,
            bid: '',
            scanType: ''
          }
          break;
        case "online":
        case "quick":
          this.jumpData.url = this.rechargeInfo.submitUrl
          this.jumpData.result = {
            uid: this.UserInfo.userid,
            typeid: typeid,
            bid: '',
            bank_code: ''
          }
          break;
        case "upi":
          this.jumpData.url = this.rechargeInfo.submitUrl
          this.jumpData.result = {
            uid: this.UserInfo.userid,
            typeid: typeid,
            bid: '',
            bank_code: '',
            pay_name: '',
            pay_mobile: '',
            pay_account: '',
            pay_email: ''
          }
          break;
      }
    },
    onConfirm(val) {
      switch(this.rechargeInfo.mode) {
        case "wap":
        case "scan":
          this.jumpData.result.scanType = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
          break;
        case "online":
        case "quick":
        case "upi":
          this.jumpData.result.bank_code = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
          break;
        case "upi":
          this.jumpData.result.bank_code = this.rechargeInfo.bankList.find(item=>item.id==val).bank_code
          break;
      }
    },
    onSubmit() {
      if(!this.postData.money){
        this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
        return;
      }
      if(Number(this.postData.money)<Number(this.rechargeInfo.minPrice)){
        this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{currency: this.InitData.currency,min:this.rechargeInfo.minPrice}));
        return;
      }
      if(Number(this.postData.money)>Number(this.rechargeInfo.maxPrice)){
        this.$Dialog.Toast(this.$t('recharge.placeholder[4]',{currency: this.InitData.currency,max:this.rechargeInfo.maxPrice}));
        return;
      }
      switch(this.rechargeInfo.mode) {
        case "wap":
        case "scan":
        case "online":
        case "quick":
        case "upi":
          if(!this.jumpData.result.bid){
            this.$Dialog.Toast(this.$t('recharge.placeholder[1]'));
            return;
          }
          if(this.rechargeInfo.mode=='upi'){
            if(!this.upiData.pay_name){
              this.$Dialog.Toast(this.$t('recharge.placeholder[5]'));
              return;
            }
            if(!this.upiData.pay_mobile){
              this.$Dialog.Toast(this.$t('recharge.placeholder[6]'));
              return;
            }
            if(!this.upiData.pay_account){
              this.$Dialog.Toast(this.$t('recharge.placeholder[7]'));
              return;
            }
            if(!this.upiData.pay_email){
              this.$Dialog.Toast(this.$t('recharge.placeholder[8]'));
              return;
            }
            this.jumpData.result.pay_name = this.upiData.pay_name
            this.jumpData.result.pay_mobile = this.upiData.pay_mobile
            this.jumpData.result.pay_account = this.upiData.pay_account
            this.jumpData.result.pay_email = this.upiData.pay_email
          }
          this.jumpData.result.name = this.postData.name
          this.jumpData.result.price = this.postData.money
          const url = this.jumpData.url + '?' + $.param(this.jumpData.result)
          this.$Util.OpenUrl(url)
          break;
        default:
          if(!this.postData.name){
            this.$Dialog.Toast(this.$t('recharge.placeholder[2]'));
            return;
          }
          this.isSubmit = true;
          this.$Model.RechargeOrder(this.postData,data=>{
            this.isSubmit = false;
            if(data.code==1){
              this.showPrice = false
            }
          })
      }
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
        param.append('type',4);
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
    setOrderInfo() {
      const screenshots = this.fileList.flatMap(item=>item.url.replace(this.InitData.setting.up_url,''))
      this.$Model.SetOrderInfo({orderNumber: this.rechargeId,screenshots: screenshots},data=>{
        this.getRechargeInfo()
      })
    },
    getRechargeInfo() {
      this.$Model.GetRechargeInfo(this.rechargeId,data=>{
        this.isLoad = false
        this.rechargeData = data
        this.fileList = data.screenshots?data.screenshots.flatMap(item=>[{url: this.InitData.setting.up_url+item}]):[]
      })
    },
  }
}
</script>
<style scoped>
.RechargeList{
  margin-bottom: 20px;
}
.RechargeList .van-cell__title{
  line-height: 1;
}
.RechargeInfo .van-cell>>>.van-field__control{
  text-align: right;
}
.RechargeInfo .van-cell--large>>>.van-field__control{
  font-size:16px;
}
.RechargeInfo .van-cell .van-cell__value em{
  font-size: 20px;
  color: #4087f1;
}
.RechargeInfo .van-panel{
  margin: 10px;
  border: 1px rgba(255, 255,255,.2) solid;
  border-radius: 3px;
  background-color: #151d31;
}
.RechargeInfo .van-panel__header{
  background-color: #242d41;
  color: #fff;
}
.RechargeInfo .van-panel__content .van-cell{
  padding: 0 16px;
  margin: 10px 0;
}
.RechargeInfo .van-panel__content>>>.van-field__control{
  text-align: left;
}
.RechargeInfo .van-panel__content img{
  width: 80%;
  margin: 0 auto;
  display: block;
}
.van-divider{
  font-size: 12px;
  line-height: 1.5;
}
.MoneyList{
  word-break: break-word;
}
.MoneyList .van-cell__value{
  flex: auto;
}
.MoneyList .van-radio--horizontal{
  margin: 3px 6px 3px 0;
  position: relative;
}
.MoneyList .van-radio-group>>>.van-radio__icon{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.MoneyList .van-radio-group>>>.van-radio__icon--checked~.van-radio__label{
  color: #fff;
  padding: 0 17px 0 3px;
}
.MoneyList .van-radio-group>>>.van-radio__icon .van-icon{
  width: 100%;
  border-radius: 5px;
  text-align: right;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
}
.MoneyList .van-radio-group>>>.van-radio__label{
  margin: 0;
  position: relative;
  z-index: 9;
  padding: 0 10px;
  line-height: 28px;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image{
  width: 60px;
  height: 60px;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview{
  margin: 4px 8px 4px 0;
  background-color: #f7f8fa;
  border-radius: 8px;
}
</style>
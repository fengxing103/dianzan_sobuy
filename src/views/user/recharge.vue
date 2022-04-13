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
        <van-panel title="Transfer" :desc="item.qrcodenew?$t('recharge.tips[1]'):$t('recharge.tips[2]')" v-for="(item,index) in rechargeData.receive" :key="item.id" :border="false">
          <div style="padding: 16px" v-if="item.qrcodenew">
            <img :src="`${InitData.setting.up_url}${item.qrcodenew}`">
          </div>
          <div v-else>
            <van-field 
              :border="false" 
              readonly 
              :value="item.name" 
			  v-if="rechargeData.type==2"
              :label="$t('recharge.info[4]')"
            >
              <template #button>
                <span :id="`IosName${index}`" style="position: absolute;opacity: 0">{{item.name}}</span>
                <input :id="`AppName${index}`" type="text" readonly :value="item.name" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosName${index}`,`AppName${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field>
			
			<van-field
			  :border="false" 
			  readonly 
			  v-if="rechargeData.type!=2"
			  :value="item.name" 
			  label="Currency"
			>
			  <template #button>
			    <span :id="`IosName${index}`" style="position: absolute;opacity: 0">{{item.name}}</span>
			    <input :id="`AppName${index}`" type="text" readonly :value="item.name" style="position: absolute;opacity: 0">
			    <van-button size="mini" type="primary" @click="$Util.CopyText(`IosName${index}`,`AppName${index}`)">{{$t('recharge.info[5]')}}</van-button>
			  </template>
			</van-field>
			
            <van-field
              readonly 
			  v-if="rechargeData.type==2"
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
			  v-if="rechargeData.type==2"
              :value="item.account" 
              :label="$t('recharge.info[3]')"
            >
              <template #button>
                <span :id="`IosAccount${index}`" style="position: absolute;opacity: 0">{{item.account}}</span>
                <input :id="`AppAccount${index}`" type="text" readonly :value="item.account" style="position: absolute;opacity: 0">
                <van-button size="mini" type="primary" @click="$Util.CopyText(`IosAccount${index}`,`AppAccount${index}`)">{{$t('recharge.info[5]')}}</van-button>
              </template>
            </van-field>
			
			<van-field
			  :border="false" 
			  readonly 
			  v-if="rechargeData.type!=2"
			  :value="item.account" 
			  label="Address"
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
        <div >
        <!--  <van-divider content-position="left">
            <i18n path="recharge.default[3]">
              <em style="color:#4087f1" slot="money">{{InitData.currency}}{{Number(UserInfo.balance).toLocaleString()}}</em>
            </i18n>
          </van-divider> -->
          <!-- <van-cell-group class="RechargeList" :border="false" v-if="rechargeList"> -->
            <!-- <van-cell v-for="item in rechargeList" :key="item.id" is-link @click="selectType(item.id)"> -->
              <div style="background-color: white;width: 90%;height: 140px;margin-left: 5%;border-radius: 20px;color: black;margin-top: 5%;" v-if="rechargeList">
              				<div style="padding: 10px;">
              					<span style="font-weight: 600;">Recharge channel</span>
              					<van-radio-group v-model="zfchecked">
              					  <van-radio :name="index"  style="margin-top: 3%;font-size: 10px;" v-for="(item,index) in rechargeList" :key="item.id" is-link @click="selectType(item.id,index)" :style="zfchecked[index]?'background-color: #fce5df;':''">
              					   {{item.name}}
              					    <template #icon="props">
              					      <img class="img-icon" :src="zfchecked[index] ? 'https://abc.2225192.com//static/img/selected.png' : 'https://abc.2225192.com//static/img/select.png'" style="width: 20px;" />
              					    </template>
              					  </van-radio>
								  
								 <van-radio name="2"  style="margin-top: 3%;font-size: 10px;" v-if="chuantype" is-link @click="selectType(114,2)" :style="zfchecked[2]?'background-color: #fce5df;':''">
								   Balance Payment (0~1000000000)
								    <template #icon="props">
								      <img class="img-icon" :src="zfchecked[2] ? 'https://abc.2225192.com//static/img/selected.png' : 'https://abc.2225192.com//static/img/select.png'" style="width: 20px;" />
								    </template>
								  </van-radio>
								  
              					</van-radio-group>
              				</div>
              				
              			</div>
						
				<div style="background-color: white;width: 90%;height: 160px;margin-left: 5%;border-radius: 20px;color: black;margin-top: 2%;" v-if="!chuantype">
								<div style="padding: 10px;" v-if="zctype == 1">
									<span style="font-weight: 600;"> Amount </span>
									<div style="padding-top: 10px; padding-bottom: 10px;border-bottom: #000000 solid 1px;"><span style="color: rgb(254, 92, 68); font-size: 18px;"> USDT </span>
									<span style="padding-left: 10px;">
										<input type="number"  ref="searchInput" v-model="inputVal" placeholder="Please enter the recharge amount" style="border: 0px; font-size: 18px; font-weight: 600; width: 75%;"></span></div>
									
									<div style="justify-content: space-between; display: flex;border-bottom: #000000 solid 1px;margin-top: 3%;">
										<div style="font-weight: 600; font-size: 16px;"> Exchange Rate </div><div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
										<span style="color: rgb(254, 92, 68); font-size: 18px;"> {{zrete[0]}}:{{zrete[1]}} </span></div></div>
									
									<div style="justify-content: space-between; display: flex;margin-top: 3%;border-bottom: #000000 solid 1px;">
										<div style="font-weight: 600; font-size: 16px;"> Receipt amount </div>
									<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;"><span style="color: rgb(254, 92, 68); font-size: 18px;">
									 {{postData.money2}} </span></div></div>
									 
									 
				</div>
				
				<div style="padding: 10px;" v-if="zctype == 2">
									<span style="font-weight: 600;"> Amount </span>
									<div style="padding-top: 10px; padding-bottom: 10px;border-bottom: #000000 solid 1px;"><span style="color: rgb(254, 92, 68); font-size: 18px;"> USDT </span>
									<span style="padding-left: 10px;">
										<input type="number"  ref="searchInput" v-model="inputVal" placeholder="Please enter the recharge amount" style="border: 0px; font-size: 18px; font-weight: 600; width: 75%;"></span></div>
									
									<div style="justify-content: space-between; display: flex;border-bottom: #000000 solid 1px;margin-top: 3%;">
										<div style="font-weight: 600; font-size: 16px;"> Exchange Rate </div><div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
										<span style="color: rgb(254, 92, 68); font-size: 18px;"> {{zrete[0]}}:{{zrete[1]}} </span></div></div>
									
									<div style="justify-content: space-between; display: flex;margin-top: 3%;border-bottom: #000000 solid 1px;">
										<div style="font-weight: 600; font-size: 16px;"> Receipt amount </div>
									<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;"><span style="color: rgb(254, 92, 68); font-size: 18px;">
									 {{postData.money2}} </span></div></div>
									 
									 
				</div>
				
				
								
				</div>		
				
				<div style="background-color: white;width: 90%;height: 160px;margin-left: 5%;border-radius: 20px;color: black;margin-top: 2%;" v-if="chuantype">
								<div style="padding: 10px;">
									<div class="shadowbox">
										<!---->
										<div style="justify-content: space-between; display: flex;margin-top: 3%;">
											<div style="font-weight: 600; font-size: 16px;">
												Purchase Level
											</div>
											<div style="margin-left: 15px;">
												<select style="font-size: 16px;" @change="findItemNameBYClass" >
													<!---->
													<option value="1">
														Full member
													</option>
													<option value="2">
														VIP1
													</option>
													<option value="3">
														VIP2
													</option>
													<option value="4">
														VIP3
													</option>
													<option value="5">
														VIP4
													</option>
												</select>
											</div>
										</div>
										<div class="line">
										</div>
										<div style="justify-content: space-between; display: flex;margin-top: 1%;">
											<div style="font-weight: 600; font-size: 16px;">
												Member Price
											</div>
											<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
												<span style="color: rgb(254, 92, 68); font-size: 18px;">
													AUD 150
												</span>
											</div>
										</div>
										<div class="line">
										</div>
										<div style="justify-content: space-between; display: flex;margin-top: 1%;">
											<div style="font-weight: 600; font-size: 16px;">
												Discount
											</div>
											<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
												<span style="color: rgb(254, 92, 68); font-size: 18px;">
													100%
												</span>
											</div>
										</div>
										<div class="line">
										</div>
										<div style="justify-content: space-between; display: flex;margin-top: 1%;">
											<div style="font-weight: 600; font-size: 16px;">
												Exchange Rate
											</div>
											<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
												<span style="color: rgb(254, 92, 68); font-size: 18px;">
													{{zrete[0]}}:{{zrete[1]}}
												</span>
											</div>
										</div>
										<div class="line">
										</div>
										<div style="justify-content: space-between; display: flex;margin-top: 1%;">
											<div style="font-weight: 600; font-size: 16px;">
												Payment Amount
											</div>
											<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
												<span style="color: rgb(254, 92, 68); font-size: 18px;">
													{{postData.money}}
												</span>
											</div>
										</div>
										<div class="line">
										</div>
									</div>
									<!-- <span style="font-weight: 600;"> Amount2 </span>
									<div style="padding-top: 10px; padding-bottom: 10px;border-bottom: #000000 solid 1px;"><span style="color: rgb(254, 92, 68); font-size: 18px;"> AUD </span>
									<span style="padding-left: 10px;">
										<input type="number" ref="searchInput" v-model="inputVal" placeholder="Please enter the recharge amount" style="border: 0px; font-size: 18px; font-weight: 600; width: 75%;"></span></div>
									
									<div style="justify-content: space-between; display: flex;border-bottom: #000000 solid 1px;margin-top: 3%;">
										<div style="font-weight: 600; font-size: 16px;"> Exchange Rate </div><div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;">
										<span style="color: rgb(254, 92, 68); font-size: 18px;"> {{zrete[0]}}:{{zrete[1]}} </span></div></div>
									
									<div style="justify-content: space-between; display: flex;margin-top: 3%;border-bottom: #000000 solid 1px;">
										<div style="font-weight: 600; font-size: 16px;"> Payment Amount </div>
									<div align="right" style="margin-left: 15px; justify-content: space-around; display: flex;"><span style="color: rgb(254, 92, 68); font-size: 18px;">
									 {{postData.money}} </span></div></div> -->
				</div>
				
				
								
				</div>		
            <!-- </van-cell> -->
          <!-- </van-cell-group> -->
        </div>
        <div class="mt15"  >
          
          <div style="padding: 20px 15px;">
            <van-button block round  type="danger"  :loading="isSubmit" :loading-text="$t('recharge.default[5]')" style="font-size: 18px;background-color: #ff8554;" @click="onSubmit">{{$t('recharge.default[6]')}}</van-button>
            <!-- <van-button block style="font-size: 18px;margin-top: 10px;" @click="showPrice=false">{{$t('recharge.default[7]')}}</van-button> -->
			
			
          </div>
		  <div class="shadowbox" style="
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 2px 5px #888;
    overflow: hidden;
    width: 100%;
    padding: 15px;
    color: #666;
	width: 90%;
	margin-left: 5%;
">
			  <div style="font-weight: 600; font-size: 16px;"> Supplementary Brief </div>
			  <div style="padding: 15px; background-color: rgb(226, 226, 226); margin-top: 10px;">
				  <p>You need to obtain the latest payment information for each upgrade, please do not keep the old account information</p>
				  <p><br></p><p>Recharge time: 24 hours</p><p><br></p>
				  <!-- <p>Use USDT and other digital currencies to pay VIP level as a gift of 10%.</p> -->
				  <p><br></p><p>The exchange rate of virtual currency is for reference only and depends on the transaction time</p><p><br></p>
				  <p>For virtual currency exchange rates, please refer to <a href="https://www.xe.com">https://www.xe.com</a> </p><p><br></p>
				  </div></div>
		  
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
		chuantype:0,
		 inputVal: '',
		      timeout: null,
		zfchecked:[1,0,0],
		zrete:[1,1],
      amountMoney: this.$route.query.amount||'',
      postData: {
        money: this.$route.query.amount||'0',
		money2:0,
        recharge_id: '113',
        name: 'USDT'
      },
      rechargeList: '',
      pickerList: '',
      showPicker: false,
      isSubmit: false,
      rechargeData: '',
      rechargeInfo: '',
      showPrice: false,
      pickerName: '',
	  zctype:1,//1usdt充值 2银行卡充值
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
	  yuanrate:1,
    }
  },
  computed: {

  },
  watch: {
	   inputVal(curVal, oldVal) {
	          // 实现input连续输入，只发一次请求
	          clearTimeout(this.timeout);
			  
	          this.timeout = setTimeout(() => {
	            this.postData.money2 = curVal*this.zrete[1];
	          }, 300);
	      },
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
	  // console.log(this.$route.query.type || 0);
	  this.chuantype = this.$route.query.type || 0;
	  if(this.chuantype == 1){
		  this.postData.money = 108;
	  }else{
		this.postData.money = 0;
	  }
	  
    if(this.rechargeId){
      this.$parent.navBarTitle = this.$t('recharge.default[1]')
      this.getRechargeInfo()
    }else{
      this.$parent.navBarTitle = this.$t('recharge.default[0]')
      this.$Model.GetRechargeType(data=>{
        this.isLoad = false
        this.rechargeList = data.info
		// this.zrete[1] = data.zrate.zrate
		this.yuanrate = data.zrate.zrate
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
	  findItemNameBYClass:function(e){
	  				console.log( e.target.value)
					console.log(this.InitData.UserGradeList);
					if(e.target.value == 1){
						if(this.zfchecked[0]==1){
							this.postData.money = 108;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 109;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 150;
						}
					}else if(e.target.value == 2){
						if(this.zfchecked[0]==1){
							this.postData.money = 216;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 217;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 300;
						}
					}else if(e.target.value == 3){
						if(this.zfchecked[0]==1){
							this.postData.money = 647;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 652;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 900;
						}
					}else if(e.target.value == 4){
						if(this.zfchecked[0]==1){
							this.postData.money = 1871;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 1884;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 2600;
						}
					}else{
						if(this.zfchecked[0]==1){
							this.postData.money = 5755;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 5797;
						}else if(this.zfchecked[1]==1){
							this.postData.money = 8000;
						}
					}
	  		},
    selectType(typeid,index) {
		
		
		
      // this.postData = {
      //   money: this.postData.money||'',
      //   recharge_id: typeid,
      //   name: ''
      // }
	  this.postData.recharge_id = typeid;
      this.jumpData = {
        result: {
          bid: ''
        }
      }
	  console.log(index);
	  if(index == 0){
	  	this.zfchecked = [1,0,0];
	  	this.zrete[1] = 1;
	  	this.postData.money2 = this.inputVal * 1;
	  	// this.postData.money = parseInt(this.inputVal/this.zrete[1]);
	  	this.postData.name = "USDT";
	  	this.postData.recharge_id = "113";
	  }else if(index == 1){
	  	this.zfchecked = [0,1,0];
		this.zrete[1] = this.yuanrate;
		this.postData.money2 = this.inputVal * this.yuanrate;
	  	// this.zrete = [1,1.38];
	  	// this.postData.money = parseInt(this.inputVal/this.zrete[1]);
		this.postData.name = "Bank card";
		this.postData.recharge_id = "108";
	  }else if(index == 2){
	  	this.zfchecked = [0,0,1];
	  	this.zrete = [1,1];
	  	this.postData.money = parseInt(this.inputVal/this.zrete[1]);
		this.postData.name = "余额支付";
		this.postData.recharge_id = "115";
	  }else{
	  	this.zfchecked = [0,1,0];
	  	// this.zrete = [1,1.38];
	  	this.postData.money = parseInt(this.inputVal/this.zrete[1]);
	  	this.postData.name = "USDT";
	  	this.postData.recharge_id = "113";
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
      // if(!this.postData.money){
      //   this.$Dialog.Toast(this.$t('recharge.placeholder[0]'));
      //   return;
      // }
      // if(Number(this.postData.money)<=Number(this.rechargeInfo.minPrice)){
      //   this.$Dialog.Toast(this.$t('recharge.placeholder[3]',{currency: this.InitData.currency,min:this.rechargeInfo.minPrice}));
      //   return;
      // }
      // if(Number(this.postData.money)>=Number(this.rechargeInfo.maxPrice)){
      //   this.$Dialog.Toast(this.$t('recharge.placeholder[4]',{currency: this.InitData.currency,max:this.rechargeInfo.maxPrice}));
      //   return;
      // }
	 
      switch(this.rechargeInfo.mode) {
        case "wap":
        case "scan":
        case "online":
        case "quick":
        case "upi":
		this.upiData.pay_name = "usdt";
          // if(!this.jumpData.result.bid){
          //   this.$Dialog.Toast(this.$t('recharge.placeholder[1]'));
          //   return;
          // }
          if(this.rechargeInfo.mode=='upi'){
            // if(!this.upiData.pay_name){
            //   this.$Dialog.Toast(this.$t('recharge.placeholder[5]'));
            //   return;
            // }
            // if(!this.upiData.pay_mobile){
            //   this.$Dialog.Toast(this.$t('recharge.placeholder[6]'));
            //   return;
            // }
            if(!this.upiData.pay_account){
              this.$Dialog.Toast(this.$t('recharge.placeholder[7]'));
              return;
            }
            // if(!this.upiData.pay_email){
            //   this.$Dialog.Toast(this.$t('recharge.placeholder[8]'));
            //   return;
            // }
            // this.jumpData.result.pay_name = this.upiData.pay_name
            // this.jumpData.result.pay_mobile = this.upiData.pay_mobile
            this.jumpData.result.pay_account = this.upiData.pay_account
            // this.jumpData.result.pay_email = this.upiData.pay_email
          }
          // this.jumpData.result.name = this.postData.name
          this.jumpData.result.price = this.postData.money
          const url = this.jumpData.url + '?' + $.param(this.jumpData.result)
          this.$Util.OpenUrl(url)
          break;
        default:
          // if(!this.postData.name){
          //   this.$Dialog.Toast(this.$t('recharge.placeholder[2]'));
          //   return;
          // }
          this.isSubmit = true;
		  this.postData.money = this.inputVal;
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
.van-button--danger {
    border-color: transparent;
    background: linear-gradient(90deg,#ff8554,#ff8554);
}
	
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
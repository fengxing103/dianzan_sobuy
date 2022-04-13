<template>
  <div class="PageBox">
    <div class="ScrollBox Wallet" style="color: #000000;">
       <div class="balance">{{UserInfo.balance}}</div>  
            <div class="tool">
              <div>
                <router-link to="/user/recharge">{{$t('wallet.default[1]')}}</router-link>
                <!-- <a href="javascript:;" @click="goTurn('turn')">转账</a> -->
                <a href="javascript:;" @click="goTurn('draw')">{{$t('wallet.default[2]')}}</a>
              </div>
            </div>
      <van-tabs type="card"  :border="false" color="rgb(254, 92, 68)" title-inactive-color="rgb(254, 92, 68)" style="color: #000000;" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="(item,index) in taskTabs" :title="item.text" :key="index" style="padding: 0 12px;color: #ffffff;">
          <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="isLoad"
              :finished="isFinished"
              :finished-text="listData[tabsIndex].length?$t('vanPull[0]'):$t('vanPull[1]')"
              @load="onLoad"
              :class="{Empty:!listData[tabsIndex].length}"
			  
            >
              <div v-if="tabsIndex==0||tabsIndex==1" >
                <van-cell class="FundItem" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.dan" @click="openInfo(item.dan)" style="background-color: white;color: #000000;">
                  <div :class="`icon tag${tabsIndex}`" slot="icon" >
                    {{tabsIndex==0?$t('wallet.default[5]'):$t('wallet.default[6]')}}
                  </div>
                  <template #title>
                    <div style="color: #000000;">
                      <span>{{item.dan}}</span>
                      <span>{{item.adddate}}</span>
                    </div>
                    <div style="margin-top: 3%;">
                      <span class="money" style="color: #000000;">{{Number(item.money)}}</span>
                      <span>{{item.status_desc}}</span>
                    </div>
					<div v-show="tabsIndex==1">
					  <span class="money" style="color: #000000;">{{Number(item.actual_amount)}}</span>
					  <span>actual amount</span>
					</div>
                  </template>
                </van-cell>
              </div>
              <div v-else>
                <van-cell class="FundItem" :border="false" v-for="(item,index) in listData[tabsIndex]" :key="item.order_id" style="background-color: white;">
                  <div :class="`icon tag${tabsIndex}`" slot="icon">
                    转
                  </div>
                  <template #title>
                    <div style="color: #000000;">
                      <span>{{item.trade_number}}</span>
                      <span>{{item.trade_time}}</span>
                    </div>
                    <div>
                      <span class="money" style="color: #000000;">{{item.jj}}{{item.trade_amount}}</span>
                      <span>{{item.remarks}}</span>
                    </div>
                  </template>
                </van-cell>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <van-action-sheet v-model="showTurn" title="转账" close-on-popstate>
      <van-field
        type="password"
        autocomplete="off"
        style="height: 0;width: 0;padding: 0;position: absolute"
      />
      <van-field v-model.trim="turnData.username" type="text" label="转账目标" placeholder="请输入转入用户" clearable size="large" />
      <van-field v-model.trim="turnData.turn_money" type="number" label="转账金额" placeholder="请输入转账金额" clearable size="large" />
      <van-field v-model.trim="turnData.drawword" type="password" label="资金密码" placeholder="请输入资金密码" clearable size="large" />
      <div style="padding: 16px;">
        <van-button type="danger" block style="font-size: 16px" @click="submitTurn">提交</van-button>
      </div>
    </van-action-sheet> -->
    <van-action-sheet v-model="showDraw" :title="$t('wallet.default[2]')" close-on-popstate>
      <van-field
        type="password"
        autocomplete="off"
        style="height: 0;width: 0;padding: 0;position: absolute"
      />
      <van-field v-model="selectBank" type="text" :label="$t('wallet.label[0]')" :placeholder="$t('wallet.placeholder[0]')" size="large" readonly @click="showPicker=true" />
	  <van-field v-model.trim="drawData.draw_money" type="number" :label="$t('wallet.label[1]')" :placeholder="$t('wallet.placeholder[1]')" size="large" readonly @click="showPicker2=true" />
      <!-- <van-field v-model.trim="drawData.draw_money" type="number" :label="$t('wallet.label[1]')" :placeholder="$t('wallet.placeholder[1]')" clearable size="large" /> -->
      <!-- <van-field v-model.trim="drawData.phone" type="tel" :label="$t('wallet.label[4]')" :placeholder="$t('wallet.placeholder[4]')" clearable size="large" />
      <van-field v-model.trim="drawData.email" type="text" :label="$t('wallet.label[5]')" :placeholder="$t('wallet.placeholder[5]')" clearable size="large" />
      <van-field v-model.trim="drawData.ifsc" type="text" :label="$t('wallet.label[6]')" :placeholder="$t('wallet.placeholder[6]')" clearable size="large" /> -->
      <van-field v-model.trim="drawData.drawword" type="password" :label="$t('wallet.label[2]')" :placeholder="$t('wallet.placeholder[2]')" clearable size="large" />
      <div style="padding: 0 16px;margin:16px 0">
        <van-button type="danger" block style="font-size: 16px" @click="submitDraw">{{$t('wallet.label[3]')}}</van-button>
      </div>
      <van-divider style="line-height: 1.2" v-if="InitData.drawNotice&&InitData.drawNotice.length">
        <div v-html="InitData.drawNotice[0].content"></div>
      </van-divider>
    </van-action-sheet>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="cardList"
        @confirm="onConfirm"
        @cancel="showPicker=false"
      />
    </van-popup>
	
	<van-popup v-model="showPicker2" position="bottom">
	  <van-picker
	    show-toolbar
	    :columns="cardList2"
	    @confirm="onConfirm2"
	    @cancel="showPicker2=false"
	  />
	</van-popup>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
  components: {
  },
  props: ['walletType'],
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
        {type: 1, text: this.$t('wallet.default[3]')},
        // {type: 2, text: '转账记录'},
        {type: 3, text: this.$t('wallet.default[4]')}
      ],
      showTurn: false,
      showDraw: false,
      showPicker: false,
      selectBank: '',
	  selectBank2:'',
	  showPicker2:false,
      isSubmit: false,
	  cardList2:[10,20,50,100,200,500,1000,3000,5000,10000,50000,100000],
      turnData: {
        username: '',
        turn_money: '',
        drawword: ''
      },
      drawData: {
        draw_type: 'bank',
        user_bank_id: '',
        draw_money: 100,
        // phone: '',
        // email: '',
        // ifsc: '',
        drawword: ''
      },
    }
  },
  computed: {
    cardList() {
      let data = this.$store.state.BankCardList.flatMap(item=>item.bank_name+' '+item.card_no.replace(/^(.{4}).*(.{4})$/, '$1 **** $2'))
      // if(this.UserInfo.alipay){
      //   data.unshift(this.$t('wallet.default[7]')+this.UserInfo.alipay.replace(/^(.{4}).*(.{4})$/, '$1 **** $2'))
      // }
      return data;
    },
  },
  watch: {
    $route(){
      if(this.walletType){
        this.tabsIndex  = this.taskTabs.findIndex(item=>item.type==this.walletType)
        this.tabsState = this.walletType
      }else{
        this.tabsState = 1
        this.tabsIndex = 0
      }
      this.getListData('init')
    }
  },
  created() {
    this.$Model.GetBankCardList()
    this.$parent.navBarTitle = this.$t('wallet.default[0]')
    this.listData = this.taskTabs.flatMap(item=>[''])
    if(this.walletType){
      this.tabsIndex  = this.taskTabs.findIndex(item=>item.type==this.walletType)
      this.tabsState = this.walletType
    }
    this.getListData('init')
    this.drawData.draw_money = Number(this.InitData.setting.min_w||100)
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    goTurn(type) {
      if(this.UserInfo.is_fund_password!=1){
        this.$Dialog.Alert(this.$t('wallet.msg[0]'),()=>{
          this.$router.push('/user/info')
        })
      }else{
        if(type=='turn'){
          this.showTurn = true
        }else{
          if(this.cardList.length){
            this.showDraw = true
          }else{
            this.$Dialog.Alert(this.$t('wallet.msg[1]'),()=>{
              this.$router.push('/user/bankCard')
            })
          }
        }
      }
    },
    openInfo(id) {
      if(this.tabsIndex==0){
        this.$router.push(`/user/recharge/${id}`)
      }
    },
    onConfirm(value,index) {
      this.drawData.user_bank_id = this.BankCardList[index].id;
      this.drawData.ifsc = this.BankCardList[index].bank_branch_name;
      this.selectBank = value;
      this.showPicker = false;
    },
	onConfirm2(value,index) {
	  
	  this.drawData.draw_money = value;
	  this.selectBank2 = value;
	  this.showPicker2 = false;
	},
    submitDraw() {
      if(!this.drawData.user_bank_id){
        this.$Dialog.Toast(this.$t('wallet.placeholder[3]'));
        return;
      }
      if(!this.drawData.draw_money){
        this.$Dialog.Toast(this.$t('wallet.placeholder[1]'));
        return;
      }
      // if(!this.drawData.phone){
      //   this.$Dialog.Toast(this.$t('wallet.placeholder[4]'));
      //   return;
      // }
      // if(!this.drawData.email){
      //   this.$Dialog.Toast(this.$t('wallet.placeholder[5]'));
      //   return;
      // }
      // if(!this.drawData.ifsc){
      //   this.$Dialog.Toast(this.$t('wallet.placeholder[6]'));
      //   return;
      // }
      if(!this.drawData.drawword){
        this.$Dialog.Toast(this.$t('wallet.placeholder[2]'));
        return;
      }
      this.isSubmit = true;
      this.$Model.Draw(this.drawData,data=>{
        this.isSubmit = false;
        if(data.code==1){
          this.showDraw = false
          this.drawData = {
            draw_type: 'bank',
            user_bank_id: '',
            draw_money: Number(this.InitData.setting.min_w||100),
            // phone: '',
            // email: '',
            // ifsc: '',
            drawword: ''
          }
          this.selectBank = ''
          this.getListData('init')
        }
      })
    },
    // submitTurn() {
    //   if(!this.turnData.username){
    //     this.$Dialog.Toast("请输入转入用户");
    //     return;
    //   }
    //   if(!this.turnData.turn_money){
    //     this.$Dialog.Toast("请输入转账金额");
    //     return;
    //   }
    //   if(!this.turnData.drawword){
    //     this.$Dialog.Toast("请输入支付密码");
    //     return;
    //   }
    //   this.isSubmit = true;
    //   this.$Model.Transfer(this.turnData,data=>{
    //     this.isSubmit = false;
    //     if(data.code==1){
    //       this.showTurn = false
    //       this.turnData = {
    //         username: '',
    //         turn_money: '',
    //         drawword: ''
    //       }
    //       this.getListData('init')
    //     }
    //   })
    // },
    onLoad() {
      this.getListData('load')
    },
    changeTabs(index) {
      this.tabsState = this.taskTabs[index].type
      this.getListData('init')
      // this.$router.push(`/user/wallet/${this.tabsState}`)
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
      if(this.tabsIndex==0){
        this.$Model.GetRechargeRecord({state: 0,page_no:this.pageNo},data=>{
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
      }else if(this.tabsIndex==1){
        this.$Model.GetDrawRecord({state: 0,page_no:this.pageNo},data=>{
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
      }else{
        this.$Model.FundDetails({trade_type: 11,page_no:this.pageNo},data=>{
          this.isLoad = false
          if(data.code==1){
            if(type=='load'){
              this.listData[this.tabsIndex] = this.listData[this.tabsIndex].concat(data.list);
            }else{
              this.listData[this.tabsIndex] = data.list
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
      }
      
    },
    onRefresh() {
      this.getListData('init')
    },
  }
}
</script>
<style scoped>
.van-pull-refresh{
  min-height: calc(100vh - 219px);
}
.Wallet .balance{
  background-color: #151d31;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 16px 10px;
  line-height: 1;
  position: relative;
  z-index: 3;
}
.Wallet .tool{
  padding: 0 16px;
  position: relative;
  z-index: 2;
  width: 100%;
}
.Wallet .tool::before{
  content: '';
  display: block;
  background-color: #151d31;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -50%;
}
.Wallet .tool>div{
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px #888;
  overflow: hidden;
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 0 5px;
  display: flex;
  align-items: center;
  padding: 20px;
}
.Wallet .tool a{
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #4087f1;
  line-height: 25px;
  font-weight: 600;
}
.Wallet .tool a+a{
  border-left: 1px #4087f1 solid;
}
.van-tabs{
  margin-top: 10px;
}
.van-tabs>>>.van-tabs__wrap{
  height: 36px;
}
.van-tabs>>>.van-tabs__nav--card{
  overflow: hidden;
  height: 36px;
  margin: 0;
}
.van-tabs>>>.van-tab{
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
}
</style>
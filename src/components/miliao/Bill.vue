<template>
  <div class="SetBox" @click="checkMoney">
    <van-nav-bar
        title="发红包"
        :border="false"
        left-arrow
        @click-left="$emit('triggerPopup')"
    />
    <div class="Bill">
      <div style="padding: 0 15px 15px">
        <p class="tip">账户资金:￥{{Number(UserInfo.balance)}}</p>
        <van-field
            size="large"
            input-align="right"
            type="number"
            v-model="billPrice"
            :label="postData.type==1?'总金额':'单个金额'"
            @click="showKeyboard=true,keyboardType=1"
            placeholder="0.00"
        >
          <template slot="left-icon" v-if="postData.type==1">
            <van-tag type="warning">拼</van-tag>
          </template>
          <template slot="right-icon">元</template>
        </van-field>
        <p class="tip" style="color: #333" v-if="chatType!=1">当前为{{postData.type==1?'拼手气红包':'普通红包'}}，<a href="javascript:;" @click="postData.type=2" v-if="postData.type==1">改为普通红包</a><a href="javascript:;" @click="postData.type=1" v-else>改为拼手气红包</a></p>
        <div class="mt20" v-if="chatType!=1">
          <van-field
              size="large"
              input-align="right"
              type="tel"
              v-model="postData.number"
              label="红包个数"
              @click="showKeyboard=true,keyboardType=2"
              placeholder="填写个数"
          >
            <template slot="right-icon">个</template>
          </van-field>
        </div>
        <van-field
            class="mt20"
            v-model="billExplain"
            type="textarea"
            maxlength="50"
            placeholder="恭喜发财"
        />
        <div class="total">
          <em>￥</em>{{postData.money}}
        </div>
        <van-button type="danger" block style="font-size: 16px" :disabled="btnDis" @click="sendBill">塞钱进红包</van-button>
      </div>
    </div>
    <van-number-keyboard
        :show="showKeyboard"
        theme="custom"
        :extra-key="keyboardType==1?'.':''"
        close-button-text="完成"
        @blur="showKeyboard=false"
        @input="onInput"
        @delete="onDelete"
    />
  </div>
</template>

<script>
export default {
  name: 'Bill',
  components: {

  },
  props: ['chatType','chatId'],
  data() {
    return {
      billPrice: '',
      billExplain: '',
      postData: {
        money: '0.00',
        number: '',
        type: this.chatType==1?2:1,
        explain: '',
        sitetoken: localStorage['Token']
      },
      showKeyboard: false,
      keyboardType: 1,
      btnDis: true,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$Model.GetUserInfo()
    if(this.chatType==1){
      this.postData.number = 1;
      this.postData.fid = this.chatId;
    }else{
      this.postData.group_id = this.chatId;
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {},
  methods: {
    sendBill() {
      var html = `<p style="font-weight:300;margin-bottom:20px">密聊红包</p>￥<em style="font-size:28px">${this.postData.money}</em>`;
      this.$MiDialog.Alert(html,()=>{
        this.postData.explain = this.billExplain || '恭喜发财';
        this.$MiModel.SendBill(this.postData,(data)=>{
          if(data.code==1){
            this.$emit("sendRecord", `<div class="BillBox" data-id="${data.hb_id}"><div class="info"><i class="icon"></i><span>${this.postData.explain}<p></p></span></div><p>密聊红包</p></div>`, 9, data.hb_id);
            this.$emit('triggerPopup');
            this.$Model.GetUserInfo()
          }
        })
      },'确认支付');
    },
    checkMoney() {
      if(this.billPrice){
        this.postData.money = Number(this.billPrice).toFixed(2);
      }
      if(this.postData.number&&this.billPrice){
        this.btnDis = false;
        if(this.postData.type==2){
          this.postData.money = (this.billPrice*this.postData.number).toFixed(2);
        }
      }else{
        this.btnDis = true;
      }
    },
    onInput(val) {
      if(this.keyboardType==1){
        this.billPrice += val;
      }
      if(this.keyboardType==2){
        this.postData.number += val;
      }
    },
    onDelete() {
      if(this.keyboardType==1){
        this.billPrice = this.billPrice.slice(0,this.billPrice.length-1);
      }
      if(this.keyboardType==2){
        this.postData.number = this.postData.number.slice(0,this.postData.number.length-1);
      }
    },
  }
}
</script>
<style scoped>
.Bill{
  width: 100%;
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto;
}
.Bill .tip{
  color: #999;
  padding: 3px 15px;
}
.Bill .tip a{
  color: #ff976a;
}
.Bill>>>.van-field__control{
  font-size: 16px;
}
.Bill>>>.van-field__right-icon{
  color: #333;
  font-size: 16px;
}
.Bill .total{
  font-size: 36px;
  margin: 30px 0;
  text-align: center;
  line-height: 1;
}
.Bill .total em{
  font-size: 18px;
}
</style>
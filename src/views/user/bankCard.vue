<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <div style="overflow: hidden;margin-top: 15px" v-if="userInfo.is_realname!=1">
        <van-divider :hairline="false">{{$t('bankCard.tips[0]')}}</van-divider>
        <div style="padding: 15px;">
          <van-button block type="danger" style="font-size: 16px;" @click="$router.push('/user/set/realname')">{{$t('bankCard.default[1]')}}</van-button>
        </div>
      </div>
      <div v-else>
        <van-divider :hairline="false" style="text-align: center" v-if="showAdd">{{$t('bankCard.tips[1]')}}</van-divider>
        <van-form @submit="onSubmit" v-if="showAdd">
          <van-field
            readonly
            :value="userInfo.realname"
            :label="$t('bankCard.label[0]')"
          />
          <van-field
            v-model.trim="postData.card_no"
            :label="$t('bankCard.label[2]')"
            :placeholder="$t('bankCard.placeholder[1]')"
          />
          <van-field
            readonly
            :value="postData.bank_name"
            :label="$t('bankCard.label[1]')"
            :placeholder="`--${$t('bankCard.placeholder[0]')}--`"
            @click="showPicker=true"
          />
          <!-- <van-field
            v-model.trim="postData.bank_name"
            :label="$t('bankCard.label[1]')"
            :placeholder="$t('bankCard.placeholder[0]')"
          /> -->
          <!-- <van-field
            v-model.trim="postData.bank_branch_name"
            :label="$t('bankCard.label[3]')"
            :placeholder="$t('bankCard.placeholder[2]')"
          /> -->
          <div style="padding: 15px;">
            <van-button block type="danger" :loading="isSubmit" :loading-text="$t('bankCard.default[2]')" style="font-size: 16px;">{{$t('bankCard.default[3]')}}</van-button>
          </div>
        </van-form>
        <div v-else>
          <div style="padding: 10px 10px 0;">
            <van-button block type="info" style="font-size: 16px;" @click="showAdd=true">{{$t('bankCard.default[4]')}}</van-button>
          </div>
          <van-cell 
            class="list" 
            :border="false"
            :title="`${item.bank_name}`"
            :label="item.card_no.replace(/^(.{4}).*(.{4})$/, '$1 **** **** $2')"
            icon="card" 
            v-for="item in cardList"
            :key="item.id"
         />
        </div>
      </div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="bankList"
        @confirm="onConfirm"
        @cancel="showPicker=false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'BankCard',
  components: {

  },
  props: [],
  data() {
    return {
      postData: {
        name: 'USDT wallet',
        bank_id: '',
        bank_name: '',
        card_no: '',
        // bank_branch_name: ''
      },
      showPicker: false,
      bankList: '',
      showAdd: false,
      isSubmit: false,
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.UserInfo;
    },
    cardList() {
      return this.$store.state.BankCardList;
    },
  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('bankCard.default[0]')
    if(this.cardList.length){
      this.showAdd = false
    }else{
      this.showAdd = true
    }
    this.postData.name = this.userInfo.realname
    this.bankList = this.InitData.BanksList.flatMap(item=>item.bank)
    this.$Model.GetBankCardList()
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    onConfirm(value,index) {
      this.postData.bank_name = value;
      this.postData.bank_id = this.InitData.BanksList[index].bank_id;
      this.showPicker = false;
    },
    onSubmit() {
      if(!this.postData.bank_name){
        this.$Dialog.Toast(this.$t('bankCard.placeholder[0]'));
        return;
      }
      if(!this.postData.card_no){
        this.$Dialog.Toast(this.$t('bankCard.placeholder[1]'));
        return;
      }
      // if(!this.postData.bank_branch_name){
      //   this.$Dialog.Toast(this.$t('bankCard.placeholder[2]'));
      //   return;
      // }
	  // this.postData.name =  this.InitData.UserInfo.realname
      this.isSubmit = true;
      this.$Model.AddBankCard(this.postData,data=>{
        this.isSubmit = false;
        if(data.code==1){
          this.showAdd = false
		 this.$router.push('/user/wallet')
        }
      })
    },
  }
}
</script>
<style scoped>

.list{
  margin: 10px 0;
}
.list .van-cell__left-icon{
  font-size: 50px;
  color: #4087f1;
  margin-right: 15px;
}
.list .van-cell__label{
  font-size:  16px;
  color: #888;
}
</style>
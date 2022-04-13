<template>
  <div class="Site PageBox">
    <van-nav-bar
      fixed
      :border="false"
      left-arrow
      @click-left="$router.go(-1)"
      :right-text="$t('language')"
      @click-right="$router.push('/language')"
    />
    <div class="Login ScrollBox">
      <h1>{{$t('register.text[0]')}}</h1>

      <div style="margin-top: 5px;width:50%;float:left;color:#fff;height: 30px;line-height: 30px;">
        <router-link style="color:#fff;font-size:16px;" slot="line" to="/register">{{$t('register.text[6]')}}</router-link>
      </div>
      <div style="margin-top: 5px;width:50%;float:left;color:#fff;height: 30px;line-height: 30px;border-bottom: 1px solid #fff;">
        <router-link style="color:#fff;font-size:16px;" slot="line" to="/registeremail">{{$t('register.text[7]')}}</router-link>
      </div>

      <van-form @submit="onSubmit">
        <van-field
          type="text"
          autocomplete="off"
          style="height: 0;width: 0;padding: 0;position: absolute"
        />
        <van-field
          type="password"
          autocomplete="off"
          style="height: 0;width: 0;padding: 0;position: absolute"
        />
        <van-field
          left-icon="manager"
          clearable
          :border="false"
        > 
          <template #input>
            <input type="tel" v-model.trim="postData.username" :placeholder="$t('register.placeholder[7]')" style="border:0;flex:1;width:100px;background: transparent">
          </template>
        </van-field>
        
        <van-field
          left-icon="coupon"
          v-model.trim="postData.code"
          autocomplete="off"
          type="digit"
          :placeholder="$t('register.placeholder[6]')"
          clearable
          :border="false"
        > 
          <template #button>
            <van-image width="100" height="34" :src="codeImg" style="display: block;cursor: pointer;" @click="getCode" />
          </template>
        </van-field>
        <van-field
          left-icon="coupon"
          v-model.trim="postData.smscode"
          autocomplete="off"
          type="digit"
          :placeholder="$t('register.placeholder[1]')"
          clearable
          :border="false"
          v-if="InitData.setting.is_sms==1"
        >
          <template #button>
            <van-button size="mini" type="info" round native-type="button" @click="getSmsCode" :loading="isSendCode" :loading-text="$t('register.text[1]')">{{$t('register.text[2]')}}</van-button>
          </template>
        </van-field>
        <van-field
          left-icon="lock"
          type="password"
          v-model.trim="postData.password"
          :placeholder="$t('register.placeholder[2]')"
          clearable
          autocomplete="off"
          :border="false"
        />
        <van-field
          left-icon="lock"
          type="password"
          v-model.trim="postData.re_password"
          :placeholder="$t('register.placeholder[3]')"
          clearable
          autocomplete="off"
          :border="false"
        />
        <van-field
          left-icon="invition"
          :readonly="recommendDis"
          v-model.trim="postData.recommend"
          :placeholder="$t('register.placeholder[4]')"
          clearable
          autocomplete="off"
          :border="false"
        />
        <div style="padding: 20px 16px">
          <van-button size="large" block type="danger" round :loading="isSubmit" :loading-text="$t('register.text[3]')" style="font-size: 18px;">{{$t('register.text[4]')}}</van-button>
          <van-button size="large" block plain type="info" round style="font-size: 18px;margin-top: 10px;background: transparent;" @click="goDown"  v-if="!isPlus">{{$t('register.text[5]')}}</van-button>
          <i18n path="register.i18n[0]" tag="div" style="text-align: left;color: #fff;margin-top: 30px" v-if="isPlus">
            <router-link class="href" slot="a" to="/login">{{$t('register.i18n[1]')}}</router-link>
            <router-link class="href fr" slot="line" to="/line">{{$t('line')}}</router-link>
          </i18n>
          <div style="margin-top: 20px" v-else>
            <router-link class="href" slot="line" to="/line">{{$t('line')}}</router-link>
          </div>
        </div>
      </van-form>
    </div>
    <div class="BrowserTips" v-show="showBrowserTips">
      <img :src="'./static/images/down-zy.png'" width="80%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  components: {
    
  },
  props: ['recommendId'],
  data() {
    return {
      postData: {
        dest: 86,
        username: '',
        password: '',
        re_password: '',
        smscode: '',
        code: '',
        code_rand: '',
        recommend: this.recommendId||''
      },
      recommendDis: this.recommendId?true:false,
      areaList: [{id: '86', name: 'CHINA(中国)'}],
      isSendCode: false,
      isSubmit: false,
      codeImg: '',
      showBrowserTips: false,
      downUrl: '',
      isPlus: false,
    }
  },
  computed: {
  
  },
  watch: {

  },
  created() {
   
    
    this.$Model.SmsCode((data) => {
      this.areaList = data
      this.postData.dest = data[0].id
    })
    this.getCode()
    this.checkUserAgent()
  },
  mounted() {
    if(window.plus){
      this.isPlus = true
    }
  },
  activated() {

  },
  destroyed() {

  },
  methods: {

    goDown() {
      if(window.plus){
        this.$router.push('/AppDown')
      }else{
        this.$Util.OpenUrl(AppDown)
      }
    },

    getCode() {
      this.postData.code_rand = new Date().getTime()
      this.codeImg = this.ApiUrl+'/api/Account/code?code_rand='+this.postData.code_rand
    },
    onSubmit() {
      if(!this.postData.username){
        this.$Dialog.Toast(this.$t('register.placeholder[0]'))
        return
      }
      // if(!this.postData.recommend){
      //   this.$Dialog.Toast(this.$t('register.placeholder[4]'))
      //   return
      // }
      if(!this.postData.smscode&&this.InitData.setting.is_sms==1){
        this.$Dialog.Toast(this.$t('register.placeholder[1]'))
        return
      }
      if(!this.postData.code&&this.InitData.setting.is_sms==2){
        this.$Dialog.Toast(this.$t('register.placeholder[6]'))
        return
      }
      if(!this.postData.password){
        this.$Dialog.Toast(this.$t('register.placeholder[2]'))
        return
      }
      if(!this.postData.re_password){
        this.$Dialog.Toast(this.$t('register.placeholder[3]'))
        return
      }
      if(this.postData.password!=this.postData.re_password){
        this.$Dialog.Toast(this.$t('register.placeholder[5]'))
        return
      }
      this.isSubmit = true
      this.$Model.UserRegister(this.postData,data=>{
        this.isSubmit = false
        this.getCode()
      });
    },
    getSmsCode() {
      if(!this.postData.username){
        this.$Dialog.Toast(this.$t('register.placeholder[0]'))
        return
      }
      // if(!this.postData.recommend){
      //   this.$Dialog.Toast(this.$t('register.placeholder[4]'))
      //   return
      // }
      if(!this.postData.code){
        this.$Dialog.Toast(this.$t('register.placeholder[6]'))
        return
      }
      this.isSendCode = true
      this.$Model.GetSMSCode({phone: this.postData.username,dest: this.postData.dest, code: this.postData.code, recommend: this.postData.recommend, code_rand: this.postData.code_rand},(data)=>{
        this.isSendCode = false;
      })
    },
    checkUserAgent(callback) {
      var ua = navigator.userAgent;
      var is_WeiXin = ()=> {
        if (/(MicroMessenger)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_QQ = ()=> {
        if (/(QQ)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_Android = ()=> {
        if (/(Android)/.test(ua)) {
          return true;
        }
        return false;
      };
      var is_iOS = ()=> {
        if (/(iPod|iPhone|iPad)/.test(ua)) {
          return true;
        }
        return false;
      };
      if(is_WeiXin()){
        this.showBrowserTips = true;
      }
      if(is_iOS()){
        callback&&callback('IOS');
      }else{
        callback&&callback('Android');
      }
    },
  }
}
</script>

<style scoped>
.van-dropdown-menu{
  position: absolute;
  left: 0;
}
.van-dropdown-menu>>>.van-dropdown-menu__bar{
  height: auto;
  box-shadow: none;
  background: transparent;
}
.van-dropdown-menu>>>.van-dropdown-menu__title{
  padding: 0 10px 0 0;
  margin-right: 10px;
  color: #888;
}
.van-dropdown-menu>>>.van-dropdown-item__content ul{
  padding: 0 15px;
}
.van-dropdown-menu>>>.van-dropdown-item__content ul li{
  padding: 8px 0;
  width: 100%;
  font-size: 14px;
}
.van-dropdown-menu>>>.van-dropdown-item__content ul li.on{
  color: #1989fa;
}
.van-dropdown-menu>>>.van-dropdown-item__content ul li+li{
  border-top: 1px #f5f5f5 solid;
  color: #333;
}
.BrowserTips{
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: right;
  z-index: 99999
}
.van-nav-bar>>>.van-nav-bar__text{
  color: #999;
}
</style>
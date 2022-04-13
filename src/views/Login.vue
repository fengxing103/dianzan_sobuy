<template>
  <div class="Site PageBox" style="padding: 0;">
    <van-nav-bar
      fixed
      :border="false"
      @click-left="$router.push('/')"
	  :left-text="$t('footer[0]')"
      :right-text="$t('language')"
      @click-right="$router.push('/language')"
    />
  	<div class="Login ScrollBox">
  	<!-- <img :src="`./static/zxwlpic/bg_new_login-${$i18n.locale}.png`" width="100%"> -->
	<img :src="`./static/zxwlpic/sobuy.png`" width="50%" style="border-radius: 20px;margin-top: 40%;">
	<div style="height: 50px;"></div>
  		<van-form @submit="onSubmit" class="mt15" style="background-color: white;border-radius: 20px;padding: 10px;width: 96%;margin-left: 2%;" >
        <van-field
          type="text"
          autocomplete="off"
          style="height: 0;width: 0;padding: 0;position: absolute;"
        />
        <van-field
          type="password"
          autocomplete="off"
          style="height: 0;width: 0;padding: 0;position: absolute"
        />
			  <van-field
          :border="false"
          left-icon="manager"
          :placeholder="$t('login.placeholder[0]')"
          size="large"
          autocomplete="off"
        >
          <template #input>
            <van-dropdown-menu>
              <van-dropdown-item :title="`+${areaCode}`" ref="DropdownItem">
                <template>
                  <ul>
                    <li v-for="item in areaList" :key="item.id" :class="{on:areaCode==item.id}" @click="areaCode=item.id,$refs.DropdownItem.toggle()">+{{item.id}}&#12288;{{item.name}}</li>
                  </ul>
                </template>
              </van-dropdown-item>
            </van-dropdown-menu>
            <input type="tel" v-model.trim="postData.username" :placeholder="$t('register.placeholder[0]')" style="border:0;flex:1;width:100px;color:#999;padding-left: 50px;background: transparent;font-size:12px;">
          </template>
        </van-field>
		
		
 			  <van-field
          :border="false"
			    v-model.trim="postData.password"
			    :type="showPass?'text':'password'"
			    left-icon="lock"
			    :placeholder="$t('login.placeholder[1]')"
			    size="large"
			    clearable
          autocomplete="off"
          :right-icon="showPass?'eye':'closed-eye'"
          @click-right-icon="showPass=!showPass"
			  />
			  <van-cell size="large" :border="false">
				  <van-checkbox v-model="keepUser" @change="changeKeepUser" checked-color="#000000" icon-size="14">{{$t('login.text[0]')}}</van-checkbox>
				  
				</van-cell>
				
        <div style="padding: 20px 16px">
          <van-button size="large" round block type="danger" :loading="isSubmit" :loading-text="$t('login.text[1]')" style="font-size: 18px;">{{$t('login.text[2]')}}</van-button>
		  <div style="height: 20px;"></div>
		  <router-link class="href" slot="a" to="/Service"  >Jump to customer service</router-link>
          <i18n path="login.i18n[0]" tag="div" style="text-align: left;color: #fff;margin-top: 30px">
			  
            <template #title>{{docTitle}}</template>
			
			<!-- <router-link class="href" slot="a" to="/Service" >Jump to customer service</router-link> -->
            <router-link class="href" slot="a" to="/register">{{$t('login.i18n[1]')}}</router-link>
           
          </i18n>
        </div>
			</van-form>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    
  },
  props: [],
  data() {
    return {
      postData: {
      	username: localStorage['UserName']||'',
      	password: localStorage['PassWord']||''
      },
      keepUser: localStorage['KeepUser']=='1'?true:false,
      isSubmit: false,
      showPass: false,
      docTitle: document.title,
      areaList: [{id: '86', name: 'CHINA(中国)'}],
      areaCode: 86,
    }
  },
  computed: {
  
  },
  watch: {

  },
  created() {
	  this.$SetLanguage("en-US")
    this.$Model.SmsCode((data) => {
      this.areaList = data
      this.areaCode = data[0].id
    })
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    onSubmit() {
    	if(!this.postData.username){
        this.$Dialog.Toast(this.$t('login.placeholder[0]'));
        return;
      }
      if(!this.postData.password){
        this.$Dialog.Toast(this.$t('login.placeholder[1]'));
        return;
      }
      this.isSubmit = true;
    	this.$Model.Login(this.postData,(data)=>{
        this.isSubmit = false;
        if(this.keepUser){
          localStorage['UserName'] = this.postData.username
          localStorage['PassWord'] = this.postData.password
        }else{
          localStorage.removeItem('UserName')
          localStorage.removeItem('PassWord')
        }
        if(data.code==1){
          this.$parent.clearMiliao()
        }
    	})
    },
    changeKeepUser() {
    	if(this.keepUser){
    		localStorage['KeepUser'] = 1;
    	}else{
    		localStorage.removeItem('KeepUser');
    	}
    }
  }
}
</script>
<style scoped>
	
	.van-button--danger {
	    border-color: transparent;
	    background: linear-gradient(90deg,#b69b5a,#7c6224);
	}
	
	.ScrollBox .van-form .van-field {
	    background-color: #f8f9fb!important;
	    border-radius: .5rem;
	}
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
</style>



       

<template>
	
  <div class="PageBox">
	  
    <div class="ScrollBox">
		
	<div data-v-2849bf4a="" class="j-t-sb-c" style="background: linear-gradient(rgb(182, 155, 90), rgb(124, 98, 36)); padding: 25px; border-radius: 12px 12px 0px 0px;">
			  <div data-v-2849bf4a="" style="color: rgb(255, 255, 255); font-size: 14px; line-height: 24px;width: 60%;"><p data-v-2849bf4a="">{{$t('userSet.labe[0]')}}：{{UserInfo.realname}}</p>
			  <p data-v-2849bf4a="">{{$t('userInfo.default[2]')}}：{{UserInfo.phone}}  </p><p data-v-2849bf4a="">Email：  </p></div>
			  <div data-v-2849bf4a="">
			 <div data-v-2849bf4a="" class="van-image" style="width: 64px; height: 64px;margin-top: -70px;margin-left: 260px;">
			 						  <img src="../../../public/static/new/gem_1.png" class="van-image__img"></div>
			  </div>
			  
			  </div>
			  
			  
			  <div data-v-2849bf4a="" style="background-color: rgb(0, 0, 0); padding: 15px 10px;">
			  		 
			  		
			  		   <div data-v-2849bf4a="" style="margin: 25px 0px;">
			  		    <div data-v-2849bf4a="" style="justify-content: space-between; display: flex; font-size: 12px;">
			  		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/set/info')">
			  		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor4" style="width: 64px; height: 64px; border-radius: 12px;">
			  		       <img data-v-2849bf4a="" src="../../../public/static/new/cc1.png" style="height: 70px;width: 70px;border-radius: 10px;" />
			  		      </div>
			  		      <p data-v-2849bf4a="" style="margin-top: 10px;">Detailed information</p>
			  		     </div>
			  		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/bankCard')" >
			  		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor1" style="width: 64px; height: 64px; border-radius: 12px;">
			  		       <img data-v-2849bf4a="" src="../../../public/static/new/cc2.png" style="height: 70px;width: 70px;" />
			  		      </div>
			  		      <p data-v-2849bf4a="" style="margin-top: 10px;">Wallet address</p>
			  		     </div>
			  		     <div data-v-2849bf4a="" align="center" class="icon-format"  @click="showPassWord=true" >
			  		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor2" style="width: 64px; height: 64px; border-radius: 12px;">
			  		       <img data-v-2849bf4a="" src="../../../public/static/new/cc3.png" style="height: 70px;width: 70px;" />
			  		      </div>
			  		      <p data-v-2849bf4a="" style="margin-top: 10px;">Login password</p>
			  		     </div>
			  		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="showPayWord=true">
			  		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor3" style="width: 64px; height: 64px; border-radius: 12px;">
			  		      <img data-v-2849bf4a="" src="../../../public/static/new/cc4.png" style="height: 70px;width: 70px;" />
			  		      </div>
			  		      <p data-v-2849bf4a="" style="margin-top: 10px;">Pay password</p>
			  		     </div>
			  		    </div>
			  		   </div>
			  		   <div data-v-2849bf4a="" style="margin: 25px 0px;">
			  		    <div data-v-2849bf4a="" style="justify-content: flex-start; display: flex; font-size: 12px;">
			  		 
			  		    
			  		    
			  		    </div>
			  		   </div>
			  		  </div> 			  
			  		
			  		
			  					  
			  					  
			  
	<!-- 	
      <van-cell
          size="large"
          :icon="`./static/icon/info_001.png`"
          :title="$t('userInfo.default[1]')"
          center
          is-link
          @click="showHeader=true"
      >
        <img :src="`./static/head/${UserInfo.header}`" height="45">
      </van-cell>
      <van-cell
          size="large"
          :icon="`./static/icon/info_002.png`"
          :title="$t('userInfo.default[2]')"
          center
          :value="UserInfo.phone"
      />
      <van-cell
          size="large"
          :icon="`./static/icon/info_003.png`"
          :title="$t('userInfo.default[3]')"
          center
          :value="$t('userInfo.default[8]')"
          to="bankCard"
          is-link
      />
      <van-cell
          size="large"
          :icon="`./static/icon/info_005.png`"
          :title="$t('userInfo.default[5]')"
          center
          :value="$t('userInfo.default[8]')"
          to="set/info"
          is-link
      />
      <van-cell
          size="large"
          :icon="`./static/icon/info_006.png`"
          :title="$t('userInfo.default[6]')"
          center
          :value="$t('userInfo.default[8]')"
          is-link
          @click="showPassWord=true"
      />
      <van-cell
          size="large"
          :icon="`./static/icon/info_007.png`"
          :title="$t('userInfo.default[7]')"
          center
          :value="$t('userInfo.default[8]')"
          is-link
          @click="showPayWord=true"
      />
      <van-cell
        class="Cache"
        size="large"
        icon="delete" 
        :title="$t('userInfo.default[13]')"
        center
        is-link
        @click="clearCache"
      /> -->
    </div>
    <van-action-sheet v-model="showHeader" :title="$t('userInfo.default[9]')" close-on-popstate>
      <van-radio-group v-model="radioHeader">
        <van-grid clickable icon-size="45" column-num="5">
          <van-grid-item :icon="`./static/head/head_${item}.png`" v-for="item in 10" :key="item" @click="selectHeader(item)" />
        </van-grid>
      </van-radio-group>
    </van-action-sheet>



    <van-action-sheet v-model="showPassWord" :title="$t('userInfo.default[10]')"close-on-popstate>
      <van-field v-model.trim="postData.o_password" type="password" :label="$t('userInfo.label[0]')" :placeholder="$t('userInfo.placeholder[0]')" clearable size="large" />
      <van-field v-model.trim="postData.n_password" type="password" :label="$t('userInfo.label[1]')" :placeholder="$t('userInfo.placeholder[1]')" clearable size="large" />
      <van-field v-model.trim="postData.r_password" type="password" :label="$t('userInfo.label[2]')" :placeholder="$t('userInfo.placeholder[2]')" clearable size="large" />
      <div style="padding: 16px;">
        <van-button type="danger" block style="font-size: 16px" @click="setUserInfo">{{$t('userInfo.default[12]')}}</van-button>
      </div>
    </van-action-sheet>




    <van-action-sheet v-model="showPayWord" :title="$t('userInfo.default[11]')" close-on-popstate>
      <van-field v-model.trim="postData.o_payword" type="password" :label="$t('userInfo.label[3]')" :placeholder="$t('userInfo.placeholder[3]')" clearable size="large" v-if="UserInfo.is_fund_password==1" />
      <van-field v-model.trim="postData.n_payword" type="password" :label="$t('userInfo.label[4]')" :placeholder="$t('userInfo.placeholder[4]')" clearable size="large" />
      <van-field v-model.trim="postData.r_payword" type="password" :label="$t('userInfo.label[5]')" :placeholder="$t('userInfo.placeholder[5]')" clearable size="large" />
      <div style="padding: 16px;">
        <van-button type="danger" block style="font-size: 16px" @click="setUserInfo">{{$t('userInfo.default[12]')}}</van-button>
      </div>
    </van-action-sheet>




  </div>
</template>

<script>
export default {
  name: 'Info',
  components: {
  },
  props: [],
  data() {
    return {
      showHeader: false,
      showPassWord: false,
      showPayWord: false,
      radioHeader: '',
      postData: {

      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('userInfo.default[0]')
    this.$Model.GetUserInfo()
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    selectHeader(index) {
      this.postData.header = `head_${index}.png`
      this.setUserInfo()
    },
    setUserInfo() {
      this.$Model.SetUserInfo(this.postData,data=>{
        if(data.code==1){
          if(this.showHeader){
            this.showHeader = false
          }
          if(this.showPassWord){
            this.showPassWord = false
          }
          if(this.showPayWord){
            this.showPayWord = false
          }
          this.postData = {}
		  this.$router.go(-1)
        }
      })
    },
    clearCache() {
      localStorage.clear()
      this.$Model.GetBackData()
      this.$router.push('/login')
    },
  }
}
</script>
<style scoped>
.van-cell__left-icon{
  width: 26px;
  height: 26px;
  margin-right: 10px;
}
.van-icon__image{
  width: 100%;
  height: 100%;
}
.van-cell__title{
  font-size: 14px;
}
</style>
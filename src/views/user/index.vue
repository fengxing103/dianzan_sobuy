<template>
  <div class="IndexBox" >
    <div class="ScrollBox UserInfo" >
         <van-nav-bar
           :border="false"
           style="background: transparent;background-color: #000000;"
         >
           <template #title>
             <!-- <img :src="`./static/zxwlpic/logo-${$i18n.locale}.png`" style="height: 2.75rem"> -->
         		   <img :src="`./static/zxwlpic/home-logo.png`" style="height: 2.75rem">
           </template> 
         </van-nav-bar>    
     <div style="margin: 15px;"> 
	 
			<div data-v-2849bf4a="" class="j-t-sb-c" style="background: linear-gradient(rgb(182, 155, 90), rgb(124, 98, 36)); padding: 25px; border-radius: 12px 12px 0px 0px;">
					  <div data-v-2849bf4a="" style="color: rgb(255, 255, 255); font-size: 14px; line-height: 24px;width: 60%;"><p data-v-2849bf4a="">{{$t('user.default[1]')}}：84752{{UserInfo.userid}}</p>
					  <p data-v-2849bf4a="">{{$t('vip.user.title[0]')}}：{{UserInfo.useridentity}}  </p><p data-v-2849bf4a="">{{$t('user.default[2]')}}：{{UserInfo.idcode}}  </p></div>
					  <div data-v-2849bf4a="">
					 <div data-v-2849bf4a="" class="van-image" style="width: 64px; height: 64px;margin-top: -70px;margin-left: 230px;">
					 						  <img src="../../../public/static/new/gem_1.png" class="van-image__img"><br>
											  <span style="color: white;font-size: 12px;width: 60px;">Expire date：{{UserInfo.etime}}</span>
											  </div>
											  
					  </div>
					  
					  </div>
					  
		
		<div data-v-2849bf4a="" style="background-color: rgb(255, 255, 255); padding: 15px 10px;">
		   <div data-v-2849bf4a="" style="justify-content: space-between; display: flex; margin-bottom: 15px;">
		    <div data-v-2849bf4a="" class="userEbox bgcolor1" style="box-shadow: rgb(136, 136, 136) 0px 2px 5px;">
		     <p data-v-2849bf4a="">{{$t('user.default[4]')}}：</p>
		     <p data-v-2849bf4a="" class="font-bold18" style="margin-top: 5px;">{{Number(UserInfo.balance)}}</em>{{InitData.currency}} </p>
		    </div>
		    <div data-v-2849bf4a="" class="userEbox bgcolor2" style="box-shadow: rgb(136, 136, 136) 0px 2px 5px;margin-left: 5%;">
		     <p data-v-2849bf4a="">Balance(USDT)</p>
		     <p data-v-2849bf4a="" class="font-bold18" style="margin-top: 5px;">0 </p>
		    </div>
		   </div>
		   <div data-v-2849bf4a="" style="justify-content: space-between; display: flex;">
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[2]')}}({{InitData.currency}})</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp">{{UserInfo.today_earnings||'0.00'}}</p>
		    </div>
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[1]')}}({{InitData.currency}})</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp">{{UserInfo.yesterday_earnings||'0.00'}}</p>
		    </div>
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[4]')}}({{InitData.currency}})</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp">{{UserInfo.month_earnings||'0.00'}} </p>
		    </div>
		   </div>
		   <div data-v-2849bf4a="" style="justify-content: space-between; display: flex;">
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[5]')}}({{InitData.currency}})</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp">{{UserInfo.last_month_earnings||'0.00'}}</p>
		    </div>
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[6]')}}({{InitData.currency}})</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp">{{UserInfo.total_profit||'0.00'}} </p>
		    </div>
		    <div data-v-2849bf4a="" class="userE2box">
		     <p data-v-2849bf4a="">{{$t('user.myEarnings.grid[7]')}}</p>
		     <p data-v-2849bf4a="" class="font-bold14 userE2boxp"> {{UserInfo.today_o_num||'0'}}/{{UserInfo.today_s_o_num||'0'}} </p>
		    </div>
		   </div>
		   <div data-v-2849bf4a="" style="margin: 25px 0px;">
		    <div data-v-2849bf4a="" style="justify-content: space-between; display: flex; font-size: 12px;">
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/info')">
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor4" style="width: 64px; height: 64px; border-radius: 12px;">
		       <img data-v-2849bf4a="" src="../../../public/static/new/my1.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('user.menu[3]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/recharge')" >
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor1" style="width: 64px; height: 64px; border-radius: 12px;">
		       <img data-v-2849bf4a="" src="../../../public/static/new/ces.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('wallet.default[1]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/wallet')" >
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor2" style="width: 64px; height: 64px; border-radius: 12px;">
		       <img data-v-2849bf4a="" src="../../../public/static/new/ces2.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('wallet.default[2]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/newlc')">
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor3" style="width: 64px; height: 64px; border-radius: 12px;">
		      <img data-v-2849bf4a="" src="../../../public/static/new/my2.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('user.default[12]')}}</p>
		     </div>
		    </div>
		   </div>
		   <div data-v-2849bf4a="" style="margin: 25px 0px;">
		    <div data-v-2849bf4a="" style="justify-content: flex-start; display: flex; font-size: 12px;">
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/bankCard')">
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor5" style="width: 64px; height: 64px; border-radius: 12px;">
		      <img data-v-2849bf4a="" src="../../../public/static/new/my3.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('userInfo.default[3]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/wallet')">
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor6" style="width: 64px; height: 64px; border-radius: 12px;">
		       <img data-v-2849bf4a="" src="../../../public/static/new/my4.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('wallet.default[3]')}} {{$t('wallet.default[4]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format" @click="$router.push('/user/fundRecord')">
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor7" style="width: 64px; height: 64px; border-radius: 12px;">
		      <img data-v-2849bf4a="" src="../../../public/static/new/my5.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('user.menu[6]')}}</p>
		     </div>
		     <div data-v-2849bf4a="" align="center" class="icon-format"  @click="$Model.Logout()" >
		      <div data-v-2849bf4a="" class="j-t-c-c bgcolor8" style="width: 64px; height: 64px; border-radius: 12px;">
		       <img data-v-2849bf4a="" src="../../../public/static/new/my6.png" style="height: 70px;width: 70px;" />
		      </div>
		      <p data-v-2849bf4a="" style="margin-top: 10px;">{{$t('user.default[3]')}}</p>
		     </div>
		    </div>
		   </div>
		  </div> 			  
		
		
					  
					  
	 </div> 
	  
      

		
		
      <van-cell class="info" :border="false" style="display: none;">
      	
      	

      	
        <template #icon>
          <img class="head" :src="`./static/head/${UserInfo.header}`" height="60" style="border-radius: 100%">
        </template>
        <template #title>
          {{$t('user.default[1]')}}：84752{{UserInfo.userid}}
        </template>
        <template #label>
          {{$t('user.default[2]')}}：{{UserInfo.idcode}}   
        </template>

      
      


          <a href="javascript:;" @click="$Model.Logout()">
          <img :src="'./static/icon/logout.png'" height="30">
          <p>{{$t('user.default[3]')}}vi</p>
        </a>
        </van-cell>





    
      <div class="money" style="display: none;">
        <div>
          <van-cell :border="false">
            <template #title>
              {{$t('user.default[4]')}}：<em>{{Number(UserInfo.balance)}}</em>{{InitData.currency}}
            </template>

            <template #right-icon>
                            <van-button size="mini" color="#fff" plain to="/user/newlc">{{$t('user.default[12]')}}</van-button>
              <van-button size="mini" color="#fff" plain to="/user/robot">{{$t('user.default[11]')}}</van-button>
              <van-button size="mini" color="#fff" plain to="/user/wallet">{{$t('user.default[6]')}}</van-button>
            </template>
          </van-cell>
          <van-steps :active="UserInfo.credit>80?3:UserInfo.credit>50&&UserInfo.credit<81?2:UserInfo.credit>0&&UserInfo.credit<51?1:0" active-color="rgb(64, 135, 241)">
            <van-step>{{$t('user.default[7]')}}</van-step>
            <van-step>{{$t('user.default[8]')}}</van-step>
            <van-step>{{$t('user.default[9]')}}</van-step>
            <van-step>{{$t('user.default[10]')}}</van-step>
          </van-steps>
        </div>
      </div>
      







      <van-grid class="MyEarnings" :border="false" :column-num="3" gutter="1" style="display: none;">
        <van-grid-item style="font-size:8px;color:Black;padding-right:1px;font-weight:500">
          <template  #icon>
            {{$t('user.myEarnings.grid[0]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.balance||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item style="padding-right:1px;">
          <template #icon>
            {{$t('user.myEarnings.grid[1]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.yesterday_earnings||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('user.myEarnings.grid[2]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.today_earnings||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item style="padding-right:1px;">
          <template #icon>
            {{$t('user.myEarnings.grid[3]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.week_earnings||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item style="padding-right:1px;">
          <template #icon>
            {{$t('user.myEarnings.grid[4]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.month_earnings||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('user.myEarnings.grid[5]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.last_month_earnings||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item style="padding-right:1px;">
          <template #icon>
            {{$t('user.myEarnings.grid[6]')}}({{InitData.currency}})
          </template>
          <template #text>
            {{UserInfo.total_profit||'0.00'}}
          </template>
        </van-grid-item>
        <van-grid-item style="padding-right:1px;">
          <template #icon>
            {{$t('user.myEarnings.grid[7]')}}
          </template>
          <template #text>
            {{UserInfo.today_o_num||'0'}}
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #icon>
            {{$t('user.myEarnings.grid[8]')}}
          </template>
          <template #text>
            {{UserInfo.today_s_o_num||'0'}}
          </template>
        </van-grid-item>
      </van-grid  >
      
      <van-grid class="Menu m0" :border="false" :column-num="3" icon-size="30" style="display: none;">
        <van-grid-item :icon="`./static/icon/record_list.png`" :text="$t('user.menu[0]')" to="/myTask" />
        <van-grid-item :icon="`./static/icon/audit.png`" :text="$t('user.menu[1]')" to="/user/auditRecord" />
        <van-grid-item :icon="`./static/icon/post.png`" :text="$t('user.menu[2]')" to="/user/postRecord" />
      </van-grid>

      <van-grid class="Menu" :border="false" :column-num="3" icon-size="30" gutter="5" style="display: none;">
        <van-grid-item :icon="`./static/icon/center_001.png`" :text="$t('user.menu[3]')" to="/user/info"  />
        <van-grid-item :icon="`./static/icon/center_002.png`" :text="$t('user.menu[4]')" to="/user/bindAccount" />
        <van-grid-item :icon="`./static/icon/center_003.png`" :text="$t('user.menu[5]')" to="/user/dayReport" />
        <van-grid-item :icon="`./static/icon/center_004.png`" :text="$t('user.menu[6]')" to="/user/fundRecord" />
        <van-grid-item :icon="`./static/icon/center_005.png`" :text="$t('user.menu[7]')" to="/user/promote" />
        <van-grid-item :icon="`./static/icon/center_009.png`" :text="$t('user.menu[8]')" to="/user/teamReport" />
        <van-grid-item :icon="`./static/icon/center_010.png`" :text="$t('user.menu[9]')" to="/help" />
        <van-grid-item :icon="`./static/icon/center_012.png`" :text="$t('user.menu[10]')" to="/user/credit" />
        <van-grid-item :icon="`./static/icon/center_013.png`" :text="$t('user.menu[11]')" @click="goDown" />
      </van-grid>
    </div>
    <Footer v-if="$route.name=='user'" />
  </div>
</template>

<script>
export default {
  name: 'User',
  components: {
  },
  props: [],
  data() {
    return {
        yebMoney:0
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$Model.GetUserInfo();
    let obj = {
      userid:JSON.parse(localStorage.getItem("UserInfo")).userid
    }
      this.$Model.yeb(obj,data=>{
        this.yebMoney = data.data
      })
  },
  mounted() {

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
    }
  }
}
</script>
<style scoped>
.UserInfo .info{
  background-color: #151d31;
  color: #fff;
  position: relative;
  z-index: 3;
}
.UserInfo .info .head{
  margin-right: 10px;
}
.UserInfo .info .van-cell__title{
  font-size: 16px;
}
.UserInfo .info .van-cell__label{
  font-size: 14px;
  color: #fff;
}
.UserInfo .info .van-cell__value{
  flex: none;
  line-height: 1.3;
}
.UserInfo .info .van-cell__value a{
  text-align: center;
  color: #fff;
  display: block;
}
.UserInfo .money{
  padding: 0 16px;
  position: relative;
  z-index: 2;
  width: 100%;
}
.UserInfo .money::before{
  content: '';
  display: block;
  background-color: #151d31;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -50%;
}
.UserInfo .money>div{
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px #888;
  overflow: hidden;
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 0 5px;
}
.UserInfo .money .van-steps{
  padding: 8px 16px 0;
}
.UserInfo .money .van-steps>>>.van-step__title{
  font-size: 14px;
}
.UserInfo .money .van-cell{
  background-color: #fff;
}
.UserInfo .money .van-cell__title em{
  font-size: 22px;
  color: #4087f1;
}
.Menu{
  border-top: 10px #0e1526 solid;
  margin-bottom: 15px;
}
.Menu>>>.van-grid-item__text{
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.Menu>>>.van-grid-item__content{
  background-color: #151d31;
}

.userEbox {
    padding: 10px;
    width: 50%;
    color: #fff;
}
.bgcolor1 {
    background: linear-gradient(80deg,#eb00b0,#8f006b);
}

.bgcolor2 {
    background: linear-gradient(90deg,#ff8000,#df0000);
}
.font-bold18 {
    font-weight: 600;
    font-size: 18px;
}

.userE2box {
    width: 33%;
    font-size: 12px;
    color: #333;
    position: relative;
    height: 50px;
}

.userE2boxp {
    margin-top: 5px;
    color: #fe5c44;
    bottom: 0;
    position: absolute;
}

.icon-format {
    width: 25%;
    word-break: break-word;
}


</style>
<template>
  <div class="IndexBox">
    <div class="ScrollBox">

<van-nav-bar
  title="VIP area"
  right-text="Supplementary Brief"
  left-arrow
  @click-left="$router.go(-1)"
  @click-right="$router.push('/profit')"
/>

     <!-- <van-swipe :autoplay="3000" indicator-color="#888" style="height: 10rem">
        <van-swipe-item v-for="(item,index) in InitData.bannerList" :key="index">
          <img :src="item" width="100%">
        </van-swipe-item>
      </van-swipe> -->
	  <!-- 
	  <van-cell-group :border="false">
	    <van-cell v-for="item in InitData.UserGradeList" :key="item.grade" @click="submitBuy(item.amount,item.grade,item.name)">
	      <template #title>
	        <div class="top">
	          {{item.name}} <small>{{InitData.currency}}{{item.amount}}</small>
	        </div>
	        <p>{{$t('vip.list.text[4]')}}:{{InitData.currency}}{{item.commission}}</p>
	        <p v-if="item.grade==1">{{$t('vip.list.text[0]')}}:{{item.income}}</p>
	        <p v-if="item.grade>1">{{item.grade>1?$t('vip.list.text[1]'):$t('vip.list.text[0]')}}:{{item.income1}}</p>
	        <p v-if="item.grade>1">{{$t('vip.list.text[2]')}}{{InitData.currency}}{{item.reward}}</p>
	      </template>
	    </van-cell>
	  </van-cell-group>
 -->
<div data-v-46ec2a81="" class="vipbox" style="background-color: white;margin: 15px;border-radius: 5px;" v-for="(item,index) in InitData.UserGradeList" :key="item.grade" @click="submitBuy(UserInfo.useridentity,item.amount,item.grade,item.name)">
	
	<div data-v-46ec2a81="" align="right"  v-if="item.name == UserInfo.useridentity"  >
     <div   data-v-46ec2a81="" style="background-color: rgb(255, 0, 0); color: rgb(255, 255, 255); display: inline-block; padding: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; font-size: 12px;">
		 Current status</div>
		 </div>
		 
		 <div v-else data-v-46ec2a81="" align="right"><div data-v-46ec2a81="" style="padding: 12px;"></div></div>
		 
		 <div data-v-46ec2a81="" style="justify-content: flex-start; display: flex; font-size: 12px; font-weight: 600;"><div data-v-46ec2a81="" align="center" style="margin: 0px 10px; width: 30%;">
		 <i data-v-46ec2a81="" class="van-icon" style="font-size: 50px;"><img :src="require('../../public/static/new/gem_'+Number(item.grade)+'.png')" onerror="../../public/static/new/gem_4.png"  width="50%" /><!----></i>
		 <p data-v-46ec2a81="" style="font-size: 16px; color: rgb(42, 42, 0); font-weight: 600; margin-top: 5px;">{{item.name}}</p>
		 </div>
		 <div data-v-46ec2a81="" style="justify-content: space-between; display: flex; margin: 0px 10px; width: 70%; color: rgb(42, 42, 0); line-height: 18px;"><div data-v-46ec2a81="">
		 <p data-v-46ec2a81="">Daily Tasks</p><p data-v-46ec2a81="" style="color: rgb(255, 160, 96); font-size: 14px; font-weight: 600;">{{item.number}}</p><p data-v-46ec2a81="" style="margin-top: 5px; font-weight: 600;">{{$t('vip.list.text[4]')}}</p>
		 <p data-v-46ec2a81="" style="color: rgb(255, 160, 96); font-size: 14px; font-weight: 600;">{{InitData.currency}} {{item.commission}}</p></div><div data-v-46ec2a81=""><p data-v-46ec2a81="">{{$t('vip.list.text[0]')}}</p>
		 <p data-v-46ec2a81="" style="color: rgb(255, 160, 96); font-size: 14px; font-weight: 600;">{{InitData.currency}} {{item.income}}</p><p data-v-46ec2a81="" style="margin-top: 5px; font-weight: 600;">{{$t('vip.list.text[1]')}}</p>
		 <p data-v-46ec2a81="" style="color: rgb(255, 160, 96); font-size: 14px; font-weight: 600;">{{InitData.currency}} {{item.income1}}</p></div></div></div>
		 
		<div data-v-46ec2a81="" style="padding: 15px; justify-content: space-between; display: flex; align-items: center;" v-if="item.name != UserInfo.useridentity" >
			<p data-v-46ec2a81="" style="font-size: 14px; font-weight: 600; color: rgb(0, 171, 54);">{{item.amount}}</p><!----><!---->
			<div  data-v-46ec2a81="" class="vipbutton" style="
					background: linear-gradient(80deg,#00ee43,#00ab36);
					border-radius: 25px;
					padding: 5px 15px;
					color: #fff;
					font-weight: 600;
					font-size: 16px;
				">Join now</div></div>
				
			<div v-else data-v-46ec2a81="" style="padding: 15px; justify-content: space-between; display: flex; align-items: center;">
				<p data-v-46ec2a81="" style="font-size: 14px; font-weight: 600; color: rgb(0, 171, 54);"></p><!---->
				<p data-v-46ec2a81="" v-if="UserInfo.vip_level==1" >{{$t('vip.user.value[0]')}} :  {{$t('vip.user.value[1]')}} </p>
				<p data-v-46ec2a81="" v-else >{{$t('vip.user.value[0]')}} :  {{$Util.DateFormat('YY-MM-DD',UserInfo.stime)+'~'+$Util.DateFormat('YY-MM-DD',UserInfo.etime)}} </p>
				<!----></div>	
			 
</div>

    <!--  <van-cell-group :border="false">
        <van-cell v-if="UserInfo">
          <template #title>
            <div class="top" style="margin-bottom: 18px;font-size: 20px">
              {{$t('vip.user.title[0]')}}:{{UserInfo.useridentity}}
            </div>
            <div class="bottom">
              <span v-html="$t('vip.list.label',{number: UserInfo.number})"></span>
              <span style="font-size: 14px">
                {{$t('vip.user.value[0]')}}
                <p style="margin-top: 5px;" v-if="UserInfo.vip_level==1">{{$t('vip.user.value[1]')}}</p> 
                <p style="font-size: 13px;margin-top: 5px;line-height: 1" v-else>{{$Util.DateFormat('YY-MM-DD',UserInfo.stime)+'~'+$Util.DateFormat('YY-MM-DD',UserInfo.etime)}}</p>
              </span>
            </div>
          </template>
        </van-cell>
        <van-cell v-else>
          <template #title>
            <div class="top" style="font-size: 20px">
              {{$t('vip.user.title[0]')}}:{{$t('vip.user.title[1]')}}
            </div>
            <div class="bottom">
              <span>{{$t('vip.user.label')}}:--</span>
              <span>
                <router-link to="/login">{{$t('vip.user.value[2]')}}</router-link> 
              </span>
            </div>
          </template>
        </van-cell>
      </van-cell-group> -->

     



    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Vip',
  components: {

  },
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    submitBuy(nowname,amount,grade,name) {
		if(name == this.UserInfo.useridentity){
			return false;
		}
		var list = this.InitData.UserGradeList;
		var youhui = 0;
		for (var val in list) {
		   // console.log(list[val])
		   if(list[val].name == nowname){
			   youhui = list[val].amount
		   }
		}
		
      var html = this.$t('vip.dialog[0]',{amount: amount - youhui,name: name})
      this.$Model.GetUserInfo(data=>{
        if(data.code==1){
          if(data.info.vip_level>grade){
			  
            this.$toast.fail(this.$t('vip.dialog[1]',{currname: data.info.useridentity,name: name}))
          }else{
			  
            if(data.info.vip_level==grade){
				
              html = this.$t('vip.dialog[2]',{amount: amount,name: name})
            }
            this.$Dialog.Confirm(html,()=>{
              this.$Model.BuyVip({grade:grade},data=>{
                if(data.code==1){
                  this.$Model.GetUserInfo()
                }
                if(data.code==2){
                  this.$router.push(`/user/recharge?amount=${Number(data.amount)}`)
                }
              })
            })
          }
        }
      })
    },
  }
}
</script>
<style scoped>
.van-cell-group{
  background: transparent;
  padding: .9375rem;
}
.van-cell{
  font-size: 16px;
  background: url('/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #ccd7e9, #7085a5);
  background-size: contain;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  border-radius: 5px;
  padding: 25px 15px;
}



.ScrollBox{
  position:relative;
  width:100%;
  height:100%;
  overflow-x:hidden;
  overflow-y:auto;
}
.van-cell+.van-cell{
  margin-top: 12px;
}
.van-cell:nth-of-type(2){
  background: url('/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #fd9e02, #d86a25);
  background-size: contain;
}
.van-cell:nth-of-type(3){
  background: url('/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #3044b3, #273580);
  background-size: contain;
}
.van-cell:nth-of-type(4){
  background: url('/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #31b489, #3e91b8);
  background-size: contain;
}
.van-cell:nth-of-type(5){
  background: url('/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #47484c, #1f2025);
  background-size: contain;
}
.van-cell .van-cell__title{
  color: #fff;
  text-align: center;
  line-height: 1;
  overflow: hidden;
}
.van-cell .van-cell__title>p{
  margin-top: 10px;
  font-size: 14px;
}
.van-cell .van-cell__title .top{
  font-size: 24px;
  margin-bottom: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.van-cell .van-cell__title .top p{
  margin-top: 15px;
  opacity: .5;
}
.van-cell .van-cell__title .top small{
  font-size: 16px;
  color: #ff0;
}
.van-cell .van-cell__title .bottom{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
}
.van-cell .van-cell__title .bottom a{
  color: #fff;
  font-size: 18px;
}
.van-cell .van-cell__title .bottom div{
  font-size: 12px;
  margin-top: 8px;
}
.van-cell .van-cell__value{
  color: #333;
  white-space: nowrap;
}
</style>




<template>
  <div class="PageBox" > 
	  
	  <div data-v-0ccf3b8d="" style="margin: 15px; padding-top: 48px;">
	  	<div data-v-0ccf3b8d="" style="background: linear-gradient(rgb(182, 155, 90), rgb(124, 98, 36)); padding: 15px 5px; border-radius: 12px 12px 0px 0px; color: rgb(255, 255, 255); font-size: 10px;">
	  		<div data-v-0ccf3b8d="" style="text-align: center;">
	  			<p data-v-0ccf3b8d="">
	  				{{$t('user.default[4]')}}
	  			</p>
	  			<p data-v-0ccf3b8d="" style="font-size: 30px; font-weight: 600;">
	  				{{Number(UserInfo.balance)}}</em>{{InitData.currency}}
	  			</p>
	  		</div>
	  		<div data-v-0ccf3b8d="" style="justify-content: space-between; display: flex;">
	  			<div data-v-0ccf3b8d="" class="userE3box">
	  				<p data-v-0ccf3b8d="">
	  					Today's earnings
	  				</p>
	  				<p data-v-0ccf3b8d="" class="font-bold14 userE3boxp">
	  					0.00(USDT)
	  				</p>
	  			</div>
	  			<div data-v-0ccf3b8d="" class="userE3box">
	  				<p data-v-0ccf3b8d="">
	  					Total investment
	  				</p>
	  				<p data-v-0ccf3b8d="" class="font-bold14 userE3boxp">
	  					0.00(USDT)
	  				</p>
	  			</div>
	  			<div data-v-0ccf3b8d="" class="userE3box">
	  				<p data-v-0ccf3b8d="">
	  					Total revenue
	  				</p>
	  				<p data-v-0ccf3b8d="" class="font-bold14 userE3boxp">
	  					0.00(USDT)
	  				</p>
	  			</div>
	  		</div>
	  	</div>
	  	<div data-v-0ccf3b8d="" style="background-color: rgb(255, 255, 255); padding: 15px 5px; height: 100%;">
	  		<div data-v-0ccf3b8d="" class="font-bold16" style="margin-bottom: 15px; justify-content: space-between; display: flex; color: rgb(102, 102, 102);">
	  			<div data-v-0ccf3b8d="">
	  				<p data-v-0ccf3b8d="" style="background-color: white;">
	  					Investment products
	  				</p>
	  			</div>
	  			<div data-v-0ccf3b8d="" style="justify-content: start; display: flex; align-items: center;background-color: white;">
	  				<i data-v-0ccf3b8d="" class="van-icon van-icon-description" style="font-size: 18px;">
	  					<!---->
	  				</i>
	  				<p data-v-0ccf3b8d="" @click="$router.push('/user/newlist')" style="background-color: white;">
	  					Record
	  				</p>
	  			</div>
	  		</div>
	  		<div data-v-0ccf3b8d="" class="cpStyle">
	  		</div>
	  		<div data-v-0ccf3b8d="" class="font-bold16" style="margin-bottom: 15px; justify-content: space-between; display: flex; color: rgb(102, 102, 102);">
	  			<div data-v-0ccf3b8d="">
	  				<p data-v-0ccf3b8d="" style="background-color: white;">
	  					Product description
	  				</p>
	  			</div>
	  		</div>
	  		<!---->
	  	</div>
	  </div>
	  
	  
    <div class="one" style="display: none;">
      <h3>
       <i>transfer method</i>
        <span></span>
      </h3>
      <p>
        <img src="../images/nav-009.png" alt="" srcset="">
        {{$t('user.default[4]')}}：<em>{{Number(UserInfo.balance)}}</em>{{InitData.currency}}
        </p>
        </div>
          <div class="eee" style="display: none;"></div>
      <div class="one two" style="display: none;">
        <h4>storage period</h4>
            <ul class="ulC">
              <li v-for="(item,index) in radioHeader" :key="index" @click="add(item)" :class="active == item.id ? 'active':''">
                  <span>{{item.title}}{{item.tiem}}day</span>
                  <i>Earnings per day{{item.lilv}}%</i>
              </li>
            </ul>
      </div>
      <div class="eee" style="display: none;"></div>
      <div class="one two" style="display: none;">
        <h4>deposit amount</h4>
            <div class="three">
              <i>￥</i> 
              <input type="number" style="color:#333333; height:30px;line-height:30px;" maxlength="8"  :disabled="flag" placeholder="Please enter a deposit amount" v-model="money" @click="inputa">
              <span>(Expected earnings{{all.toFixed(2)}})</span>
            </div>
      </div>
      <div class="eee" style="display: none;"></div>
       <div @click="sub" class="btn" style="display: none;">submit</div>
  </div>

</template>

<script>
export default {
  name: 'newLc',
  components: {
  },
  props: [],
  data() {
    return {
      showHeader: false,
      showPassWord: false,
      showPayWord: false,
      radioHeader: [],
      postData: {},
      active:0,
      money:'',
      all:0.00,
      lv:0,
      flag:true
    }
  },
  computed: {
  },
  watch: {
      money(){
       return this.all = this.money * this.lv
      }
  },
  created() {
    this.$parent.navBarTitle = 'Balance financing'
    console.log(this.$parent)
    this.list()
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    sub(){
       if(this.money == '' || this.active == 0){
          this.$Dialog.Toast("Please select information");
          return
       }
       let obj = {
          userid:JSON.parse(localStorage.getItem("UserInfo")).userid,
          yuebaoid : this.active,
          money :this.money
       }
        this.$Model.newLcTj(obj,data=>{
            if(data.errorCode == 200){
              this.$Dialog.Toast(data.successMsg);
              this.active = 0
              this.flag = true
              this.money = ''
              this.$router.push(`/user/`)
              return
            }
            this.$Dialog.Toast(data.errorMsg);
        })
    },
    inputa(){
      if(this.active == 0){
        this.$Dialog.Toast('Please select a product first')
      }
    },
    add(item){
        this.flag = false
        this.active = item.id
        this.lv = item.lilv
    },
   list(){
            this.$Model.newLc({},data=>{
            this.radioHeader = data.info
        })
   }

  }
}
</script>
<style scoped>
	
	.font-bold16 {
	    font-weight: 600;
	    font-size: 16px;
	}
input:disabled{background: none;}
.btn{background: #3fadfa;color: #fff;text-align: center;line-height: 50px;border-radius: 50px;width: 92%;margin: 30px auto 0 auto;}
input::-webkit-input-placeholder{
    color:#999999;
    font-weight: normal;
    font-size: 14px;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#999999;
    font-weight: normal;
    font-size: 14px;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999999;
    font-weight: normal;
    font-size: 14px;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#999999;
    font-weight: normal;
    font-size: 14px;
}
.three{padding-top: 20px;padding-bottom: 10px;}
.three i{font-size: 1rem;}
.three input{border: 0;font-weight: normal;}
.three span{color: #59a1dc;font-weight: normal;}
.one{padding-left: 10px;padding-right:10px ;padding-bottom: 10px;}
.PageBox{padding-top: 50px;position: relative;}
.PageBox h3{text-align: center;padding: 10px 0;color: #969696;position: relative;}
.eee{background: #eeeeee;height: 8px;}
.two{padding-top: 10px;font-size: 16px;font-weight: bold;}
.PageBox h5 span{
  width: 100%;
  position: absolute;
  left:0;
  top: 50%;
  height: 1px;
  background: #eeeeee;
  z-index: -1;
  }
  .PageBox h5 i{background: #0e1526;width: 30%;display: inline-block;}
  .PageBox p{display: flex;align-items: center;background: rgb(177, 137, 50);;width:100%;border-radius: 5px; padding: 15px;justify-content: center;}
   .PageBox p img{width: 30px;height: 30px;margin-right: 5px;}
   .ulC{display: flex;justify-content: space-between;align-items: center;padding-top: 20px; flex-wrap: wrap;}
   .ulC li{border: 2px solid #b2b2b2;margin-bottom: 10px; border-radius: 8px;padding: 6px;width: 30%;box-sizing: border-box;}
   .ulC li.active{border: 2px solid #4ca1da;border-radius: 8px;padding: 6px;width: 30%;background: #eff8ff; box-sizing: border-box;color: #4ca1da;}
   .ulC li span{font-size: .8rem;display: block;text-align: center;margin-bottom: 5px;}
   .ulC li i{font-size: .6rem;display: block;text-align: center;}
   .ulC::after{content: '';width: 30%;}
</style>
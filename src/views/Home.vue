<template>
  <div class="Site IndexBox" style="background-color: white;">
    <div class="ScrollBox" >
      <van-nav-bar
        :border="false"
        style="background: transparent;background-color: #000000;"
        :left-text="$t('language')"
        @click-left="$router.push('/language')"
      >
        <template #title>
          <!-- <img :src="`./static/zxwlpic/logo-${$i18n.locale}.png`" style="height: 2.75rem"> -->
		   <img :src="`./static/zxwlpic/home-logo.png`" style="height: 2.75rem">
        </template> 
      </van-nav-bar>
	  
	  
      <van-swipe :autoplay="3000" indicator-color="#888"  style="height: 10rem;border-radius: 20px;margin-top: 5%;background-color: #000000;"  >
        <van-swipe-item v-for="(item,index) in InitData.bannerList" :key="index">
          <img :src="item" width="100%">
        </van-swipe-item>
      </van-swipe>
	 
	  
     <van-cell class="Broadcast" :border="false" style="background-color: #000000;">
        <template #icon>
          <van-icon name="volume-o" color="#fff" size="1.43rem" style="margin-right: 0.922rem;background-color: #000000;margin-top: 3%;" />
        </template>
        <van-notice-bar scrollable  :text="$t('home.noticeTitle')+': Congratulations to ******6560 for recommending a VIP2 and getting AUD 54 promotion rewards !,Congratulations to ******6236 for recommending a Full member and getting AUD 9 promotion rewards !,Congratulations to ******8246 for recommending a VIP4 and getting AUD 480 promotion rewards !,Congratulations to ******3858 for recommending a VIP3 and getting AUD 156 promotion rewards !,Congratulations to ******4550 for recommending a VIP2 and getting AUD 54 promotion rewards !,Congratulations to ******7458 for recommending a VIP1 and getting AUD 18 promotion rewards !,Congratulations to ******6746 for recommending a VIP3 and getting AUD 156 promotion rewards !,Congratulations to ******1412 for recommending a VIP1 and getting AUD 18 promotion rewards !,Congratulations to ******9876 for recommending a VIP1 and getting AUD 18 promotion rewards !,Congratulations to ******2691 for recommending a VIP3 and getting AUD 156 promotion rewards !,'" style="background-color: white;color: #000000;" />
      </van-cell>
	  
	
			<van-row style="background: linear-gradient(80deg,#eb00b0,#8f006b);border-radius:5px;padding: 10px;width:85%;margin-left: 8%;margin-top: 5%;"  @click="$router.push('/article/video/103')" >
			  <van-col span="7"><img src="../../public/static/new/company.png" ></van-col>
			  <van-col span="13" style="margin-top: 5%;" >
					   <span style="display: block;color: white;font-size: 18px;font-weight: 700;">Company</span>
					   <span style="display: block;color: white;font-size: 12px;">Global Top Marketing Agency</span>
			  </van-col>
			  <van-col span="4">
					   <van-icon name="arrow" size="60" color="white" />
			  </van-col>
			</van-row>
	  
	  
	  <van-row style="background: linear-gradient(90deg,#ff8000,#df0000);border-radius:5px;padding: 10px;width:85%;margin-left: 8%;margin-top: 5%;"  @click="$router.push('/profit')" >
	    <van-col span="7"><img src="../../public/static/new/rule.png" ></van-col>
	    <van-col span="13" style="margin-top: 5%;" >
	  		   <span style="display: block;color: white;font-size: 18px;font-weight: 700;">Wage system description</span>
	  		   <!-- <span style="display: block;color: white;font-size: 12px;">Global Top Marketing Agency</span> -->
	    </van-col>
	    <van-col span="4">
	  		   <van-icon name="arrow" size="60" color="white" />
	    </van-col>
	  </van-row>
	  	  
	  
	  <div style="height: 30px;width: 85%;background-color: white;margin-left: 8%;margin-top: 5%;border-bottom:3px solid;border-image: linear-gradient(80deg, rgb(235, 0, 176), rgb(143, 0, 107)) 5 10 / 1 / 0 stretch;">
		  <div style="width: 150px;background: linear-gradient(80deg,#eb00b0,#8f006b);height: 100%;padding: 5px 0px;text-align: center;color: white;font-weight: 700;">Site Navigation</div>
	  </div>
	  
	  <van-grid style="margin: 0 auto;width: 90%;margin-top: 3%;" :border="false" :column-num="4">
	   
		<!-- <van-grid-item @click="openrecharge"   >
			<img src="../../public/static/new/ces.png" width="60px" style="margin-top: 0%;" >
			<span style="font-size: 12px;padding-top: 10px;">{{$t('wallet.default[1]')}}</span>
			
		  </van-grid-item> -->
		  
		  <van-grid-item @click="$router.push('/help')"  >
		  			<img src="../../public/static/new/ces.png" width="60px" style="margin-top: 0%;" >
		  			<span style="font-size: 12px;padding-top: 10px;">Mission Guide</span>
		  			
		   </van-grid-item>
		  
	  <!--  <van-grid-item @click="$router.push('/user/wallet')">
	    			<img src="../../public/static/new/ces2.png" width="60px" style="margin-top: 0%;" >
					<span style="font-size: 12px;text-align: center;padding-top: 10px;">{{$t('wallet.default[2]')}}</span>
	     </van-grid-item> -->
		 <van-grid-item @click="$router.push('/article/video/103')">
		 			<img src="../../public/static/new/ces2.png" width="60px" style="margin-top: 0%;" >
		 			<span style="font-size: 12px;text-align: center;padding-top: 10px;">About the platform</span>
		  </van-grid-item>
	    <!-- <van-grid-item @click="$router.push('/user/newlc')" >
	    			<img src="../../public/static/new/ces3.png" width="60px" style="padding-top: 10px;"  >
	    			
					<span style="font-size: 10px;text-align: center;text-align: center;padding-top: 10px;">{{$t('user.default[12]')}}</span>
	     </van-grid-item> -->
		 <van-grid-item @click="$router.push('/help')" >
		 			<img src="../../public/static/new/ces3.png" width="60px" style="padding-top: 0px;"  >
		 			
		 			<span style="font-size: 10px;text-align: center;text-align: center;padding-top: 10px;">Fund Guide</span>
		  </van-grid-item>
	   <!-- <van-grid-item @click="$router.push('/AppDown')"  >
	    			<img src="../../public/static/new/ces4.png" width="58px" style="border-radius: 15px;padding-top: 10px;" >
	    			
					<span style="font-size: 10px;text-align: center;padding-top: 10px;">{{$t('user.menu[11]')}}</span>
	     </van-grid-item> -->
		 <van-grid-item @click="$router.push('/user/teamReport')"  >
		 			<img src="../../public/static/new/ces4.png" width="58px" style="border-radius: 15px;padding-top: 0px;" >
		 			
		 			<span style="font-size: 10px;text-align: center;padding-top: 10px;">Team Guide</span>
		  </van-grid-item>
	  </van-grid>
	  
	  <div style="height: 30px;width: 85%;background-color: white;margin-left: 8%;margin-top: 5%;border-bottom:3px solid;border-image: linear-gradient(80deg, rgb(255, 0, 0), rgb(170, 0, 0)) 5 10 / 1 / 0 stretch;">
	  		  <div style="width: 150px;background: linear-gradient(90deg,#ff8000,#df0000);height: 100%;padding: 5px 0px;text-align: center;color: white;font-weight: 700;">Task Hall</div>
	  </div>
	  
	  <div style="width: 85%;margin-top: 5%;">
		  
	  	 <div style="" :class="'zz'+index" v-for="(item,index) in InitData.taskclasslist" :key="item.group_id" @click="goTask(index,item.state,item.group_id)">
			 <van-row >
			   <van-col span="14" style="margin: 0 auto;justify-content: center;margin-top: 6%;" >
				   <span style="font-size: 16px;font-weight: 600;margin: 0;padding: 0;color: white;display: block;">{{item.h_group_name}}</span>
				   <span style="color: white;line-height: 20px;" >{{item.h_group_info}}</span>
			   </van-col>
			   <van-col span="10">
				  
				   <img :src="item.icon" style="border-radius: 15px;width: 120px;height: 80px;" >
			   </van-col>
			 </van-row>
			
		 </div>
		 
	  </div>
	  
      <van-grid class="Menu" direction="horizontal" :column-num="3" :border="false" gutter="4" style="margin-top: 3%;display: none;">
        <van-grid-item to="/vip">
          <template #icon>
           {{$t('home.menu[0]')}}
          </template>
          <template #text>
            <img :src="`./static/icon/nav1.png`" style="height: 1.13rem">
          </template>
        </van-grid-item>
        <van-grid-item @click="openVideo">
          <template #icon>
            {{$t('home.menu[1]')}}
          </template>
          <template #text>
            <img :src="`./static/icon/nav2.png`" style="height: 1.38rem">
          </template>
        </van-grid-item>
        <van-grid-item to="/user/promote">
          <template #icon>
            {{$t('home.menu[2]')}}
          </template>
          <template #text>
            <img :src="`./static/icon/nav3.png`" style="height: 1.38rem">
          </template>
        </van-grid-item>
      </van-grid>
	  
      <router-link to="/user/promote" style="display: none;">
        <img :src="`./static/zxwlpic/promote-${$i18n.locale}.png`" width="100%" style="display: block;margin: 0.32rem 0">
      </router-link>
	  
	  
      <!-- <van-cell class="Title" :title="$t('home.taskHall.title[0]')" :border="false" />  -->
      <van-grid class="TaskHall" :class="$i18n.locale" direction="horizontal" :column-num="2" :border="false" gutter="4" style="display: none;">
        <van-grid-item v-for="(item,index) in InitData.taskclasslist" :key="item.group_id" @click="goTask(index,item.state,item.id)">
          <template #icon>
            <h4>{{item.h_group_name}}</h4>
            {{item.h_group_info}}
          </template>
          <template #text>
            <img :src="item.icon" style="width: 2.75rem">
          </template>
        </van-grid-item>
      </van-grid>
      <!-- <van-cell class="Title" :title="$t('home.taskHall.title[1]')" :border="false" />  -->
      <van-grid class="TaskHall" :class="$i18n.locale" direction="horizontal" :column-num="2" :border="false" gutter="5" style="display: none;">
        <van-grid-item v-for="(item,index) in InitData.taskclasslist.filter(obj=>obj.is_f==1)" :key="item.group_id" @click="goPost(item.group_id)">
          <template #icon>
            <h4>{{item.h_group_name}}</h4>
            {{item.h_group_info}}
          </template>
          <template #text>
            <img :src="item.icon" style="width: 2.75rem">
          </template>
        </van-grid-item>
      </van-grid>
	  
	  
	  <div style="height: 30px;width: 85%;background-color: white;margin-left: 8%;margin-top: 5%;border-bottom:3px solid;border-image: linear-gradient(80deg, rgb(255, 40, 33), rgb(255, 0, 0)) 5 10 / 1 / 0 stretch;">
	  		  <div style="width: 150px;background: linear-gradient(80deg,#ff3538,#e60003);height: 100%;padding: 5px 0px;text-align: center;color: white;font-weight: 700;">Membership list</div>
	  </div>
	  
	  <div style="width: 85%;margin-top: 5%;">
	  	
		<div style="margin-top:3%;width: 100%;height: 100px;margin-left: 8%;border-radius: 10px;padding: 10px;"> 
				<van-swipe :loop="false" :width="200" :autoplay="3000" :show-indicators="false" :touchable="false">
				  <van-swipe-item  v-for="(item,index) in InitData.memberList" :key="index" :index="index" >
					  <div style="width: 200px;height: 200px;border-radius: 15px;margin-left: -30px;" v-if="index==0">
						  <van-grid :border="false" :column-num="1"  >
						    <van-grid-item >
						      <img src="../../public/static/new/gem_5.png"  width="50%" />
							  
							  <span>{{$t('home.memberList.data[0]',{member: item.username})}}</span>
							  <span>{{$t('home.memberList.data[1]',{num: item.number,currency:InitData.currency,profit:item.profit})}}</span>
							 
						    </van-grid-item>
							
						  </van-grid>
					  </div>
					  <div style="width: 200px;height: 200px;border-radius: 15px;margin-left: -30px;" v-else>
					  						  <van-grid :border="false" :column-num="1"  >
					  						    <van-grid-item >
					  						      <img :src="require('../../public/static/new/gem_'+Math.ceil(Math.random()*5)+'.png')"  width="50%" />
												  
					  							  
					  							  <span>{{$t('home.memberList.data[0]',{member: item.username})}}</span>
					  							  <span>{{$t('home.memberList.data[1]',{num: item.number,currency:InitData.currency,profit:item.profit})}}</span>
					  							 
					  						    </van-grid-item>
					  							
					  						  </van-grid>
					  </div>
				  </van-swipe-item>
				</van-swipe>
		</div>	  
			
	  		 
	  </div>
	  <div style="margin-top: 30%;"></div>
	  
      <van-tabs class="MemberList" type="card" background="#0e1526" color="#151d31" style="display: none;">
        <van-tab>
          <template #title>
            <van-icon :name="`./static/icon/tab1.png`" size="1.13rem" />{{$t('home.memberList.title')}} 
          </template>
          <van-swipe id="SwipeList1" style="height: 340px" height="68" vertical autoplay="3000" :show-indicators="false" :touchable="false">
            <van-swipe-item v-for="(item,index) in InitData.memberList" :key="index" :index="index">
              <van-cell
                class="topItem" 
                :icon="`./static/head/${item.header}`" 
                :title="$t('home.memberList.data[0]',{member: item.username})"
                :label="$t('home.memberList.data[1]',{num: item.number,currency:InitData.currency,profit:item.profit})"
                center
              >
              </van-cell>
            </van-swipe-item>
          </van-swipe>
        </van-tab>
        <van-tab>
          <template #title>
            <van-icon :name="`./static/icon/tab2.png`" size="1.13rem" />{{$t('home.businessList.title')}} 
          </template>
          <van-swipe id="SwipeList2" style="height: 340px" height="68" vertical autoplay="3000" :show-indicators="false" :touchable="false">
            <van-swipe-item v-for="(item,index) in InitData.businessList" :key="index" :index="index">
              <van-cell
                class="topItem" 
                :icon="`./static/head/${item.header}`" 
                :title="item.username"
                :label="$t('home.businessList.data[1]',{num: item.number})"
                center
              >
                <template slot="right-icon">
                  <span class="profit">
                    <img :src="`./static/icon/gold.png`" style="height: 1.13rem">
                    {{item.profit||'0.00'}}
                  </span>
                </template>
              </van-cell>
            </van-swipe-item>
          </van-swipe>
        </van-tab>
      </van-tabs>
    </div>
	
	
	
    <Footer />
    <van-popup v-model="showNotice" style="background: transparent;width: 80%;text-align: center" @closed="$parent.isNotice=true">
      <dl class="NoticePopup" v-if="InitData.noticelist&&InitData.noticelist.length" @click="$router.push(`/article/notice/${InitData.noticelist[0].id}`)">
        <dt>{{$t('home.noticeTitle')}}</dt>
        <dd v-html="InitData.noticelist[0].content"></dd>
      </dl>
      <a class="close" href="javascript:;" @click="showNotice=false"><van-icon name="clear" color="rgba(255,255,255,.8)" size="2.5rem" /></a>
    </van-popup>
	
	<van-popup v-model="show" closeable="true" style="background: transparent;width: 80%;text-align: center" @closed="$parent.isNotice=true">
	  <dl style="height: 130px;width: 330px;background-color: white;border-radius: 20px;" >
		  <div style="padding: 40px;">
				 <van-button type="default" size="small" style="background-color:#de5f34;color: white;" @click="$router.push('/user/recharge?type=1')" >Purchase Level</van-button>
				 
				 <van-button type="warning" size="small" style="margin-left: 20px;color:#de5f34 ;background-color: #f5d0c4;" @click="$router.push('/user/recharge')" >Balance recharge</van-button>
		  </div>
	    
	  </dl>
	</van-popup>
  </div>
</template>

<script>
export default {
  name: 'Home',
  inject: ['reloadHtml'],
  components: {
    
  },
  props: [],
  
  data() {
    return {
      showNotice: false,
	  show:false,
    }
  },
  
  computed: {

  },
  watch: {
    // 'InitData.noticelist'(data){
    //   if(!this.$parent.isNotice&&data.length) this.showNotice = true
    // },
  },
  created() {
    console.log("111")
  },
  mounted() {
    if(this.InitData.memberList&&this.InitData.memberList.length){
      this.$nextTick(()=>{
        const data = $('#SwipeList1 .van-swipe-item').slice(0, 5)
        for (var i = 0; i < data.length; i++) {
          $('#SwipeList1').children().append($(data[i])[0].outerHTML)
        }
      })
    }
    if(this.InitData.businessList&&this.InitData.businessList.length){
      this.$nextTick(()=>{
        const data = $('#SwipeList2 .van-swipe-item').slice(0, 5)
        for (var i = 0; i < data.length; i++) {
          $('#SwipeList2').children().append($(data[i])[0].outerHTML)
        }
      })
    }
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    goTask(index,state,id) {
		console.log(id);
		// return false;
      if(state==3){
        this.$toast.fail(this.$t('home.msg'))
      }else{
        this.$router.push(`/taskList/${index}/1`)
      }
    },
    goPost(id) {
      this.$router.push({name: 'postTask', query:{type:id}})
    },
    goMiLiao() {
      this.$parent.showMiliao = true;
    },
    openVideo() {

        this.$router.push(`/article/video`)

    },
	openrecharge(){
		this.show = true;
		
	},
  }
}
</script>
<style scoped>
	
.zz0{
	margin-top:3%;width: 100%;background:linear-gradient(90deg,#fc0000,rgba(252,0,0,.3));height: 100px;margin-left: 8%;border-radius: 10px;padding: 10px;
}	

.zz1{
	margin-top:3%;width: 100%;background:linear-gradient(90deg,#015abf,rgba(1,90,191,.3));height: 100px;margin-left: 8%;border-radius: 10px;padding: 10px;
}	

.zz2{
	margin-top:3%;width: 100%;background:linear-gradient(90deg,#9a3aaf,rgba(154,58,175,.3));height: 100px;margin-left: 8%;border-radius: 10px;padding: 10px;
}	

.zz3{
	margin-top:3%;width: 100%;background:linear-gradient(90deg,#000,rgba(0,0,0,.3));height: 100px;margin-left: 8%;border-radius: 10px;padding: 10px;
}	
	
.Broadcast{
  background-color: #151d31;
  padding: 9px 10px;
  line-height: 16px;
  margin: 4px 0;
}
.Broadcast .van-swipe-item{
  color: #fff;
}
.TaskHall>>>.van-grid-item__content{
  background-color: #151d31;
  color: #fff;
  padding: 10px 22px;
  justify-content: flex-start;
  text-align: justify;
  border-radius: 5px;
}
.TaskHall>>>.van-grid-item__icon-wrapper{
  margin-right: 10px;
  flex: 1;
  text-align: left;
}
.zh-CN>>>.van-grid-item__icon-wrapper,.zh-HK>>>.van-grid-item__icon-wrapper{
  word-spacing: 5px;
}
.MemberList{
  overflow: hidden;
  margin-bottom: 5px;
}
.MemberList>>>.van-tabs__wrap{
  margin: 4px 0;
}
.MemberList>>>.van-tabs__nav--card{
  margin: 0;
}
.MemberList>>>.van-icon{
  margin-right: 10px;
}
.MemberList>>>.van-tab__text{
  color: #fff;
  display: flex;
  align-items: center;
}
.MemberList .van-swipe-item{
  padding: 1px 0;
}
.topItem {
  line-height: 1;
  background-color: #151d31;
  color: #fff;
}
.topItem .van-cell__left-icon{
  height: 46px;
  width: 46px;
  background-color: #fff;
  border-radius: 100%;
  overflow: hidden;
  padding: 2px;
}
.topItem .van-icon__image{
  width: 100%;
  height: 100%;
}
.topItem .van-cell__label{
  line-height: 1;
  margin-top: 5px;
  color: #bbb;
}
.topItem .profit{
  background-color: rgba(255, 255, 255, .5);
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 3px 8px;
  font-size: 13px;
  color: #0e1526;
}
.topItem .profit img{
  margin-right: 5px;
}
.Menu{
  flex-wrap: nowrap;
}
.Menu>>>.van-grid-item__content{
  background-color: #151d31;
  color: #fff;
  border-radius: 5px;
}
.Menu>>>.van-grid-item__icon-wrapper{
  margin-right: 15px;
  overflow: hidden;
  flex: 1;
}
.Title{
  background-color: #151d31;
  color: #fff;
  margin: 4px 0;
  padding: 7px 25px;
}
</style>
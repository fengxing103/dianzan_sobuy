<template>
  <div class="PageBox">
	  
    <div class="ScrollBox">
		<div data-v-0f6bd3cf="" style="padding: 10px; background-color: rgb(255, 255, 255); margin: 15px; border-radius: 5px;"><div data-v-0f6bd3cf="" class="shadowbox1">
		<div data-v-0f6bd3cf="" style="color: #000000;">{{$t('user.default[2]')}}</div><div data-v-0f6bd3cf="" style="justify-content: space-between; display: flex; align-items: center; margin-top: 10px;">
		<span data-v-0f6bd3cf="" id="IosLink" style="font-size: 25px; font-weight: 600; color: rgb(254, 92, 68);">{{UserInfo.idcode}}</span>
		<input data-v-0f6bd3cf="" id="AppLink" type="text" readonly="readonly" style="position: absolute; opacity: 0;">
		<div data-v-0f6bd3cf="" style="background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 5px 25px; border-radius: 25px;" @click="copyFn(UserInfo.idcode)" >{{$t('promote[3]')}}</div></div></div>
		<div data-v-0f6bd3cf="" class="shadowbox1" style="margin-top: 3px;">
			<div data-v-0f6bd3cf="" style="color: #000000;">{{$t('promote[4]')}}</div><div data-v-0f6bd3cf="" style="justify-content: space-between; display: flex; align-items: center; margin-top: 10px;">
			<span data-v-0f6bd3cf="" id="IosLink1" style="color: rgb(254, 92, 68); width: 60%; word-break: break-all;">{{promoteUrl}}</span>
			<input data-v-0f6bd3cf="" id="AppLink1" type="text" readonly="readonly" style="position: absolute; opacity: 0;">
			<div data-v-0f6bd3cf="" style="background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 5px 25px; border-radius: 25px;" @click="copyFn(promoteUrl)" >{{$t('promote[3]')}}</div>
			</div><div data-v-0f6bd3cf="" style="justify-content: space-around; display: flex; margin-top: 15px;">
			<div data-v-0f6bd3cf="" style="justify-content: center; align-items: center; display: flex;"><i data-v-0f6bd3cf="" class="van-icon" style="font-size: 20px;">
			<img src="../../../public/static/new/whatsapp.png" width="20px" >
			<!----></i>
			<p data-v-0f6bd3cf="" style="font-size: 12px; margin-left: 3px;color: #000000;" @click="tourl(3)">whatsapp</p></div>
			<div data-v-0f6bd3cf="" style="justify-content: center; align-items: center; display: flex;">
				<i data-v-0f6bd3cf="" class="van-icon" style="font-size: 20px;"><img src="../../../public/static/new/telegram.png" width="20px" ><!----></i>
				<p data-v-0f6bd3cf="" style="font-size: 12px; margin-left: 3px;color: #000000;" @click="tourl(2)">telegram</p></div>
				<div data-v-0f6bd3cf="" style="justify-content: center; align-items: center; display: flex;">
					<i data-v-0f6bd3cf="" class="van-icon" style="font-size: 20px;">
						<img src="../../../public/static/new/sms.png" width="20px" ><!----></i>
						<p data-v-0f6bd3cf="" style="font-size: 12px; margin-left: 3px;color: #000000;">sms</p></div>
						<div data-v-0f6bd3cf="" style="justify-content: center; align-items: center; display: flex;">
							<i data-v-0f6bd3cf="" class="van-icon" style="font-size: 20px;"><img src="../../../public/static/new/email.png" width="20px" ><!----></i>
							<p data-v-0f6bd3cf="" style="font-size: 12px; margin-left: 3px;color: #000000;">email</p></div></div></div><div data-v-0f6bd3cf="" class="shadowbox1" style="margin-top: 15px; padding: 0px;">
							<div data-v-0f6bd3cf="" class="search" style="padding: 15px;">
								
							<!-- 	<div data-v-0f6bd3cf="" style="justify-content: start; display: flex; width: 60%;">
									<input data-v-0f6bd3cf="" type="text" readonly="readonly" style="width: 50%;"><p data-v-0f6bd3cf="" style="font-size: 20px; margin: 0px 5px;">-</p>
							<input data-v-0f6bd3cf="" type="text" readonly="readonly" style="width: 50%;"></div>
							<div data-v-0f6bd3cf="" style="background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 5px 25px; border-radius: 25px;">Search</div> -->
							</div>
							
							<div class="search" style="margin-top: -10%;">
							  <div>
							    <input type="text" style="width: 35%;" readonly v-model="startDate" @click="showDate=true,currentDate=new Date(startDate),pickType=1">
							    -
							    <input type="text" style="width: 35%;" readonly v-model="endDate" @click="showDate=true,currentDate=new Date(endDate),pickType=2">
							  </div>
							  <div data-v-0f6bd3cf="" style="background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 5px 25px; border-radius: 25px;width: 33%;" @click="getTeamReport" >{{$t('teamReport.default[0]')}}</div>
							  <!-- <van-button type="info" size="mini" style="background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 5px 25px; border-radius: 25px;" @click="getTeamReport">{{$t('teamReport.default[0]')}}</van-button> -->
							</div>
							
						
							
							<div data-v-0f6bd3cf="" class="profitbox van-grid" style="padding-left: 1px;background-color: white;">
								<div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px;"><div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center">
								<div data-v-0f6bd3cf="" align="center">
									<p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;"> {{reportData.teamNumber||'0'}}/{{reportData.teamavip + reportData.teambvip +reportData.teamcvip||'0'}} </p>
									<p data-v-0f6bd3cf="" @click="viewlist(0,'sum')" >Team size/VIP</p>
									<p v-show="isteamviplist == 0" data-v-0f6bd3cf="" style="background-color: #000000;opacity: 0.5;color: white;" v-for="(item,index) in teamviplist" >VIP{{item.grade}} : {{item.count}}</p>
									</div>
								
								</div></div>
								<div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px;">
									<div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center"><div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;">
									{{reportData.teamRecharge||'0.00'}}</p>
									<p data-v-0f6bd3cf="">{{$t('teamReport.default[3]')}}({{InitData.currency}})</p></div></div></div><div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px;">
									<div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center"><div data-v-0f6bd3cf="" align="center">
									<p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;"> {{reportData.teamWithdrawal||'0.00'}} </p><p data-v-0f6bd3cf="">{{$t('teamReport.default[4]')}}({{InitData.currency}})
									</p></div></div></div>
									<div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px; margin-top: 1px;"><div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center">
									<div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;">{{reportData.newReg||'0'}}</p><p data-v-0f6bd3cf="">{{$t('teamReport.default[8]')}}({{$t('teamReport.default[9]')}})</p></div>
									</div></div><div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px; margin-top: 1px;">
									<div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center"><div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;">{{reportData.firstRechargeToday||'0'}} </p>
									<p data-v-0f6bd3cf="">{{$t('teamReport.default[5]')}}({{$t('teamReport.default[9]')}})</p></div></div></div>
									<div data-v-0f6bd3cf="" class="van-grid-item" style="flex-basis: 33.3333%; padding-right: 1px; margin-top: 1px;"><div style="background-color: white;color: #000000;" class="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center"><div data-v-0f6bd3cf="" align="center">
									<p data-v-0f6bd3cf="" style="font-size: 18px; font-weight: 600;">{{reportData.directlyUnder||'0'}} </p><p data-v-0f6bd3cf="">{{$t('teamReport.default[6]')}}({{$t('teamReport.default[9]')}})</p></div></div></div></div></div>
									<div data-v-0f6bd3cf="" class="shadowbox1" style="justify-content: start; display: flex; padding: 0px; margin-top: 15px; color: rgb(255, 255, 255);">
										<div data-v-0f6bd3cf="" align="center" style="width: 50%; padding: 10px; background-color: rgb(85, 170, 0);color: #ffffff;"  @click="$router.push('/user/dayreport')" >
											Task rebate details</div><div  data-v-0f6bd3cf="" align="center" style="width: 50%; padding: 10px; background-color: rgb(85, 85, 255);" @click="$router.push('/user/dayreport')">
											Referral reward details</div></div>
											<div data-v-0f6bd3cf="" class="shadowbox1" style="margin-top: 15px; padding: 0px; justify-content: space-between; display: flex; align-items: center;color: #000000;">
												<div  data-v-0f6bd3cf="" style="font-size: 16px; background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 25px 15px; border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
													T1 /VIP
													</div>
													
													
													<div data-v-0f6bd3cf="" style="justify-content: space-between; display: flex;">
														<div data-v-0f6bd3cf="" align="center" style="margin-right: 15px;"><p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['A'][0]}} / {{reportData.teamavip || 0}}</p>
														<p @click="viewlist(1,'a')" data-v-0f6bd3cf="" style="font-size: 12px; margin-top: 10px;">Team size/VIP
														</p>
														
														<p  v-show="isteamviplist == 1"  data-v-0f6bd3cf="" style="background-color: #000000;opacity: 0.5;color: white;" v-for="(item,index) in reportData.teamaviplist" >VIP{{item.grade}} : {{item.count}}</p>
														
														</div><div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['A'][1]}}</p>
														<p data-v-0f6bd3cf="" style="font-size: 12px; margin-top: 10px;">Team benefits</p>
														
														</div></div>
														<div data-v-0f6bd3cf="" class="teamButton" style="
    background-color: #fe5c44;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    margin-right: 0px;" @click="$router.push('/user/dayreport')"> Detail </div></div>
														<div data-v-0f6bd3cf="" class="shadowbox1" style="margin-top: 15px; padding: 0px; justify-content: space-between; display: flex; align-items: center;color: #000000;">
															<div data-v-0f6bd3cf="" style="font-size: 16px; background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 25px 15px; border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
																T2 /VIP</div>
																<div data-v-0f6bd3cf="" style="justify-content: space-between; display: flex;"><div data-v-0f6bd3cf="" align="center" style="margin-right: 15px;">
																<p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['b'][0]}} / {{reportData.teambvip || 0}}</p>
																<p data-v-0f6bd3cf="" @click="viewlist(2,'b')" style="font-size: 12px; margin-top: 10px;">Team size/VIP</p>
																<p  v-show="isteamviplist == 2"  data-v-0f6bd3cf="" style="background-color: #000000;opacity: 0.5;color: white;" v-for="(item,index) in reportData.teambviplist" >VIP{{item.grade}} : {{item.count}}</p>
																
																</div><div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['b'][1]}}</p>
																<p data-v-0f6bd3cf="" style="font-size: 12px; margin-top: 10px;">Team benefits</p>
																
																</div></div><div data-v-0f6bd3cf="" class="teamButton" style="
    background-color: #fe5c44;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    margin-right: 0px;" @click="$router.push('/user/dayreport')"> Detail 
																</div></div>
																<div data-v-0f6bd3cf="" class="shadowbox1" style="margin-top: 15px; padding: 0px; justify-content: space-between; display: flex; align-items: center;color: #000000;">
																	<div data-v-0f6bd3cf="" style="font-size: 16px; background-color: rgb(254, 92, 68); color: rgb(255, 255, 255); padding: 25px 15px; border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
																		T3 /VIP</div><div data-v-0f6bd3cf="" style="justify-content: space-between; display: flex;">
																		<div data-v-0f6bd3cf="" align="center" style="margin-right: 15px;">
																			<p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['c'][0]}} / {{reportData.teamcvip || 0}}</p>
																			<p data-v-0f6bd3cf="" style="font-size: 12px; margin-top: 10px;"  @click="viewlist(3,'b')" >Team size/VIP</p>
																			<p  v-show="isteamviplist == 3"  data-v-0f6bd3cf="" style="background-color: #000000;opacity: 0.5;color: white;" v-for="(item,index) in reportData.teamcviplist" >VIP{{item.grade}} : {{item.count}}</p>
																			
																			
																			</div>
																			<div data-v-0f6bd3cf="" align="center"><p data-v-0f6bd3cf="" style="font-size: 12px;">{{reportData.lcount['c'][1]}}</p>
																			<p data-v-0f6bd3cf="" style="font-size: 12px; margin-top: 10px;">Team benefits</p></div>
																			</div><div data-v-0f6bd3cf="" class="teamButton" style="
    background-color: #fe5c44;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    margin-right: 0px;" @click="$router.push('/user/dayreport')" > Detail </div></div></div>
		
      <van-tabs :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60" v-model="tabsIndex" @change="changeTabs" style="display: none;" >
        <van-tab v-for="(item,index) in $t('teamReport.tabs')" :title="item" :key="index">
          <div class="search">
            <div>
              <input type="text" readonly v-model="startDate" @click="showDate=true,currentDate=new Date(startDate),pickType=1">
              -
              <input type="text" readonly v-model="endDate" @click="showDate=true,currentDate=new Date(endDate),pickType=2">
            </div>
            <van-button type="info" size="mini" @click="getTeamReport">{{$t('teamReport.default[0]')}}</van-button>
          </div>
          <div class="Report" v-show="tabsIndex==0">
            <van-grid class="MyEarnings" :column-num="2" :border="false" gutter="1">
				
              <!-- <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[1]')}}({{InitData.currency}})
                </template>
                <template #text>
                  {{reportData.teamBalance||'0.00'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[2]')}}({{InitData.currency}})
                </template>
                <template #text>
                  {{reportData.teamProfit||'0.00'}}
                </template>
              </van-grid-item> -->
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[3]')}}({{InitData.currency}})
                </template>
                <template #text>
                  {{reportData.teamRecharge||'0.00'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[4]')}}({{InitData.currency}})
                </template>
                <template #text>
                  {{reportData.teamWithdrawal||'0.00'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[5]')}}({{$t('teamReport.default[9]')}})
                </template>
                <template #text>
                  {{reportData.firstRechargeToday||'0'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[6]')}}({{$t('teamReport.default[9]')}})
                </template>
                <template #text>
                  {{reportData.directlyUnder||'0'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[7]')}}({{$t('teamReport.default[9]')}})
                </template>
                <template #text>
                  {{reportData.teamNumber||'0'}}
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  {{$t('teamReport.default[8]')}}({{$t('teamReport.default[9]')}})
                </template>
                <template #text>
                  {{reportData.newReg||'0'}}
                </template>
              </van-grid-item>
            </van-grid>
            <van-tabs color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" v-model="teamActive" style="margin-top: 10px;">
              <van-tab :title="$t('teamReport.team[0]')">
                <van-grid class="MyEarnings" :column-num="3" :border="false" gutter="1" v-if="!Array.isArray(reportData.team1)">
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[18]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      {{reportData.team1.teamRechargeCount||'0.00'}}
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[19]')}}({{$t('teamReport.default[9]')}})
                    </template>
                    <template #text>
                      {{reportData.team1.teamRechargeNumber||'0'}}
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[20]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      <!-- {{reportData.team1.teamSpreadSum||'0.00'}} -->
                    </template>
                  </van-grid-item>
                </van-grid>
                <van-empty :description="$t('teamReport.default[17]')" style="opacity: .5" v-else />
              </van-tab>
              <van-tab :title="$t('teamReport.team[1]')">
                <van-grid class="MyEarnings" :column-num="3" :border="false" gutter="1" v-if="!Array.isArray(reportData.team2)">
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[18]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      {{reportData.team2.teamRechargeCount||'0.00'}}
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[19]')}}({{$t('teamReport.default[9]')}})
                    </template>
                    <template #text>
                      <!-- {{reportData.team2.teamRechargeNumber||'0'}} -->
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[20]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      <!-- {{reportData.team2.teamSpreadSum||'0.00'}} -->
                    </template>
                  </van-grid-item>
                </van-grid>
                <van-empty :description="$t('teamReport.default[17]')" style="opacity: .5" v-else />
              </van-tab>
              <van-tab :title="$t('teamReport.team[2]')">
                <van-grid class="MyEarnings" :column-num="3" :border="false" gutter="1" v-if="!Array.isArray(reportData.team3)">
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[18]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      <!-- {{reportData.team3.teamRechargeCount||'0.00'}} -->
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[19]')}}({{$t('teamReport.default[9]')}})
                    </template>
                    <template #text>
                      <!-- {{reportData.team3.teamRechargeNumber||'0'}} -->
                    </template>
                  </van-grid-item>
                  <van-grid-item>
                    <template #icon>
                      {{$t('teamReport.default[20]')}}({{InitData.currency}})
                    </template>
                    <template #text>
                      {{reportData.team3.teamSpreadSum||'0.00'}}
                    </template>
                  </van-grid-item>
                </van-grid>
                <van-empty :description="$t('teamReport.default[17]')" style="opacity: .5" v-else />
              </van-tab>
            </van-tabs>
          </div>
		  
          <div class="MyTeam" v-show="tabsIndex==1">
            <div class="mt10 bar" v-if="lowerName.length">
              <a href="javascript:;" @click="lowerReport()"><i>{{$t('teamReport.default[10]')}}</i></a>
              <a href="javascript:;" v-for="(item,index) in lowerName" @click="lowerReport(item.pve_id,index)">><em v-if="index==lowerName.length-1">{{item.name}}</em><i v-else>{{item.name}}</i></a>
            </div>
            <table class="mt10" width="100%">
              <thead>
                <tr>
                  <th>{{$t('teamReport.default[11]')}}</th>
                  <th>{{$t('teamReport.default[12]')}}</th>
                  <th>{{$t('teamReport.default[13]')}}</th>
                  <th>{{$t('teamReport.default[14]')}}</th>
                  <th>{{$t('teamReport.default[15]')}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in reportData.teamData" :key="index">
                  <td><a href="javascript:;" @click="getSubUser(item.id,item.username)">{{item.username}}</a></td>
                  <td>{{item.recharge}}</td>
                  <td>{{item.withdrawal}}</td>
                  <td>{{item.rebate}}</td>
                  <td>{{item.commission}}</td>
                </tr>
              </tbody>
            </table>
          </div>
		  
        </van-tab>
      </van-tabs>
	  <div style="position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 50px;
            background-color: #eee;
            z-index: 9999;">
			<Footer />
	  </div>
	  
    </div>
	
	
    <van-popup v-model="showDate" position="bottom" close-on-popstate>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :title="$t('teamReport.default[16]')"
        :min-date="minDate"
        @confirm="confirmDate"
        @cancel="showDate=false"
      />
    </van-popup>
	
  </div>
  
</template>

<script>
import axios from '../../common/Axios'
export default {
  name: 'TeamReport',
  components: {
  },
  props: [],
  data() {
    return {
      tabsIndex: 0,
      currentDate: '',
	  promoteUrl:'',
      startDate: this.$Util.DateFormat('YY-MM-DD',new Date()),
      endDate: this.$Util.DateFormat('YY-MM-DD',new Date()),
      showDate: false,
      minDate: new Date(2020,0,1),
      pickType: 1,
      reportData: {
        team1: '',
        team2: '',
        team3: ''
      },
      lowerName: [],
      currPid: '',
      teamActive: 0,
	  kefu:'',
	  teamviplist:"",
	  isteamviplist:8,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
	  this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`
    switch(this.tabsIndex){
      case 1:
        this.$parent.navBarTitle = this.$t('teamReport.tabs[1]')
        break;
      default:
        this.$parent.navBarTitle = this.$t('teamReport.tabs[0]')
    }
	var that = this;
	axios.post('https://abc.2225192.com/api/line/getservice',
	{
		  code:1,
	}
	).then(function(res){
		  console.log(res.data)
		  that.kefu = res.data
	})
    this.getTeamReport()
	
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
	  viewlist(type,type_class){
		 
		if(this.isteamviplist == type){
			this.isteamviplist = 8;
		}else{
			this.isteamviplist = type;
		}  
	  },
	  tourl(type){
	  	// console.log(this.kefu.service_url.service_url);
	  	// return false;
	  	if(type==1){
	  		window.open(this.kefu.service_url.service_url)
	  	}else if(type == 2){
	  		window.open(this.kefu.telegram.telegram)
	  	}else{
	  		window.open(this.kefu.whatsapp.whatsapp)
	  	}
	  },
	  copyFn(val) {
	        // createElement() 方法通过指定名称创建一个元素
			console.log("dasdsa");
			   let target = document.createElement('input') //创建input节点
			              target.value = val // 给input的value赋值
			              document.body.appendChild(target) // 向页面插入input节点
			              target.select() // 选中input
			              document.execCommand('Copy')
						  // this.$Dialog.Toast(this.t('dialog[3]'));
						  this.$Dialog.Toast(this.$t('dialog[3]'));
			
	      },
    confirmDate(date) {
      if(this.pickType==1){
        this.startDate = this.$Util.DateFormat('YY-MM-DD',date)
      }
      if(this.pickType==2){
        this.endDate = this.$Util.DateFormat('YY-MM-DD',date)
      }
      this.showDate = false
    },
    changeTabs(index){
      switch(index){
        case 1:
          this.$parent.navBarTitle = this.$t('teamReport.tabs[1]')
          break;
        default:
          this.currPid = ''
          this.lowerName = []
          this.$parent.navBarTitle = this.$t('teamReport.tabs[0]')
          this.getTeamReport()
      }
    },
    getSubUser(pid,name) {
      this.lowerName.push({name: name,pve_id: pid})
      this.getMyTeam(pid)
    },
    getTeamReport() {
      let post = {startdate: this.startDate,enddate: this.endDate}
      if(this.currPid){
        post.pve_id = this.currPid
      }
      this.$Model.TeamReport(post,data=>{
        if(data.code==1){
          data.teamData = Object.values(data.teamData)
          this.reportData = data;
		  this.teamviplist = data.teamviplist;
		  console.log(this.reportData);
        }
      })
    },
    getMyTeam(pid) {
      let post = {pve_id: pid,startdate: this.startDate,enddate: this.endDate}
      this.currPid = pid
      this.$Model.TeamReport(post,data=>{
        if(data.code==1){
          this.reportData.teamData = Object.values(data.teamData)
        }else{
          this.reportData.teamData = []
        }
      })
    },
    lowerReport(pid,index){
      if(pid){
        this.currPid = pid
        if(index!=this.lowerName.length-1){
          this.getMyTeam(pid)
          this.lowerName = this.lowerName.slice(0,index+1);
        }
      }else{
        this.currPid = ''
        this.lowerName = []
        this.getTeamReport()
      }
    },
  }
}
</script>
<style scoped>
	
	--van-picker-background-color{
		background-color: #000000;
	}
table{
  text-align: center;
  margin-bottom: 20px;
}
table tr th{
  padding: 6px 5px;
  background-color: #151d31;
  color: #bbb;
}
table tr td{
  border: 1px #151d31 solid;
  padding: 10px 5px;
  color: #fff;
}
table tr td:first-child,table tr td:last-child{
  border-left: 0;
}
table tr td em{
  color: #4087f1;
}
.search{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.search input{
  border: 1px #ddd solid;
  border-radius: 5px;
  width: 110px;
  line-height: 24px;
  text-align: center;
  font-size: 13px;
  color: #333;
}
.MyTeam .bar{
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.MyTeam .bar a{
  color: #888;
}
.MyTeam .bar i{
  color: #1989fa;
}
</style>
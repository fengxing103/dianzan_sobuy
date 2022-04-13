<template>
  <div class="Site IndexBox">
    <div class="ScrollBox">
      <van-swipe :autoplay="3000" indicator-color="#888" style="height: 10rem">
        <van-swipe-item v-for="(item,index) in InitData.bannerList" :key="index">
          <img :src="item" width="100%">
        </van-swipe-item>
      </van-swipe>
      <van-tabs :ellipsis="false" :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60" v-model="tabsIndex" @change="changeTabs">
        <van-tab v-for="item in InitData.taskclasslist.filter(obj=>obj.state==1)" :title="item.group_name" :key="item.group_id" style="padding: 0 12px;">
          <van-cell v-for="item in InitData.UserGradeList" :key="item.grade" @click="openTaskList(item.grade,item.name)">
            <template #title>
              <b>{{item.name}}</b>
              <div v-html="$t('vip.list.label',{number: item.number})"></div>
            </template>
            <span class="tag" v-if="UserInfo.vip_level==item.grade">{{$t('task.index[0]')}}</span>
          </van-cell>
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Task',
  components: {
  },
  props: ['tabsActive'],
  data() {
    return {
      taskType: '',
      tabsIndex: 0,
      isStore: false,
    }
  },
  computed: {
  },
  watch: {

  },
  created() {
    this.tabsIndex = this.tabsActive?Number(this.tabsActive):0
    if(this.InitData.taskclasslist.length){
      this.taskType = this.InitData.taskclasslist.filter(obj=>obj.state==1)[0].group_id
      if(this.tabsActive){
        this.taskType = this.InitData.taskclasslist.filter(obj=>obj.state==1)[this.tabsActive].group_id
      }
    }
  },
  mounted() {
    
  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    changeTabs(index) {
      this.taskType = this.InitData.taskclasslist.filter(obj=>obj.state==1)[index].group_id
    },
    openTaskList(grade,name) {
      if(this.UserInfo.vip_level<grade){
        const html = this.$t('task.index[1]',{currVip: this.UserInfo.useridentity,vip:name})
        this.$Dialog.Confirm(html,()=>{
          this.$router.push('/vip')
        }, this.$t('task.index[2]'))
      }else{
        if(this.taskType){
          this.$router.push(`/taskList/${this.taskType}/${grade}`)
        }else{
          this.$Dialog.Toast(this.$t('task.index[3]'))
        }
      }
    },
  }
}
</script>
<style scoped>
.van-tab__pane{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.van-cell{
  background: url('../../../public/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #ccd7e9, #7085a5);
  background-size: contain;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  border-radius: 5px;
  padding: 20px 15px;
  margin-top: 18px;
  width: calc(100vw/2 - 18px);
}
.van-cell:nth-of-type(2){
  background: url('../../../public/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #fd9e02, #d86a25);
  background-size: contain;
}
.van-cell:nth-of-type(3){
  background: url('../../../public/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #3044b3, #273580);
  background-size: contain;
}
.van-cell:nth-of-type(4){
  background: url('../../../public/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #31b489, #3e91b8);
  background-size: contain;
}
.van-cell:nth-of-type(5){
  background: url('../../../public/static/images/vip_new_bg.png') no-repeat 40px,
  linear-gradient(60deg, #47484c, #1f2025);
  background-size: contain;
}
.van-cell .van-cell__title{
  flex: auto;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.van-cell .van-cell__title b{
  font-size: 18px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
}
.van-cell .van-cell__value{
  position: absolute;
  top: 10px;
  left: 0;
  background-color: rgba(0, 0, 0, .2);
  color: #fff;
  font-size: 12px;
  padding: 0 8px 0 5px;
  border-radius: 0 50px 50px 0;
}
</style>
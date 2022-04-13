<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <div v-if="setType=='realname'||setType=='info'">
        <van-field
          size="large"
          v-model="realName" 
          :label="$t('userSet.label[0]')" 
          :placeholder="$t('userSet.placeholder[0]')" 
          :readonly="UserInfo.is_realname==1?true:false"
          clearable
          class="mt15"
        />
        <!-- <van-field
          size="large"
          v-model="qqNumber" 
          :label="$t('userSet.label[1]')" 
          :placeholder="$t('userSet.placeholder[1]')" 
          clearable
          type="digit"
          v-if="setType=='info'"
        /> -->
      </div>
      <div v-if="setType=='alipay'">
        <van-field
          size="large"
          v-model="alipayId" 
          :label="$t('userSet.label[2]')" 
          :placeholder="$t('userSet.placeholder[2]')" 
          :readonly="UserInfo.alipay?true:false"
          clearable
          class="mt15"
        />
        <van-field
          size="large"
          v-model="alipayName" 
          :label="$t('userSet.label[3]')" 
          :placeholder="$t('userSet.placeholder[3]')" 
          clearable
          :readonly="UserInfo.alipay_name?true:false"
        />
      </div>
      <div style="padding: 20px 16px;">
        <van-button type="danger" block style="font-size: 16px;" @click="setUserInfo">{{$t('userSet.default[3]')}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  components: {

  },
  props: ['setType'],
  data() {
    return {
      realName: '',
      qqNumber: '',
      alipayId: '',
      alipayName: '',
      postData: {

      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    if(this.setType=='realname'){
      this.$parent.navBarTitle = this.$t('userSet.default[0]')
      this.realName = this.UserInfo.realname
    }
    if(this.setType=='info'){
      this.$parent.navBarTitle = this.$t('userSet.default[1]')
      this.realName = this.UserInfo.realname
      // this.qqNumber = this.UserInfo.qq
    }
    if(this.setType=='alipay'){
      this.$parent.navBarTitle = this.$t('userSet.default[2]')
      this.alipayId = this.UserInfo.alipay
      this.alipayName = this.UserInfo.alipay_name
    }
    this.$Model.GetUserInfo();
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    setUserInfo() {
      if(this.setType=='realname'){
        this.postData.realname = this.realName
      }
      if(this.setType=='info'){
        this.postData.realname = this.realName
        // this.postData.qq = this.qqNumber
      }
      if(this.setType=='alipay'){
        this.postData.alipay = this.alipayId
        this.postData.alipay_name = this.alipayName
      }
      this.$Model.SetUserInfo(this.postData)
	  this.$router.go(-1)
    },
  }
}
</script>
<style scoped>
.van-cell>>>.van-cell__title{
  font-size: 14px;
}
</style>
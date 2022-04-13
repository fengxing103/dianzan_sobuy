<template>
  <div class="PageBox">
    <div class="ScrollBox">
      <van-tabs v-model="tabsActive" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60" :border="false">
        <van-tab v-for="(item,index) in tabsList" :key="index" :title="item.group_name">
          <van-form class="mt15" @submit="onSubmit(index)">
            <van-field
              v-model="accountArr[index]"
              :label="$t('bindAccount.label[2]')"
              :placeholder="$t('bindAccount.placeholder',{account: item.group_name})"
              clearable
              :readonly="UserInfo[item.bind_field]?true:false"
              v-if="item.bind_type==1"
            />
            <van-field
              :label="$t('bindAccount.label[1]')"
              v-else
            >
              <template #input>
                <van-uploader v-model="accountArr[index]" :after-read="afterRead" :max-count="1" :deletable="UserInfo[item.bind_field]?false:true" />
              </template>
            </van-field>
            <div style="margin: 25px 16px;">
              <van-button round block type="danger" native-type="submit" style="font-size: 16px" :disabled="UserInfo[item.bind_field]?true:false">
                {{$t('bindAccount.default[2]')}}
              </van-button>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'BindAccount',
  components: {

  },
  props: [],
  data() {
    return {
      tabsActive: 0,
      weixinAcc: '',
      postData: {

      },
      douyinImg: [],
      kuaishouImg: [],
      accountArr: [],
      tabsList: [],
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$Model.GetUserInfo()
    this.$parent.navBarTitle = this.$t('bindAccount.default[0]')
    this.tabsList = this.InitData.taskclasslist.filter(item=>item.bind_status==1&&item.state==1)
    this.accountArr = this.tabsList.flatMap(item=>item.bind_type==2?[this.UserInfo[item.bind_field]?[{url:this.InitData.setting.up_url+this.UserInfo[item.bind_field]}]:[]]:(this.UserInfo[item.bind_field]||''))
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    onSubmit(index) {
      this.postData = {}
      const key = this.tabsList[index].bind_field
      if(this.tabsList[index].bind_type==2){
        this.postData[key] = this.accountArr[index][0].url
      }else{
        this.postData[key] = this.accountArr[index]
      }
      this.$Model.SetUserInfo(this.postData)
    },
    afterRead(file) {
      file.status = 'uploading'
      file.message = this.$t('upload[0]')
      this.uploadImgs(file)
    },
    compressImg(file) {
      this.$Util.CompressImg(file.file.type,file.content,750,(image)=>{
        let param = new FormData();
        param.append('token',localStorage['Token']);
        param.append('type',3);
        param.append('image',image,file.file.name);
        this.$Model.UploadImg(param,(data)=>{
          if(data.code==1){
            file.message = this.$t('upload[2]')
            file.status = 'success'
            file.url = data.url
          }else{
            file.status = 'failed'
            file.message = this.$t('upload[3]')
          }
        });
      })
    },
    uploadImgs(file){
      if(file.length){
        file.forEach(item=>{
          if (!item.file.type.match(/image/)){
            item.status = 'failed'
            item.message = this.$t('upload[1]')
            return;
          }
          this.compressImg(item)
        })
      }else{
        if (!file.file.type.match(/image/)){
          file.status = 'failed'
          file.message = this.$t('upload[1]')
          return;
        }
        this.compressImg(file)
      }
    },
  }
}
</script>
<style scoped>
.van-cell>>>.van-cell__title{
  font-size: 14px;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image,.van-uploader>>>.van-uploader__preview{
  margin: 0;
  background-color: #f7f8fa;
  border-radius: 8px;
}

</style>
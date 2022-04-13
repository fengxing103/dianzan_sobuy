<template>
  <div class="PageBox" :style="infoData.o_status==1||infoData.o_status==2?'padding-bottom: 64px':''">
    <div class="ScrollBox" v-if="infoData">
      <div class="Details">
        <img class="StateIcon" :src="`./static/zxwlpic/state${infoData.o_status}-${$i18n.locale}.png`" height="90">
        <dl>
          <dd>
            <label>{{$t('task.info[1]')}}：</label>
            <span>{{infoData.title}}</span>
          </dd>
          <dd>
            <label>{{$t('task.info[2]')}}：</label>
            <span>{{InitData.currency}}<i>+{{infoData.reward_price}}</i></span>
          </dd>
          <dd>
            <label>{{$t('task.info[3]')}}：</label>
            <span>{{infoData.content}}</span>
          </dd>
          <dd>
            <label>{{$t('task.info[4]')}}：</label>
            <span>{{infoData.requirement}}</span>
          </dd>
          <!-- <dd style="border-top: 1px #eee solid;padding-top: 13px;">
            <label>完成状态：</label>
            <span :class="`state${infoData.o_status}`">{{infoData.o_status_dec}}</span>
          </dd> -->
          <dd v-if="infoData.o_status==1">
            <label>{{$t('task.info[5]')}}：</label>
            <van-uploader v-model="exampleImg" :after-read="afterRead" multiple />
          </dd>
          <dd v-else>
            <label>{{$t('task.info[5]')}}：</label>
            <div v-if="infoData.o_examine_demo.length">
              <van-image fit="cover" width="49" height="49" :src="`${ApiUrl}${item}`" v-for="(item,index) in infoData.o_examine_demo" :key="index" @click="$ImagePreview([`${ApiUrl}${item}`])" />
            </div>
            <span v-else>{{$t('task.info[6]')}}</span>
          </dd>
          <dd v-if="infoData.o_status!=1&&infoData.o_status!=2&&infoData.o_status!=6">
            <label>{{$t('task.info[7]')}}：</label>
            <span>{{infoData.handle_remarks}}</span>
          </dd>
          <dd v-if="infoData.o_status!=6">
            <label>{{$t('task.info[8]')}}：</label>
            <span>{{infoData.handle_time}}</span>
          </dd>
        </dl>
        <dl>
          <dt style="justify-content: flex-start">
            <label>
              <img :src="`./static/head/${infoData.f_header}`" height="40" style="border-radius: 100%;vertical-align: middle;margin-right: 10px">
            </label>
            <span>
              <p>{{$t('task.info[9]')}}</p>
              <div style="display: flex;justify-content: space-between;align-items: center">{{infoData.f_username}} <em style="color:#999;font-size: 12px">{{infoData.add_time}} {{$t('task.info[10]')}}</em></div>
            </span>
          </dt>
          <dd style="border-top: 1px #2d3446 solid;padding-top: 13px" v-if="infoData.is_fx==1">
            <label>{{$t('task.info[20]')}}：</label>
            <textarea rows="3" style="width: 100%;flex: 1;margin-right: 5px;border-radius: 10px;padding: 5px 8px;border:0;background-color: #f5f5f5;color: #888;position: relative;z-index: 9">{{infoData.link_info}}</textarea>
            <input class="link" id="AppLink" type="text" readonly :value="infoData.link_info" style="position: absolute;opacity: 0">
            <span id="IosLink" style="position: absolute;opacity: 0">{{infoData.link_info}}</span>
            <div>
              <van-button block size="mini" type="info" round @click="$Util.CopyText('IosLink','AppLink')">{{$t('task.show[7]')}}</van-button>
            </div>
          </dd>
          <dd style="border-top: 1px #2d3446 solid;padding-top: 13px" v-else>
            <input class="link" id="AppLink" type="text" readonly :value="infoData.link_info" style="position: relative;z-index: 9">
            <span id="IosLink" style="position: absolute;opacity: 0">{{infoData.link_info}}</span>
            <div>
              <van-button block size="mini" plain round @click="$Util.CopyText('IosLink','AppLink')">{{$t('task.info[11]')}}</van-button>
              <van-button block size="mini" type="info" round style="margin: 5px 0 0;" @click="$Util.OpenUrl(infoData.link_info)">{{$t('task.info[12]')}}</van-button>
            </div>
          </dd>
        </dl>
      </div>
      <van-tabs :border="false" color="#4087f1" title-active-color="#4087f1" background="#151d31" title-inactive-color="#bbb" line-width="60">
        <van-tab :title="$t('task.info[13]')">
          <dl v-for="(item,index) in infoData.task_step" :key="index">
            <dt>
              <label>{{$t('task.info[14]',{index: index+1})}}：</label>
              <span>{{item.describe}}</span>
            </dt>
            <dd>
              <van-image fit="cover" :src="`${ApiUrl}${item.img}`" @click="$ImagePreview([`${ApiUrl}${item.img}`])" />
            </dd>
          </dl>
        </van-tab>
        <van-tab :title="$t('task.info[15]')">
          <div v-if="infoData.examine_demo">
            <van-image fit="cover" :src="`${ApiUrl}${item}`" v-for="(item,index) in infoData.examine_demo" :key="index" @click="$ImagePreview([`${ApiUrl}${item}`])" />
          </div>
          <van-empty image="error" :description="$t('task.info[16]')" v-else />
        </van-tab>
      </van-tabs>
    </div>
    <van-loading class="DataLoad" size="60px" vertical v-if="isLoad">{{$t('task.info[17]')}}</van-loading>
    <div style="position: fixed;bottom: 0;width: 100%;display: flex;align-items: center;justify-content: space-between;padding: 10px 5px" v-if="infoData.o_status==1||infoData.o_status==2">
      <van-button block color="#aaa" style="font-size: 16px;margin: 0 5px" @click="cancelTask">{{$t('task.info[18]')}}</van-button>
      <van-button block type="danger" style="font-size: 16px;margin: 0 5px" @click="submitTask" v-if="infoData.o_status==1">{{$t('task.info[19]')}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  components: {
    
  },
  props: ['taskId'],
  data() {
    return {
      isLoad: true,
      infoData: '',
      exampleImg: [],
      docTitle: document.title,
      promoteUrl: '',
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$parent.navBarTitle = this.$t('task.info[0]')
    this.getTaskinfo()
    this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {
    
  },
  methods: {
    getTaskinfo() {
      this.$Model.TaskOrderInfo(this.taskId,data=>{
        this.isLoad = false
        if(data.code==1){
          this.infoData = data.info
        }
        this.$nextTick(()=>{
          if(data.info.is_fx==1){
            new QRCode(document.getElementById("QRCode"), {
              text: this.promoteUrl,
              width: 110,
              height: 110,
              correctLevel : QRCode.CorrectLevel.H
            })
          }
        })
      })
    },
    submitTask() {
      if(this.exampleImg.length){
        const examine_demo = this.exampleImg.flatMap(item=>item.url)
		this.$Model.SubmitTask({order_id:  this.taskId,status: 6},data=>{
			
		  if(data.code==1){
			  this.$router.push(data.zpath)
		    this.getTaskinfo()
		  }
		})
        // this.$Model.SubmitTask({order_id: this.taskId,examine_demo: examine_demo},data=>{
        //   if(data.code==1){
        //     this.getTaskinfo()
        //   }
        // })
      }else{
        this.$Dialog.Toast(this.$t('task.msg'))
      }
    },
    cancelTask() {
      this.$Model.SubmitTask({order_id: this.taskId,status: 6},data=>{
        if(data.code==1){
          this.getTaskinfo()
        }
      })
    },
    afterRead(file) {
      file.status = 'uploading'
      file.message = this.$t('upload[0]')
      this.uploadImgs(file);
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
    saveQRCode() {
      Html2Canvas(document.getElementById("Promote")).then((canvas) => {
        if(window.plus){
          var saveN = 0;
          var saveImg = (img)=>{
            saveN+=1;
            var bm = new plus.nativeObj.Bitmap();
            bm.loadBase64Data(img, ()=>{
              bm.save( '_doc/promote'+saveN+'.jpg', {'overwrite':true,'format':'jpg'}, (e)=>{
                plus.gallery.save( e.target, (e)=>{  
                  this.$Dialog.Toast(this.$t('promote[7]'))
                },(err)=>{  
                  this.$Dialog.Toast(this.$t('promote[8]'))
                }); 
              }, (error)=>{  
                this.$Dialog.Toast(this.$t('promote[8]'))
              });
              setTimeout(function(){
                bm.recycle();
              },1000);
            }, (err)=>{  
              this.$Dialog.Toast(this.$t('promote[8]'))
            });
          };
          this.$Dialog.Alert(this.$t('promote[11]'),()=>{
            saveImg(canvas.toDataURL().replace('data:image/png;base64,',''))
          })
        }else{
          this.downCanvas(canvas.toDataURL())
        }
      });
    },
    downCanvas(url) {
      var a = document.createElement('a')
      var event = new MouseEvent('click')
      a.download = 'promote'
      a.href = url
      a.dispatchEvent(event)
    },
  }
}
</script>
<style scoped>
.Details dl{
  background-color: #151d31;
  margin-bottom: 10px;
  overflow: hidden;
}
.Details dl dt{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 13px;
  overflow: hidden;
  margin: 13px 0;
}
.Details dl dd{
  display: flex;
  align-items: center;
  padding: 0 13px;
  overflow: hidden;
  margin: 13px 0;
}
.Details dl dd .van-image{
  margin: 3px;
}
.Details dl label{
  font-weight: 600;
  white-space: nowrap;
}
.Details dl span{
  flex: 1;
}
.Details dl dd i{
  color: #4087f1;
}
.Details dl dd em{
  color: #999;
}
.Details .link{
  background-color: #f5f5f5;
  border: 0;
  flex: auto;
  margin-right: 10px;
  border-radius: 10px;
  padding: 15px 10px;
  color: #888;
  text-align: center;
}
.van-tabs>>>.van-tabs__content{
  overflow: hidden;
  min-height: 150px;
}
.van-tabs>>>.van-tabs__content dl dt{
  display: flex;
  align-items: center;
  padding: 15px;
}
.van-tabs>>>.van-tabs__content dl dt label{
  font-weight: 600;
}
.van-tabs>>>.van-tabs__content dl dd{
  padding: 0 15px;
  margin-bottom: 15px;
}
.van-tabs>>>.van-tabs__content img{
  max-width: 100%;
}
.state1{
  color: #f1c70d;
}
.state2{
  color: #dd6161;
}
.state3,.state4,.state6{
  color: #bbb;
}
.StateIcon{
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
}
.van-uploader>>>.van-uploader__upload,.van-uploader>>>.van-uploader__preview-image{
  margin: 0;
}
.van-uploader>>>.van-uploader__preview{
  margin: 0;
}
.PromoteInfo{
  position: relative;
  max-height: 410px;
  overflow: hidden;
}
.PromoteInfo>div{
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
  color: #fff;
}
.PromoteInfo>div h4{
  margin-bottom: 10px;
}
#QRCode>>>img{
  margin: 0 auto 10px;
  display: block;
  border: 8px #fff solid;
}
</style>
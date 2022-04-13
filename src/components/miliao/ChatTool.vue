<template>
  <div class="ChatTool">
    <ul>
      <!-- <li @click="upload">
        <van-icon name="video" />
        <p>相册</p>
      </li> -->
      <li @click="$emit('getToolType','bill')">
        <van-icon name="bill" />
        <p>红包</p>
      </li>
      <li>
        <van-uploader :after-read="onReadImg" accept="image/*">
          <van-icon name="photo" />
        </van-uploader>
        <p>图片</p>
      </li>
      <li>
        <van-uploader :after-read="onReadVideo" accept="video/*">
          <van-icon name="video" />
        </van-uploader>
        <p>视频</p>
      </li>
      <!-- <li @click="$emit('getToolType','friend')" v-if="chat_type==1||(chat_type==2&&card)">
         <van-icon name="manager" />
         <p>名片</p>
       </li>
       <li @click="$emit('getToolType','group')" v-if="chat_type==1||isGowner">
         <van-icon name="friends" />
         <p>群名片</p>
       </li> -->
      <!-- <li @click="openSitePage('recharge')">
        <van-icon class-prefix="my-icon" name="recharge" size="28px" />
        <p>充值</p>
      </li>
      <li @click="openSitePage('withdraw')">
        <van-icon class-prefix="my-icon" name="withdraw" size="28px" />
        <p>提款</p>
      </li>
      <li @click="openSitePage('betrecord')">
        <van-icon class-prefix="my-icon" name="betrecord" size="26px" />
        <p>投注记录</p>
      </li>-->
    </ul>
    <van-popup
        v-model="showUp"
        :overlayStyle="{backgroundColor:'transparent'}"
        style="height: 100%;width: 100%"
    >
      <UploadAuth />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "ChatTool",
  components: {

  },
  props: ['id','chat_type','card','goid','isNotSay'],
  data() {
    return {
      isGowner: false,
      showUp: false,
      file: null,
      uploadDisabled: true,
      resumeDisabled: true,
      pauseDisabled: true,
      uploader: null,
      statusText: '',
      progressToast: null,
      imageUrl: '',
    };
  },
  computed: {},
  watch: {},
  created() {
    if (this.goid == localStorage["userUid"]) {
      this.isGowner = true;
    }
  },
  mounted() {},
  activated() {},
  destroyed() {},
  methods: {
    onOverSize() {
      this.$MiDialog.Alert("发送图片最大3M，请重新选择");
    },
    onReadImg(file) {
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.fileChange(file.file,'img');
      // this.$MiUtil.CompressImg(file.file.type, file.content, 750, image => {
      //   let param = new FormData();
      //   param.append("image", image, file.file.name);
      //   param.append("type", 3);
      //   param.append("uid", localStorage["userUid"]);
      //   param.append("token", localStorage["userToken"]);
      //   this.$MiModel.UploadImg(param, data => {
      //     if (data.code == 1) {
      //       this.$emit("sendRecord", data.imghtml, 2);
      //     } else {
      //       this.$toast.fail("发送图片失败");
      //     }
      //   });
      // });
    },
    onReadVideo(file) {
      if (this.isNotSay) {
        this.$MiDialog.Alert("你在该群已经被禁言，不能发送消息");
        return;
      }
      this.fileChange(file.file);
    },
    openSitePage(page) {
      var media = localStorage["siteMedia"];
      if (!localStorage["siteToken"]) {
        this.$MiDialog.Alert("你的彩票平台未接入该功能");
        return;
      }
      var url = "/";
      if (page == "recharge") {
        url = media == "mobile" ? "/user/rechargeWay" : "/recharge";
      }
      if (page == "withdraw") {
        url = media == "mobile" ? "/user/withdraw" : "/withdraw";
      }
      if (page == "betrecord") {
        url = media == "mobile" ? "/user/betRecord" : "/betRecord";
      }
      window.parent.postMessage({ jump: true, page: url }, "*");
    },
    fileChange (file,type) {
      if (this.uploader) {
        this.uploader.stopUpload()
        this.statusText = ""
      }
      this.uploader = this.createUploader(type)
      this.uploader.addFile(file, null, null, null, '')
      this.uploadDisabled = false
      this.pauseDisabled = true
      this.resumeDisabled = true
    },
    authUpload () {
      // 然后调用 startUpload 方法, 开始上传
      if (this.uploader !== null) {
        this.uploader.startUpload()
        this.uploadDisabled = true
        this.pauseDisabled = false
      }
    },
    // 暂停上传
    pauseUpload () {
      if (this.uploader !== null) {
        this.uploader.stopUpload()
        this.resumeDisabled = false
        this.pauseDisabled = true
      }
    },
    // 恢复上传
    resumeUpload () {
      if (this.uploader !== null) {
        this.uploader.startUpload()
        this.resumeDisabled = true
        this.pauseDisabled = false
      }
    },
    createUploader (type) {
      let self = this
      let uploader = new AliyunUpload.Vod({
        timeout: Alivod.timeout || 60000,
        partSize: Alivod.partSize || 1048576,
        parallel: Alivod.parallel || 5,
        retryCount: Alivod.retryCount || 3,
        retryDuration: Alivod.retryDuration || 2,
        region: Alivod.region,
        userId: Alivod.userId,
        // 添加文件成功
        addFileSuccess: function (uploadInfo) {
          self.uploadDisabled = false
          self.resumeDisabled = false
          self.$toast.loading({
            message: '等待上传...',
            forbidClick: true,
            duration: 0
          })
          console.log("addFileSuccess: " + uploadInfo.file.name)
          self.authUpload();
        },
        // 开始上传
        onUploadstarted: function (uploadInfo) {
          if(type){
            if (!uploadInfo.ImageId) {
              self.$MiModel.CreateUploadImage((data)=>{
                let uploadAuth = data.UploadAuth
                let uploadAddress = data.UploadAddress
                let imageId = data.ImageId
                self.imageUrl = data.ImageURL
                uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,imageId)
              })
              self.statusText = '文件开始上传...'
              console.log("onUploadStarted:" + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object)
            } else {
              // 如果imageId有值，根据imageId刷新上传凭证
              self.$MiModel.CreateUploadImage((data)=>{
                let uploadAuth = data.UploadAuth
                let uploadAddress = data.UploadAddress
                let imageId = data.ImageId
                self.imageUrl = data.ImageURL
                uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,imageId)
              })
            }
          }else{
            if (!uploadInfo.videoId) {
              self.$MiModel.CreateUploadVideo({Title: localStorage['userMid']+'-'+self.$MiUtil.DateFormat('YYMMDDhhmmss',new Date()),FileName:uploadInfo.file.name},(data)=>{
                let uploadAuth = data.UploadAuth
                let uploadAddress = data.UploadAddress
                let videoId = data.VideoId
                uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,videoId)
              })
              self.statusText = '文件开始上传...'
              console.log("onUploadStarted:" + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object)
            } else {
              // 如果videoId有值，根据videoId刷新上传凭证
              self.$MiModel.RefreshUploadVideo({VideoId: uploadInfo.videoId},(data)=>{
                let uploadAuth = data.UploadAuth
                let uploadAddress = data.UploadAddress
                let videoId = data.VideoId
                uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,videoId)
              })
            }
          }
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {
          console.log("onUploadSucceed: " + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object)
          if(type){
            self.$toast.success('图片上传成功')
            const imgUrl = self.imageUrl.slice(0, self.imageUrl.indexOf('?'))
            const html = `<img class="photo" src="${imgUrl}">`
            self.$emit("sendRecord", html, 2)
          }else{
            self.$toast.loading({
              message: '正在获取视频封面...',
              forbidClick: true,
              duration: 0
            })
            self.getUploadDetails(uploadInfo.videoId)
          }
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {
          console.log("onUploadFailed: file:" + uploadInfo.file.name + ",code:" + code + ", message:" + message)
          self.statusText = '文件上传失败!'
          self.$toast.fail('文件上传失败')
        },
        // 取消文件上传
        onUploadCanceled: function (uploadInfo, code, message) {
          console.log("Canceled file: " + uploadInfo.file.name + ", code: " + code + ", message:" + message)
          self.$toast.fail('文件已暂停上传')
        },
        // 文件上传进度，单位：字节, 可以在这个函数中拿到上传进度并显示在页面上
        onUploadProgress: function (uploadInfo, totalSize, progress) {
          let progressPercent = Math.ceil(progress * 100)+'%'
          if(progress==1){
            self.$toast.clear();
          }
          if(self.progressToast){
            self.progressToast.message = '已上传'+progressPercent
          }else{
            self.progressToast = self.$toast.loading({
              message: '已上传'+progressPercent,
              forbidClick: true,
              duration: 0
            });
          }
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo) {
          // 上传大文件超时, 如果是上传方式一即根据 UploadAuth 上传时
          // 需要根据 uploadInfo.videoId 调用刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)重新获取 UploadAuth
          // 然后调用 resumeUploadWithAuth 方法,
          self.$MiModel.RefreshUploadVideo({VideoId: uploadInfo.videoId},(data)=>{
            let uploadAuth = data.UploadAuth
            uploader.resumeUploadWithAuth(uploadAuth)
            console.log('upload expired and resume upload with uploadauth ' + uploadAuth)
          })
          self.$toast.fail('文件超时');
        },
        // 全部文件上传结束
        onUploadEnd: function (uploadInfo) {
          console.log("onUploadEnd: uploaded all the files")
        }
      })
      return uploader
    },
    getPlayInfo(videoId) {
      try{
        this.$MiModel.GetPlayInfo({VideoId: videoId},data=>{
          if(data.VideoBase.CoverURL){
            this.$toast.success('视频上传成功');
            const videoUrl = data.PlayInfoList.PlayInfo[0].PlayURL.slice(0, data.PlayInfoList.PlayInfo[0].PlayURL.indexOf('?'))
            const videoImg = data.VideoBase.CoverURL.slice(0, data.VideoBase.CoverURL.indexOf('?'))
            const html = `<div class='VideoBox' data-url="${videoUrl}" data-vid="${data.VideoBase.VideoId}"><img class="video" src="${videoImg}"><i class="play-btn van-icon van-icon-play-circle"></i><p>${this.$MiUtil.TimeFormat(data.VideoBase.Duration)}</p></div>`
            this.$emit("sendRecord", html, 8)
          }else{
            setTimeout(()=>{
              this.getPlayInfo(videoId)
            },2000)
          }
        })
      }catch(err){
        setTimeout(()=>{
          this.getPlayInfo(videoId)
        },2000)
      }
    },
    getUploadDetails(videoId) {
      this.$MiModel.GetUploadDetails({MediaIds: videoId},data=>{
        if(data.UploadDetails[0].Status=='Normal'){
          this.getPlayInfo(videoId)
        }else{
          setTimeout(()=>{
            this.getUploadDetails(videoId)
          },2000)
        }
      })
    },
  }
};
</script>

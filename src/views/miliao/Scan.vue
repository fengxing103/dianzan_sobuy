<template>
  <div class="Main" style="background-color: #000">
    <van-nav-bar
        title="扫一扫"
        right-text="相册"
        :border="false"
        @click-left="onClickBack"
        @click-right=""
    >
      <img class="icon-left" :src="'./static/miliao/icon/icon-back.svg'" slot="left">
      <a href="javascript:;" slot="right" @click="scanPicture" style="color: #fff" v-if="isPlus">相册</a>
      <van-uploader slot="right" :after-read="onReadImg" v-else>相册</van-uploader>
    </van-nav-bar>
    <div class="DeviceVideo" id="DeviceVideo" :style="{height:conH,top:navH}" v-show="isPlus"></div>
    <div class="Scan" :style="{height:conH}" v-show="!isPlus">
      <div class="Camera">
        <i class="t"></i><i class="r"></i><i class="b"></i><i class="l"></i>
        <span>将二维码放入框内，即可自动扫描</span>
      </div>
      <video class="Video" id="Video" autoplay height="100%" style="visibility: hidden"></video>
      <canvas id="qr-canvas" width="800" height="600" style="visibility: hidden"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scan',
  components: {

  },
  props: {},
  data() {
    return {
      scanType: 0,
      videoObj: null,
      isUserMedia: false,
      gCanvas: null,
      gCtx: null,
      conH: '',
      navH: '',
      isPlus: window.plus,
      scan: '',
    }
  },
  computed: {
    isCanvasSupported() {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }
  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.navH = $(this.$el).find('.van-nav-bar').outerHeight()+'px';
    this.conH = $(window).height()-$(this.$el).find('.van-nav-bar').outerHeight()+'px';
    if(window.plus){
      this.$nextTick(()=>{
        this.initDeviceScan();
      });
    }else{
      if(this.isCanvasSupported && window.File && window.FileReader) {
        this.initCanvas();
        qrcode.callback = this.readCode;
        this.initScan();
      } else {
        this.$MiDialog.Alert('你的设备不支持扫一扫功能');
      }
    }
  },
  activated() {

  },
  destroyed() {
    this.scan.close();
  },
  methods: {
    onClickBack() {
      this.$router.go(-1);
      this.$route.params.isBack = true;
      this.scan.close();
    },
    onReadImg(data) {
      this.handleFiles(data.file);
    },
    initCanvas(){
      this.gCanvas = document.getElementById("qr-canvas");
      this.gCanvas.style.width = "800px";
      this.gCanvas.style.height = "600px";
      this.gCanvas.width = 800;
      this.gCanvas.height = 600;
      this.gCtx = this.gCanvas.getContext("2d");
      this.gCtx.clearRect(0, 0, 800, 600);
    },
    initScan() {
      var options = true;
      if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        try {
          navigator.mediaDevices.enumerateDevices()
              .then((devices)=> {
                devices.forEach((device)=> {
                  if (device.kind === 'videoinput') {
                    if(device.label.toLowerCase().search("back") >-1)
                      options = {'deviceId': {'exact':device.deviceId}, 'facingMode':'environment'};
                  }
                });
                this.openCamera(options);
              });
        }
        catch(e) {
          console.log(e);
        }
      } else {
        console.log("No navigator.mediaDevices.enumerateDevices");
        this.openCamera(options);
      }
    },
    openCamera(options) {
      console.log(options)
      if(this.scanType==1){
        setTimeout(this.captureToCanvas, 500);
        return;
      }
      this.videoObj = document.getElementById("Video");

      if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: options, audio: false})
            .then((stream)=>{
              this.cameraSuccess(stream);
            })
            .catch((err)=>{
              this.cameraError(err);
            });
      }
      else if(navigator.getUserMedia) {
        navigator.getUserMedia({video: options, audio: false}, this.cameraSuccess, this.cameraError);
      }
      else if(navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia({video:options, audio: false}, this.cameraSuccess, this.cameraError);
      }
      this.scanType=1;
      setTimeout(this.captureToCanvas, 500);
    },
    cameraSuccess(stream) {
      this.videoObj.style.visibility = 'visible';
      this.videoObj.srcObject = stream;
      this.videoObj.play();
      this.isUserMedia = true;
      setTimeout(this.captureToCanvas, 500);
    },
    cameraError(err) {
      console.log(err.message)
      if(err.message.indexOf('Requested device not found')>-1){
        this.$MiDialog.Alert('你的设备没有相机，可以使用相册选择二维码解析');
      }
      else if(err.message.indexOf('Only secure origins are allowed')>-1){
        this.$MiDialog.Alert('请以HTTPS形式访问聊天，才能获取打开摄像头权限');
      }
      else if(err.message.indexOf('Permission denied')>-1){
        this.$MiDialog.Alert('你未授权密聊使用摄像头，清除浏览器缓存或重启APP可重新设置');
      }else{
        this.$MiDialog.Alert(err.message);
      }

      this.isUserMedia = false;
      return;
    },
    captureToCanvas() {
      if(this.scanType!=1)
        return;
      if(this.isUserMedia){
        try{
          this.gCtx.drawImage(this.videoObj,0,0);
          try{
            qrcode.decode();
          }
          catch(e){
            console.log(e);
            setTimeout(this.captureToCanvas, 500);
          };
        }
        catch(e){
          console.log(e);
          setTimeout(this.captureToCanvas, 500);
        };
      }
    },
    readCode(code) {
      var Api = ApiUrl.replace('https://www.','').replace('http://www.','');
      if(code.indexOf(Api)>-1 && (code.indexOf('friendInfo?mid')>0||code.indexOf('groupInfo?gid')>0)){
        if(code.indexOf('friendInfo?mid')>0){
          this.$router.push({name: 'friendInfo',query: {mid: code.split("mid=")[1]}});
        }
        if(code.indexOf('groupInfo?gid')>0){
          this.$router.push({name: 'groupInfo',query: {gid: code.split("gid=")[1]}});
        }
      }else{
        if(window.plus){
          plus.nativeUI.alert('你扫描的二维码不是密聊二维码', ()=>{
            this.scan.start();
          });
        }else{
          this.$MiDialog.Alert('你扫描的二维码不是密聊二维码',()=>{
            setTimeout(this.captureToCanvas, 500);
          });
        }
      }
    },
    handleFiles(file){
      var reader = new FileReader();
      reader.onload = ((theFile)=> {
        return (e)=> {
          this.gCtx.clearRect(0, 0, 800, 600);
          qrcode.decode(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    },
    initDeviceScan() {
      this.scan = new plus.barcode.Barcode('DeviceVideo',[plus.barcode.QR],{
        frameColor: '#03b703',
        scanbarColor: '#03b703'
      });
      this.scan.start();
      this.scan.onmarked = this.onMarked;
      this.scan.onerror = this.onError;
    },
    onMarked(type,result) {
      result = result.replace(/\n|"|'/g, '');
      this.readCode(result);
    },
    onError(error) {
      plus.nativeUI.alert('无法识别此二维码，请重试', ()=>{
        this.scan.start();
      });
    },
    scanPicture() {
      this.scan.cancel();
      plus.gallery.pick((path) => {
        plus.barcode.scan(path, this.onMarked, this.onError, [plus.barcode.QR]);
      }, (err) => {
        this.scan.start();
      },{filter:"image"});
    },
  }
}
</script>
<style>
.DeviceVideo{
  width: 100%;
  position: absolute;
  left: 0;
}
</style>
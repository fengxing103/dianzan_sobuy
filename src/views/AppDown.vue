<template>
  <div class="Main">
    <van-nav-bar
        fixed
        :border="false"
        title="APP下载"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="PageBox" style="text-align: center;">
      <div id="QRCode" style="display: inline-block;margin: 50px 0 10px"></div>
      <p>扫描二维码下载APP</p>
      <div style="padding: 20px 16px" v-if="isPlus">
        <van-button block type="primary" style="font-size: 16px" @click="saveQRCode">保存二维码</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2"
export default {
  name: 'AppDown',
  components: {

  },
  props: {},
  data() {
    return {
      saveN: 0,
      isPlus: window.plus,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    new QRCode(document.getElementById("QRCode"), {
      text: AppDown,
      width: 200,
      height: 200,
      correctLevel : QRCode.CorrectLevel.H
    });
  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    saveQRCode() {
      this.saveN+=1;
      var img = $('#QRCode').find('img').attr('src').replace('data:image/png;base64,','');
      var bm = new plus.nativeObj.Bitmap();
      bm.loadBase64Data(img, ()=>{
        bm.save( '_doc/下载APP'+this.saveN+'.jpg', {'overwrite':true,'format':'jpg'}, (e)=>{
          plus.gallery.save( e.target, (e)=>{
            this.$Dialog.Toast('保存二维码成功')
          },(err)=>{
            this.$Dialog.Toast('保存二维码失败')
          });
        }, (error)=>{
          this.$Dialog.Toast('保存二维码失败')
        });
        setTimeout(function(){
          bm.recycle();
        },1000);
      }, (err)=>{
        this.$Dialog.Toast('保存二维码失败')
      });
    },
  }
}
</script>











<style scoped>

</style>
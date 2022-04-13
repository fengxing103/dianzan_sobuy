<template>
  <div class="SetBox" style="background-color: #f5f6f9;height: 100%">
    <van-nav-bar
        :title="'设置'+(setType=='header'?'头像':setType=='nickname'?'昵称':setType=='sex'?'性别':setType=='pass'||setType=='newpass'?'密码':'个性签名')"
        :left-text="setType!='pass'?'取消':''"
        right-text="完成"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />
    <div class="FormBox" v-if="setType=='header'">
      <div class="Scroll-Wrap" ref="Scroll">
        <div class="Scroll-Con">
          <van-radio-group class="HeadList" v-model="setInfo.header">
            <van-cell v-for="item in headData" :key="item" :border="false" clickable @click="setInfo.header=item">
              <img :src="'./static/miliao/images/headimg/'+item">
              <van-radio :name="item" />
            </van-cell>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="FormBox" v-else-if="setType=='nickname'">
      <div class="title">新昵称</div>
      <van-field v-model="setInfo.nickname" placeholder="请输入昵称" />
    </div>
    <div class="FormBox" v-else-if="setType=='sex'">
      <div class="title">选择性别</div>
      <van-radio-group v-model="setInfo.sex">
        <van-cell title="男" clickable @click="setInfo.sex='男'">
          <template #right-icon>
            <van-radio name="男" />
          </template>
        </van-cell>
        <van-cell title="女" clickable @click="setInfo.sex='女'">
          <template #right-icon>
            <van-radio name="女" />
          </template>
        </van-cell>
        <van-cell title="保密" clickable @click="setInfo.sex='保密'">
          <template #right-icon>
            <van-radio name="保密" />
          </template>
        </van-cell>
      </van-radio-group>
    </div>
    <div class="FormBox" v-else-if="setType=='autograph'">
      <div class="title">个性签名</div>
      <van-field
          v-model="setInfo.autograph"
          type="textarea"
          placeholder="请输入个性签名"
          rows="5"
          autosize
      />
    </div>
    <div class="FormBox" v-else-if="setType=='newpass'||setType=='pass'">
      <div class="title">密码</div>
      <van-field v-model.trim="passData.o_pw" placeholder="请输入旧密码" v-if="setType=='newpass'" />
      <van-field v-model.trim="passData.pw" :placeholder="setType=='newpass'?'请输入新密码':'请输入密码'" />
      <van-field v-model.trim="passData.rpw" placeholder="请输确认密码" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetInfo',
  components: {},
  props: {
    setType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      setInfo: JSON.parse(localStorage['MiUserInfo']),
      passData: {
        pw: '',
        rpw: ''
      },
      headData: [
        '0A472675E5E5AF50.jpg',
        '5C5A53823438F2CD.jpg',
        '6a177290f93a82c9.jpg',
        '6f1e9c6698d41c02.jpg',
        '7debbc56b4b1e837.jpg',
        '9A9C9E1A719CE536.jpg',
        '072ad9cd79456bcf.jpg',
        '81e8ebc3eedde4e1.jpg',
        '775f5994a0568972.jpg',
        '831CA133362DE10D.jpg',
        '1362fa92410f5466.jpg',
        '367498B6A748D910.jpg',
        'a6e6f42b144b2954.jpg',
        'af43698834aecd89.jpg',
        'b6a3d95c75208113.jpg',
        'be83d242f47468f2.jpg',
        'C7BB5088540C8040.jpg',
        'C6021F3486D2B2DB.jpg',
        'EED50A5799E76E58.jpg',
        'F0E57CF931E45118.jpg',
        '1B6A214FF62BD91F.jpg',
        '1EF6FC3ACCBCD762.jpg',
        '02c5f9ba752fdfcf.jpg',
        '2ccae7bb8c67d793.jpg',
        '4da6df95555c869a.jpg',
        '4eda6ad3f56b4f17.jpg',
        '6F1A99A3D02A6DEC.jpg',
        '08cbc7e637921f36.jpg',
        '9f42ce18775ccc25.jpg',
        '82c23ac3f9aacda5.jpg',
        '779d89d0bf5536a7.jpg',
        '3154a95056dea33d.jpg',
        '3578E1EB410B49C7.jpg',
        '84238fb2538d1899.jpg',
        '274692371a941235.jpg',
        'b1f0c081f76388a5.jpg',
        'C707188A6E10AED4.jpg',
        'd86c69601267c45a.jpg',
        'd9452aa12dee4037.jpg',
        'f9276d61473ac65d.jpg'
      ]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    if(this.setType=='header'){
      var img = [],
          mulitImg = [],
          flag = 0;
      $("img").each(function(index, el) {
        mulitImg.push(el.src);
      });
      var imgTotal = mulitImg.length;
      for (var i = 0; i < imgTotal; i++) {
        img[i] = new Image();
        img[i].src = mulitImg[i];
        img[i].onload = () => {
          flag++;
          if (flag == imgTotal) {
            this.initScrollWrap();
          }
        };
      }
    }
  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickCancel() {
      this.$emit('triggerPopup');
    },
    onClickConfirm() {
      var json = {}
      switch(this.setType){
        case 'header':
          json = {header: this.setInfo.header};
          break;
        case 'nickname':
          json = {nickname: this.setInfo.nickname};
          break;
        case 'sex':
          json = {sex: this.setInfo.sex};
          break;
        case 'autograph':
          json = {autograph: this.setInfo.autograph};
          break;
        case 'pass':
          if (!this.$.trim(this.passData.pw)) {
            this.$MiDialog.Toast("请输入密码");
            return;
          }
          if (!this.$.trim(this.passData.rpw)) {
            this.$MiDialog.Toast("请确认密码");
            return;
          }
          json = this.passData;
          break;
        case 'newpass':
          if (!this.$.trim(this.passData.o_pw)) {
            this.$MiDialog.Toast("请输入旧密码");
            return;
          }
          if (!this.$.trim(this.passData.pw)) {
            this.$MiDialog.Toast("请输入新密码");
            return;
          }
          if (!this.$.trim(this.passData.rpw)) {
            this.$MiDialog.Toast("请确认密码");
            return;
          }
          json = this.passData;
          break;
      }
      this.$MiModel.SetUserInfo(json,(data)=>{
        if(data){
          if(this.setType=='pass'){
            this.$router.replace('/miliao');
          }else{
            this.$emit('triggerPopup');
          }
        }
      });
    },
    initScrollWrap(){
      this.$MiInitial.InitScrollWrap(this.$el,$('.FormBox .title').outerHeight());
      this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
        click: true
      });
    }
  }
}
</script>
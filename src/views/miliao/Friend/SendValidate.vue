<template>
  <div class="SetBox">
    <van-nav-bar
        title="朋友验证"
        left-text="取消"
        right-text="发送"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />
    <div class="FormBox">
      <div class="title">你需要发送验证申请，等对方通过</div>
      <van-field placeholder="请输入验证申请内容" v-model="validateCon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Validate',
  components: {},
  props: {
    validateType: {
      type: String,
      default: ''
    },
    friendMid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      validateCon: '我是 '+ localStorage['userNickName']
    }
  },
  computed: {},
  watch: {

  },
  created() {

  },
  mounted() {

  },
  activated() {

  },
  destroyed() {},
  methods: {
    onClickCancel() {
      this.$emit('triggerPopup');
    },
    onClickConfirm() {
      this.$MiModel.AddFriends(this.friendMid,this.validateCon,(data)=>{
        if(data.code==1){
          this.$emit('triggerPopup');
          this.$MiDialog.Confirm(data.code_dec,()=>{
            this.$router.push({name: 'sendMsg',query: {id: data.id,chat_type:1}});
          },'回复');
        }else{
          this.$emit('triggerPopup');
          this.$MiDialog.Alert(data.code_dec);
        }
      });
    }
  }
}
</script>

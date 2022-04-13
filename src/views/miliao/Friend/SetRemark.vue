<template>
  <div class="SetBox">
    <van-nav-bar
        title="设置备注名"
        left-text="取消"
        right-text="完成"
        :border="false"
        @click-left="onClickCancel"
        @click-right="onClickConfirm"
    />
    <div class="FormBox">
      <div class="title">备注名</div>
      <van-field placeholder="添加备注名" v-model="remarkNames" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Remark',
  components: {},
  props: {
    friendId: {
      type: Number,
      default: 0
    },
    remarkName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      remarkNames: this.remarkName
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
      this.$MiModel.SetFriendsInfo({id:this.friendId,memo_name: this.remarkNames},(data)=>{
        this.$MiModel.FriendsList('');
        this.$emit('triggerPopup');
      });
    }
  }
}
</script>

<template>
  <div class="AtMember DisplayFlex">
    <van-nav-bar
        title="选择提醒的人"
        :border="false"
        left-arrow
        @click-left="$emit('triggerPopup')"
    />
    <div class="list">
      <van-cell :title="item.nickname||'昵称未设置'" v-for="item in GroupMember" :key="item.id" @click="$emit('selectAt',item.nickname||'昵称未设置')">
        <template slot="icon">
          <img class="head" :src="'./static/miliao/images/headimg/'+item.header" v-if="item.header">
          <b class="head" v-else>{{item.nickname||'昵称'}}</b>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupsMember',
  components: {

  },
  props: ['groupId'],
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$MiModel.GroupsMember(this.groupId);
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {},
  methods: {

  }
}
</script>
<style scoped>
.AtMember{
  height: 100%;
  overflow: hidden;
}
.AtMember .list{
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100%;
}
.AtMember .van-cell .head{
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 100%;
  display: inline-block;
  background-color: #e7eaec;
  color: #6b7294;
  overflow: hidden;
  vertical-align: top;
  margin-right: 10px;
  text-align: center;
}
</style>
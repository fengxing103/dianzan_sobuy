<template>
  <div style="width: 100%;height: 100%;background-color: #f5f6f9;">
    <van-nav-bar
        :border="false"
        left-arrow
        @click-left="$emit('triggerPopup')"
        style="position: absolute"
    />
    <div class="BillInfo">
      <img :src="`./static/miliao/images/bill-list.png`" width="100%">
      <div class="top">
        <div class="title">
          <img :src="'./static/miliao/images/headimg/'+billInfo.header" height="24" v-if="billInfo.header">
          <b v-else>{{billInfo.nick_name||'昵称'}}</b>
          <span>{{billInfo.nick_name||'昵称未设置'}}的红包</span>
          <van-tag type="warning" v-if="billInfo.type==1">拼</van-tag>
        </div>
        <h4>{{billInfo.explain}}</h4>
        <div class="money" v-if="!isPrivate&&billInfo.mymoney">
          {{billInfo.mymoney}}<em>元</em>
        </div>
      </div>
      <div class="list">
        <div style="height: 100%;overflow-y: auto;overflow-x: hidden">
          <div class="tip" v-if="isPrivate">{{billInfo.number}}个红包共{{billInfo.money}}元</div>
          <div class="tip" v-else>{{billList.length==billInfo.number?billList.length+'个红包，已抢光':billList.length+'个红包'}}</div>
          <van-cell v-for="(item,index) in billList" :key="index" :value="`${item.money}元`">
            <div slot="icon" class="head">
              <img :src="'./static/miliao/images/headimg/'+item.header" height="24" v-if="item.header">
              <b v-else>{{item.nick_name||'昵称'}}</b>
            </div>
            <template slot="title">
              {{item.nick_name||'昵称未设置'}}
              <p class="time">{{item.time}}</p>
            </template>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillInfo',
  components: {

  },
  props: ['billInfo','billList','isPrivate'],
  data() {
    return {

    }
  },
  computed: {

  },
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

  }
}
</script>
<style scoped>
.van-nav-bar>>>.van-icon{
  color: #fff;
}
</style>
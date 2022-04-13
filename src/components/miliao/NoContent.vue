<template>
  <div class="NoContent">
    <img :src="'./static/miliao/icon/icon-nofriend.svg'">
    <h2>{{msg[0]}}</h2>
    <p>{{msg[1]}}</p>
  </div>
</template>

<script>
export default {
  name: 'NoContent',
  components: {

  },
  props: {
    msg: {
      type: Array,
      default: ()=>['有朋友，不孤单','邀请朋友加入密聊']
    }
  },
  data() {
    return {

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

  }
}
</script>

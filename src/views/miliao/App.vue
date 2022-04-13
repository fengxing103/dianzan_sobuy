<template>
  <div class="MiLiao">
    <transition :name="animateType">
      <router-view></router-view>
    </transition>
    <audio controls id="SystemVoice" style="display: none">
      <source :src="'./static/miliao/voice/system.mp3'" type="audio/mpeg" />
      <embed :src="'./static/miliao/voice/system.mp3'" />
    </audio>
    <audio controls id="MsgVoice" style="display: none">
      <source :src="'./static/miliao/voice/msg.mp3'" type="audio/mpeg" />
      <embed :src="'./static/miliao/voice/msg.mp3'" />
    </audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animateType: "",
    };
  },
  watch: {
    $route(to, from) {
      this.$toast.clear();
      if (to.params.isBack || from.params.isBack) {
        this.animateType = "close";
        delete to.params.isBack;
        delete from.params.isBack;
      } else if (from.name) {
        this.animateType = "open";
      }
    }
  },
  created() {

  },
  mounted() {

  },
  destroyed() {},
  methods: {

  }
};
</script>

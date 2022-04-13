<template>
  <div>
    <div class="Scroll-Wrap" ref="Scroll">
      <div class="Scroll-Con">
        <div class="Box">
          <van-cell title="朋友圈" size="large" is-link>
            <van-icon slot="icon" :name="'./static/miliao/icon/icon-friend-group.svg'" color="#1caaff" style="margin-right: 10px;font-size: 22px" />
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {},
  created() {

  },
  mounted() {
    this.$MiInitial.InitScrollWrap(this.$parent.$el);
    this.ScrollWrap = new this.$MiBScroll(this.$refs.Scroll,{
      click: true
    });
  },
  activated() {

  },
  destroyed() {},
  methods: {

  }
}
</script>

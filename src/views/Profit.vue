<template>
  <div class="IndexBox">
	  <van-nav-bar
	    fixed
	    :border="false"
	    :title="$t('footer[5]')"
	    left-arrow
	    @click-left="$router.go(-1)"
		style="background-color: #000000;"
	  />
    <div class="ScrollBox">
      <!-- <img :src="`./static/zxwlpic/profit-${$i18n.locale}.jpg`" width="100%"> -->
	   <img :src="`./static/zxwlpic/1645170271960204.jpg`" width="100%">
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Profit',
  components: {

  },
  props: [],
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
  destroyed() {
    
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
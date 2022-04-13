<template>
  <div class="VideoPlay">
    <div id="VideoPlay"></div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlay',
  components: {

  },
  props: ['videoImg','videoUrl','videoId'],
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
    const config = {
      id: "VideoPlay",
      width: "100%",
      height: "100%",
      cover: this.videoImg,
      preload: true,
      autoPlayDelay: 3,
      autoPlayDelayDisplayText: '请等待...',
      controlBarVisibility: 'always',
      skinLayout: [
        {
          "name": "bigPlayButton",
          "align": "cc"
        },
        {
          "name": "H5Loading",
          "align": "cc"
        },
        {
          "name": "errorDisplay",
          "align": "cc",
        },
        {
          "name": "infoDisplay"
        },
        {
          "name": "controlBar",
          "align": "blabs",
          "x": 0,
          "y": 0,
          "children": [
            {
              "name": "progress",
              "align": "blabs",
              "x": 0,
              "y": 44
            },
            {
              "name": "playButton",
              "align": "tl",
              "x": 5,
              "y": 15
            },
            {
              "name": "timeDisplay",
              "align": "tl",
              "x": 10,
              "y": 7
            },
            {
              "name": "fullScreenButton",
              "align": "tr",
              "x": 5,
              "y": 15
            },
            {
              "name": "setting",
              "align": "tr",
              "x": 5,
              "y": 15
            },
            {
              "name": "volume",
              "align": "tr",
              "x": 5,
              "y": 15
            },
            {
              "name": "snapshot",
              "align": "tr",
              "x": 5,
              "y": 12
            }
          ]
        }
      ]
    }
    if(this.videoUrl){
      config.source = this.videoUrl
      this.initPlay(config)
    }else{
      config.vid = this.videoId
      this.$MiModel.GetVideoPlayAuth({VideoId: this.videoId},(data)=>{
        config.playauth = data.PlayAuth
        this.$nextTick(()=>{
          this.initPlay(config)
        })
      })
    }

  },
  activated() {

  },
  destroyed() {},
  methods: {
    initPlay(config) {
      const playerObj = new Aliplayer(config, (player) => {
        console.log("The player is created");
      })
      /* h5截图按钮, 截图成功回调 */
      playerObj.on('snapshoted',  (data) => {
        var pictureData = data.paramData.base64
        var downloadElement = document.createElement('a')
        downloadElement.setAttribute('href', pictureData)
        var fileName = 'Aliplayer' + Date.now() + '.png'
        downloadElement.setAttribute('download', fileName)
        downloadElement.click()
        pictureData = null
      })
    }
  }
}
</script>
<style>
.VideoPlay{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.prism-player,.prism-player .prism-controlbar .prism-controlbar-bg{
  background-color: transparent;
}
.prism-player .prism-cover{
  background-size: contain;
}
.prism-player .prism-volume .volume-icon,.prism-player .prism-setting-btn{
  width: 18px;
  height: 18px;
}
.prism-player .prism-volume .volume-icon .short-horizontal{
  right: 4px;
  height: 15px;
}
.prism-player .prism-volume .volume-icon .long-horizontal{
  height: 16px;
  right: 1px;
  display: none;
}
.prism-player .prism-fullscreen-btn{
  width: 20px;
  height: 20px;
}
.prism-player .prism-snapshot-btn{
  width: 26px;
  height: 26px;
}
.prism-player .prism-liveshift-progress .prism-progress-played, .prism-player .prism-progress .prism-progress-played{
  background-color: #888;
}
</style>

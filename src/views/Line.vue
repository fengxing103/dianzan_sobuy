<template>
  <div class="Main">
    <van-nav-bar
        fixed
        :border="false"
        :title="$t('lineList[0]')"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="PageBox">
      <div class="ScrollBox">
        <van-cell :title="$t('lineList[1]')" :value="currLine|ellipsisVal" />
        <van-radio-group v-model="lineIndex" @change="selectLine">
          <van-cell clickable v-for="(item,index) in lineList" :key="index" @click="lineIndex=index">
            <template #title>
              {{$t('lineList[2]')}} {{item|ellipsisVal}}
              <i>{{timeList[index]}} ms</i>
            </template>
            <van-radio #right-icon :name="index" />
          </van-cell>
        </van-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
import Ping from 'web-pingjs'
export default {
  name: 'Lines',
  components: {

  },
  props: {},
  data() {
    return {
      lineIndex: localStorage['LineIndex']?Number(localStorage['LineIndex']):0,
      lineList: '',
      timeList: [],
      currLine: '',
      isStore: false,
    }
  },
  computed: {

  },
  filters: {
    ellipsisVal(val){
      return val.replace(/(\S*)\/\//,'').replace(/^(.{3}).*(.{4})$/, "$1***$2");
    }
  },
  watch: {
    'InitData.link'(data){
      if(!this.isStore){
        if(data.includes(ApiUrl)){
          this.lineList = data;
        }else{
          this.lineList = [ApiUrl].concat(data||'');
        }
        this.currLine = this.lineList[this.lineIndex];
        localStorage['CurrLine'] = this.currLine;
        this.pingLine(this.lineList);
      }
    }
  },
  created() {
    if(this.InitData.link){
      this.isStore = true
      if(this.InitData.link.includes(ApiUrl)){
        this.lineList = this.InitData.link;
      }else{
        this.lineList = [ApiUrl].concat(this.InitData.link||'');
      }
      this.currLine = this.lineList[this.lineIndex];
      localStorage['CurrLine'] = this.currLine;
      this.pingLine(this.lineList);
    }
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    pingLine(line) {
      this.timeList = [];
      line.forEach((host)=>{
        Ping(host).then((time)=> {
          this.timeList.push(time);
        }).catch((err)=> {
          this.timeList.push('-');
        });
      });
    },
    selectLine(val) {
      this.currLine = this.lineList[val];
      localStorage['CurrLine'] = this.currLine;
      localStorage['LineIndex'] = val;
      this.UpdateApiUrl(this.currLine)
    },
  }
}
</script>
<style scoped>
.van-cell__value{
  flex: none;
}
.van-cell__title i{
  color: #1989fa;
  margin-left: 15px;
}
.van-radio{
  justify-content: flex-end;
}
</style>
<template>
  <div class="EmojiBox">
    <van-swipe class="EmojiSwipe" :loop="false" indicator-color="#888" v-for="item in emojiData" :key="item.type" v-if="item.type==emojiType">
      <van-swipe-item v-for="(count,index) in getCount(item.emoji)" :key="index">
        <ul class="EmojiList">
          <li v-for="(emoji,index) in getData(item.emoji,count)" :key="index" @click="selectEmoji(item.type,emoji.id)">
            <img :src="'./static/miliao/emoji/'+item.type+'/'+emoji.id+'.gif'" :alt="emoji.code">
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <div class="EmojiTool">
      <ul>
        <li :class="{active:emojiType==item.type}" v-for="item in emojiData" :key="item.type" @click="emojiType=item.type"><img :src="'./static/miliao/icon/icon-emoji-'+item.type+'.svg'" height="24"></li>
        <!-- <li class="fr">
          <img src="static/icon/icon-del.svg" alt="Del" height="20">
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import EmojiData from '@/common/miliao/Emoji'
export default {
  name: 'Emoji',
  components: {

  },
  props: {},
  data() {
    return {
      emojiData: EmojiData,
      emojiType: 'default'
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
    getCount(arr) {
      return Math.ceil(arr.length/40)
    },
    getData(arr,index) {
      return arr.filter(e => e.id>(index-1)*40-1&&e.id<index*40)
    },
    selectEmoji(type,id) {
      this.$emit('insertHtml','<img class="emoji" src="./static/miliao/emoji/'+type+'/'+id+'.gif">');
    }
  }
}
</script>

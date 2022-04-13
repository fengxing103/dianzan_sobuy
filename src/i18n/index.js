import Vue from 'vue'
import {Locale} from 'vant'
import VueI18n from 'vue-i18n'
import axios from 'axios'

import Chinese from './cn'
import English from './en'
import Chin from './ft'
import Indonesia from './id'
import Vietnam from './vi'
import Spain from './es'
import Japan from './jp'
import Thai from './th'
import Yindu from './yd'

import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhTW from 'vant/lib/locale/lang/zh-TW'
import idID from './id-ID'
import viVN from './vi-VN'
import esES from 'vant/lib/locale/lang/es-ES'
import jaJP from 'vant/lib/locale/lang/ja-JP'
import thTH from './th-TH'
import ydYD from './yd-YD'



/*初始化*/
//locale: localStorage['Language']=='en'?'en-US':'zh-CN',

const lang = localStorage['Language']=='en'?'en-US':'cn'

let locale = 'vi-VN'
switch(lang){
  case 'en':
    locale = 'en-US'
    Locale.use('en-US', enUS)
    break;
  case 'cn':
    locale = 'zh-CN'
    Locale.use('zh-CN', zhCN)
    break;
  case 'ft':
    locale = 'zh-TW'
    Locale.use('zh-TW', zhTW)
    break;
  case 'id':
    locale = 'id-ID'
    Locale.use('id-ID', idID)
    break;
  case 'yd':
    locale = 'yd-YD'
    Locale.use('yd-YD', ydYD)
    break;
  case 'vi':
   locale = 'vi-VN'
   Locale.use('vi-VN', viVN)
   break;
  case 'es':
   locale = 'es-ES'
   Locale.use('es-ES', esES)
   break;
  case 'ja':
   locale = 'ja-JP'
   Locale.use('ja-JP', jaJP)
   break;
  case 'th':
    locale = 'th-TH'
    Locale.use('th-TH', thTH)
    break;
}

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: {
    "zh-CN": Chinese,
    "zh-TW": Chin,
    "en-US": English,
    "id-ID": Indonesia,
    "yd-YD": Yindu,
    "vi-VN": Vietnam,
    "es-ES": Spain,
    "ja-JP": Japan,
    "th-TH": Thai
  }
})

/*切換*/
export function SetLanguage (lang) {
  i18n.locale = lang
  switch(lang){
    case 'en-US':
      localStorage['Language'] = 'en'
      Locale.use('en-US', enUS)
      break;

    case 'zh-CN':
      localStorage['Language'] = 'cn'
      Locale.use('zh-CN', zhCN)
      break;
    case 'zh-TW':
      localStorage['Language'] = 'ft'
      Locale.use('zh-TW', zhTW)
      break;
    case 'id-ID':
      localStorage['Language'] = 'id'
      Locale.use('id-ID', idID)
      break;
    case 'yd-YD':
      localStorage['Language'] = 'yd'
      Locale.use('yd-YD', ydYD)
      break;
    case 'vi-VN':
      localStorage['Language'] = 'vi'
      Locale.use('vi-VN', viVN)
      break;
    case 'es-ES':
      localStorage['Language'] = 'es'
      Locale.use('es-ES', esES)
      break;
    case 'ja-JP':
      localStorage['Language'] = 'ja'
      Locale.use('ja-JP', jaJP)
      break;
    case 'th-TH':
      localStorage['Language'] = 'th'
      Locale.use('th-TH', thTH)
      break;
  }
}
export default i18n
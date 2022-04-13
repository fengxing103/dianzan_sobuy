import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import Vant,{Locale,ImagePreview} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'

import Model from '@/common/Model'
import Dialog from '@/common/Dialog'
import Util from '@/common/Util'

import i18n,{SetLanguage} from './i18n'

import 'vant/lib/index.css'
import '@/assets/css/style.css'

/*密聊*/
import MiBScroll from 'better-scroll'
import MiModel from '@/common/miliao/Model'
import MiDialog from '@/common/miliao/Dialog'
import MiUtil from '@/common/miliao/Util'
import MiInitial from '@/common/miliao/Initial'
import MiNoContent from '@/components/miliao/NoContent'
import '@/assets/css/mi-style.css'

Vue.prototype.$MiBScroll = MiBScroll
Vue.prototype.$MiModel = MiModel
Vue.prototype.$MiDialog = MiDialog
Vue.prototype.$MiUtil = MiUtil
Vue.prototype.$MiInitial = MiInitial

Vue.component('MiNoContent', MiNoContent)

/*APP*/
Vue.use(Vant)
Vue.prototype.$SetLanguage = SetLanguage
Vue.prototype.$ImagePreview = ImagePreview
Vue.prototype.$Model = Model
Vue.prototype.$Dialog = Dialog
Vue.prototype.$Util = Util
Vue.prototype.$AppInit = false
Vue.prototype.$domWidth = document. documentElement.clientWidth

Vue.config.productionTip = false
import '@/assets/css/style.css'
import Footer from '@/components/Footer'
Vue.component('Footer', Footer)

/*路由登录逻辑*/
router.beforeEach((to, from, next) => {
  document.title = i18n.locale=='en-US'?'SOBUY':'SOBUY'
  if(from.name!='login'&&from.name!='register'){
    localStorage['FromPage'] = from.fullPath;
  }else{
    localStorage.removeItem('FromPage');
  }
  if (to.name!='login'&&!localStorage['Token']&&to.matched.some(record => record.meta.requiresAuth)) {
    next('/login');
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

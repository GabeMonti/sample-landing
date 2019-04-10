import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import 'vue-use-vuex'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './config/router'
import Config from './config/config'
import './assets/less/main.less'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import { messages } from './lang/lang'
import Toasted from 'vue-toasted'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.prototype.CONFIG = new Config()
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VueI18n)
Vue.use(Toasted)
Vue.use(Vue2Filters)
// Vue.use(VueAwesomeSwiper)

require('./config/eventBus')

store.state.currentLanguage = localStorage.currentLanguage ? localStorage.currentLanguage : 'us'

const i18n = new VueI18n({
  locale: store.state.currentLanguage,
  fallbackLocale: process.env.NODE_ENV === 'development' ? 'xx' : 'us',
  messages
})
store.state.languages = Object.keys(messages)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')


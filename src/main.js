import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import axios from 'axios'
import './index.css'  //tailwind 用に追記
import '@mdi/font/css/materialdesignicons.css' //material UI 用
import VueMeta from 'vue-meta'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false
Vue.use(
  VueGtag,
  {config : {id : "G-JV9PJQFSRV"},},
  router,
  VueMeta)
new Vue({
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

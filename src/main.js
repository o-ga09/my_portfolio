import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import axios from 'axios'
import './index.css'  //tailwind 用に追記
import '@mdi/font/css/materialdesignicons.css' //material UI 用

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

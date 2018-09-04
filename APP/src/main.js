import Vue from 'vue'
import FastClick from 'fastclick'
import store from './store/'
import App from './App'

import router from './router/index'
import axios from 'axios'
Vue.prototype.$http = axios
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')

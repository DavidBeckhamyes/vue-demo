// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vconsole from 'vconsole'
let vConsole = new Vconsole()

Vue.use(vConsole)

import toast from "@/views/toast-test/component";
Vue.use(toast);

window.addEventListener('touchmove',  e => e.preventDefault())
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

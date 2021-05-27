import Vue from 'vue'
import App from './App.vue'

import msToMm from './filters/ms-to-min'

import EventBus from './plugins/event-bus'
import router from './router'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

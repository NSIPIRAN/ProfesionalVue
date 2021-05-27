import Vue from 'vue'
import App from './App.vue'

import msToMm from './filters/ms-to-min'

import blur from './directives/blur'


import EventBus from './plugins/event-bus'
import router from './router'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

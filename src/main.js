import Vue from 'vue'
import App from './App.vue'

import EventBus from './plugins/event-bus'
import router from './router'

Vue.use(EventBus)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

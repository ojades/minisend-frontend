import Vue from 'vue'
import App from './App.bak.vue'

require("bootstrap/dist/css/bootstrap.min.css");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

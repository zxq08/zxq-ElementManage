import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from 'vue-echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../element-variables.scss'
import './plugins/element.js'
import './assets/base/reset.css'
import './assets/base/base.styl'

Vue.use(ElementUI)

Vue.component('v-chart', Echarts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

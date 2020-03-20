import Vue from 'vue'
import App from './App.vue'
import router from './permission'

import ElementUI from 'element-ui'
import Component from './components'
import './styles/index.less'
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/index.less'
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' //
Vue.prototype.$axios = axios // 把axios插件给了对象的原型属性
Vue.use(ElementUI)
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/rest.css"
import "./assets/css/global.css"
import Element from "element-ui"
import echarts from "echarts"
import treedata from "./util/treedata.json"
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios"
Vue.prototype.$axios = axios

Vue.prototype.$treedata = treedata
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

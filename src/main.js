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

import acapi from "./static/ac.min"
let instanceId = "3232270593-8889-8081-4323"

const api = new acapi.AirCityAPI(
  instanceId,
  function() {
    api.misc.setMainUIVisibility(false)
  }.bind(this)
)

// const player = new acapi.AirCityPlayer(instanceId, "player")
Vue.prototype.acapi = acapi
// Vue.prototype.$player = player
Vue.prototype.$treedata = treedata
export default api
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

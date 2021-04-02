import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/rest.css";
import Element from "element-ui";
import echarts from "echarts";
import treedata from "./util/treedata.json";
Vue.prototype.$treedata = treedata;

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

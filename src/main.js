import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/rest.css";
import Element from "element-ui";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

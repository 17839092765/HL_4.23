import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Home/HLSJ",
    },
    {
      path: "/Home",
      component: Home,
      children: [
        {
          path: "HLSJ",
          component: () => import("../views/HLSJ/hlsj"),
        },
        {
          path: "GNBJ",
          component: () => import("../views/GNBJ/gnbj"),
        },
        {
          path: "XZSJ",
          component: () => import("../views/XZSJ/xzsj"),
        },
        {
          path: "ZSYZ",
          component: () => import("../views/ZSYZ/zsyz"),
        },
        {
          path: "WLYJ",
          component: () => import("../views/WLYJ/wlyj"),
        },
      ],
    },
  ],
});

export default router;

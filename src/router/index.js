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
          redirect: "/Home/XZSJ/fdtz",
          component: () => import("../views/XZSJ/xzsj"),
          children: [
            {
              path: "fdtz",
              component: () => import("../views/XZSJ/children/fdtz"),
            },
            {
              path: "xzqs",
              component: () => import("../views/XZSJ/children/fdtz"),
            },
            {
              path: "tdly",
              component: () => import("../views/XZSJ/children/fdtz"),
            },
            {
              path: "csgx",
              component: () => import("../views/XZSJ/children/fdtz"),
            },
          ],
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

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
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
              name: "fdtz",
              component: () => import("../views/XZSJ/children/fdtz.vue"),
            },
            {
              path: "xzqs",
              component: () => import("../views/XZSJ/children/xzqs.vue"),
            },
            {
              path: "tdly",
              component: () => import("../views/XZSJ/children/tdly"),
            },
            {
              path: "csgx",
              component: () => import("../views/XZSJ/children/csgx"),
            },
          ],
        },
        {
          path: "ZSYZ",
          redirect: "/Home/ZSYZ/zsly",
          component: () => import("../views/ZSYZ/zsyz"),
          name: "zsyz",
          children: [
            {
              path: "zsly",
              component: () => import("../views/ZSYZ/children/zsly"),
            },
            {
              path: "zslc",
              component: () => import("../views/ZSYZ/children/zslc.vue"),
            },
          ],
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

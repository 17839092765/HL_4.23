import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jj100ArrIds: [],
    jj100Arr: [],
    cygnblock: "",
    allpolygon: [],
    clickData: {},
    dataCaseisShow: false,
    // 点击的楼宇高亮信息 用来关闭高亮
    hightbuilding: {},
    // os图则多边形的信息
    os: [],
  },
  mutations: {
    // jj100全部楼层id信息
    jj100ArrIds(state, arr) {
      state.jj100ArrIds = arr;
    },
    // jj100全部楼层信息
    jj100Arr(state, arr) {
      state.jj100Arr = arr;
    },
    // 产业功能标签点击
    cygnblock(state, string) {
      state.cygnblock = string;
    },
    //当前所有的矢量要素
    allpolygon(state, Array) {
      state.allpolygon = Array;
    },
    //属性动态的内容
    clickData(state, Object) {
      state.clickData = Object;
    },
    //tuze内容
    dataCaseisShow(state, boolen) {
      state.dataCaseisShow = boolen;
    },
    // 高亮的楼宇楼层id信息
    hightbuilding(state, Object) {
      state.hightbuilding = Object;
    },
    // os
    oscase(state, Array) {
      state.os = Array;
    },
  },
  actions: {},
  modules: {},
});

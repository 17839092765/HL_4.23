import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allpolygon: [],
    clickData: {},
    dataCaseisShow: false,
    // 点击的楼宇高亮信息 用来关闭高亮
    hightbuilding: {},
  },
  mutations: {
    //当前所有的矢量要素
    allpolygon(state, Array) {
      state.allpolygon = Array
    },
    //属性动态的内容
    clickData(state, Object) {
      state.clickData = Object
    },
    //tuze内容
    dataCaseisShow(state, boolen) {
      state.dataCaseisShow = boolen
    },
    // 高亮的楼宇楼层id信息
    hightbuilding(state, Object) {
      state.hightbuilding = Object
    },
  },
  actions: {},
  modules: {},
})

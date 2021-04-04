import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allpolygon: [],
    clickData: {},
    dataCaseisShow: false,
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
  },
  actions: {},
  modules: {},
})

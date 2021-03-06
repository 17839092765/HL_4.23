/**
 * http.js
 * @overview 接口响应，接口拦截，axios 统一封装
 * @author zz
 */

import axios from "axios"
import router from "../router"
import store from "../store/index"
import getLocalToken from "../store"

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg) => {
  this.$Message.error(msg)
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath,
    },
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 102 令牌不存在！
    case "102":
      break
    //103 POST请求数据不存在！
    case 103:
      tip("登录过期，请重新登录")
      localStorage.removeItem("token")
      store.commit("loginSuccess", null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    // 104 用户信息错误！
    case "104":
      // tip('用户信息错误！');
      break
    default:
      console.log(other)
  }
}
// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 12,
  withCredentials: true,
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded",
  //   // 'Openid':'oDS1X4wvA6JUZEFdPE5nvuGdtT1o'
  // },
})
// 设置post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"
// instance.defaults.headers = {
//   "Content-type": "application/x-www-form-urlencoded",
// }

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
// instance.interceptors.request.use(
//   config => {
// console.log(store.state.token)
// 登录流程控制中，根据本地是否存在token判断用户的登录情况
// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
// if (store.state.token !== null) {
//   const token = store.state.token.access_token;
//   token && (config.headers.Authorization = token);
// }
//     return config;
//   },
//   error => Promise.error(error)
// )
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  // 请求失败
  (error) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit("changeNetwork", false)
    }
  }
)

export default instance

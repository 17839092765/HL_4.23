import axios from "./http"
import qs from "qs"
import base from "./base"
// import { data } from "jquery";

// const geoserverurl = 'http://192.168.31.153:8080/geoserver/'
// const geoserverurl = "http://192.168.5.54:80/geoserver/"
const geoserverurl = "/2api"

const connector = {
  // 土地权属
  lawlayer(data) {
    return axios.get(`${base}/groundownership/getdetial`, {
      params: {
        id: data,
      },
    })
  },
  //用地性质
  layer_prop(data) {
    return axios.get(`${base}/tdlyxz/getratio`, {
      // return axios.get(`${base}/tdlyxz/getnature`, {
      params: {
        id: data.id,
        // natureid: ['R1', 'R2'],

        natureid: data.natureid,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { indices: false })
      },
    })
  },
  //法定图则
  layer_statutory_plan(data) {
    return axios.get(`${base}/db_fdtz/getdetial`, {
      params: {
        t_blockid: data,
      },
    })
  },
  //城市更新项目
  layer_updatacity(data) {
    return axios.get(`${base}/updata/getupdata`, {
      params: {
        id: data,
      },
    })
  },
  //京基100楼层信息
  layer_jj100_one(data) {
    return axios.get(`${base}/db_jjdet/getjjcompany`, {
      params: {
        // id: 'jj100_020'
        id: data,
      },
    })
  },
  //单户查询
  house_jj100_one(data) {
    return axios.get(`${base}/companydata/getCompany`, {
      params: {
        id: data,
      },
    })
  },
  //筛选图层
  layer_select(data) {
    return axios.get(`${base}/jjfloordata/selectjjDataFree`, {
      params: data,
    })
  },
  //重点楼宇
  layer_building(data) {
    return axios.get(`${base}/builddata/getbuilddata`, {
      params: {
        // id: 4403030030040400000
        id: data,
      },
    })
  },
  //筛选的重点大厦信息
  buiding_select(data) {
    return axios.get(`${base}/builddata/selectFreeBuildData`, {
      params: data,
    })
  },
  //根据编码查询某栋楼宇的空置数据
  buidingOne_select(data) {
    return axios.get(`${base}/jjfloordata/selectAllDataFree`, {
      params: data,
    })
  },
  //根据名称查询某栋大厦空置信息
  nameOne_select(data) {
    return axios.get(`${base}/jjfloordata/selectOnlyBuildFree`, {
      params: data,
    })
  },
  // fuzzy_query (data) {
  //   return axios.post(`${base}/builddata/getBuildName`, data)
  // },
  //搜索模糊查询
  fuzzy_query(data) {
    return axios.get(`${base}/builddata/getBuildName`, {
      params: data,
    })
  },
  circle_query(data) {
    // return axios.get(`${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Aexport_output_16&maxFeatures=200000&outputFormat=application%2Fjson`,
    // db_hongling/wms?service=WMS&version=1.1.0&request=GetMap&layers=db_hongling%3Aexport_output_16&bbox=506959.59375%2C2492476.25%2C521725.28125%2C2501981.0&width=768&height=494&srs=EPSG%3A404000&format=application/openlayers
    return axios.get(
      `${geoserverurl}db_hongling/wms?service=WMS&version=1.1.0&request=GetMap&layers=db_hongling%3Aexport_output_16&bbox=506959.59375%2C2492476.25%2C521725.28125%2C2501981.0&width=768&height=494&srs=EPSG%3A404000&format=application/openlayers`
    )
  },
  // 现状权属图表  landownerdata
  xzqs_echart() {
    return axios.get(`${base}/landownerdata/getData`)
  },
  // 土地利用现状  landproportion
  tdlyxz_echart() {
    return axios.get(`${base}/landproportion/getData`)
  },
  // 道路信息表  roadinformation
  roadInf() {
    return axios.get(`${base}/roadinformation/getData`)
  },
  // 金融机构分布表
  buildInf() {
    return axios.get(`${base}/financial/getData`)
  },
  // jj100金融机构物业情况
  financialInf() {
    return axios.get(`${base}/db_jjfinanwuye/getFinanWuye`)
  },
  // 楼宇闲置查询接口
  louyuxianzhi(data) {
    return axios.get(`${base}/builddata/selectFreeBuildData`, {
      params: data,
    })
  },
}
export default connector

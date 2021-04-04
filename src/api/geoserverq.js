import axios from "./http"
// import qs from "qs"
// import base from "./base"

// const geoserverurl = 'http://192.168.31.153:8080/geoserver/'
const geoserverurl = "http://localhost:80/geoserver/"

// http://localhost:80/geoserver/db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3A1111&maxFeatures=20000&outputFormat=application%2Fjson`

const geoserverruest = {
  //地铁站点
  dtzdquery(data) {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Aworkbuild&maxFeatures=20000&outputFormat=application%2Fjson&BBOX=${data}`
    )
  },
  //罗湖法定图则
  lhfdtzquery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Alh&maxFeatures=20000&outputFormat=application%2Fjson`
    )
  },
  //福田法定图则
  ftfdtzquery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Aft&maxFeatures=20000&outputFormat=application%2Fjson`
    )
  },
  //土地利用现状
  tdlyxzquery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3A1111&maxFeatures=20000&outputFormat=application%2Fjson`
    )

    // db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3A1111&maxFeatures=20000&outputFormat=application%2Fjson
    // return axios.get(`${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3A1111&maxFeatures=20000&outputFormat=application%2Fjson`)
  },
  //现状权属
  xzqsquery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Axzqs&maxFeatures=20000&outputFormat=application%2Fjson`
    )
  },
  // 城市更新项目
  cityupdataquery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Acityupdata&maxFeatures=2000&outputFormat=application%2Fjson`
    )
    // return axios.get(`${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Acityupdata&maxFeatures=2000&outputFormat=application%2Fjson`)
  },
  // 地铁站点
  subwayPointQuery() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Asubwaypoint&maxFeatures=2000&outputFormat=application%2Fjson`
    )
  },
  // 3.31api
  // 现状权属
  shownewxzqsdata() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Axzqs2&maxFeatures=2000&outputFormat=application%2Fjson`
    )
    // db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Axzqs0401&maxFeatures=2000&outputFormat=application%2Fjson
  },
  // 法定图则
  shownewfdtzdata() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Afdtz0401&maxFeatures=2000&outputFormat=application%2Fjson`
    )
  },
  // 土地利用
  shownewtdlydata() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Atdlyxz0401&maxFeatures=2000&outputFormat=application%2Fjson`
    )
  },
  // 城市更新
  shownewcsgxdata() {
    return axios.get(
      `${geoserverurl}db_hongling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=db_hongling%3Acityupdate0401&maxFeatures=2000&outputFormat=application%2Fjson`
    )
  },
}
export default geoserverruest

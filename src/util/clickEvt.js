import store from "../store"
import connector from "../api/common"
function click_EVT_building(data, datatype) {
  var tileLayerId = data.Id
  // name -> ObjectID
  var actorName = data.ObjectID
  // requestdata("楼层信息", data.Id)
  __g.tileLayer.highlightActor(tileLayerId, actorName)
}

function click_EVT_jj100(data) {
  var tileLayerId = data.Id
  // name -> ObjectID
  var actorName = data.ObjectID
  __g.tileLayer.highlightActor(tileLayerId, actorName)
}
//京基100请求数据
// async function requestdata(title, data) {
//   // await arr.forEach(async function (data) {
//   var rcdata
//   if (title == "单户信息") {
//     rcdata = await connector.house_jj100_one(data)
//   } else if (title == "楼层信息") {
//     rcdata = await connector.layer_jj100_one(data)
//   }
//   var data_show = {
//     title: title,
//     data: rcdata.data,
//   }
//   store.commit("clickData", data_show)
// }
export { click_EVT_building, click_EVT_jj100 }

import store from "../../store"
import __g from "../../main"
import acapi from "../../static/ac.min"
function addhighlight(alldata, clcdata) {
  // console.log(alldata, clcdata, 888888888888)
  // console.log(clcdata, 888777)
  __g.polyline.clear(() => {
    alldata.forEach((item, index) => {
      // console.log(clcdata.id)
      if (item.id == clcdata.Id) {
        // item.coordinates[0][0].forEach((item) => {
        //   // console.log(item)
        //   // item[2] = 30
        // })
        item.coordinates[0][0].push(item.coordinates[0][0][0])
        // console.log("对", item.coordinates[0][0])

        let coords = item.coordinates[0][0]
        let color = [1, 1, 1, 1]
        let style = 4
        let thickness = 10
        let brightness = 0.8
        let flowRate = 0.5
        let o = new acapi.PolylineData(
          index + "p1",
          color,
          coords,
          style,
          thickness,
          brightness,
          flowRate
        )
        o.depthTest = true
        __g.polyline.add(o, () => {
          // 点击现状数据图层右边的数据展示
          store.commit("dataCaseisShow", true)
        })
      }
    })
  })
}
export { addhighlight }

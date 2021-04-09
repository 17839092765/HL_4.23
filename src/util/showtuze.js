import geoserverruest from "../api/geoserverq"
import store from "../store"
// import __g from "../main"
// import from "../static/ac.min"
var dataId = []
//加载矢量数据
async function showVectorlayers(data) {
  let database = data
  var res, res1, res2, data1, idd
  var os = []

  if (database == "城市更新单元") {
    // res = await geoserverruest.cityupdataquery()
    res1 = await geoserverruest.shownewcsgxdatawarp()
    // res2 = await geoserverruest.lhfdtzquery()

    res = await geoserverruest.shownewcsgxdata()
    var cityupdata = res.data.features
    // console.log(cityupdata)
    var ftfdtzdata = res1.data.features
    console.log(ftfdtzdata)
    // var lhfdtzdata = res2.data.features
    let color = [200 / 255, 200 / 255, 200 / 255, 0.2]
    var id, coords
    ftfdtzdata.forEach((ele, index) => {
      id = "fdtzft" + index + "-" + ele.properties.tname
      coords = ele.geometry.coordinates
      for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
          let element = coords[i][j]
          for (let q = 0; q < element.length; q++) {
            let element1 = element[q]
          }
        }
      }
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(id, color, coords, frameColor, frameThickness)
      o.depthTest = false
      os.push(o)
      dataId.push(id)

      // 点击地块高亮且视角锁定
      store.state.allpolygon.push(o)
    })
    // lhfdtzdata.forEach((ele, index) => {
    //   id = "fdtzlh" + index + "-" + ele.properties.tname
    //   coords = ele.geometry.coordinates
    //   for (let i = 0; i < coords.length; i++) {
    //     for (let j = 0; j < coords[i].length; j++) {
    //       let element = coords[i][j]
    //       for (let q = 0; q < element.length; q++) {
    //         let element1 = element[q]
    //       }
    //     }
    //   }
    //   let frameColor = color
    //   let frameThickness = 1
    //   let o = new PolygonData(
    //     id,
    //     [...color, 0.6],
    //     coords,
    //     frameColor,
    //     frameThickness
    //   )
    //   o.depthTest = false
    //   os.push(o)
    //   dataId.push(id)
    // })
    cityupdata.forEach((ele, index) => {
      id = "cityxx" + index + 1 + "-" + ele.properties.id
      coords = ele.geometry.coordinates
      for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
          let element = coords[i][j]
          for (let q = 0; q < element.length; q++) {
            let element1 = element[q]
            if (element1.length == 2) {
              element1.push(40)
            } else if (element1.length == 3) {
              element1.pop()
              element1.push(40)
            }
          }
        }
      }
      var color = [1, 20 / 255, 1, 1]
      // var color1 = [1, 20 / 255, 1, 1]
      var color1 = ele.properties.grb.split(",")
      for (let c = 0; c < color1.length; c++) {
        color1[c] = Number((color1[c] / 255).toFixed(5))
        // console.log(typeof Number(color1[c]))
      }
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(
        id,
        [...color1, 0.6],
        coords,
        frameColor,
        frameThickness
      )
      o.depthTest = false
      os.push(o)
      store.state.allpolygon.push(o)
      dataId.push(id)
    })
  }

  if (database == "法定图则") {
    res = await geoserverruest.shownewfdtzdata_left()
    res1 = await geoserverruest.shownewfdtzdata_center()
    res2 = await geoserverruest.shownewfdtzdata_rigtht()
    // data1 = res.data.features
    var fdtz_left = res.data.features
    var fdtz_center = res1.data.features
    var fdtz_right = res2.data.features
    // idd = "fdtzxx"
    let num = 0
    fdtz_left.forEach((ele, index) => {
      id = "fdtzxx" + num + "-" + ele.properties.tname
      num++

      coords = ele.geometry.coordinates
      for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
          let element = coords[i][j]
          for (let q = 0; q < element.length; q++) {
            let element1 = element[q]
            if (element1.length == 2) {
              element1.push(40)
            } else if (element1.length == 3) {
              element1.pop()
              element1.push(40)
            }
          }
        }
      }
      var color = [1, 20 / 255, 1, 1]
      // var color1 = [1, 20 / 255, 1, 1]
      var color1 = ele.properties.grb.split(",")
      for (let c = 0; c < color1.length; c++) {
        color1[c] = Number((color1[c] / 255).toFixed(5))
        // console.log(typeof Number(color1[c]))
      }
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(
        id,
        [...color1, 0.4],
        coords,
        frameColor,
        frameThickness
      )
      o.depthTest = false
      os.push(o)
      store.state.allpolygon.push(o)
      dataId.push(id)
    })
    fdtz_center.forEach((ele, index) => {
      id = "fdtzxx" + num + "-" + ele.properties.tname
      num++
      coords = ele.geometry.coordinates
      for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
          let element = coords[i][j]
          for (let q = 0; q < element.length; q++) {
            let element1 = element[q]
            if (element1.length == 2) {
              element1.push(40)
            } else if (element1.length == 3) {
              element1.pop()
              element1.push(40)
            }
          }
        }
      }
      var color = [1, 20 / 255, 1, 1]
      // var color1 = [1, 20 / 255, 1, 1]
      var color1 = ele.properties.grb.split(",")
      for (let c = 0; c < color1.length; c++) {
        color1[c] = Number((color1[c] / 255).toFixed(5))
        // console.log(typeof Number(color1[c]))
      }
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(
        id,
        [...color1, 1],
        coords,
        frameColor,
        frameThickness
      )
      o.depthTest = false
      os.push(o)
      store.state.allpolygon.push(o)
      dataId.push(id)
    })
    fdtz_right.forEach((ele, index) => {
      id = "fdtzxx" + num + "-" + ele.properties.tname
      num++

      coords = ele.geometry.coordinates
      for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
          let element = coords[i][j]
          for (let q = 0; q < element.length; q++) {
            let element1 = element[q]
            if (element1.length == 2) {
              element1.push(40)
            } else if (element1.length == 3) {
              element1.pop()
              element1.push(40)
            }
          }
        }
      }
      var color = [1, 20 / 255, 1, 1]
      // var color1 = [1, 20 / 255, 1, 1]
      var color1 = ele.properties.grb.split(",")
      for (let c = 0; c < color1.length; c++) {
        color1[c] = Number((color1[c] / 255).toFixed(5))
        // console.log(typeof Number(color1[c]))
      }
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(
        id,
        [...color1, 0.4],
        coords,
        frameColor,
        frameThickness
      )
      o.depthTest = false
      os.push(o)
      store.state.allpolygon.push(o)
      dataId.push(id)
    })
    // debugger
  } else if (database == "现状权属") {
    // res = await geoserverruest.xzqsquery()
    res = await geoserverruest.shownewxzqsdata()

    data1 = res.data.features
    idd = "xzqsxx"
    // debugger
  } else if (database == "土地利用现状") {
    // res = await geoserverruest.tdlyxzquery()
    res = await geoserverruest.shownewtdlydata()
    data1 = res.data.features
    // console.log(res)
    // var data2 = res1.data.features;
    // data1 = data1.concat(data2)
    idd = "tdlyxz"
  }
  // 城市更新项目
  if (data1 != null) {
    data1.forEach((ele, index) => {
      var id, color
      id = idd + index
      // id = idd + index + '-' + ele.properties.tname;
      // debugger
      var coords = ele.geometry.coordinates
      var arrcoords = coords[0][0]
      arrcoords.splice(arrcoords.length - 1, 1)
      //拿到layer信息，处理每个图层 信息
      var layerData = ele.properties.layer
      for (var k in arrcoords) {
        if (arrcoords[k].length == 2) {
          arrcoords[k].push(Math.random() + 25)
        } else if (arrcoords[k].length == 3) {
          arrcoords[k].splice(arrcoords[k].length - 1, 1)
          arrcoords[k].push(Math.random() + 25)
        }
      }

      var color1 = [1, 0, 1, 1] //初始颜色值
      if (idd == "tdlyxz") {
        id = idd + ele.properties.layer.slice(3) + "-" + index

        color1 = ele.properties.rgb.split(",")

        for (let c = 0; c < color1.length; c++) {
          color1[c] = Number((color1[c] / 255).toFixed(5))
        }
      } else if (idd == "fdtzxx") {
        id = idd + index + "-" + ele.properties.tname

        color1 = ele.properties.grb.split(",")

        for (let c = 0; c < color1.length; c++) {
          color1[c] = Number((color1[c] / 255).toFixed(5))
        }
      } else if (idd == "xzqsxx") {
        color1 = ele.properties.rgb.split(",")

        for (let c = 0; c < color1.length; c++) {
          color1[c] = Number((color1[c] / 255).toFixed(5))
        }
      }

      color = color1
      let frameColor = color
      let frameThickness = 1
      let o = new PolygonData(
        id,
        [...color, 0.8],
        coords,
        frameColor,
        frameThickness
      )
      dataId.push(id)
      // console.log(dataId)
      o.depthTest = false
      os.push(o)
      // 点击地块高亮且视角锁定
      store.state.allpolygon.push(o)

      // data.id.push(id)
      // debugger
      // if (!arrall[color]) {
      //   arrall[color] = []
      // } else {
      //   arrall[color].push(id)
      // }
      // // console.log(color, data.id, 8878787878787)
      // console.log(arrall, 766666666)
    })
  }
  // console.log(tdlyxzColorArray, 888888888888888)
  // console.log(xzqsxxColorArray)
  // console.log(fdtzxxColorArray, fdtzftColorArray, fdtzlhColorArray)
  // var date2 = new Date();
  // console.log(date2-date1);
  // console.log(os, 999222)

  store.commit("oscase", os)
  __g.polygon.add(os)
}
// 隐藏矢量数据
function hideVectorlayers() {
  __g.polygon.delete(dataId)
  dataId = []
  store.state.allpolygon = []
}
export { showVectorlayers, hideVectorlayers }

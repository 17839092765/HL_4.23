function showdata(newdata) {
  console.log(newdata, 8888888);
  var title = newdata.title;
  var formdata = [];
  var data = newdata.data;
  var nonedata = [
    {
      name: "暂无数据",
      data: "暂无数据",
    },
  ];
  for (var item in data) {
    if (data[item] == "" || !data[item]) {
      data[item] = "--";
    }
  }
  //用地现状、法定图则信息的展示
  if (title == "法定图则信息") {
    formdata = [
      {
        name: "地块编号",
        data: data.t_blockid,
      },
      {
        name: "用地性质编号",
        data: data.natureid,
      },
      {
        name: "用地性质",
        data: data.naturename,
      },

      {
        name: "面积(㎡)",
        data: data.area,
      },
      {
        name: "绿化率(%)",
        data: data.plot_ratio,
      },
      {
        name: "容积率(%)",
        data: data.plot_ratio,
      },
      {
        name: "配套设施项目名称",
        data: data.support_fac,
      },
      {
        name: "备注信息",
        data: data.note,
      },
    ];
  } else if (title == "用地现状信息") {
    formdata = [
      {
        name: "用地性质编号",
        data: data[4] ? data[3] + "+" + data[4] : data[2],
      },
      {
        name: "用地性质",
        data: data[4] ? data[1] + "+" + data[2] : data[1],
      },

      {
        name: "建筑密度(%)",
        data:
          data[0]["sum(density)"] == null
            ? "暂无数据"
            : data[0]["sum(density)"],
      },
      {
        name: "容积率(%)",
        data:
          data[0]["sum(ratio)"] == null ? "暂无数据" : data[0]["sum(ratio)"],
      },
    ];
  }
  //用地权属信息的展示
  else if (title == "用地权属信息") {
    if (newdata.data) {
      for (var index in newdata.data) {
        if (
          index != "x" &&
          index != "y" &&
          index != "w" &&
          index != "opBy" &&
          index != "opAt" &&
          index != "delFlag"
        ) {
          // console.log(index, typeof index, newdata.data[index], "index")
          if (newdata.data[index] == "") {
            newdata.data[index] = "--";
          }
          var data_ = {
            name: index,
            data: newdata.data[index],
          };
          formdata.push(data_);
        }
      }
      // console.log(formdata, "form")
    } else {
      formdata = nonedata;
    }
  }
  //单栋建筑的信息
  else if (title == "建筑信息") {
    if (newdata.data) {
      for (var index in newdata.data) {
        if (
          index != "fid" &&
          index != "name" &&
          index != "Shape_Leng" &&
          index != "wj_area" &&
          index != "opBy" &&
          index != "opAt" &&
          index != "delFlag"
        ) {
          if (newdata.data[index] == "") {
            newdata.data[index] = "--";
          }
          // if (index == '建筑面积') {
          //   index = '建筑面积（㎡）'
          //   newdata.data[index] = newdata.data[index]
          // }
          // if (index == '建筑高度') {
          //   index = '建筑高度（m）'
          //   newdata.data[index] = newdata.data[index]
          // }
          var data_ = {
            name: index,
            data: newdata.data[index],
          };
          formdata.push(data_);
        }
      }
    } else {
      formdata = nonedata;
    }
  }
  //城市更新项目的信息
  else if (title == "城市更新项目") {
    if (data.length > 0) {
      console.log(data, 998);
      var id = data[0].id;
      var arr = [];
      arr = [
        {
          name: "更新项目名称",
          data: data[0].name,
        },
        {
          name: "建设情况",
          data: data[0].demolish,
        },
      ];
      if (data.length == 1) {
      } else {
        data.forEach((item, index) => {
          var obj = {
            name: item.build,
            data: item.data,
          };
          arr.push(obj);
        });
      }
      formdata = [id, arr];
    }
  }
  //楼层信息
  else if (title == "楼层信息") {
    var reg = new RegExp("、", "g");
    // var company = data.company.replace(/\、/g, '，')
    console.log(data);
    console.log(typeof data[0]);
    if (typeof data[0] == "object") {
      formdata = [
        {
          name: "楼层",
          data:
            data[0].floor.slice(7) == "00"
              ? "100" + "层"
              : data[0].floor.slice(7) + "层",
        },
        {
          name: "入驻企业",
          data: data[0].company,
        },
        {
          area: data[0].area,
        },
        {
          usestatus: data[0].usestatus,
        },
      ];
    }
  } else if (title == "单户信息") {
    if (data[0].usestatus) {
      formdata = [
        {
          name: "空置信息",
          data: "京基100大厦36-05",
        },
        {
          name: "同层企业",
          data: data[0].company,
        },
        {
          name: "招商面积",
          data: data[0].area,
        },
        {
          name: "招商租金",
          data: data[0].rent,
        },
      ];
    } else {
      formdata = [
        {
          name: "企业名称",
          data: data[0].name,
        },
        {
          name: "经营范围",
          data: data[0].range,
        },
        {
          name: "成立时间",
          data: data[0].time,
        },
        {
          name: "公司类型",
          data: data[0].type,
        },
        {
          name: "公司概要",
          data: data[0].note,
        },
      ];
    }
  }
  console.log(formdata, 888);
  return formdata;
}
export { showdata };

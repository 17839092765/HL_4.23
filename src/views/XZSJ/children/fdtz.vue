<template>
  <div class="fdtz">
    <div class="echwarp">
      <div class="top">
        <i>icon</i>
        <span>法定图则</span>
      </div>
      <div class="echbox">
        <div id="echarts1"></div>
      </div>
    </div>
    <div class="datacase">
      <div v-show="dataCaseisShow" class="clickdata">
        <div class="title">
          {{ clickData.title ? clickData.title : "Loding..." }}
          <!-- {{clickData1}} -->
        </div>
        <div v-for="(item, index) in clickData1" :key="index" class="case">
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.data }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapState } from "vuex";
import { showdata } from "../showdata";
import __g from "../../../main";
export default {
  data () {
    return {};
  },
  computed: {
    ...mapState({
      // 筛选过得数据
      clickData1: (state) => showdata(state.clickData),
      // 。原始数据
      clickData: (state) => state.clickData,
      // 图则内容的显示隐藏
      dataCaseisShow: (state) => state.dataCaseisShow,
      os: (state) => state.os,
    }),
  },
  watch: {},
  methods: {
    ChuLiOs (data) {
      // let echartsColorClass = []
      // console.log(this.os);
      // this.os.map(item => {
      //   if (!echartsColorClass[item.color]) {
      //     echartsColorClass[item.color] = []
      //     echartsColorClass[item.color].push(item)

      //   } else {
      //     echartsColorClass[item.color].push(item)
      //   }
      // })
      // console.log(echartsColorClass);
      let odata = data.join()
      let newos = this.os.map(item => {
        if (item.color.join() === odata) {
          return [item.id, item.coordinates[0][0]]
        } else {
          return 666
        }
      }).filter(item => {
        if (item == 666) {
          return false
        } else {
          return item
        }
      })
      console.log(newos);
      return newos
    },
    Glow (newos) {
      console.log(newos)

      __g.polygon.glow(newos.map(item => {
        return item[0]
      }), 5, (res) => {
      })



      __g.polyline.clear(() => {
        let oo1 = []
        newos.forEach((item, index) => {
          // console.log(clcdata.id)
          // item.coordinates[0][0].forEach((item) => {
          //   // console.log(item)
          //   // item[2] = 30
          // })
          // console.log("对", item.coordinates[0][0])

          let coords = item[1]
          let color = [0, 1, 1, 1]
          let style = 4
          let thickness = 7
          let brightness = 0.8
          let flowRate = 0.5
          let o = new this.acapi.PolylineData(
            index + "p11",
            color,
            coords,
            style,
            thickness,
            brightness,
            flowRate
          )
          o.depthTest = true
          oo1.push(o)
        })
        __g.polyline.add(oo1, () => {
          // 点击现状数据图层右边的数据展示
        })
      })
    },
  },
  created () { },
  mounted () {
    var chartDom = document.getElementById("echarts1");
    var myChart = echarts.init(chartDom);
    var option;
    myChart.on("click", (params) => {
      console.log(params);
      if (params.name == "商业服务业用地") {
        this.Glow(this.ChuLiOs([0.99608, 0, 0, 1]));
      } else if (params.name == "居住用地") {
        this.Glow(this.ChuLiOs([1, 1, 0, 1]));
      } else if (params.name == "公共管理与服务设施用地") {
        this.Glow(this.ChuLiOs([1, 0, 1, 1]));
      } else if (params.name == "物流仓储用地") {
        this.Glow(this.ChuLiOs([0.4549, 0.43137, 0.86667, 1]));
      } else if (params.name == "公用设施用地") {
        this.Glow(this.ChuLiOs([0, 0.72157, 0.72157, 1]));
      } else if (params.name == "交通设施用地") {
        this.Glow(this.ChuLiOs([0, 0.43137, 0.86667, 1]));
      } else if (params.name == "绿地与广场用地") {
        this.Glow(this.ChuLiOs([0.25098, 1, 0.00392, 1]));
      } else if (params.name == "工业用地") {
        this.Glow(this.ChuLiOs([0.72157, 0.36078, 0.36471, 1]));
      } else if (params.name == "其他用地") {
        this.Glow(this.ChuLiOs([0.29412, 0.58431, 0, 1]));
      }
    });
    option = {
      color: [
        "#FA013B",
        "#ED28EE",
        "#7D684B",
        "#FFFF00",
        "#A66EDD",
        "#2D86E0",
        "#00B8B8",
        "#40FF01",
        "#608545",
      ],
      // backgroundColor: "#00032C",
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {d}%",
      },
      legend: {
        backgroundColor: "#0000004d",

        orient: "horizontal",
        bottom: "5%",
        show: true,
        data: [
          "商业服务业用地",
          "公共管理与服务设施用地",
          "工业用地",
          "居住用地",
          "物流仓储用地",
          "公用设施用地",
          "交通设施用地",
          "绿地与广场用地",
          "其他用地",
        ],
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "法定图则",
          type: "pie",
          radius: ["20%", "55%"],
          center: ["50%", "35%"],
          avoidLabelOverlap: true, //开启后饼图上的文字不会重叠，并且鼠标移入后文字不会消失
          selectedMode: "single",
          animationDuration: 2000,
          label: {
            show: true,
            position: "inside",
            color: "#fff",
            fontSize: "10",
            formatter: "{d}%",
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 27.09, name: "商业服务业用地" },
            { value: 11.76, name: "公共管理与服务设施用地" },
            { value: 0.45, name: "工业用地" },
            { value: 15.62, name: "居住用地" },
            { value: 4.57, name: "物流仓储用地" },
            { value: 2.31, name: "公用设施用地" },
            { value: 32.61, name: "交通设施用地" },
            { value: 4.62, name: "绿地与广场用地" },
            { value: 0.97, name: "其他用地" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
#echarts1 {
  width: 100%;
  height: 370px;
  margin: 0 auto;
  // padding: 10px;
}
.echwarp {
  width: 350px;
  height: 400px;
  /* background: #0000004d; */
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 100;

  .top {
    height: 40px;
    width: 100px;
    border: 1px solid rgb(255, 255, 255);
    line-height: 40px;
    background: rgba(0, 0, 0, 0.452);
  }
  .echbox {
    border: 1px solid #fff;
    width: 100%;
    height: calc(100% - 40px);
    background: rgba(0, 0, 0, 0.39);
  }
}
.datacase {
  padding: 20px 10px;
  box-sizing: border-box;
  width: 20%;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.308);
  position: absolute;
  border-radius: 20px 20px 0 0;
  // top: 0;
  right: 0;
  .clickdata {
    overflow-y: scroll;
    width: 100%;
    height: 300px;
    background: rgb(121, 117, 117);
    .title {
      height: 30px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      font-weight: 600;
    }
  }
  .cityshow {
    .img {
      width: 100%;
      height: 100px;
      img {
        width: 50%;
      }
    }
  }
}
</style>

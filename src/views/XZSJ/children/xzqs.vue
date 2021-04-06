<template>
  <div class='xzqs'>

    <div class="datacase">
      <div id="echarts3"></div>

      <div v-show="dataCaseisShow" class="clickdata">
        <div class="title">
          {{clickData.title?clickData.title:'Loding...'}}
          <!-- {{clickData1}} -->
        </div>
        <div v-for="item,index in clickData1" :key="index" class="case">
          <span>
            {{item.name}}
          </span>
          <span>
            {{item.data}}
          </span>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { mapState } from "vuex"
import { showdata } from "../showdata"
import connector from "../../../api/common"
import __g from "../../../main"
export default {
  data () {
    return {
      option: []
    };
  },
  computed: {
    ...mapState({
      // 筛选过得数据
      clickData1: state => showdata(state.clickData),
      // 。原始数据
      clickData: state => state.clickData,
      // 图则内容的显示隐藏
      dataCaseisShow: state => state.dataCaseisShow,
      os: state => state.os

    })
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
    async getechartsdata () {
      const result = await connector.xzqs_echart()
      if (result.status === 200) {
        console.log(result.data);
        this.option = result.data
        console.log(this.option);
        this.showEcharts()
      }
    },
    showEcharts () {
      var chartDom = document.getElementById('echarts3');
      var myChart = echarts.init(chartDom);
      var option;
      myChart.on('click', (params) => {
        console.log(params);
        if (params.name == "已发证") {
          this.Glow(this.ChuLiOs([1, 0, 0, 0.6]))
        } else if (params.name == "注记") {
          this.Glow(this.ChuLiOs([0, 1, 0.24706, 0.6]))
        } else if (params.name == "备案") {
          this.Glow(this.ChuLiOs([0.00392, 0.49804, 1, 0.6]))
        } else if (params.name == "待处理") {
          this.Glow(this.ChuLiOs([0.99608, 0.61961, 0.49412, 0.6]))
        } else if (params.name == "军产用地") {
          this.Glow(this.ChuLiOs([0, 1, 1, 0.6]))
        }
      })
      option = {
        color: ['#FD0000', '#017BF6', '#00FF3F', '#FE9E7E', '#00FFFF',],


        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '面积',
            type: 'pie',
            radius: ['20%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.option.map(item => {
              return { name: item.type, value: item.area }
            })
          }
        ]
      };

      option && myChart.setOption(option);
    }
  },
  created () {
    this.getechartsdata()
  },
  mounted () {


  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang="scss" scoped>
#echarts3 {
  width: 90%;
  height: 400px;
  margin: 0 auto;
  // padding: 10px;
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

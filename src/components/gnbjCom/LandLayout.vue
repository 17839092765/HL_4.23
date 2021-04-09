<template>
  <div class="landlayout">
    <div class="landlayout_title">
      <div>
        <img src="../../assets/img/2功能布局/icon_用地功能布局.svg" alt="" />
      </div>
      <div>更新单元图纸</div>
    </div>

    <div ref="echart" class="echart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    showChart() {
      var dom = this.$refs.echart;
      var myChart = echarts.init(dom);
      var app = {};
      var option = null;

      option = {
        title: {
          text: "总体用地布局",
          x: "center",
          top: "2%",
          textStyle: {
            fontSize: 26,
            color: "#fff",
          },
        },
        grid: {
          left: "40%",
          right: "1%",
          top: "2%",
          bottom: "6%",
          containLabel: true,
        },
        backgroundColor: "#848380",
        color: [
          "#608545",
          "#40FF01",
          "#00B8B8",
          "#2D86E0",
          "#A66EDD",
          "#FFFF00",
          "#7D684B",
          "#ED28EE",
          "#FA013B",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: [
            "商业服务业用地",
            "公共管理与\n服务设施用地",
            "工业用地",
            "居住用地",
            "物流仓储用地",
            "公用设施用地",
            "交通设施用地",
            "绿地与广场用地",
            "其他用地",
          ],
          orient: "vertical",
          left: "2%",
          top: "20%",
          itemGap: 30,
          textStyle: {
            fontSize: 14,
            color: "#fff",
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["法图", "规划"],
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff",
                fontSize: 18,
              },
              axisLabel: {
                verticalAlign: "top",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "其他用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            animationDuration: 2000,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [0.97, 1.56],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "绿地与广场用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            xAxisIndex: 0,
            animationDuration: 2000,
            yAxisIndex: 0,
            silent: true,
            data: [4.62, 7.38],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "交通设施用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            xAxisIndex: 0,
            yAxisIndex: 0,
            animationDuration: 2000,
            silent: true,
            data: [32.61, 26.21],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "公用设施用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            animationDuration: 2000,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [2.31, 0.65],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "物流仓储用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            xAxisIndex: 0,
            animationDuration: 2000,
            yAxisIndex: 0,
            silent: true,
            data: [4.57, 1.7],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "居住用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            animationDuration: 2000,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [15.62, 13.86],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "工业用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            animationDuration: 2000,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [0.45, 2.1],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "公共管理与\n服务设施用地",
            type: "bar",
            stack: "A",
            barWidth: 100,
            animationDuration: 2000,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [11.76, 17.56],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            name: "商业服务业用地",
            type: "bar",
            stack: "A",
            animationDuration: 2000,
            barWidth: 100,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [27.09, 29.02],
            label: {
              show: true,
              formatter: "{c}%",
              fontSize: 12,
            },
          },
          {
            type: "line",
            color: "grba(0,0,0,0)",
            markPoint: {
              data: [
                {
                  value: "法图",
                  xAxis: 0,
                  yAxis: 105,
                  itemStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                  symbol: "triangle",
                  symbolSize: [100, 50],
                  label: {
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                  },
                },
                {
                  value: "规划",
                  xAxis: 1,
                  yAxis: 105,
                  itemStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                  symbol: "triangle",
                  symbolSize: [100, 50],
                  label: {
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                  },
                },
              ],
            },
          },
        ],
      };

      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
  },
  created() {},
  mounted() {
    this.showChart();
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.landlayout {
  color: #ddd;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 20px;
  z-index: 10;
  width: 473px;
  height: 603px;
  background: rgba(69, 77, 72, 0.4)
    linear-gradient(
      227deg,
      rgba(16, 25, 36, 0.4) 0%,
      rgba(35, 47, 48, 0.7) 100%
    );
  flex-direction: column;
  display: flex;
  > .landlayout_title {
    height: 50px;
    margin-top: 17px;
    background: url("../../assets/img/3现状数据/titbg_text4.svg") no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 25px;
  }
  > .echart {
    flex-grow: 1;
  }
}
</style>

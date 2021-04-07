<template>
  <div class="tdly">
    <div class="echwarp">
      <div class="top">
        <i>icon</i>
        <span>法定图则</span>
      </div>
      <div class="echbox">
        <div id="echarts2"></div>
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
export default {
  data() {
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
    }),
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("echarts2");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      color: [
        "#FF0000",
        "#FF33CC",
        "#9E480E",
        "#FFFF00",
        "#4472C4",
        "#70AD47",
        "#BFBFBF",
        "#A9D18E",
        "#636363",
      ],
      // backgroundColor: "#00032C",
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {d}%",
      },
      legend: {
        backgroundColor: "#00032C",

        orient: "horizontal",
        // left: "center",
        bottom: "0%",
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
        },
      },
      series: [
        {
          name: "土地利用现状",
          type: "pie",
          radius: ["30%", "70%"],
          center: ["50%", "40%"],
          avoidLabelOverlap: false,
          selectedMode: "single",
          animationDuration: 2000,
          label: {
            show: true,
            position: "inside",
            color: "#fff",
            fontSize: "16",
            formatter: (params) => {
              return `${params.percent}%`;
            },
          },
          emphasis: {
            label: {
              show: false,
              fontSize: "16",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 28, name: "商业服务业用地" },
            { value: 15, name: "公共管理与服务设施用地" },
            { value: 2, name: "工业用地" },
            { value: 18, name: "居住用地" },
            { value: 6, name: "物流仓储用地" },
            { value: 1, name: "公用设施用地" },
            { value: 24, name: "交通设施用地" },
            { value: 5, name: "绿地与广场用地" },
            { value: 1, name: "其他用地" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
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
#echarts2 {
  width: 100%;
  height: 440px;
  margin: 0 auto;
  // padding: 10px;
}
.echwarp {
  width: 400px;
  height: 500px;
  /* background: #0000004d; */
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 100;
  color: white;

  .top {
    height: 40px;
    width: 100px;
    border: 1px solid rgb(255, 255, 255);
    line-height: 40px;
    background: rgba(0, 0, 0, 0.452);
  }
  .echbox {
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

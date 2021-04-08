<template>
  <div class="fdtz">
    <div class="echwarp">
      <div class="echbox1"></div>
      <div class="echbox">
        <div class="top">
          <div class="igm_top">
            <img src="../../../assets/img/3现状数据/icon_法定图则.svg" />
            <span class="fading">土地利用</span>
          </div>
        </div>
        <div id="echarts13"></div>
      </div>
    </div>
    <div class="datacase">
      <div class="top_data" v-if="clickData1.length === 0">
        点击左边建筑物查看信息
      </div>
      <div v-show="dataCaseisShow" class="clickdata">
        <div class="title1"></div>
        <div class="title">
          <div class="title_img">
            <img src="../../../assets/img/3现状数据/icon_地块信息.svg" />
          </div>
          <div class="title_con">
            {{ clickData.title ? clickData.title : "Loding..." }}
          </div>
        </div>
        <div class="top_item1">
          <div class="top_item1_btn">地块编号</div>
          <div class="top_item1_title" v-if="clickData1[2]">
            {{ clickData1[0].data }}
          </div>
        </div>
        <div class="top_item2">招商类型: 银行金融科技子公司</div>
        <div class="top_item3">
          <div class="right_item11">
            <div class="right_item1"></div>
          </div>

          <div class="right_item2">
            <span class="spac" v-if="clickData1[2]">
              {{ clickData1[3].data }}</span>
            <span class="wan">m<sup>2</sup></span>
            <div>用地面积</div>
          </div>
        </div>
        <div class="condata1"></div>
        <div class="condata">
          <div class="condata_item" v-for="(item, index) in clickData1" :key="index">
            <div class="span_left">{{ item.name }}</div>
            <span class="span_cen"> |</span>
            <span class="span_right"> {{ item.data }}</span>
          </div>
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
    }),
  },
  watch: {},
  methods: {},
  created () {
    clickData1 = [];
  },
  mounted () {
    var chartDom = document.getElementById("echarts13");
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
          radius: ["35%", "60%"],
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
.title_img {
  width: 20%;
  height: 100%;
}
.title_img img {
  width: 35px;
  height: 35px;
  margin-left: 50%;
  margin-top: 10%;
}
.title_con {
  width: 50%;
  height: 100%;
  margin-left: 3%;
  margin-top: 4%;
  font-size: 16px;
}
.igm_top {
  margin-left: 8%;
  display: flex;
  align-items: center;
}
.fading {
  width: 105px;
  font-size: 18px;
  margin-left: 2.5%;
  display: flex;
  align-items: center;
}
.igm_top img {
  width: 30px;
  height: 30px;
}
.main_box {
  display: flex;
  width: 100%;
  height: 10%;
  margin-top: 2%;
}
.cvn {
  width: 15%;
  height: 100%;
  border-bottom: 1px solid white;
}

.cvh {
  width: 45%;
  height: 100%;
  border-bottom: 1px solid white;
}
.cyu {
  width: 100%;
  height: 100%;
}
.cyu img {
  padding-top: 5%;
  width: 25px;
  height: 25px;
}
.cvy {
  font-size: 16px;
  display: flex;
  align-items: center;
  width: 35%;
  height: 10%;
}
.span_right {
  width: 170px;

  /* word-break: break-all; */
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
  min-height: 100%;
  margin-top: 5%;
  margin-left: 3%;
}
.span_cen {
  width: 2%;
  height: 100%;
  display: flex;
  align-items: center;
}
.span_left {
  margin-left: 5%;
  width: 37%;
  height: 100%;

  display: flex;
  align-items: center;
}
.condata_item {
  font-size: 16px;
  width: 100%;
  height: 10%;
  min-height: 9.5%;

  display: flex;
  align-items: center;
}
.condata {
  font-size: 16px;
  width: 100%;
  height: 38%;
  position: absolute;
  right: -4%;
  top: 40%;
  overflow: scroll;
}
/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 1px;
}
/* 滚动条轨道颜色 */
::-webkit-scrollbar-track {
  background-color: transparent;
}
/* 滚动条颜色 */
::-webkit-scrollbar-thumb {
  background-color: transparent;
}
/* 鼠标移动到滚动条上后显示的颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}
/* 点击时滚动条的颜色 */
::-webkit-scrollbar-thumb:active {
  background-color: transparent;
}

.condata1 {
  font-size: 16px;
  padding-top: 4%;
  margin-top: 1%;
  width: 100%;
  height: 38%;
  background: rgba(53, 46, 44, 0.45);
  filter: blur(2px);
}

.right_item11 {
  width: 20%;
  height: 100%;
  margin-left: 5%;
  padding-top: 20%;
}
.right_item2 {
  width: 60%;
  height: 100%;
  padding-top: 20%;
}
.right_item1 img {
  width: 50%;
  margin-top: 24%;
}
.wan {
  width: 47%;
  padding-left: 3%;
}
.spac {
  width: 50%;
  height: 32px;
  font-size: 22px;
  font-family: STHeitiSC-Medium, STHeitiSC;
  font-weight: 500;
  color: #00f5f7;
  line-height: 33px;
}
.left_item2 {
  width: 69%;
}
.right_item1 {
  width: 100%;
  height: 70px;
  background-image: url("../../../assets/img/3现状数据/icon_面积.svg");
  background-size: 80%;
  background-repeat: no-repeat;
}
.top_item3 {
  width: 100%;
  height: 15%;
  background: transparent;
  display: flex;
  align-items: center;
}
.item_left {
  width: 50%;
  height: 100%;
}
.con {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.item_right {
  width: 50%;
  height: 100%;
}
.fdtz {
  width: 100%;
  height: 100%;
}
.datacase {
  width: 20%;
  height: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  color: white;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.171);
  position: absolute;
  border-radius: 20px 20px 0 0;
  // top: 0;
  right: 0;
}
.clickdata {
  width: 100%;
  height: 100%;
}
.top_item1 {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_item1_btn {
  margin-top: 1%;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fbf6e6;
  background: #f7b700;
  width: 30%;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.top_item1_title {
  width: 70%;
  height: 35px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 56px;
  margin-left: 2%;
  margin-top: -7%;
}
.top_item2 {
  display: flex;
  align-items: center;
  background: #007ad9;
  padding-left: 4%;
  width: 80%;
  height: 7%;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  // line-height: 20%;
  text-align: center;
}

.title {
  display: flex;

  width: 100%;
  height: 6%;
  background-image: url("../../../assets/img/3现状数据/titbg_text6.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.letf_title {
  width: 55%;
  height: 100%;
  font-size: 18px;
  color: white;
  background: rgba(109, 136, 123, 0.1);
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.title_icon {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title_icon img {
  width: 30px;
}
.right_title {
  width: 40%;
  height: 100%;
  border-bottom: 1px solid white;
}
#echarts13 {
  width: 100%;
  height: 370px;
  margin: 0 auto;
  // padding: 10px;
}
.top1 {
  height: 40px;
  width: 100px;
  line-height: 40px;
  background: rgba(230, 206, 206, 0.2);
  filter: blur(1px);
  position: absolute;
  top: 2%;
  left: 0;
}
.echwarp {
  width: 350px;
  height: 450px;
  /* background: #0000004d; */
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 100;
  color: white;

  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    margin-top: 3%;
    background-image: url("../../../assets/img/3现状数据/titbg_text4.svg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .echbox {
    width: 100%;
    height: calc(100% - 140px);
    position: absolute;
    top: 1.5%;
    left: 0;
    /* background: rgba(40, 68, 67, 0.3); */
    /* filter: blur(0.5px); */
  }
  .echbox1 {
    margin-top: 1.5%;

    width: 100%;
    height: calc(100% - 20px);
    background: red;
    background: rgba(41, 62, 65, 0.65);
    filter: blur(8px);
  }
}
.top_data {
  margin-top: 5%;
  color: red;
}
</style>

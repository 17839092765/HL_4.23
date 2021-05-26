<template>
  <div class="fdtz">
    <div class="datacase">
      <div class="clickdata">
        <div class="echwarp">
          <div class="echbox1"></div>
          <div class="echbox">
            <div class="top">
              <div class="igm_top">
                <img
                  src="../../../assets/img/3现状数据/icon_城市更新单元.svg"
                />
                <span class="fading">城市更新单元</span>
              </div>
            </div>
            <div id="echarts14"></div>
          </div>
        </div>
        <div v-if="clickData1.length > 0" class="title1"></div>
        <div v-if="clickData1.length > 0" class="title">
          <div class="title_img">
            <img src="../../../assets/img/3现状数据/icon_地块信息.svg" />
          </div>
          <div class="title_con">
            {{ clickData.title ? clickData.title : "Loding..." }}
          </div>
        </div>
        <div v-if="clickData1.length > 0" class="top_item2">
          {{ clickData1[1] ? clickData1[1][0].data : "londing" }}
        </div>
        <!-- <div class="top_item1">
          <div class="top_item1_title" v-if="clickData1[2]">
            {{ clickData1[0].data }}
          </div>
        </div> -->
        <!-- <div class="top_item3">
          <div class="right_item11">
            <div class="right_item1"></div>
          </div>

          <div class="right_item2">
            <span class="spac" v-if="clickData1[2]">
              {{ clickData1[3].data }}</span>
            <span class="wan">m<sup>2</sup></span>
            <div>用地面积</div>
          </div>
        </div> -->
        <!-- <div class="condata1"></div> -->
        <div v-if="clickData1.length > 0" class="condata111">
          <div
            class="condata_item1"
            v-for="(item, index) in clickData1[1]"
            :key="index"
          >
            <div class="span_left1">{{ item.name + ":" }}</div>
            <!-- <span class="span_cen"> </span> -->
            <div class="span_right1">{{ item.data }}</div>
          </div>
        </div>
        <!-- 更新单元图纸 -->
        <div v-if="clickData1.length > 0" class="drawing">
          <div class="drawing_title">
            <div>
              <img
                src="../../../assets/img/3现状数据/icon_建筑信息.png"
                alt=""
              />
            </div>
            <div>更新单元图纸</div>
          </div>
          <div v-if="clickData1" class="drawing_img">
            <!-- <img v-if="clickData1[0] === 3" src="../../../assets/img/updata/3.jpg" alt="" />
            <img v-else-if="clickData1[0] === 5" src="../../../assets/img/updata/5.jpg" alt="" />
            <img v-else-if="clickData1[0] === 7" src="../../../assets/img/updata/7.jpg" alt="" />
            <img v-else-if="clickData1[0] === 9" src="../../../assets/img/updata/9.jpg" alt="" />
            <img v-else-if="clickData1[0] === 11" src="../../../assets/img/updata/11.jpg" alt="" />
            <img v-else src="../../../assets/img/updata/1.png" alt="" /> -->
            <img
              v-if="clickData1[0] == 13"
              src="../../../assets/img/updata/1.png"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 6"
              src="../../../assets/img/updata/3.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 8"
              src="../../../assets/img/updata/5.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 9"
              src="../../../assets/img/updata/6.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 10"
              src="../../../assets/img/updata/6.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 11"
              src="../../../assets/img/updata/7.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 13"
              src="../../../assets/img/updata/9.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 22"
              src="../../../assets/img/updata/9.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 21"
              src="../../../assets/img/updata/9.jpg"
              alt=""
            />
            <img
              v-else-if="clickData1[0] == 12"
              src="../../../assets/img/updata/11.jpg"
              alt=""
            />
            <!-- <img v-else src="../../../assets/img/updata/1.png" alt="" /> -->
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
  data() {
    return {
      img: "",
    };
  },
  computed: {
    ...mapState({
      // 筛选过得数据
      clickData1: (state) => showdata(state.clickData),
      // 。原始数据
      clickData: (state) => (state.clickData ? state.clickData : []),
      // 图则内容的显示隐藏
      dataCaseisShow: (state) => state.dataCaseisShow,
    }),
  },
  watch: {
    // "this.clickData1": {
    //   handler() {
    //     if (clickData1[0]) {
    //       img = require(`../../../assets/img/updata/${clickData1[0]}`);
    //     }
    //   },
    //   immediate: true,
    // },
  },
  methods: {},
  created() {
    // clickData1 = [this.clickData1];
  },
  mounted() {
    var chartDom = document.getElementById("echarts14");
    var myChart = echarts.init(chartDom);
    var option;
    myChart.on("click", (params) => {
      console.log(params);

      // if (params.seriesName == "法定图则") {
      //   if (params.name === "商业服务业用地") {
      //     Glow(this.ChuLiOs("0.25098039215686274,1,0.00392156862745098,1"))

      //   } else if (params.name === "公共管理与服务设施用地") {
      //     Glow(this.ChuLiOs("0.24705882352941178,1,0,1"))

      //   } else if (params.name === "工业用地") {
      //     Glow(this.ChuLiOs("0,0.7490196078431373,1,1"))

      //   } else if (params.name === "居住用地") {
      //     Glow(this.ChuLiOs("1,1,0,1"))

      //   } else if (params.name === "物流仓储用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   } else if (params.name === "公共设施用地") {
      //     Glow(this.ChuLiOs("0.25098039215686274,1,0.00392156862745098,1"))

      //   } else if (params.name === "交通设施用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   } else if (params.name === "绿地与广场用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   }
      // }
      // if (params.name === "注记") {

      //   Glow(this.ChuLiOs("1,1,1,1"))
      // } else if (params.name === "已发证") {
      //   Glow(this.ChuLiOs("1,0.8745098039215686,0.5019607843137255,1"))

      // } else if (params.name === "商业服务业用地") {
      //   Glow(this.ChuLiOs("1,1,0,1"))

      // } else if (params.name === "备案") {

      //   Glow(this.ChuLiOs("0.9764705882352941,0.5058823529411764,0.47843137254901963,1"))
      // } else if (params.name === "待处理") {

      //   Glow(this.ChuLiOs("0.49411764705882355,0.6235294117647059,0.996078431372549,1"))
      // } else if (params.name === "军产用地") {

      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))
      // } else if (params.name === "其他用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "公共管理与服务设施用地") {
      //   Glow(this.ChuLiOs("0.24705882352941178,1,0,1"))

      // } else if (params.name === "工业用地") {
      //   Glow(this.ChuLiOs("0,0.7490196078431373,1,1"))

      // } else if (params.name === "居住用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "物流仓储用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "公共设施用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "交通设施用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "绿地与广场用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // }
    });
    option = {
      color: ["#9CE8AA", "#ED494A", "#8565EE", "#FCF46D", "#DF9BE8"],

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}个",
      },
      legend: {
        //backgroundColor: "#00032C",
        orient: "horizontal",
        left: "center",
        bottom: "5%",
        show: true,
        data: [
          "已完工项目",
          "在建项目",
          "已批规划未开工项目",
          "已批计划未批规划项目",
          "已申报受理项目",
        ],

        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          name: "城市更新",
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
            formatter: "{c}个",
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
            { value: 3, name: "已完工项目" },
            { value: 9, name: "在建项目" },
            { value: 3, name: "已批规划未开工项目" },
            { value: 7, name: "已批计划未批规划项目" },
            { value: 2, name: "已申报受理项目" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);

    // console.log(this.clickData1);
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
.condata111 {
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  > div {
    width: 100%;
    height: 40px;
    /* background: rgba(0, 0, 0, 0.356); */
    margin: 3px 0;
    display: flex;
    align-items: center;
    > div {
      // width: 40%;
      width: 50%;
      height: 100%;
    }
    > div:nth-of-type(1) {
      display: flex;
      line-height: 60px;
      justify-content: flex-start;
      white-space: nowrap;
      // width: 60%;
      // text-align: right;
      font-size: 14px;
      text-indent: 10px;
    }
    > div:nth-of-type(2) {
      // line-height: 60px;
      white-space: wrap;
      display: flex;
      align-items: center;
      // width: 60%;
      // text-align: right;
      font-size: 14px;
    }
  }
}
.drawing {
  width: 100%;
  margin-top: 10px;
  > .drawing_title {
    height: 50px;
    background: url("../../../assets/img/3现状数据/titbg_text4.svg") no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 25px;
  }
  .drawing_img {
    margin: 20px auto;
    width: 343px;
    height: 268px;
    /* background: #000; */
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
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
  width: 125px;
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
  /* overflow: hidden; //超出的文本隐藏 */
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
  font-size: 14px;
  width: 100%;
  // height: 10%;
  // min-height: 9.5%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  > div {
    width: 50%;
    height: 100%;
    text-align: center;
    background: #000;
    // float: left;
  }
  // > .span_right {
  //   height: 100%;
  //   width: 60%;

  //   text-align: center;
  //   background: #000;
  //   float: left;
  // }
}
.condata {
  font-size: 16px;
  width: 100%;
  height: 350px;
  // position: absolute;
  // right: -4%;
  // top: 40%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.212);
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
  height: 22%;
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
  // font-family: STHeitiSC-Medium, STHeitiSC;
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
  padding: 10px 10px;
  box-sizing: border-box;
  color: white;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.24);
  position: absolute;
  border-radius: 0 0 0 0;
  // top: 0;
  right: 0;
}
.clickdata {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
  // font-family: PingFangSC-Medium, PingFang SC;
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
  // font-family: PingFangSC-Medium, PingFang SC;
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
  margin: 20px 0;
  // font-family: PingFangSC-Medium, PingFang SC;
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
#echarts14 {
  width: 100%;
  height: 300px;
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
  height: 350px;
  position: relative;
  // background: #0000004d;
  /* position: absolute;
  top: 100px;
  left: 20px; */
  z-index: 100;
  color: white;

  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    margin-top: 3%;
    background-image: url("../../../assets/img/3现状数据/titbg_text4.svg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .echbox {
    width: 100%;
    height: calc(100% - 140px);
    /* position: absolute;
    top: 1.5%;
    left: 0; */
    /* background: rgba(40, 68, 67, 0.3); */
    /* filter: blur(0.5px); */
  }
  .echbox1 {
    /* margin-top: 1.5%; */
    position: absolute;
    width: 100%;
    top: 10%;
    height: calc(100% - 15%);
    /* background: rgba(41, 62, 65, 0.65); */
    // filter: blur(8px);
  }
}
.top_data {
  margin-top: 5%;
  color: red;
}
</style>

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
          <div class="letf_title">
            <div class="title_icon">
              <img src="../../../assets//img/jz.png" />
            </div>
            <div class="title_con">
              {{ clickData.title ? clickData.title : "Loding..." }}
              <!-- {{clickData1}} -->
            </div>
          </div>
          <div class="right_title"></div>
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
            <div class="right_item1">
              <img src="../../../assets//img/mianji1.png" />
            </div>
         </div>
           
            <div class="right_item2">
             <span class="spac" v-if="clickData1[2]">  {{ clickData1[3].data }}</span>
              <span class="wan">m<sup>2</sup></span>
              <div>用地面积</div>
         
          </div>
         
          </div>  
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
      os: (state) => state.os,
    }),
  },
  watch: {},
  methods: {
    ChuLiOs(data) {
      let echartsColorClass = [];
      console.log(this.os);
      this.os.map((item) => {
        if (!echartsColorClass[item.color]) {
          echartsColorClass[item.color] = [];
          echartsColorClass[item.color].push(item);
        } else {
          echartsColorClass[item.color].push(item);
        }
      });
      console.log(echartsColorClass);
      let odata = data.join();
      let newos = this.os
        .map((item) => {
          if (item.color.join() === odata) {
            return item.id;
          } else {
            return 666;
          }
        })
        .filter((item) => {
          if (item == 666) {
            return false;
          } else {
            return item;
          }
        });
      console.log(newos);
      return newos;
    },
    Glow(newos) {
      __g.polygon.glow([...newos], 5, (res) => {
        console.log(res);
      });
    },
  },
  created() {},
  mounted() {
    var chartDom = document.getElementById("echarts1");
    var myChart = echarts.init(chartDom);
    var option;
    myChart.on("click", (params) => {
      console.log(params);
      if (params.name == "商业服务业用地") {
        this.Glow(this.ChuLiOs([0.99608, 0, 0, 0.6]));
      } else if (params.name == "居住用地") {
        this.Glow(this.ChuLiOs([1, 1, 0, 0.6]));
      } else if (params.name == "公共管理与服务设施用地") {
        this.Glow(this.ChuLiOs([1, 0, 1, 0.6]));
      } else if (params.name == "物流仓储用地") {
        this.Glow(this.ChuLiOs([0.4549, 0.43137, 0.86667, 0.6]));
      } else if (params.name == "公用设施用地") {
        this.Glow(this.ChuLiOs([0, 0.72157, 0.72157, 0.6]));
      } else if (params.name == "交通设施用地") {
        this.Glow(this.ChuLiOs([0, 0.43137, 0.86667, 0.6]));
      } else if (params.name == "绿地与广场用地") {
        this.Glow(this.ChuLiOs([0.25098, 1, 0.00392, 0.6]));
      } else if (params.name == "工业用地") {
        this.Glow(this.ChuLiOs([0.72157, 0.36078, 0.36471, 0.6]));
      } else if (params.name == "其他用地") {
        this.Glow(this.ChuLiOs([0.29412, 0.58431, 0, 0.6]));
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
.right_item11 {
  width: 20%;
  height: 100%;
  margin-left: 5%;
}
.right_item2 {
   width: 60%;
  height: 100%;
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
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background: transparent;
  border: 2px solid #ffff;
  text-align: center;
  line-height: 52px;
}
.top_item3 {
  width: 100%;
  height: 15%;
  background: green;
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
  width: 100%;
  height: 6%;
}
.letf_title {
  width: 60%;
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
}
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
  color: white;

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
</style>

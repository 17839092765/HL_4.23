<template>
  <div class="zsly">
    <div v-if="clickData[2]" class="zslycase">
      <!-- <div class="top_data">点击左边建筑物查看信息</div> -->
      <div class="top" v-if="clickData[2]">
        <div class="top_item1">
          <div class="top_item1_btn">地标</div>
          <div class="top_item1_title" v-if="clickData[2]">
            {{ clickData[2].data }}
          </div>
        </div>
        <div class="top_item2">招商类型: {{ clickData[13].data }}</div>
        <div class="top_item3">
          <div class="top_item3_left">
            <div class="left_item1">
              <img src="../../../assets/img/4招商引资/icon_面积.svg" />
            </div>
            <div class="left_item2">
              <span class="spac" v-if="clickData[2]">
                {{ (clickData[12].data / 10000).toFixed(2) }}
              </span>
              <span class="wan">万m2</span>
              <div>占地面积</div>
            </div>
          </div>
          <div class="top_item3_right">
            <div class="right_item1">
              <img src="../../../assets/img/4招商引资/icon_已招商单元.svg" />
            </div>
            <div class="right_item2">
              <span class="spac" v-if="clickData[2]">{{
                clickData[11].data
              }}</span>
              <span class="wan">个</span>
              <div>招商单元</div>
            </div>
          </div>
        </div>
        <div class="top_item4">
          <div class="yijing">已经招商占比</div>
          <div class="jdt">
            <el-progress :percentage="75" status="warning"></el-progress>
          </div>
        </div>
      </div>
      <div class="cen" v-if="clickData[2]">
        <div class="centitle">
          <div class="data_icom"></div>

          <span class="info_jz">建筑信息</span>
        </div>
        <!-- <div class="cencen"> -->
        <!-- "超级总部基于“总部＋生态+文化”三大主题,营造世界级创新文化实验区。超级总部基于“总部+生态+文化”三大主题，营造世界级创新文化实验区 -->
        <!-- </div> -->
        <div class="condata">
          <div
            class="condata_item"
            v-for="(item, index) in clickData"
            :key="index"
          >
            <span class="span_left"> {{ item.name }}</span>
            <span class="span_cen"> |</span>
            <span class="span_right"> {{ item.data }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { showtuceng, hidetuceng } from "../../../util/showtuceng.js";
import { showdata } from "../../XZSJ/showdata";
import store from "../../../store";
// import __g from "../../../main";
export default {
  data() {
    return {
      msg: "",

      louyuName: "1",
      zhaoshangClass: "2",
    };
  },
  computed: {
    ...mapState({
      clickData: (state) => showdata(state.clickData),
    }),
  },
  watch: {},
  methods: {},
  created() {
    if (__g) {
      __g.infoTree.show("510E89A04A6F36F2AF26A5A56A36AD69");
    }
    console.log(store);
    store.commit("clickData", {});
  },
  mounted() {
    showtuceng(this.$treedata.zsyzdata);
    if (__g) {
      __g.camera.lookAt(
        508820.343750,
        2494021.000000,
        808.976990,
        -16.688160,
        -22.833220,
        -10
      );
      // let options = {
      //   showOutline: true,
      //   outlineThickness: 3.0,
      //   outlineColor: Color.Red,
      //   useSceneColor: false,
      //   sceneColor: Color.Black,
      //   showSkyline: true,
      //   windowSize: [400, 200],
      //   skylineColor: Color.Green,
      //   backgroundColor: [1, 1, 1, 0.7],
      //   height: 50.0,
      //   tileLayers: [
      //     {
      //       color: Color.Blue,
      //       ids: ["510E89A04A6F36F2AF26A5A56A36AD69"],
      //     },
      //   ],
      // };
      // __g.tools.startSkylineAnalysis(options);
    }
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    // hidetuceng([this.$treedata.zsyzdata[2]]);
    __g.infoTree.hide("510E89A04A6F36F2AF26A5A56A36AD69");

    // BF15EEEC49051728DF0DD585E91B4C0E
    this.$store.commit("clickData", {});
    __g.tileLayer.stopHighlightActor();
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.zslycase {
  width: 22%;
  height: calc(100% - 80px);
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.329);
  padding-left: 1.5%;
  padding-right: 1.5%;

  // padding-left: 1%;
  // padding-right: 1%;
  box-sizing: border-box;
}
.top_data {
  margin-top: 5%;
}
.span_left {
  margin-left: 5%;
  width: 100px;
  display: inline-block;
  // width: 200px;
  height: 60px;
  line-height: 60px;
}
.span_cen {
}
.span_right {
  margin-left: 2%;
  display: inline-block;
  width: 200px;
  height: 60px;
  line-height: 25px;
}
.condata_item {
  font-size: 18px;
  width: 100%;
  height: 50px;
  margin-top: 1%;
  // background: #000;
  line-height: 50px;
}
.condata {
  padding-top: 0%;
  margin-top: 0%;
  width: 100%;
  height: 68%;
  overflow-y: scroll;
  background: rgba(32, 53, 40, 0.1);
}
.cencen {
  width: 100%;
  height: 25%;
  margin-top: 1%;
  margin-bottom: 1%;
  background: transparent;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
}
.centitle {
  display: flex;
  width: 100%;
  height: 7%;
}
.data_icom {
  background-image: url("../../../assets//img//jz.png");
  background-repeat: no-repeat;
  background-size: 70%;
  height: 100%;
  width: 10%;
}
.data_icom img {
  /* width: 55%;
  height: 55%; */
}
.info_jz {
  margin-left: -2%;
  width: 90%;
  height: 100%;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.top {
  width: 100%;
  height: 30%;
}
.cen {
  top:5%;
  width: 100%;
  height: 90%;
}
.jdt {
  width: 100%;
  height: 10%;
}
.wan {
  width: 47%;
  padding-left: 3%;
}
.top_item1 {
  width: 100%;
  height: 20%;
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
  width: 50px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.top_item1_title {
  width: 80%;
  height: 35px;
  font-size: 28px;
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
  height: 20%;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  // line-height: 20%;
  text-align: center;
}
.top_item3 {
  margin-top: 3%;
  color: white;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top_item3_left {
  width: 50%;
  height: 40px;
  text-align: center;
}
.top_item3_right {
  width: 50%;
  height: 40px;
  text-align: center;
}
.top_item3_left {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top_item3_right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left_item1,
.right_item1 {
  width: 52px;
  height: 52px;

  background: transparent;
  text-align: center;
  line-height: 52px;
}
.left_item1 img {
  width: 100%;
}
.right_item1 img {
  width: 100%;
  margin-top: 10%;
}
.left_item2 {
  width: 69%;
}
.right_item2 {
  width: 55%;
  margin-left: -19%;
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
.yijing {
  width: 100%;
  height: 38px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 38px;
}
.top_item4 {
  width: 100%;
  height: 20%;
}
</style>

<template>
  <div class="zsly">
    <div class="zslycase">
      <div class="top">
        <div class="top_item1">
          <div class="top_item1_btn">地标66</div>
          <div class="top_item1_title" v-if="clickData[2]">
            {{ clickData[2].data }}66
          </div>
        </div>
        <div class="top_item2">招商类型: 银行金融科技子公司</div>
        <div class="top_item3">
          <div class="top_item3_left">
            <div class="left_item1"></div>
            <div class="left_item2">
              <span class="spac">2.6</span>
              <span class="wan">万m2</span>
              <div>占地面积</div>
            </div>
          </div>
          <div class="top_item3_right">
            <div class="right_item1"></div>
            <div class="right_item2">
              <span class="spac">38</span>
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
      <div class="cen">
        <div class="centitle">
          <i class="el-icon-office-building"></i>
          <span>建筑信息</span>
        </div>
        <div class="cencen">
          内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { showtuceng, hidetuceng } from "../../../util/showtuceng.js";
import { showdata } from "../../XZSJ/showdata";
// import __g from "../../../main";
export default {
  data () {
    return {
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
  created () { },
  mounted () {
    showtuceng(this.$treedata.zsyzdata);
    __g.camera.lookAt(
      510264.09375,
      2493521.0,
      650.484497,
      -26.054821,
      -63.835243,
      -30
    );
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng([this.$treedata.zsyzdata[2]]);
    this.$store.commit("clickData", {});
    __g.tileLayer.stopHighlightActor();
  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
.zslycase {
  width: 20%;
  height: calc(100% - 80px);
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.171);
}
.jdt {
  width: 100%;
  height: 10%;
}
.wan {
  width: 100%;
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
  margin-top: -4%;
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
  border-radius: 52px;
  background: transparent;
  border: 2px solid #ff979797;
}
.left_item2 {
  width: 55%;
  margin-left: -16%;
}
.right_item2 {
  width: 55%;
  margin-left: -19%;
}
.spac {
  width: 45px;
  height: 32px;
  font-size: 32px;
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

<template>
  <div class="zsly">
    <div class="zslycase">
      <div class="zsls_data">
        <div class="main">
          <div class="top">
            <div class="top_item1">
              <div class="top_item1_btn">地标</div>
              <div class="top_item1_title" v-if="clickData[2]">
                {{ clickData[2].data }}
              </div>
            </div>
            <div class="top_item2">
              招商类型: 银行金融科技子公司
            </div>
            <div class="top_item3">
              <div class="top_item3_left">
                <div class="left_item1"></div>
                <div class="left_item2">
                  <span class="spac"> {{ clickData[12].data }}</span>
                  <span class="wan">万m2</span>
                  <div>占地面积</div>
                </div>
              </div>
              <div class="top_item3_right">
                <div class="right_item1"></div>
                <div class="right_item2">
                  <span class="spac">{{ clickData[11].data }}</span>
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
        </div>
      </div>

      <div class="center">
        <div class="title_info">
          <!-- {{ clickData[11].data }} -->
          建筑信息
        </div>

        <div class="content">66</div>
        <div class="zsls_table">
          <el-table
            size="mini"
            :data="clickData"
            :show-header="false"
            stripe
            style="width: 100%"
            class="table"
            height="180px"
            cell-class-name="row"
            highlight-current-row
          >
            <el-table-column prop="clickData[2].data" width="100px">
            </el-table-column>
            <el-table-column prop="clickData[2].data" width="20px">
            </el-table-column>
            <el-table-column prop="clickData[2].data" width="220px">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="zslycase_top">
        <div class="title">
          <span>地标</span>
          <!-- <span>{{clickData}}</span> -->
          <p v-if="clickData[2]">{{ clickData[2].data }}</p>
        </div>
        <div class="classname">
          <span>招商类型</span>
          <span>{{ zhaoshangClass }}</span>
        </div>
        <div class="louyucase"></div>
      </div>
      <div class="zslycase_center">
        <div class="titcase">
          <i class="el-icon-office-building"></i>
          <span>建筑信息</span>
        </div>
        <div class="buildingcase">
          <div class="case" v-for="(item, index) in clickData" :key="index">
            {{ item.name }}
            {{ item.data }}
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
import __g from "../../../main";
export default {
  data() {
    return {
      louyuName: "1",
      zhaoshangClass: "2",
      data_item1: clickData[2].data,
      data_item2: clickData[2].data,
      data_item3: clickData[2].data,
    };
  },
  computed: {
    ...mapState({
      clickData: (state) => showdata(state.clickData),
    }),
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
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
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng([this.$treedata.zsyzdata[2]]);
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
  width: 20%;
  height: calc(100% - 80px);
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.171);
}
.main,
.top {
  width: 100%;
  height: 100%;
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
.content {
  margin-top: 2%;
  width: 100%;
  height: 28%;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
.zsls_table {
  height: 60%;
}
.title_info {
  height: 10%;
}

//透明化整体
/deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
  border: none !important; //删除表头下横线
}
//透明化行、单元格,删除表头下横线
/deep/ tr,
/deep/ th,
/deep/ td {
  background: rgba(69, 77, 72, 0.4) !important;
  color: #eee;
  border: none !important; //删除表头下横线
  padding: 0 !important;
}
/deep/ .el-table__row--striped {
  background: rgba(69, 77, 72, 0.4) !important;
}

/deep/ .el-table .cell {
  padding: 0 !important;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
}
/deep/ .el-table .cell label {
  color: red !important;
}
/deep/ .el-table::before {
  height: 0;
}
/deep/ .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
  // display: none;
  width: 5px;
  height: 0px; /* 消除奇怪的bug */
}
/deep/
  .el-table--scrollable-y
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #4052b0, transparent);
  border-radius: 5px;
}
.stripetable {
  margin-top: 5px;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.table {
  flex-grow: 1;
}
.row {
  padding: 0;
}
</style>

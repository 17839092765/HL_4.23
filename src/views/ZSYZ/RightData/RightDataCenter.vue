<template>
  <div class="zsls_data">
    <div class="title_info">
      <Title1 :title="'建筑信息'"></Title1>
    </div>

    <div class="content">{{ msg }}</div>
    <div class="zsls_table">
      <el-table
        size="mini"
        :data="tableData"
        :show-header="false"
        stripe
        style="width: 100%"
        class="table"
        height="180px"
        cell-class-name="row"
        highlight-current-row
      >
        <el-table-column prop="date" width="100px"> </el-table-column>
        <el-table-column prop="con" width="20px"> </el-table-column>
        <el-table-column prop="num" width="220px"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Title1 from "../RightData/Title1";
export default {
  data() {
    return {
      msg:
        "超级总部基于“总部＋生态+文化”三大主题,营造世界级创新文化实验区。超级总部基于“总部+生态+文化”三大主题，营造世界级创新文化实验区。",
      tableData: [
        {
          date: "建筑编码",
          con: "|",
          num: "440303004060002",
        },
        {
          date: "建筑辖区",
          con: "|",
          num: "金融产业子公司聚集中心",
        },
        {
          date: "建筑现状",
          con: "|",
          num: "信兴广场主楼",
        },
        {
          date: "建筑详情",
          con: "|",
          num: "地王大夏",
        },
        {
          date: "建筑地址",
          con: "|",
          num: "罗湖区桂园片区深南东路5220号",
        },
        {
          date: "建筑详情",
          con: "|",
          num: "地王大夏",
        },
        {
          date: "建筑地址",
          con: "|",
          num: "罗湖区桂园片区深南东路5220号",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    Title1,
  },
};
</script>

<style lang="scss" scoped>
.zsls_data {
  width: 100%;
  height: 100%;
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
// /deep/.el-table tbody tr:hover > td {
//   background-color: #2c90d6 !important;
// }
</style>

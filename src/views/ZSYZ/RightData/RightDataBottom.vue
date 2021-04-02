<template>
  <div class="zsls_data">
    <div class="main">
      <div class="main_title">
        <Title2 :title="'招商信息'"></Title2>
      </div>

      <div class="main_table">
        <el-table
          size="mini"
          :data="tableData"
          :show-header="false"
          stripe
          style="width: 100%"
          class="table"
          height="200px"
          cell-class-name="row"
          highlight-current-row
        >
          <el-table-column prop="date" width="100px"> </el-table-column>
          <el-table-column prop="con" width="100px"> </el-table-column>
          <el-table-column prop="num" width="200px"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import Title2 from "../RightData/Title2";
export default {
  data() {
    return {
      tableData: [
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
        },
        {
          date: "01",
          con: "|",
          num: "6399",
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
    Title2,
  },
};
</script>

<style lang="scss" scoped>
.zsls_data {
  width: 100%;
  height: 100%;
}
.main {
  height: 100%;
}
.main_title {
  height: 10%;
}
.main_table {
  width: 100%;
  height: 90%;
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
  background: #1439391c !important;
  color: #eee;
  border: none !important; //删除表头下横线
  padding: 0 !important;
}
/deep/ .el-table__row--striped {
  background: rgba(46, 85, 114, 0.5) !important;
}

/deep/ .el-table .cell {
  padding: 0 !important;
  height: 40px;
  line-height: 40px;
  text-align: center;
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
/deep/.el-table tbody tr:hover > td {
  background-color: #2c90d6 !important;
}
</style>

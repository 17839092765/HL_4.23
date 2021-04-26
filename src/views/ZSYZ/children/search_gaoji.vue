<template>
  <div class="search_gaoji">
    <div class="searchblock">
      <div class="left">
        <p>
          <span>关键字</span
          ><input
            @input="fuzzy_query1"
            @blur="() => (searchAfterNum = [])"
            type="text"
            placeholder="输入关键字"
            v-model="key"
            class="input1"
            name=""
          />
        </p>
        <div v-if="searchAfterNum.length > 0" class="inputdata">
          <p
            @click="aaaaa(item.建筑名称)"
            v-for="(item, index) in searchAfterNum"
            :key="index"
          >
            {{ item.建筑名称 }}
          </p>
        </div>
      </div>
      <div class="center">
        <p>
          <span>面积</span>
          <input type="text" placeholder="0" v-model="area_start" name="" />

          <span>-</span>
          <input type="text" placeholder="20000" name="" v-model="area_end" />
          <span>m²</span>
        </p>
        <p>
          <span>租金</span
          ><input placeholder="0" type="text" v-model="money_start" name="" />
          <span>-</span>
          <input type="text" placeholder="20000" name="" v-model="money_end" />
          <span>元</span>
        </p>
      </div>
      <div class="right">
        <div class="one">
          <el-button @click="sumit" type="warning">确定</el-button>
        </div>
        <div class="two">
          <el-button @click="reset" type="warning">清空</el-button>
        </div>
      </div>
    </div>
    <div v-if="tableData.length > 0" class="showblock">
      <!-- <el-table :data="tableData" height="150" border style="width: 100%">
        <el-table-column label="楼宇名称" width="280">
          <template slot-scope="scope">{{ scope.row.date+"111" }}</template>
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
      <div class="searchshowtit">
        共有<span>{{ tableData.length }}</span> 条数据符合条件
      </div>
      <div class="table">
        <div class="title">
          <div class="title_left">楼宇名称</div>
          <div class="title_left">地址信息</div>
        </div>
        <div class="tbody">
          <div
            class="tbody_case"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <div @click="tableclick(item)" class="casecum">
              <div class="name">{{ item.建筑名称 }}</div>
              <div class="adress">{{ item.建筑地址 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="nonedata">暂无数据</div>
  </div>
</template>

<script>
import api from "../../../api/common";
export default {
  data() {
    return {
      hightbuliding: {},
      // 高级搜索
      // 关键字
      key: "",
      area_start: "",
      area_end: "",
      money_start: "",
      money_end: "",
      quyu: "",
      zhongbuild: "",
      // 模糊查询数据
      searchAfterNum: [],
      //
      tableData: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 表格的点击
    tableclick(item) {
      console.log(item);
      console.log(this.$treedata.louyucase);

      this.$treedata.louyucase.forEach((mon) => {
        if (mon.ObjectID === item.建筑编码) {
          this.hightbuliding = mon;
          __g.tileLayer.highlightActor(
            mon.ObjectID,
            mon.Id,
             );
        }
      });
    },
    // 高级搜索提交确定
    async sumit() {
      let dataarr = {
        key: this.key,
        area_start: this.area_start,
        area_end: this.area_end,
        money_start: this.money_start,
        money_end: this.money_end,
        quyu: this.quyu,
        zhongbuild: this.zhongbuild,
      };
      console.log(dataarr);
      var request = {
        minArea: this.area_start ? this.area_start : 0,
        maxArea: this.area_end ? this.area_end : 20000,
        minRent: this.money_start ? this.money_start : 0,
        maxRent: this.money_end ? this.money_end : 20000,
        isFree: true,
      };
      // 4403030030090300003

      const result = await api.louyuxianzhi(request);
      console.log(result.data.list);
      this.tableData = result.data.list;
      // result.data.list.forEach(item => {
      //   this.tableData.push({
      //     name: item.建筑名称,
      //     address: item.建筑地址
      //   })
      // });
    },
    reset() {
      this.tableData = [];
      this.key = "";
      this.area_start = "";
      this.area_end = "";
      this.money_start = "";
      this.money_end = "";
      this.quyu = "";
      this.zhongbuild = "";
    },
    async fuzzy_query1() {
      if (this.key) {
        const result = await api.fuzzy_query({ name: this.key });
        console.log(result);
        if (result.data[0]) {
          this.searchAfterNum = result.data;
        } else {
          this.searchAfterNum = [];
        }
      }
    },
    async fuzzy_query() {
      // const result = await api.fuzzy_query({ name: "" })
      // if (result.data[0]) {
      //   this.searchAfterNum = result.data
      // } else {
      //   this.searchAfterNum = []
      // }
    },
  },
  created() {},
  mounted() {},
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
.search_gaoji {
  width: 100%;
  height: 100%;
  .searchblock {
    color: oldlace;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    box-sizing: border-box;
    height: 100%;
    // background: rgba(128, 79, 79, 0.288);
    float: left;
    // margin-right: 10px;
    input {
      outline: none;
      background: rgba(0, 0, 0, 0.137);
      border: 1px solid rgba(255, 255, 255, 0.466);
      color: oldlace;
      &::placeholder {
        color: rgba(255, 255, 255, 0.616);
      }
    }
    > div {
      height: 100%;
    }
    .left {
      position: relative;
      width: 260px;
      font-size: 16px;
      > p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        > span:nth-of-type(1) {
          margin-right: 10px;
          display: inline-block;
          width: 60px;
          text-indent: 10px;
        }
        input {
          width: 60px;
          height: 22px;
          margin: 0 3px;
          text-indent: 10px;
        }
      }
      .input1 {
        width: 150px;
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 2px;
        height: 37px;
        background: rgb(214, 205, 205);
      }
      .inputdata {
        position: absolute;
        top: 40px;
        left: 0;
        height: 100px;
        width: 100%;
        overflow-y: auto;
        // height: 100px;
        // background: #000;
        line-height: 40px;
        color: palegreen;
        background: rgba(0, 0, 0, 0.472);
        p {
          z-index: 1000;
          height: 35px;
          width: 100%;
          border-bottom: 1px solid papayawhip;
          text-align: center;
          &:hover {
            background: rgba(0, 0, 0, 0.212);
            color: papayawhip;
          }
        }
      }
    }

    .center {
      position: relative;
      width: 260px;
      font-size: 16px;
      padding-top: 80px;
      > p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        > span:nth-of-type(1) {
          margin-right: 10px;
          display: inline-block;
          width: 50px;
          text-indent: 10px;
        }
        input {
          width: 60px;
          height: 22px;
          margin: 0 3px;
          text-indent: 10px;
        }
      }
      .input1 {
        width: 110px;
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 2px;
        height: 37px;
        background: rgb(214, 205, 205);
      }
    }
    .right {
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin: 0 10px;
        > button {
          // margin: 0 10px;
          padding: 0;
          width: 60px;
          height: 60px;
          /* background: url("../../../assets/img/4招商引资/btn_bg.png"); */
          /* background: #000; */
          border: 1px solid #fff;
          font-size: 20px;
          outline: none;
          color: rgb(255, 255, 255);
          // box-sizing: border-box;
        }
      }
    }
  }
  .showblock {
    box-sizing: border-box;

    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.199);
    float: left;
    .searchshowtit {
      margin-top: 10px;
      margin-left: 10px;
      > span {
        display: inline-block;
        width: 30px;
        text-align: center;
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: 600;
      }
      color: rgb(255, 255, 255);
    }
    .table {
      color: rgb(255, 255, 255);
      width: 100%;
      // height: 100%;
      background: rgba(0, 0, 0, 0) i !important;
      .title {
        width: 100%;
        height: 30px;
        // background: #000;
        > div {
          text-align: center;
          height: 100%;
          float: left;
          line-height: 30px;
        }
        > div:nth-of-type(1) {
          width: 40%;
        }
        > div:nth-of-type(2) {
          width: 60%;
        }
      }
      .tbody {
        width: 100%;
        height: 100px;
        overflow-y: scroll;
        .tbody_case {
          width: 100%;
          height: 40px;
          &:hover {
            background: rgba(0, 0, 0, 0.301);
            cursor: pointer;
          }
          > div {
            > div {
              text-align: center;
              height: 100%;
              float: left;
              line-height: 40px;
            }
            > div:nth-of-type(1) {
              width: 40%;
            }
            > div:nth-of-type(2) {
              width: 60%;
            }
          }
        }
      }
    }
  }
  .nonedata {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
/deep/ .el-table__header {
  background: #000;
}
</style>

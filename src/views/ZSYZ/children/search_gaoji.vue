<template>
  <div class='search_gaoji'>
    <div class="searchblock">
      <div class="left">
        <p>
          <span>关键字</span><input type="text" placeholder="输入关键字" v-model="key" class="input1" name="" />
        </p>
        <p>
          <span>面积</span>
          <input type="text" v-model="area_start" name="" />

          <span>-</span>
          <input type="text" name="" v-model="area_end" />
          <span>m²</span>
        </p>
        <p>
          <span>租金</span><input type="text" v-model="money_start" name="" />
          <span>-</span>
          <input type="text" name="" v-model="money_end" />
          <span>元</span>
        </p>
      </div>
      <div class="center">
        <p>
          <span>区域</span><input type="text" v-model="quyu" name="" />
        </p>
        <p>
          <span>重点楼宇</span><input type="text" v-model="zhongbuild" name="" />
        </p>
      </div>
      <div class="right">
        <div class="one">

          <button @click="sumit">确定</button>
        </div>
        <div class="two">

          <button @click="reset">清空</button>
        </div>
      </div>
    </div>
    <div v-show="tableData.length>0" class="showblock">
      <!-- <el-table :data="tableData" height="150" border style="width: 100%">
        <el-table-column label="楼宇名称" width="280">
          <template slot-scope="scope">{{ scope.row.date+"111" }}</template>
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
      <div class="searchshowtit">
        共有<span>{{searchAfterNum}}</span> 条数据符合条件
      </div>
      <div class="table">
        <div class="title">
          <div class="title_left">楼宇名称</div>
          <div class="title_left">地址信息</div>
        </div>
        <div class="tbody">

          <div class="tbody_case" v-for="item,index in tableData" :key="index">
            <div @click="tableclick(item)" class="casecum">
              <div class="name">{{item.name}}</div>
              <div class="adress">{{item.address}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import api from "../../../api/common"
export default {
  data () {
    return {
      // 高级搜索
      // 关键字
      key: "",
      area_start: '',
      area_end: '',
      money_start: '',
      money_end: '',
      quyu: '',
      zhongbuild: '',
      // 搜索的数据的条数
      searchAfterNum: 0,
      // 
      tableData: [
        //   {
        //   name: 'aaa',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   name: 'ccc',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   name: 'vvv',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   name: 'bbb',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 表格的点击
    tableclick (item) {
      console.log(item);
    },
    // 高级搜索提交确定
    async sumit () {
      let dataarr = {
        key: this.key,
        area_start: this.area_start,
        area_end: this.area_end,
        money_start: this.money_start,
        money_end: this.money_end,
        quyu: this.quyu,
        zhongbuild: this.zhongbuild
      };
      console.log(dataarr);
      var request = {
        minArea: this.area_start,
        maxArea: this.area_end,
        minRent: this.money_start,
        maxRent: this.money_end,
        isFree: true
      }
      // 4403030030090300003

      const result = await api.layer_jj100_one("4403030030090300003")
      console.log(result);
    },
    reset () {
      this.key = "";
      this.area_start = '';
      this.area_end = '';
      this.money_start = '';
      this.money_end = '';
      this.quyu = ""
      this.zhongbuild = ""
    },
  },
  created () {

  },
  mounted () {

  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang='scss' scoped>
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
          width: 90px;
          text-indent: 10px;
        }
        input {
          width: 110px;
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
          background: url("../../../assets/img/4招商引资/btn_bg.png");
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
        color: peru;
      }
      color: rgb(255, 255, 255);
    }
    .table {
      color: papayawhip;
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
}
/deep/ .el-table__header {
  background: #000;
}
</style>
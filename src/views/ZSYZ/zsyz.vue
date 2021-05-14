<template>
  <div class="zsyz">
    <div class="leftData">
      <div class="data">
        <div class="soufang">
          <div class="title">
            <div class="icon"></div>
            <div class="titdata">搜房</div>
          </div>
          <div class="searchInput">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="80px"
              class="demo-ruleForm"
            >
              <el-form-item label="楼宇名称" prop="buildName">
                <el-col :span="20">
                  <el-input
                    placeholder="请输入楼宇名称"
                    @input="fuzzy_query1"
                    type="text"
                    v-model="ruleForm.buildName"
                    autocomplete="off"
                  ></el-input>
                </el-col>
              </el-form-item>
              <div
                v-if="ruleForm.buildName && searchAfterNum.length"
                class="buildBox"
              >
                <div
                  v-for="(item, index) in searchAfterNum"
                  :key="index"
                  class="case"
                >
                  <p>
                    {{ item.建筑名称 }}
                  </p>
                </div>
              </div>
              <el-divider></el-divider>
              <el-form-item :required="true" label="面积" prop="mianji">
                <el-col :span="10">
                  <el-input
                    size="mini"
                    type=""
                    v-model.number="ruleForm.mianji.min"
                    autocomplete="off"
                  ></el-input>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="10">
                  <el-input
                    type=""
                    size="mini"
                    v-model.number="ruleForm.mianji.max"
                    autocomplete="off"
                  ></el-input>
                </el-col>
                <el-col style="marginLeft:10px" class="line" :span="2"
                  >m²</el-col
                >
              </el-form-item>
              <el-form-item :required="true" label="租金" prop="zujin">
                <el-col :span="10">
                  <el-input
                    size="mini"
                    type=""
                    v-model.number="ruleForm.zujin.min"
                    autocomplete="off"
                  ></el-input>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="10">
                  <el-input
                    type=""
                    size="mini"
                    v-model.number="ruleForm.zujin.max"
                    autocomplete="off"
                  ></el-input>
                </el-col>
                <el-col style="marginLeft:10px" class="line" :span="1"
                  >元</el-col
                >
              </el-form-item>
              <!-- <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
              </el-form-item> -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <transition name="el-fade-in-linear">
          <div v-if="tableData.length" class="jieguo">
            <div class="title">
              <div class="icon icon2"></div>
              <div class="titdata">搜索结果</div>
            </div>
            <div class="searchData">
              <div class="length">
                <p>
                  共有
                  <span>
                    {{ tableData.length }}
                  </span>
                  条数据符合条件
                </p>
              </div>
              <div class="dataBox">
                <div class="tit">
                  <div class="left">
                    <p>楼宇名称</p>
                  </div>
                  <div class="right">
                    <p>地址信息</p>
                  </div>
                </div>
                <el-divider></el-divider>

                <div class="dataBox_data">
                  <div
                    class="case"
                    v-for="(item, index) in tableData"
                    :key="index"
                    @click="buildCase(item)"
                  >
                    <div class="left">
                      <p>{{ item.建筑名称 }}</p>
                    </div>
                    <div class="right">
                      <p>{{ item.建筑地址 }}</p>
                    </div>
                  </div>
                  <div class="block">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="tableData.length"
                    >
                    </el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div @click="toSearch" class="serch">
        <i :class="noClick ? 'searchicon' : 'blackIcon'"></i>
      </div>
    </div>
    <div class="rightData">
      <ZSLY />
    </div>
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng.js";
import connector from "../../api/common";
import ZSLY from "./children/zsly";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validateBuildName = (rule, value, callback) => {
      callback();

      // if (value === "") {
      //   callback(new Error("请输入楼宇名称"));
      // } else {
      //   callback();
      // }
    };
    var validateMianji = (rule, value, callback) => {
      if (!value.max && !value.min) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value.min) && !Number.isInteger(value.max)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.min < 0) {
            callback(new Error("最小值必须大于0"));
          } else if (value.max < 10) {
            callback(new Error("最大值必须大于10"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    var validateZujin = (rule, value, callback) => {
      if (!value.max && !value.min) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value.min) && !Number.isInteger(value.max)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.min < 0) {
            callback(new Error("最小值必须大于0"));
          } else if (value.max < 10) {
            callback(new Error("最大值必须大于10"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      searchAfterNum: [],
      tableData: [],
      noClick: true,
      ruleForm: {
        buildName: "",
        mianji: {
          min: 0,
          max: 20000,
        },
        zujin: {
          min: 0,
          max: 20000,
        },
      },
      rules: {
        buildName: [{ validator: validateBuildName, trigger: "blur" }],
        mianji: [{ validator: validateMianji, trigger: "blur" }],
        zujin: [{ validator: validateZujin, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 关键字搜索
    async fuzzy_query1() {
      if (this.ruleForm.buildName) {
        const result = await connector.fuzzy_query({
          name: this.ruleForm.buildName,
        });
        console.log(result);
        if (result.data[0]) {
          this.searchAfterNum = result.data;
        } else {
          this.searchAfterNum = [];
        }
      } else {
        this.searchAfterNum = [];
      }
    },
    // 点击表格时的三维模型高亮
    buildCase(item) {
      console.log(item.建筑编码);
      console.log(this.$treedata.louyucase);
      let objId = "";
      if (item.建筑编码 == "4403030030090300003") {
        objId = "4403030030090300003_2";
      } else if (item.建筑编码 == "4403030030040600002") {
        objId = "4403030030040600002_24";
      }
      // =
      //   item.建筑编码 == "4403030030090300003"
      //     ? "4403030030090300003_2"
      //     : item.建筑编码;
      let aaa = false;
      this.$treedata.louyucase.forEach((mon) => {
        if (mon.ObjectID === objId) {
          aaa = true;
          console.log("dui");

          // this.hightbuliding = mon;
          __g.tileLayer.highlightActor(mon.Id, objId, (res) => {
            console.log(res);
            if (res) {
              console.log(111);
              this.$message({
                message: "已高亮显示,查看详细信息请点击",
                type: "success",
              });
            }
          });
        }
      });
      if (!aaa) {
        this.$message({
          message: "暂无数据",
          type: "info",
        });
      }
    },
    async request() {
      const { min: minArea, max: maxArea } = this.ruleForm.mianji;
      const { min: minRent, max: maxRent } = this.ruleForm.zujin;
      console.log(minArea, maxArea, minRent, maxRent);
      const {
        data: { list: result },
      } = await connector.louyuxianzhi({
        minArea,
        maxArea,
        minRent,
        maxRent,
        isFree: true,
      });
      console.log(result);
      this.tableData = result;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.request();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm = {
        buildName: "",
        mianji: {
          min: 0,
          max: 20000,
        },
        zujin: {
          min: 0,
          max: 20000,
        },
      };
      this.tableData = [];
    },
    toSearch() {
      let leftData = document.getElementsByClassName("leftData")[0];
      if (this.noClick) {
        leftData.style.left = 0;
        this.noClick = false;
      } else {
        leftData.style.left = "-20%";
        this.noClick = true;
      }
    },
  },
  created() {
    this.$store.commit("clickData", {});
  },
  mounted() {
    if (__g) {
      __g.camera.lookAt(
        508820.34375,
        2494021.0,
        808.97699,
        -16.68816,
        -22.83322,
        -10
      );
      showtuceng(this.$treedata.zsyzdata);
      __g.infoTree.show("A3CC59C2442B8110161A4A913FCDE533");
    }
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    __g.infoTree.hide("A3CC59C2442B8110161A4A913FCDE533");
    this.$store.commit("clickData", {});
    hidetuceng(this.$treedata.zsyzdata);
    // __g.infoTree.hide("510E89A04A6F36F2AF26A5A56A36AD69");
  },
  destroyed() {},
  activated() {},
  components: { ZSLY },
};
</script>

<style lang="scss" scoped>
.leftData {
  width: 20%;
  height: 100%;
  position: absolute;
  left: -20%;
  transition: all 0.5s;
  /* 根据楼宇名称的模糊搜索 */
  .buildBox {
    width: 100%;
    min-height: 50px;
    max-height: 150px;
    border-left: 1px solid #eee;
    overflow-y: scroll;
    margin-bottom: 30px;
    .case {
      width: 80%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      margin: 5px auto;
      cursor: pointer;
      border-bottom: 1px solid #cecece;
      &:hover {
        color: #fee36d;
        border-bottom: 1px solid #fee36d;
      }
    }
  }
  .data {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    /* left: -100%; */
    background: rgba(75, 75, 75, 0.45);
    z-index: 10;
    padding: 5px 10px;
    box-sizing: border-box;
    .searchInput {
      color: #fff;
    }
    .title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .icon {
        width: 30px;
        height: 30px;
        background: url("../../assets/img/4招商引资/icon_搜房.svg") no-repeat
          center/cover;
      }
      .icon2 {
        background: url("../../assets/img/4招商引资/icon_高级搜索.svg")
          no-repeat center/cover;
      }
      .titdata {
        margin-left: 10px;
        height: 50px;
        width: 100px;
        font-size: 22px;
        font-weight: 400;
        line-height: 50px;
        color: #fff;
      }
    }
    .searchData {
      .block {
        width: 100%;
      }
      width: 100%;
      height: 450px;
      /* background: rgba(0, 0, 0, 0.466); */
      color: #fff;
      .dataBox {
        .tit {
          width: 100%;
          height: 40px;
          .left {
            width: 35%;
            float: left;
            height: 40px;
            line-height: 40px;
            text-indent: 20px;
          }
          .right {
            width: 65%;
            float: left;
            height: 40px;
            text-indent: 40px;

            line-height: 40px;
          }
        }
        .dataBox_data {
          width: 100%;
          height: 410px;
          overflow-y: scroll;
          .case:nth-child(even) {
            background: #0000004b;
          }
          .case {
            width: 100%;
            height: 50px;
            line-height: 50px;
            &:hover {
              color: #fee36d;
            }
            cursor: pointer;
            font-size: 14px;
            .left {
              width: 35%;
              float: left;
              height: 50px;
              text-indent: 10px;
            }
            .right {
              width: 65%;
              float: left;
              height: 50px;
            }
          }
        }
      }
      p {
        > span {
          color: #fee36d;
          font-weight: 600;
        }
      }
    }
  }

  .serch {
    position: absolute;
    width: 50px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 30px;
    position: absolute;
    top: 20px;
    left: 100%;
    border-radius: 5px;
    .searchicon {
      display: inline-block;
      width: 100%;
      height: 100%;
      background: url("../../assets/img/4招商引资/修改的/icon_搜索.png")
        no-repeat center/cover;
    }
    .blackIcon {
      display: inline-block;
      width: 100%;
      height: 100%;
      background: url("../../assets/img/4招商引资/修改的/icon_收起.png")
        no-repeat center/cover;
    }
  }
}
/deep/ .el-input__inner {
  background: rgba(0, 0, 0, 0.26);
  color: #fff;
}
/deep/ .el-form-item__label {
  color: #fff;
}
/deep/ .el-pagination .btn-next,
.el-pagination .btn-prev {
  background: rgba(0, 0, 0, 0) !important;
  /* color: #fee36d !important; */
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  color: #fee36d !important;
  background: rgba(0, 0, 0, 0);
}
/deep/ .el-pagination .btn-next,
.el-pagination .btn-prev {
  background: rgba(0, 0, 0, 0) !important;
  /* color: #fee36d !important; */
}
/deep/ .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: rgba(0, 0, 0, 0) !important;
  /* color: #fee36d !important; */
}
/deep/ .el-pagination button:disabled {
  background: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-pagination .btn-next,
.el-pagination .btn-prev {
  background: rgba(0, 0, 0, 0) !important;
}

/deep/ .el-dialog,
.el-pager li {
  background: rgba(0, 0, 0, 0) !important;
}
/deep/ .btn-prev {
  background: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-dialog,
.el-pager li {
  background: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-pager li {
  background: rgba(0, 0, 0, 0) !important;
}
/deep/ .btn-next {
  margin: 0 !important;
  box-sizing: border-box;
}
/deep/.el-pagination.is-background .btn-prev {
  margin: 0 !important;
  box-sizing: border-box;
}
/deep/.el-pagination.is-background .el-pager li {
  margin: 0 !important;
  box-sizing: border-box;
}
/deep/.el-divider--horizontal {
  margin: 5px 0;
}
</style>

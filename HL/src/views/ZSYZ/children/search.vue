<template>
  <div class="search">
    <div class="showtab">
      <div class="tit">全球 • 仅华尔街才有此金融地位</div>
      <div class="showtab_box">
        <div @click="show_search_home" class="showtab_box_one">
          <img src="../../../assets/img/4招商引资/icon_搜房.svg" alt="" />
          <span>搜房</span>
        </div>
        <div @click="show_search_hig" class="showtab_box_two">
          <img src="../../../assets/img/4招商引资/icon_高级搜索.svg" alt="" />
          <span>高级搜索</span>
        </div>
        <div v-if="isshowClose" class="close">
          <el-button @click="close" type="warning">关闭</el-button>
        </div>
        <div class="tabdata">
          <div class="left">
            <div class="tit">面积(m<sup>2</sup>)</div>
            <div class="slider1">
              <el-slider
                v-model="value"
                range
                @change="sliderChange"
                :max="10000"
              >
              </el-slider>
              <!-- <el-slider @change="sliderChange" v-model="value" :max="max" :step="100">
              </el-slider> -->
              <div class="num">
                <span v-for="(item, index) in 10" :key="index">
                  {{ item * 100 }}
                </span>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="tit">租金(元)</div>
            <div class="slider2">
              <el-slider
                v-model="value2"
                range
                @change="sliderChange1"
                :step="1000"
                :max="10000"
              >
              </el-slider>
              <!-- <el-slider @change="sliderChange1" v-model="value2" :max="max" :step="100">
              </el-slider> -->
              <div class="num">
                <span v-for="(item, index) in 10" :key="index">
                  {{ item * 100 }}
                </span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="tit"></div>
            <div class="blockquyu">
              <div v-if="tableData.length > 0" class="showblock">
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
              <div v-else class="showblock">
                暂无数据(请滑动滑块)
              </div>
              <!-- <div @click="quyublock(1)" class="left">
                <img
                  v-if="iswhowbeiduan"
                  src="../../../assets/img/4招商引资/北段_选中.png"
                  alt=""
                />
                <img
                  v-if="!iswhowbeiduan"
                  src="../../../assets/img/4招商引资/北段_未选.png"
                  alt=""
                />
              </div>
              <div @click="quyublock(2)" class="center">
                <img
                  v-if="iswhowcenter"
                  src="../../../assets/img/4招商引资/中段_选中.png"
                  alt=""
                />
                <img
                  v-if="!iswhowcenter"
                  src="../../../assets/img/4招商引资/中段_未选.png"
                  alt=""
                />
              </div>
              <div @click="quyublock(3)" class="right">
                <img
                  v-if="iswhownanduan"
                  src="../../../assets/img/4招商引资/南段_选中.png"
                  alt=""
                />
                <img
                  v-if="!iswhownanduan"
                  src="../../../assets/img/4招商引资/南段_未选.png"
                  alt=""
                />
              </div> -->
            </div>
          </div>
        </div>
        <div class="tabdata1">
          <SearchGaoji />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import connector from "../../../api/common.js";
import SearchGaoji from "./search_gaoji";
export default {
  data() {
    return {
 hightbuliding: {},
// 展示jjone
      showjjone: false,
      // 展示北段选中的样式
      iswhowbeiduan: false,
      iswhowcenter: false,
      iswhownanduan: false,
      max: 1000,
      value: [0, 2000],
      value2: [0, 2000],
      isshowClose: false,
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

      this.$treedata.louyucase.map((mon) => {
        if (mon.ObjectID === item.建筑编码) {
          this.hightbuliding = mon;
        }
      });
      __g.tileLayer.highlightActor(
        this.hightbuliding.Id,
        this.hightbuliding.ObjectID
      );
    },
    // sousuo
    async request() {
      let minArea = Number(this.value[0]),
        maxArea = Number(this.value[1]),
        minRent = Number(this.value2[0]),
        maxRent = Number(this.value2[1]);

      const result = await connector.louyuxianzhi({
        minArea,
        maxArea,
        minRent,
        maxRent,
        isFree: true,
      });
      if (result.data.list) {
        // "4403030030040400000"
        console.log(result.data.list);
        console.log(this.$treedata.louyucase);
        var arr = [];
        result.data.list.map((item) => {
          this.$treedata.louyucase.map((mon) => {
            if (mon.ObjectID == item.建筑编码) {
              let a = new TileLayerActorData(mon.Id, mon.ObjectID);
              // __g.tileLayer.highlightActor(mon.Id, mon.ObjectID)
              // console.log(a);
              arr.push(a);
            }
          });
        });
        this.tableData = result.data.list;
        console.log(this.tableData, 888);
        // highlightActors(data, fn)
      } else {
        this.tableData = [];
      }
    },
    // 搜房__选择区域
    quyublock(val) {
      console.log(val);
      // let blockquyu = document.getElementsByClassName("blockquyu")[0]
      //   .children[0];
      // let blockquyu2 = document.getElementsByClassName("blockquyu")[0]
      //   .children[1];
      // let blockquyu3 = document.getElementsByClassName("blockquyu")[0]
      //   .children[2];
      if (val === 1) {
        console.log(1);
        this.iswhowbeiduan = !this.iswhowbeiduan;
      } else if (val === 2) {
        this.iswhowcenter = !this.iswhowcenter;
      } else if (val === 3) {
        this.iswhownanduan = !this.iswhownanduan;
      }
      // this.request()
    },
    // 搜房__搜索面积
    sliderChange(e) {
      this.request();
    },
    // 搜房__搜索租金
    sliderChange1(e) {
      console.log(e);
      this.request();
    },
    show_search_home() {
      this.showjjone = true;
      this.isshowClose = true;
      let showtab = document.getElementsByClassName("showtab")[0];
      let one = document.getElementsByClassName("showtab_box_one")[0];
      let two = document.getElementsByClassName("showtab_box_two")[0];
      let tabdata = document.getElementsByClassName("tabdata")[0];
      let tabdata1 = document.getElementsByClassName("tabdata1")[0];
      tabdata.style.display = "block";
      tabdata1.style.display = "none";
      one.style.border = "none";
      two.style.border = "none";

      showtab.style.top = "calc(100% - 250px)";
      tabdata.style.top = "93px";
      one.style.height = "50px";
      one.style.fontSize = "16px";
      one.style.border = "1px solid #fff";
      one.style.borderBottom = "none";
      two.style.borderBottom = "none";
      two.style.height = "50px";
      two.style.fontSize = "16px";
      this.is_to_top = !this.is_to_top;
      this.$router.push("/Home/ZSYZ/zslc");
    },
    show_search_hig() {
      this.isshowClose = true;

      let showtab = document.getElementsByClassName("showtab")[0];
      let one = document.getElementsByClassName("showtab_box_one")[0];
      let two = document.getElementsByClassName("showtab_box_two")[0];
      let tabdata = document.getElementsByClassName("tabdata")[0];
      let tabdata1 = document.getElementsByClassName("tabdata1")[0];
      tabdata.style.display = "none";
      tabdata1.style.display = "block";
      one.style.border = "none";
      two.style.border = "none";

      showtab.style.top = "calc(100% - 250px)";
      tabdata1.style.top = "93px";
      one.style.height = "50px";
      one.style.fontSize = "16px";
      two.style.border = "1px solid #fff";
      one.style.borderBottom = "none";
      two.style.borderBottom = "none";
      two.style.height = "50px";
      two.style.fontSize = "16px";
      this.is_to_top2 = !this.is_to_top2;
    },
    close() {
      let showtab = document.getElementsByClassName("showtab")[0];
      let one = document.getElementsByClassName("showtab_box_one")[0];
      let two = document.getElementsByClassName("showtab_box_two")[0];
      let tabdata = document.getElementsByClassName("tabdata")[0];
      let tabdata1 = document.getElementsByClassName("tabdata1")[0];
      showtab.style.top = "calc(100% - 150px)";
      tabdata1.style.top = "260px";
      tabdata.style.top = "260px";
      one.style.border = "none";
      two.style.border = "none";
      one.style.height = "70px";
      one.style.fontSize = "20px";
      two.style.height = "70px";
      two.style.fontSize = "20px";
      this.isshowClose = false;
      this.showjjone = false;
      this.$router.push("/Home/ZSYZ/zsly");
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
  components: { SearchGaoji },
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  width: calc(100% - 20%);
  height: 260px;
  top: calc(100% - 260px);
  /* overflow: hidden; */
  left: 0;
  box-sizing: border-box;
  /* // background: rgba(0, 0, 0, 0.295); */
  z-index: 20;
  .showtab {
    z-index: 10;
    transition: all 1s;
    position: absolute;
    width: calc(100%);
    top: calc(100% - 150px);
    left: 0;
    // width: 80%;
    height: 150px;
    /* background: rgba(70, 64, 64, 0.205); */
    .tit {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      color: white;
      text-align: left;
      text-indent: 50px;
    }
    .showtab_box {
      // position: relative;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .showtab_box_one {
        transition: all 0.5s;
        width: 210px;
        height: 75px;
        margin-left: 50px;
        box-sizing: border-box;

        background: rgba(0, 0, 0, 0.205);
        border: 1px solid rgba(0, 0, 0, 0.2);
        // filter: blur(4px);
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        align-items: center;
        cursor: pointer;
        img {
          margin-right: 20px;
        }
      }
      .showtab_box_two {
        transition: all 0.5s;
        position: relative;
        width: 210px;
        height: 75px;
        margin-left: 15px;
        background: rgba(5, 5, 5, 0.26);
        border: 1px solid rgba(255, 255, 255, 0.2);
        // filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        align-items: center;
        cursor: pointer;
        img {
          margin-right: 20px;
        }
      }
      .close {
        position: absolute;
        width: 70px;
        height: 30px;
        top: 45px;
        left: 550px;
        // background: #000;
      }
      .num {
        width: 350px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 33px;
        color: #fff;
        font-size: 14px;
      }
      .tabdata {
        transition: all 0.5s;
        position: absolute;
        width: 100%;
        height: 160px;
        top: 150px;
        left: 0px;
        /* background: rgba(98, 180, 162, 0.432); */
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.3)
        );
        // background: url("../../../assets/img/4招商引资/面板背景下.png")
        //   no-repeat center/cover;
        > div {
          .tit {
            text-align: center;
            margin-top: 10px;
          }
          padding: 0 10px;
          width: 430px;
          height: 100%;
          float: left;
          // background: #000;
          position: relative;
          margin-left: 0px;
          // border: 1px solid #a72828;
        }
        > div:nth-of-type(1)::after,
        > div:nth-of-type(2)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 2px;
          height: 80%;
          background: rgb(214, 205, 205);
        }
        > div:nth-of-type(3) {
          width: 410px;
          /* height: 100%; */
          /* background: rgba(3, 3, 3, 0.356); */
          > div {
            height: 5%;
          }
          .blockquyu {
            width: 100%;
            height: 95%;

            /* background: #000; */
            /* display: flex;
            justify-content: space-around;
            align-items: center; */
            > div:nth-of-type(1) {
              width: 100%;
              height: 80%;
              .searchshowtit {
                color: #fff;
                span {
                  color: coral;
                  font-weight: 600;
                  display: inline-block;
                  width: 30px;
                  text-align: center;
                }
              }
              /* display: flex;
              justify-content: center;
              align-items: flex-end; */
              /* background: #000; */
            }
            .showblock {
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
                  height: 80px;
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
            /* > div:nth-of-type(1) {
              background: url("../../../assets/img/4招商引资/北段_未选.svg")
                no-repeat center;
            }
            > div:nth-of-type(2) {
              background: url("../../../assets/img/4招商引资/中段_未选.svg")
                no-repeat center;
            }
            > div:nth-of-type(3) {
              background: url("../../../assets/img/4招商引资/南段_未选.svg")
                no-repeat center;
            } */
          }
        }
        .el-slider {
          width: 360px;
        }

        // .slider1 {
        //   float: left;
        //   width: 420px;
        //   height: 100%;
        //   // background: rgba(0, 0, 0, 0.486);
        // }

        .slider2 {
          margin-left: 0px;
          float: left;
          width: 320px;
          height: 100%;
        }
        /deep/ .el-slider__button {
          width: 30px;
          height: 30px;
          border-radius: 0;
          margin-top: 15px;
          margin-left: 20px;
          border: none;
          background: url("../../../assets/img/4招商引资/滑块.svg") no-repeat
            center/cover;
        }
        /deep/ .el-slider__bar {
          height: 30px;
          background: url("../../../assets/img/4招商引资/滑块背景.svg");
        }
        /deep/ .el-slider__runway {
          height: 30px;

          background: rgba(0, 0, 0, 0.226);
        }
      }
      .tabdata1 {
        transition: all 0.5s;
        position: absolute;
        width: 100%;
        height: 160px;
        top: 150px;
        left: 0px;
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.836),
          rgba(0, 0, 0, 0.192)
        );
      }
    }
  }
}
</style>

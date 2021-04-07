<template>
  <div class='search'>
    <div class="showtab">
      <div class="tit">全球 • 仅华尔街才有此金融地位</div>
      <div class="showtab_box">
        <div @click="show_search_home" class="showtab_box_one">
          <img src="../../../assets/img/0407红岭切图/招商引资/icon_搜房.svg" alt="">
          <span>搜房</span>
        </div>
        <div @click="show_search_hig" class="showtab_box_two">
          <img src="../../../assets/img/0407红岭切图/招商引资/icon_高级搜索.svg" alt="">
          <span>高级搜索</span>
        </div>
        <div v-if="isshowClose" class="close">
          <el-button @click="close" type="warning">关闭</el-button>
        </div>
        <div class="tabdata">
          <div class="tit">面积(m<sup>2</sup>)</div>
          <div class="slider1">
            <el-slider v-model="value" :max="max" :step="100">
            </el-slider>
          </div>
          <div class="slider2">
            <el-slider v-model="value2" :max="max" :step="100">
            </el-slider>
          </div>
        </div>
        <div class="tabdata1">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      max: 2000,
      value: 0,
      value2: 0,
      isshowClose: false


    };
  },
  computed: {},
  watch: {},
  methods: {
    show_search_home () {
      // this.close()
      this.isshowClose = true
      let showtab = document.getElementsByClassName("showtab")[0]
      let one = document.getElementsByClassName("showtab_box_one")[0]
      let two = document.getElementsByClassName("showtab_box_two")[0]
      let tabdata = document.getElementsByClassName("tabdata")[0]
      let tabdata1 = document.getElementsByClassName("tabdata1")[0]
      tabdata.style.display = "block"
      tabdata1.style.display = "none"
      one.style.borderBottom = "none"
      two.style.borderBottom = "none"

      // if (this.is_to_top) {

      showtab.style.top = "calc(100% - 260px)"
      tabdata.style.top = "93px"
      one.style.height = "50px"
      one.style.fontSize = "16px"
      one.style.borderBottom = "1px solid #fff"
      two.style.height = "50px"
      two.style.fontSize = "16px"
      this.is_to_top = !this.is_to_top

      // } else {
      //   this.close(1)

      // }
      // console.log(a);
      // showtab.style.height = "300px"

    },
    show_search_hig () {
      // this.close()
      this.isshowClose = true

      let showtab = document.getElementsByClassName("showtab")[0]
      let one = document.getElementsByClassName("showtab_box_one")[0]
      let two = document.getElementsByClassName("showtab_box_two")[0]
      let tabdata = document.getElementsByClassName("tabdata")[0]
      let tabdata1 = document.getElementsByClassName("tabdata1")[0]
      tabdata.style.display = "none"
      tabdata1.style.display = "block"
      one.style.borderBottom = "none"
      two.style.borderBottom = "none"
      // if (this.is_to_top2) {
      showtab.style.top = "calc(100% - 260px)"
      tabdata1.style.top = "93px"
      one.style.height = "50px"
      one.style.fontSize = "16px"
      two.style.borderBottom = "1px solid #fff"
      two.style.height = "50px"
      two.style.fontSize = "16px"
      this.is_to_top2 = !this.is_to_top2

      // } else {

      //   this.close(2)
      // }
    },
    close () {
      let showtab = document.getElementsByClassName("showtab")[0]
      let one = document.getElementsByClassName("showtab_box_one")[0]
      let two = document.getElementsByClassName("showtab_box_two")[0]
      let tabdata = document.getElementsByClassName("tabdata")[0]
      let tabdata1 = document.getElementsByClassName("tabdata1")[0]
      showtab.style.top = "calc(100% - 150px)"
      tabdata1.style.top = "260px"
      tabdata.style.top = "260px"

      one.style.borderBottom = "none"
      two.style.borderBottom = "none"

      one.style.height = "70px"
      one.style.fontSize = "20px"
      two.style.height = "70px"
      two.style.fontSize = "20px"

      this.isshowClose = false

      // this.is_to_top2 = !this.is_to_top2
    }

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
.search {
  position: absolute;
  width: 50%;
  height: 260px;
  top: calc(100% - 260px);
  overflow: hidden;

  // background: rgba(0, 0, 0, 0.295);
  z-index: 20;
  .showtab {
    transition: all 1s;

    position: absolute;
    top: calc(100% - 150px);
    width: 500px;
    height: 150px;
    background: rgba(0, 0, 0, 0);
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
        top: 20px;
        right: -250px;
        // background: #000;
      }
      .tabdata {
        transition: all 0.5s;
        position: absolute;
        width: 1000px;
        height: 150px;
        top: 150px;
        left: 10px;
        background: rgba(0, 0, 0, 0.205);
        // .el-slider {
        //   color: rgb(20, 18, 18);
        //   width: 500px;
        //   height: 30px;
        //   background: rgba(14, 14, 14, 0.274);
        // }

        .slider1 {
          float: left;
          width: 420px;
          height: 100%;
          // background: rgba(0, 0, 0, 0.486);
        }
        /deep/ .el-slider__button {
          width: 30px;
          height: 30px;
          border-radius: 0;
          margin-top: 15px;
          margin-left: 20px;
          border: none;
          background: url("../../../assets/img/0407红岭切图/招商引资/滑块.svg")
            no-repeat center/cover;
        }
        /deep/ .el-slider__bar {
          height: 30px;
          background: rgba(0, 0, 0, 0.699);
        }
        /deep/ .el-slider__runway {
          height: 30px;

          background: rgba(0, 0, 0, 0.226);
        }
        .slider2 {
          margin-left: 30px;
          float: left;
          width: 420px;
          height: 100%;
        }
      }
      .tabdata1 {
        transition: all 0.5s;
        position: absolute;
        width: 1000px;
        height: 150px;
        top: 150px;
        left: 10px;
        background: rgb(145, 53, 53);
      }
    }
  }
}
</style>
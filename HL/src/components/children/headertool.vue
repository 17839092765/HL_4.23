<template>
  <div class="headertool">
    <div class="one" @click="resetCamera">
      <img src="../../assets/img/icon-初始视角.svg" alt="" />
    </div>
    <div class="two">
      <img src="../../assets/img/icon-取消高亮.svg" alt="" />
    </div>
    <div class="three" @click="setUp">
      <el-popover
        popper-class="popper"
        placement="bottom"
        title=""
        width="100"
        trigger="click"
      >
        <div class="">
          <div>
            <span>展示UI菜单 </span>
            <el-switch
              v-model="isShowUI"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="showUI"
            >
            </el-switch>
          </div>
        </div>
        <div slot="reference">
          <img src="../../assets/img/icon-设置.svg" alt="" />
        </div>
      </el-popover>
    </div>
    <div class="four">
      {{ time }}
    </div>
    <div class="five">
      <div id="he-plugin-simple"></div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      isShowUI: false,
      time: "00:00",
    };
  },
  computed: {},
  watch: {},
  methods: {
    gettime() {
      this.timer = setInterval(() => {
        this.time = dayjs().format("YYYY/MM/DD HH:mm:ss");
      }, 1000);
    },
    resetCamera() {
      __g.camera.lookAt(
          510190.2778,
          2494828.118,
          5500.464294,
          -33.209282,
          -90,
          -90,
          () => {
            // this.isshowBack = false
          }
        );
    },
    setUp() {},
    showUI() {
     // visible:false,
      __g.misc.setMainUIVisibility(this.isShowUI);
    },
  },
  created() {
    this.gettime();
  },
  mounted() {
    // var bbb = document.createElement("script")
    // bbb.innerHTML = {
    // "CONFIG": {
    //   "layout": "1",
    //   "width": "300",
    //   "height": "130",
    //   "background": "1",
    //   "dataColor": "FFFFFF",
    //   "borderRadius": "10",
    //   "modules": "10",
    //   "key": "9c30dd27fee24912abc7708614f3c121"
    // }
    // }
    // var aaa = document.createElement("script")
    // aaa.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"

    window.WIDGET = {
      CONFIG: {
        modules: "0124",
        background: "4",
        tmpColor: "FFFFFF",
        backgroundColor: "#00000000",
        tmpSize: "16",
        cityColor: "FFFFFF",
        citySize: "16",
        aqiColor: "FFFFFF",
        aqiSize: "16",
        weatherIconSize: "24",
        alertIconSize: "18",
        padding: "10px 10px 10px 10px",
        shadow: "1",
        language: "zh",
        borderRadius: "10",
        fixed: "false",
        vertical: "top",

        horizontal: "left",
        key: "8f0727ee21004600b2a5826ffc63a5f9",
      },
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.popper {
  background: transparent !important;
}
/deep/ .el-popover {
  background-color: transparent !important;
  color: #fff;
}
.headertool {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10%;
    height: 100%;
    font-size: 20px;
    cursor: pointer;
    position: relative;
  }
  > div:nth-of-type(4) {
    text-align: center;
    width: 25%;
    color: #fff;
  }
  > div:nth-of-type(5) {
    text-align: center;
    width: 30%;
  }
  // #he-plugin-standard {
  //   width: 300px;
  //   height: 100px;
  //   z-index: 10000;
  //   margin-right: 20px;
  // }
}
</style>

<template>
  <div class="wlyj">
    <!-- <div ref="slider" class="slider">
      <img src="../../assets/img/5未来愿景/调节条背景.svg" alt="" />
      <div class="point" @mousedown="updateTime" ref="point">

        <div>{{ currentTime }}</div>
      </div>
    </div> -->
    <div class="block">
      <el-slider
        :step="2"
        :min="0"
        :max="16"
        @input="onchangde"
        show-tooltip
        v-model="value"
        vertical
        height="200px"
      >
      </el-slider>
    </div>
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";

export default {
  data() {
    return {
      value: 10,
      currentTime: "08:00",
    };
  },
  computed: {},
  watch: {
    value(newvalue) {
      __g.weather.setDateTime(2021, 4, 9, newvalue, 30, 30, false);
    },
  },
  methods: {
    onchangde(e) {
      console.log(111, e);
    },
    updateTime(e) {
      // console.log(e);
      // console.dir(this.$refs.slider);
      document.documentElement.onmousemove = (mousEvent) => {
        /* 判断当前point位置 */
        /* 鼠标与point的相对位置 */
        let mousePositon =
          mousEvent.clientY - e.offsetY - this.$refs.slider.offsetTop;
        if (mousePositon <= 16) {
          mousePositon = -14;
          this.currentTime = "16:00";

          __g.weather.setDateTime(2021, 4, 9, 16, 30, 30, false);
        }
        if (mousePositon > 16 && mousePositon <= 76) {
          mousePositon = 46;
          this.currentTime = "14:00";

          __g.weather.setDateTime(2021, 4, 9, 14, 30, 30, false);
        }
        if (mousePositon > 76 && mousePositon <= 136) {
          mousePositon = 106;
          this.currentTime = "12:00";

          __g.weather.setDateTime(2021, 4, 9, 12, 30, 30, false);
        }
        if (mousePositon > 136 && mousePositon <= 196) {
          mousePositon = 166;
          this.currentTime = "10:00";

          __g.weather.setDateTime(2021, 4, 9, 10, 30, 0, false);
        }
        if (mousePositon > 196 && mousePositon <= 256) {
          mousePositon = 226;
          this.currentTime = "08:00";
          __g.weather.setDateTime(2021, 4, 9, 8, 30, 30, false);
        }
        if (mousePositon > 256 && mousePositon <= 316) {
          mousePositon = 286;
          this.currentTime = "06:00";

          __g.weather.setDateTime(2021, 4, 9, 6, 30, 30, false);
        }
        if (mousePositon > 316 && mousePositon <= 376) {
          mousePositon = 346;
          this.currentTime = "04:00";
          __g.weather.setDateTime(2021, 4, 9, 4, 30, 30, false);
        }
        if (mousePositon > 376 && mousePositon <= 436) {
          mousePositon = 406;
          this.currentTime = "02:00";
          __g.weather.setDateTime(2021, 4, 9, 2, 30, 30, false);
        }
        if (mousePositon > 436) {
          mousePositon = 466;
          this.currentTime = "00:00";
          __g.weather.setDateTime(2021, 4, 9, 0, 30, 0, false);
        }
        this.$refs.point.style.top = mousePositon + "px";
        document.documentElement.onmouseup = () => {
          document.documentElement.onmousemove = null;
          // this.$refs.point.onmouseup = null;
        };
      };
    },
  },
  created() {},
  mounted() {
    if (__g) {
      __g.camera.lookAt(
        509288.21875,
        2493637.75,
        1239.591553,
        -28.533407,
        -38.835026,
        -30.000002
      );
    }
    showtuceng(this.$treedata.wlyjdata);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.wlyjdata);
    __g.weather.setDateTime(2021, 4, 9, 10, 0, false);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
/deep/ .block {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  margin: auto;
  width: 75px;
  height: 500px;
  background: url("../../assets/img/5未来愿景/调节条背景.svg") no-repeat
    center/cover;
  // background: #000 !important;
  .is-vertical {
  }
}
/deep/ .el-slider {
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.096);
}
/deep/ .el-slider__bar {
  width: 10px !important;
  left: -2px !important;
  background: rgba(0, 0, 0, 0);
}
/deep/ .el-slider__runway {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto !important;
  width: 100%;
  height: 353px !important;
  background: rgb(255, 255, 255);
}
/deep/ .el-slider__button-wrapper {
  width: 74px;
  height: 65px;
  left: -35px !important;
  margin: 0 auto !important;
  background: rgba(0, 0, 0, 0.103);
  border-radius: 50%;
}
/deep/ .el-slider__button {
  width: 74px;
  height: 65px;
  border: none;
  // background: #000;
  z-index: 100;
  background: url("../../assets/img/5未来愿景/当前选中.png") no-repeat
    center/cover;
}
// .slider {
//   position: absolute;
//   left: 47px;
//   top: 293px;
// }
// .point {
//   position: absolute;
//   width: 229px;
//   height: 213px;
//   top: 226px;
//   left: -65px;
//   cursor: pointer;
//   user-select: none;
//   background: url("../../assets/img/5未来愿景/当前选中.png");
//   > div {
//     position: absolute;
//     color: #fff;
//     top: 100px;
//     left: 135px;
//   }
// }
</style>

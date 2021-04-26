<template>
  <div class="wlyj">
    <div ref="slider" class="slider">
      <img src="../../assets/img/5未来愿景/调节条背景.svg" alt="" />
      <div class="point" @mousedown="updateTime" ref="point">

        <div>{{ currentTime }}</div>
      </div>
    </div>
    <!-- <div class="block">
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
    </div> -->
    <div class="pictoLook">
      <div
        :class="
          CameraLookstyle === 1 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(1)"
      ></div>
      <div
        :class="
          CameraLookstyle === 2 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(2)"
      ></div>
      <div
        :class="
          CameraLookstyle === 3 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(3)"
      ></div>
      <div
        :class="
          CameraLookstyle === 4 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(4)"
      ></div>
    </div>
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";

export default {
  data() {
    return {
      CameraLookstyle: 0,
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
    CameraLook(val) {
      if (__g) {
        switch (val) {
          case 1:
            __g.misc.playAnimation(4);
            // __g.camera.lookAt(
            //   510264.09375,

            //   2493521.0,
            //   650.484497,
            //   -26.054821,
            //   -63.835243,
            //   -30
            // );
            this.CameraLookstyle = 1;

            break;
          case 2:
            this.CameraLookstyle = 2;
            __g.misc.playAnimation(2);

            // __g.camera.lookAt(
            //   510264.09375,

            //   2493521.0,
            //   650.484497,
            //   -26.054821,
            //   -63.835243,
            //   -30
            // );
            break;
          case 3:
            this.CameraLookstyle = 3;
            __g.misc.playAnimation(6);

            // __g.camera.lookAt(
            //   510264.09375,

            //   2493521.0,
            //   650.484497,
            //   -26.054821,
            //   -63.835243,
            //   -30
            // );
            break;
          case 4:
            this.CameraLookstyle = 4;
            __g.misc.playAnimation(5);

            // __g.camera.lookAt(
            //   510389.84375,
            //   2494008.75,
            //   61.139725,
            //   -1.240516,
            //   -6.405172,
            //   4
            // );
            break;

          default:
            break;
        }
      }
    },
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
        508913.3125,
        2493698.5,
        892.929504,
        -18.531157,
        -29.102474,
        -30.000002
      );
      __g.infoTree.show("CA5B86EA479EC48F0701CAB66C35E54E")
    }
    showtuceng(this.$treedata.wlyjdata);
    // showtuceng(this.$treedata.Car);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.wlyjdata);
    // hidetuceng(this.$treedata.Car);
      __g.infoTree.hide("CA5B86EA479EC48F0701CAB66C35E54E")

    __g.weather.setDateTime(2021, 4, 9, 10, 0, false);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.pictoLook {
  width: 200px;
  height: 70%;
  /* background: #000; */
  position: absolute;
  top: 150px;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  > div {
    width: 90%;
    height: 19%;
    border: 3px solid rgb(69, 255, 178);
    box-sizing: border-box;
  }
  .isactive {
    border: 5px solid rgb(255, 255, 255) !important;
    transform: scale(1.2);
  }
  > div:hover {
    transform: scale(1.2);
    transition: all 0.2s;
  }

  > div:nth-of-type(1) {
    background: url("../../assets/img/1红岭实景/06168135-f86a-4cca-a981-99da8a29e695.jpg")
      no-repeat center/cover;
  }
  > div:nth-of-type(2) {
    background: url("../../assets/img/1红岭实景/3b55c90a-b719-4b3b-a537-3881513aecfd.jpg")
      no-repeat center/cover;
  }
  > div:nth-of-type(3) {
    background: url("../../assets/img/1红岭实景/76262c68-19fd-4821-a1cd-6f983fcf94ae.png")
      no-repeat center/cover;
  }
  > div:nth-of-type(4) {
    background: url("../../assets/img/1红岭实景/b8bbfda5-bde2-42c9-8c87-a61fa1bbabf2.jpg")
      no-repeat center/cover;
  }
}
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
.slider {
  position: absolute;
  left: 47px;
  top: 293px;
}
.point {
  position: absolute;
  width: 229px;
  height: 213px;
  top: 226px;
  left: -65px;
  cursor: pointer;
  user-select: none;
  background: url("../../assets/img/5未来愿景/当前选中.png");
  > div {
    position: absolute;
    color: #fff;
    top: 100px;
    left: 135px;
  }
}
</style>

<template>
  <div class="wlyj">
    <div ref="slider" class="slider">
      <img
        src="../../assets/img/0408红岭切图/5未来愿景/调节条背景.svg"
        alt=""
      />
      <div class="point" @mousedown="updateTime" ref="point">
        <!-- <img
          src="../../assets/img/0408红岭切图/5未来愿景/当前选中.png"
          alt=""
        /> -->
      </div>
      <!-- <el-slider
        vertical
        height="481px"
        v-model="value"
        :step="12.5"
        show-stops
      >
      </el-slider> -->
    </div>
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";

export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
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
        }
        if (mousePositon > 16 && mousePositon <= 76) {
          mousePositon = 46;
        }
        if (mousePositon > 76 && mousePositon <= 136) {
          mousePositon = 106;
        }
        if (mousePositon > 136 && mousePositon <= 196) {
          mousePositon = 166;
        }
        if (mousePositon > 196 && mousePositon <= 256) {
          mousePositon = 226;
        }
        if (mousePositon > 256 && mousePositon <= 316) {
          mousePositon = 286;
        }
        if (mousePositon > 316 && mousePositon <= 376) {
          mousePositon = 346;
        }
        if (mousePositon > 376 && mousePositon <= 436) {
          mousePositon = 406;
        }
        if (mousePositon > 436) {
          mousePositon = 466;
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
    showtuceng(this.$treedata.hlsjdata);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.hlsjdata);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.slider {
  position: absolute;
  left: 47px;
  top: 293px;
  /* width: 75px;
  height: 499px; */
  /* background: rgba(217, 229, 233, 0.3); */
  /* flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center; */
}
.point {
  position: absolute;
  width: 229px;
  height: 213px;
  top: 46px;
  left: -65px;
  cursor: pointer;
  user-select: none;
  background: url("../../assets/img/0408红岭切图/5未来愿景/当前选中.png");
}
/* /deep/ .el-slider.is-vertical .el-slider__runway {
  width: 4px;
}
/deep/ .el-slider__runway {
  background-color: rgba(237, 249, 254, 0.61);
}
/deep/ .el-slider__bar {
  background-color: rgba(237, 249, 254, 0.61);
}
/deep/ .el-slider__button {
  width: 34px;
  height: 34px;
  background: #fee36d;
  box-shadow: 0px 2px 4px 0px rgba(154, 153, 141, 0.5);
  border-radius: 50%;
  border: 3px solid #fffbe9;
} */
</style>

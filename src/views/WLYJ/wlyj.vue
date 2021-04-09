<template>
  <div class="wlyj">
    <div ref="slider" class="slider">
      <img src="../../assets/img/0408红岭切图/5未来愿景/调节条背景.svg" alt="" />
      <div class="point" @mousedown="updateTime" ref="point">
        <!-- <img
          src="../../assets/img/0408红岭切图/5未来愿景/当前选中.png"
          alt=""
        /> -->
        <div>{{ currentTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";

export default {
  data () {
    return {
      value: 0,
      currentTime: "08:00",
    };
  },
  computed: {},
  watch: {},
  methods: {
    updateTime (e) {
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
  created () { },
  mounted () {
    showtuceng(this.$treedata.hlsjdata);
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.hlsjdata);
    __g.weather.setDateTime(2021, 4, 9, 8, 0, false);
  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
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
  background: url("../../assets/img/0408红岭切图/5未来愿景/当前选中.png");
  > div {
    position: absolute;
    color: #fff;
    top: 100px;
    left: 135px;
  }
}
</style>

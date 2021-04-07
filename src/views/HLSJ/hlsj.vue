<template>
  <div class="hlsj"></div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
// import __g from "../../main"
export default {
  data () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    polyline_del () {
      __g.polyline.delete("p773");
    },
    polyline_add () {
      __g.camera.lookAt(510264.093750, 2493521.000000, 650.484497, -26.054821, -63.835243, -30)



      let coords = [
        [510248.03125, 2492991.25, 0.1599999964237213],
        [510167.46875, 2497010.75, 17.596874237060547],
        [511253.15625, 2497696.5, 23.846248626708984],
        [512043.5, 2497744, 18.733436584472656],
        [512209.15625, 2497434.75, 19.673749923706055],

        [512191.0625, 2497015, 12.841562271118164],
        [512249.65625, 2496277.75, 18.799686431884766],
        [512475.1875, 2495711.25, 14.379374504089355],
        [512417.03125, 2495655.25, 13.286250114440918],
        [511548.78125, 2495632.5, 11.49062442779541],
        [511469.4375, 2495463.5, 8],
        [511370.5, 2495381.75, 6.318437576293945],
        [511335.5, 2495041, 5.556250095367432],
        [511390.46875, 2494542.5, 4.460312366485596],
        [511548.03125, 2493368, 4.378749847412109],
        [510970.09375, 2493248, 3.76031231880188],
        [510897.15625, 2493272, 3.6418750286102295],
        [510763.03125, 2493130.25, 3.692812442779541],
        [510574.71875, 2493035.5, 0.1603125035762787],
        [510247.09375, 2492969.5, 0.1599999964237213],
      ]; //光流的polyline的坐标数组
      coords.forEach(item => {
        item[2] = item[2] + 10
      })
      //   let duration = 3; //光流粒子的生命周期
      //   let thickness = 0.4; //光流线的宽度
      //   let interval = 0.5; //光流粒子发射间隔
      //   let velocity = 10; //光流粒子的速度
      //   let color = [1, 1, 0, 0.5]; //光流的颜色
      //   o1 = new BeamData(
      //     "p773",
      //     duration,
      //     thickness,
      //     interval,
      //     velocity,
      //     color,
      //     coords
      //   );
      // }



      // __g.beam.add(o1);







      //  let coords = item.coordinates[0][0]
      let color = [1, 1, 1, 1]
      let style = 4
      let thickness = 10
      let brightness = 0.8
      let flowRate = 0.5
      let o1 = new PolylineData(
        "p773",
        color,
        coords,
        style,
        thickness,
        brightness,
        flowRate
      )
      o1.depthTest = true

      __g.polyline.add(o1)
    }
  },
  created () {

  },
  mounted () {
    showtuceng(this.$treedata.hlsjdata);
    this.polyline_add();
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.hlsjdata);
    this.polyline_del();
  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="livingcommunity">
    <Back />
  </div>
</template>

<script>
import Back from "./Back";
export default {
  name: "LivingCommunity",
  data () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addTag (id, coord, imagePath) {
      //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let url = "";

      //图片的尺寸
      let imageSize = [200, 200];

      //标签显示的文字
      let text = "";

      //标签和文字的可见范围
      let range = [1, 80000.0];
      let textRange = 2000;

      //标签下方是否显示垂直牵引线
      let showLine = true;

      let o = new TagData(
        id,
        coord,
        imagePath,
        imageSize,
        url,
        text,
        range,
        showLine
      );
      //设置文字颜色、背景颜色、
      o.textColor = Color.Black;
      o.textBackgroundColor = Color.White;
      o.textRange = textRange;

      //鼠标悬停时的替换图片
      // o.hoverImagePath = HostConfig.AbsolutePath + "/images/hilightarea.png";

      __g.tag.add(o);
    },
  },
  created () { },
  mounted () {
    if (__g) {
      __g.infoTree.hide("935F37B34E82DF36A7D769AB444D7E64")
      __g.tag.delete(["tagxinying", "tagguoji", "tagxiandai"])
    }
    __g.camera.lookAt(
      511067.562500,
      2494945.750000,
      803.128357,
      0,
      - 145.765579,
      -47.029995,
    );
    /**
     * <a href="https://imgtu.com/i/cYFn6e"><img src="https://z3.ax1x.com/2021/04/08/cYFn6e.png" alt="cYFn6e.png" border="0"></a>
<a href="https://imgtu.com/i/cYFuOH"><img src="https://z3.ax1x.com/2021/04/08/cYFuOH.png" alt="cYFuOH.png" border="0"></a>
<a href="https://imgtu.com/i/cYFlTI"><img src="https://z3.ax1x.com/2021/04/08/cYFlTI.png" alt="cYFlTI.png" border="0"></a>
<a href="https://imgtu.com/i/cYFMmd"><img src="https://z3.ax1x.com/2021/04/08/cYFMmd.png" alt="cYFMmd.png" border="0"></a>
<a href="https://imgtu.com/i/cYFQ0A"><img src="https://z3.ax1x.com/2021/04/08/cYFQ0A.png" alt="cYFQ0A.png" border="0"></a>
     */
    setTimeout(() => {

      this.addTag(
        "tag1",
        [510396.75, 2494978.5, 110.00007629394531],
        "https://z3.ax1x.com/2021/04/08/cYFn6e.png"
      );
    }, 20);
    setTimeout(() => {

      this.addTag(
        "tag2",
        [510364.9375, 2495401.25, 65.410079956054688],
        "https://z3.ax1x.com/2021/04/08/cYFuOH.png"
      );
    }, 40);
    setTimeout(() => {

      this.addTag(
        "tag3",
        [510646.46875, 2495557.25, 92],
        "https://z3.ax1x.com/2021/04/08/cYFlTI.png"
      );
    }, 60);
    setTimeout(() => {

      this.addTag(
        "tag4",
        [510759.46875, 2495229.5, 98.000076293945313],
        "https://z3.ax1x.com/2021/04/08/cYFMmd.png"
      );
    }, 80);
    this.addTag(
      "tag5",
      [510784.15625, 2494958.75, 226.99995422363281],
      "https://z3.ax1x.com/2021/04/08/cYFQ0A.png"
    );
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    __g.tag.delete(["tag1", "tag2", "tag3", "tag4", "tag5"]);
  },
  destroyed () { },
  activated () { },
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped></style>

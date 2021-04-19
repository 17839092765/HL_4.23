<template>
  <div @click="back" class="back">
    <i></i>
    <div>返回产业布局</div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    back () {
      if (__g) {
        __g.infoTree.show("935F37B34E82DF36A7D769AB444D7E64")
        this.addTag(
          "tagxinying",
          [510490.21875, 2496392, 228.9998321533203],
          "https://z3.ax1x.com/2021/04/12/cBQ02V.png",
          "新兴赋能中心"
        );
        this.addTag(
          "tagguoji",
          [510506.46875, 2495097.5, 200],
          "https://z3.ax1x.com/2021/04/12/cBQ02V.png",
          "国际都会生活社区"
        );
        this.addTag(
          "tagxiandai",
          [510554.625, 2493920.25, 200],
          "https://z3.ax1x.com/2021/04/12/cBQ02V.png",
          "现代服务集聚中心"
        );
        __g.camera.lookAt(
          509355.781250,
          2493820.000000,
          2141.515381,
          -43.167141,
          -25.481180,
        );
      }
      this.$store.commit("cygnblock", "");

    },
    addTag (id, coord, imagePath, text) {
      //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let url = imagePath;

      //图片的尺寸
      let imageSize = [40, 40];

      //标签显示的文字
      // let text = "aaa";

      //标签和文字的可见范围
      let range = [1, 80000.0];
      let textRange = 4000;

      //标签下方是否显示垂直牵引线
      let showLine = true;

      let o = new TagData(
        id,
        coord,
        imagePath,
        imageSize,
        "",
        text,
        range,
        showLine
      );
      //设置文字颜色、背景颜色、
      o.textColor = [1, 1, 1, 1];
      o.textBackgroundColor = [0, 0, 0, 0.4];

      o.textRange = textRange;

      //鼠标悬停时的替换图片
      // o.hoverImagePath = HostConfig.AbsolutePath + "/images/hilightarea.png";

      __g.tag.add(o);
    },
  },
  created () { },
  mounted () { },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
.back {
  color: #fff;
  position: fixed;
  bottom: 35px;
  right: 43px;
  width: 195px;
  height: 61px;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.438);
  // &::after {
  //   background: rgba(67, 68, 69, 0.6);
  //   filter: blur(2px);
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  // }
}
</style>

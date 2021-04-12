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
      let url = imagePath;

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
      511072.187500,
      2494568.500000,
      1142.122437,
      0.000001,
      144.363281,

      -49.130196,
    );
    /**
     * <a href="https://imgtu.com/i/cYkLGV"><img src="https://z3.ax1x.com/2021/04/08/cYkLGV.png" alt="cYkLGV.png" border="0"></a>
<a href="https://imgtu.com/i/cYkqP0"><img src="https://z3.ax1x.com/2021/04/08/cYkqP0.png" alt="cYkqP0.png" border="0"></a>
<a href="https://imgtu.com/i/cYkH5q"><img src="https://z3.ax1x.com/2021/04/08/cYkH5q.png" alt="cYkH5q.png" border="0"></a>
<a href="https://imgtu.com/i/cYk7an"><img src="https://z3.ax1x.com/2021/04/08/cYk7an.png" alt="cYk7an.png" border="0"></a>
     */
    setTimeout(() => {

      this.addTag(
        "tag1",
        [510455.3125, 2494537.25, 259.84127807617188],
        "https://z3.ax1x.com/2021/04/08/cYkLGV.png"
      );
    }, 20);
    setTimeout(() => {

      this.addTag(
        "tag2",
        [510525.375, 2494229.5, 446.88735961914063],
        "https://z3.ax1x.com/2021/04/08/cYkqP0.png"
      );
    }, 40);
    setTimeout(() => {

      this.addTag(
        "tag3",
        [510705.75, 2493953, 146.02053833007813],
        "https://z3.ax1x.com/2021/04/08/cYkH5q.png"
      );
    }, 60);
    setTimeout(() => {

      this.addTag(
        "tag4",
        [511048.65625, 2493970.75, 415.95846557617188],
        "https://z3.ax1x.com/2021/04/08/cYk7an.png"
      );
    }, 80);
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    __g.tag.delete(["tag1", "tag2", "tag3", "tag4"]);
  },
  destroyed () { },
  activated () { },
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped></style>

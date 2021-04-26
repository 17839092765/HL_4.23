<template>
  <div class="livingcommunity">
    <Back />
  </div>
</template>

<script>
import Back from "./Back";
export default {
  name: "LivingCommunity",
  data() {
    return {
      path: "E:\\Freedo\\红岭\\HL_4.23\\src\\assets\\img\\2功能布局\\2\\",
      arr: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    addTag(id, coord, imagePath) {
      // 标签1
      let id1 = "case1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
      let coord1 = [510396.75, 2494978.5, 110.00007629394531]; //坐标值：标签添加的位置
      let imagePath1 = this.path + "1.png"; //图片路径，可以是本地路径，也支持网络路径
      let url1 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let imageSize1 = [200, 200]; //图片的尺寸
      let text1 = ""; //标签显示的文字
      let range1 = [1, 8000.0]; //标签的可见范围
      let showLine1 = true; //标签下方是否显示垂直牵引线

      let o1 = new TagData(
        id1,
        coord1,
        imagePath1,
        imageSize1,
        url1,
        text1,
        range1,
        showLine1
      );
      o1.textColor = Color.Black; //设置文字颜色
      o1.textBackgroundColor = Color.White;

      __g.tag.add(o1);
      // 标签2
      let id2 = "case2"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
      let coord2 = [510364.9375, 2495401.25, 65.410079956054688]; //坐标值：标签添加的位置
      let imagePath2 = this.path + "2.png"; //图片路径，可以是本地路径，也支持网络路径
      // let imagePath2 = "https://z3.ax1x.com/2021/04/08/cYFuOH.png"; //图片路径，可以是本地路径，也支持网络路径
      let url2 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let imageSize2 = [200, 200]; //图片的尺寸
      let text2 = ""; //标签显示的文字
      let range2 = [1, 8000.0]; //标签的可见范围
      let showLine2 = true; //标签下方是否显示垂直牵引线

      let o2 = new TagData(
        id2,
        coord2,
        imagePath2,
        imageSize2,
        url2,
        text2,
        range2,
        showLine2
      );
      o2.textColor = Color.Black; //设置文字颜色
      o2.textBackgroundColor = Color.White;

      __g.tag.add(o2);
      // 标签3
      let id3 = "case3"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
      let coord3 = [510646.46875, 2495557.25, 92]; //坐标值：标签添加的位置
      let imagePath3 = this.path + "3.png"; //图片路径，可以是本地路径，也支持网络路径
      let url3 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let imageSize3 = [200, 200]; //图片的尺寸
      let text3 = ""; //标签显示的文字
      let range3 = [1, 8000.0]; //标签的可见范围
      let showLine3 = true; //标签下方是否显示垂直牵引线

      let o3 = new TagData(
        id3,
        coord3,
        imagePath3,
        imageSize3,
        url3,
        text3,
        range3,
        showLine3
      );
      o3.textColor = Color.Black; //设置文字颜色
      o3.textBackgroundColor = Color.White;

      __g.tag.add(o3);
      // 标签4
      let id4 = "case4"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
      let coord4 = [510759.46875, 2495229.5, 98.000076293945313]; //坐标值：标签添加的位置
      let imagePath4 = this.path + "4.png"; //图片路径，可以是本地路径，也支持网络路径
      let url4 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let imageSize4 = [200, 200]; //图片的尺寸
      let text4 = ""; //标签显示的文字
      let range4 = [1, 8000.0]; //标签的可见范围
      let showLine4 = true; //标签下方是否显示垂直牵引线

      let o4 = new TagData(
        id4,
        coord4,
        imagePath4,
        imageSize4,
        url4,
        text4,
        range4,
        showLine4
      );
      o4.textColor = Color.Black; //设置文字颜色
      o4.textBackgroundColor = Color.White;

      __g.tag.add(o4);
      // 标签5
      let id5 = "case5"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
      let coord5 = [510784.15625, 2494958.75, 226.99995422363281]; //坐标值：标签添加的位置
      let imagePath5 = this.path + "5.png"; //图片路径，可以是本地路径，也支持网络路径
      let url5 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let imageSize5 = [200, 200]; //图片的尺寸
      let text5 = ""; //标签显示的文字
      let range5 = [1, 8000.0]; //标签的可见范围
      let showLine5 = true; //标签下方是否显示垂直牵引线

      let o5 = new TagData(
        id5,
        coord5,
        imagePath5,
        imageSize5,
        url5,
        text5,
        range5,
        showLine5
      );
      o5.textColor = Color.Black; //设置文字颜色
      o5.textBackgroundColor = Color.White;

      __g.tag.add(o5);
    },
  },
  created() {
    // this.addTag(
    //   "tag1",
    //   [510396.75, 2494978.5, 110.00007629394531],
    //   "https://z3.ax1x.com/2021/04/08/cYFn6e.png"
    // );
    // this.addTag(
    //   "tag2",
    //   [510364.9375, 2495401.25, 65.410079956054688],
    //   "https://z3.ax1x.com/2021/04/08/cYFuOH.png"
    // );
    // this.addTag(
    //   "tag3",
    //   [510646.46875, 2495557.25, 92],
    //   "https://z3.ax1x.com/2021/04/08/cYFlTI.png"
    // );
    // this.addTag(
    //   "tag4",
    //   [510759.46875, 2495229.5, 98.000076293945313],
    //   "https://z3.ax1x.com/2021/04/08/cYFMmd.png"
    // );
    // this.addTag(
    //   "tag5",
    //   [510784.15625, 2494958.75, 226.99995422363281],
    //   "https://z3.ax1x.com/2021/04/08/cYFQ0A.png"
    // );
  },
  mounted() {
    if (__g) {
      __g.camera.lookAt(
        511067.5625,
        2494945.75,
        803.128357,
        0,
        -145.765579,
        -47.029995
      );
      __g.infoTree.hide("935F37B34E82DF36A7D769AB444D7E64");
      __g.tag.delete(["tagxinying", "tagguoji", "tagxiandai"], () => {
        setTimeout(() => {
          this.addTag();
        }, 1000);
      });
    }

    /**
     * <a href="https://imgtu.com/i/cYFn6e"><img src="https://z3.ax1x.com/2021/04/08/cYFn6e.png" alt="cYFn6e.png" border="0"></a>
<a href="https://imgtu.com/i/cYFuOH"><img src="https://z3.ax1x.com/2021/04/08/cYFuOH.png" alt="cYFuOH.png" border="0"></a>
<a href="https://imgtu.com/i/cYFlTI"><img src="https://z3.ax1x.com/2021/04/08/cYFlTI.png" alt="cYFlTI.png" border="0"></a>
<a href="https://imgtu.com/i/cYFMmd"><img src="https://z3.ax1x.com/2021/04/08/cYFMmd.png" alt="cYFMmd.png" border="0"></a>
<a href="https://imgtu.com/i/cYFQ0A"><img src="https://z3.ax1x.com/2021/04/08/cYFQ0A.png" alt="cYFQ0A.png" border="0"></a>
     */
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    __g.tag.delete(["case1", "case2", "case3", "case4", "case5"]);
  },
  destroyed() {},
  activated() {},
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped></style>

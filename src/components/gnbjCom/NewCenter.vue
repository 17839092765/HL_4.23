<template>
  <div class="newcenter">
    <Back />
  </div>
</template>

<script>
import Back from "./Back";

export default {
  name: "NewCenter",
  data () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addTag (id, coord, imagePath) {
      //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let url1 = imagePath;

      //图片的尺寸
      let imageSize1 = [200, 200];

      //标签显示的文字
      let text1 = "";

      //标签和文字的可见范围
      let range1 = [1, 80000.0];
      let textRange = 2000;

      //标签下方是否显示垂直牵引线
      let showLine1 = true;

      let o1 = new TagData(
        "tag1",
        [510446.625, 2495761, 128],
        "https://z3.ax1x.com/2021/04/08/cJDAXT.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDAXT.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o1.textColor = Color.Black;
      o1.textBackgroundColor = Color.White;
      o1.textRange = textRange;

      //鼠标悬停时的替换图片
      // o.hoverImagePath = HostConfig.AbsolutePath + "/images/hilightarea.png";

      __g.tag.add(o1);
      // 2
      let o2 = new TagData(
        "tag2",
        [510493.875, 2495928, 89.999916076660156],
        "https://z3.ax1x.com/2021/04/08/cJDVnU.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDVnU.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o2.textColor = Color.Black;
      o2.textBackgroundColor = Color.White;
      o2.textRange = textRange;

      //鼠标悬停时的替换图片
      // o.hoverImagePath = HostConfig.AbsolutePath + "/images/hilightarea.png";

      __g.tag.add(o2);
      // 3
      let o3 = new TagData(
        "tag3",
        [510375.625, 2496099.5, 43.338516235351563],
        "https://z3.ax1x.com/2021/04/08/cJDe74.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDe74.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o3.textColor = Color.Black;
      o3.textBackgroundColor = Color.White;
      o3.textRange = textRange;
      __g.tag.add(o3);
      // 4
      let o4 = new TagData(
        "tag4",
        [510420.875, 2496504.75, 138.00007629394531],
        "https://z3.ax1x.com/2021/04/08/cJDZBF.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDZBF.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o4.textColor = Color.Black;
      o4.textBackgroundColor = Color.White;
      o4.textRange = textRange;
      __g.tag.add(o4);
      // 6
      let o5 = new TagData(
        "tag5",
        [510408.3125, 2496824, 43.89202880859375],
        "https://z3.ax1x.com/2021/04/08/cJDkcV.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDkcV.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o5.textColor = Color.Black;
      o5.textBackgroundColor = Color.White;
      o5.textRange = textRange;
      __g.tag.add(o5);
      // 6
      let o6 = new TagData(
        "tag6",
        [510737, 2497082, 128.30000305175781],
        "https://z3.ax1x.com/2021/04/08/cJDkcV.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDkcV.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o6.textColor = Color.Black;
      o6.textBackgroundColor = Color.White;
      o6.textRange = textRange;
      __g.tag.add(o6);
      // 7
      let o7 = new TagData(
        "tag7",
        [510885.875, 2496553, 348],
        "https://z3.ax1x.com/2021/04/08/cJDuN9.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDuN9.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o7.textColor = Color.Black;
      o7.textBackgroundColor = Color.White;
      o7.textRange = textRange;
      __g.tag.add(o7);
      // 8
      let o8 = new TagData(
        "tag8",
        [510729.03125, 2496518.25, 167],
        "https://z3.ax1x.com/2021/04/08/cJDKhR.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDKhR.png",
        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o8.textColor = Color.Black;
      o8.textBackgroundColor = Color.White;
      o8.textRange = textRange;
      __g.tag.add(o8);
      // 9
      let o9 = new TagData(
        "tag8",
        [510750.28125, 2496042, 211.98152160644531],
        "https://z3.ax1x.com/2021/04/08/cJDQ91.png",
        imageSize1,
        "https://z3.ax1x.com/2021/04/08/cJDQ91.png",

        text1,
        range1,
        showLine1
      );
      //设置文字颜色、背景颜色、
      o9.textColor = Color.Black;
      o9.textBackgroundColor = Color.White;
      o9.textRange = textRange;
      __g.tag.add(o9);

    },

  },
  created () { },
  mounted () {
    if (__g) {
      __g.infoTree.hide("935F37B34E82DF36A7D769AB444D7E64")
      __g.tag.delete(["tagxinying", "tagguoji", "tagxiandai"])
      __g.tag.delete([
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
        "tag7",
        "tag8",
        "tag9",
      ]);
    }
    __g.camera.lookAt(
      511211.468750,
      2496189.750000,
      1059.392334,
      -60.268341,
      -151.060394,
    );

    this.addTag()


    // setTimeout(() => {

    //   this.addTag(
    //     "tag2",
    //     [510493.875, 2495928, 89.999916076660156],
    //     "https://z3.ax1x.com/2021/04/08/cJDVnU.png"
    //   );
    // }, 200);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag3",
    //     [510375.625, 2496099.5, 43.338516235351563],
    //     "https://z3.ax1x.com/2021/04/08/cJDe74.png"
    //   );
    // }, 300);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag4",
    //     [510420.875, 2496504.75, 138.00007629394531],
    //     "https://z3.ax1x.com/2021/04/08/cJDZBF.png"
    //   );
    // }, 350);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag5",
    //     [510408.3125, 2496824, 43.89202880859375],
    //     "https://z3.ax1x.com/2021/04/08/cJDkcV.png"
    //   );
    // }, 400);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag6",
    //     [510737, 2497082, 128.30000305175781],
    //     "https://z3.ax1x.com/2021/04/08/cJDnAJ.png"
    //   );
    // }, 120);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag7",
    //     [510885.875, 2496553, 348],
    //     "https://z3.ax1x.com/2021/04/08/cJDuN9.png"
    //   );
    // }, 140);
    // setTimeout(() => {

    //   this.addTag(
    //     "tag8",
    //     [510729.03125, 2496518.25, 167],
    //     "https://z3.ax1x.com/2021/04/08/cJDKhR.png"
    //   );
    // }, 160);

    // this.addTag(
    //   "tag9",
    //   [510750.28125, 2496042, 211.98152160644531],
    //   "https://z3.ax1x.com/2021/04/08/cJDQ91.png"
    // );
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    __g.tag.delete([
      "tag1",
      "tag2",
      "tag3",
      "tag4",
      "tag5",
      "tag6",
      "tag7",
      "tag8",
      "tag9",
    ]);
  },
  destroyed () { },
  activated () { },
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped></style>

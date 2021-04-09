<template>
  <div class="newcenter">
    <Back />
  </div>
</template>

<script>
import Back from "./Back";

export default {
  name: "NewCenter",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addTag(id, coord, imagePath) {
      //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
      let url = imagePath;

      //图片的尺寸
      let imageSize = [100, 100];

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
      o.hoverImagePath = HostConfig.AbsolutePath + "/images/hilightarea.png";

      __g.tag.add(o);
    },
  },
  created() {},
  mounted() {
    __g.camera.set(
      511294.4375,
      2496018.25,
      981.133179,
      -137.062714,
      -52.982544
    );
    this.addTag(
      "tag1",
      [510446.625, 2495761, 128],
      "https://z3.ax1x.com/2021/04/08/cJDAXT.png"
    );
    this.addTag(
      "tag2",
      [510493.875, 2495928, 89.999916076660156],
      "https://z3.ax1x.com/2021/04/08/cJDVnU.png"
    );
    this.addTag(
      "tag3",
      [510375.625, 2496099.5, 43.338516235351563],
      "https://z3.ax1x.com/2021/04/08/cJDe74.png"
    );
    this.addTag(
      "tag4",
      [510420.875, 2496504.75, 138.00007629394531],
      "https://z3.ax1x.com/2021/04/08/cJDZBF.png"
    );
    this.addTag(
      "tag5",
      [510408.3125, 2496824, 43.89202880859375],
      "https://z3.ax1x.com/2021/04/08/cJDkcV.png"
    );
    this.addTag(
      "tag6",
      [510737, 2497082, 128.30000305175781],
      "https://z3.ax1x.com/2021/04/08/cJDnAJ.png"
    );
    this.addTag(
      "tag7",
      [510885.875, 2496553, 348],
      "https://z3.ax1x.com/2021/04/08/cJDuN9.png"
    );
    this.addTag(
      "tag8",
      [510729.03125, 2496518.25, 167],
      "https://z3.ax1x.com/2021/04/08/cJDKhR.png"
    );
    this.addTag(
      "tag9",
      [510750.28125, 2496042, 211.98152160644531],
      "https://z3.ax1x.com/2021/04/08/cJDQ91.png"
    );
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
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
  destroyed() {},
  activated() {},
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped></style>

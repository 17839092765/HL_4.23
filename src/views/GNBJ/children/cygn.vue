<template>
  <div class="cygn">
    <NewCenter v-if="cygnblock === 'tagxinying'" />
    <LivingCommunity v-if="cygnblock === 'tagguoji'" />
    <ServiceCenter v-if="cygnblock === 'tagxiandai'" />
    {{ cygnblock }}
  </div>
</template>

<script>
import NewCenter from "../../../components/gnbjCom/NewCenter.vue";
import { showtuceng, hidetuceng } from "../../../util/showtuceng";
import { mapState } from "vuex";
import LivingCommunity from "../../../components/gnbjCom/LivingCommunity.vue";
import ServiceCenter from "../../../components/gnbjCom/ServiceCenter.vue";
export default {
  data() {
    return {
      path: "E:\\Freedo\\红岭\\HL_4.23\\src\\assets\\img\\2功能布局\\tag1.png",
    };
  },
  computed: {
    ...mapState({
      cygnblock: (state) => state.cygnblock,
    }),
  },
  watch: {
    cygnblock(newcygnblock) {
      console.log(newcygnblock);
    },
  },
  methods: {
    addTag(id, coord, imagePath, text) {
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
  created() {},
  mounted() {
    if (__g) {
      __g.camera.lookAt(
        508928.3125,
        2494123.75,
        1412.436523,
        -35.296734,
        -21.038792,
        -35.48118
      );
    }
    showtuceng(this.$treedata.gnbjdata);
    this.addTag(
      "tagxinying",
      [510490.21875, 2496392, 228.9998321533203],
      this.path,
      "新兴赋能中心"
    );

    this.addTag(
      "tagguoji",
      [510506.46875, 2495097.5, 200],
      this.path,

      "国际都会生活社区"
    );
    this.addTag(
      "tagxiandai",
      [510554.625, 2493920.25, 200],
      this.path,

      "现代服务集聚中心"
    );
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    __g.tag.delete(["tagxinying", "tagguoji", "tagxiandai"]);
    hidetuceng(this.$treedata.gnbjdata);
    this.$store.commit("cygnblock", "");
  },
  destroyed() {},
  activated() {},
  components: { NewCenter, LivingCommunity, ServiceCenter },
};
</script>

<style lang="scss" scoped></style>

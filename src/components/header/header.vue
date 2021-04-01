<template>
  <div class="header">
    <div class="Logo">
      <h1>红岭新兴金融产业带CIM平台</h1>
    </div>
    <div class="linkto">
      <router-link to="/Home/HLSJ" tag="div">
        <span>红岭实景</span>
      </router-link>
      <router-link to="/Home/GNBJ" tag="div">
        <span>功能布局</span>
      </router-link>
      <router-link to="/Home/XZSJ" tag="div">
        <span>现状数据</span>
      </router-link>
      <router-link to="/Home/ZSYZ" tag="div">
        <span>招商引资</span>
      </router-link>
      <router-link to="/Home/WLYJ" tag="div">
        <span>未来愿景</span>
      </router-link>
    </div>
    <div class="tool">
      gengneng
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.466);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Logo {
    width: 35%;
    height: 100%;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: YouSheBiaoTiHei;
    color: #ffffff;
  }
  .linkto {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    > div {
      position: relative;
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .router-link-active {
      color: #fee36d;
    }
    .router-link-active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      /* top: 0; */
      right: 0;
      margin: auto;
      width: 60%;
      height: 2px;
      background: #fee36d;
    }
  }
  .tool {
    width: 30%;
    height: 100%;
  }
}
</style>

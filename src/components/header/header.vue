<template>
  <div class="header">
    <div class="Logo">
      <h1 @click="shuaxin"><a href="#">红岭新兴金融产业带CIM平台</a></h1>
    </div>
    <div class="linkto">
      <div @click="showmenus(1)">
        <router-link to="/Home/HLSJ" tag="div">
          <span>红岭实景</span>
        </router-link>
      </div>
      <div @click="showmenus(2)">
        <router-link to="/Home/GNBJ" tag="div">
          <span>功能布局</span>
        </router-link>
      </div>
      <div @click="showmenus(3)">
        <router-link to="/Home/XZSJ" tag="div">
          <span>现状数据</span>

        </router-link>
      </div>
      <div @click="showmenus(4)">
        <router-link to="/Home/ZSYZ" tag="div">
          <span>招商引资</span>
        </router-link>
      </div>
      <div @click="showmenus(5)">
        <router-link to="/Home/WLYJ" tag="div">
          <span>未来愿景</span>
        </router-link>
      </div>
    </div>
    <div class="tool">
      <HeaderTool />
    </div>
  </div>
</template>

<script>
import HeaderTool from "../children/headertool";
export default {
  data () {
    return {
      showxzsh4link: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    showmenus (val) {
      if (val === 3) {
        this.showxzsh4link = true;
      } else {
        this.showxzsh4link = false;
      }
    },
    shuaxin () {
      location.reload();
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
  components: { HeaderTool },
};
</script>

<style lang="scss" scoped>
.header {
  // position: relative;
  font-weight: 600;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.151);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Logo {
    width: 35%;
    height: 100%;
    font-size: 40px;
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
      cursor: pointer;
    }
    .router-link-active {
      color: #fee36d;
    }
    .router-link-active::after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 0;
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

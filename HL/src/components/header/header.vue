<template>
  <div class="header">
    <div class="Logo">
      <div class="box"></div>
      <!-- <img src="../../assets/img/public/LOGO.png" alt="" /> -->
      <!-- <h1 @click="shuaxin"> -->
      <!-- </h1> -->
    </div>
    <div class="linkto">
      <div @click="showmenus(1)">
        <router-link to="/Home/HLSJ" tag="div">
          <!-- <i :class="isactive==1?'isactive active':'active'"></i> -->

          <img
            v-if="isactive == 1"
            src="../../assets/img/public/menu_红岭实景1.png"
            alt=""
          />
          <img v-else src="../../assets/img/public/menu_红岭实景.png" alt="" />
          <span>红岭实景</span>
        </router-link>
      </div>
      <div @click="showmenus(3)">
        <router-link to="/Home/XZSJ" tag="div">
          <img
            v-if="isactive == 3"
            src="../../assets/img/public/menu_现状数据1.png"
            alt=""
          />
          <img v-else src="../../assets/img/public/menu_现状数据.png" alt="" />
          <span>现状数据</span>
        </router-link>
      </div>
      <div @click="showmenus(2)">
        <router-link to="/Home/GNBJ" tag="div">
          <img
            v-if="isactive == 2"
            src="../../assets/img/public/menu_功能布局1.png"
            alt=""
          />
          <img v-else src="../../assets/img/public/menu_功能布局.png" alt="" />
          <span>功能布局</span>
        </router-link>
      </div>
      <div @click="showmenus(4)">
        <router-link to="/Home/ZSYZ" tag="div">
          <img
            v-if="isactive == 4"
            src="../../assets/img/public/menu_招商引资1.png"
            alt=""
          />
          <img v-else src="../../assets/img/public/menu_招商引资.png" alt="" />
          <span>招商引资</span>
        </router-link>
      </div>
      <div @click="showmenus(5)">
        <router-link to="/Home/WLYJ" tag="div">
          <img
            v-if="isactive == 5"
            src="../../assets/img/public/menu_未来愿景1.png"
            alt=""
          />
          <img v-else src="../../assets/img/public/menu_未来愿景.png" alt="" />
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
  data() {
    return {
      showxzsh4link: false,
      isactive: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {
    showmenus(val) {
      this.isactive = val;
      if (val === 3) {
        this.showxzsh4link = true;
      } else {
        this.showxzsh4link = false;
      }
    },
    shuaxin() {
      location.reload();
    },
  },
  created() {},
  mounted() {
    if (__g) {
      __g.misc.setMainUIVisibility(false);
    }
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { HeaderTool },
};
</script>

<style lang="scss" scoped>
.header {
  // position: relative;
  font-weight: 400;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background: rgba(0, 0, 0, 0.24);

  .Logo {
    z-index: 1000;
    width: 25%;
    height: 100%;
    // font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    // font-family: YouSheBiaoTiHei;
    // color: #ffffff;
    background: rgba(0, 0, 0, 0.24);
    .box {
      width: 100%;
      height: 100%;
      background: url("../../assets/img/public/LOGO.png") no-repeat center;
    }
    img {
      width: 70%;
      // height: 100%;
    }
  }
  .linkto {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.24);
    z-index: 1000;

    > div {
      position: relative;
      width: 150px;
      height: 60px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
          display: inline-block;
          width: 30px;
          height: 30px;
          /* background: url("../../assets/img/public/menu_功能布局.png") no-repeat
            center/cover; */
        }
        span {
          display: inline-block;
          margin-bottom: 15px;
          height: 20px;
          line-height: 20px;
        }
      }
    }
    .router-link-active {
      color: #fee36d;
      font-weight: 700;
      /* background: #000; */
      height: 60px;
      background: url("../../assets/img/public/menu_choosed.png") no-repeat
        center/cover;
      background-size: 100% 100%;
      //   font-size: 22px;
    }
    /* .router-link-active::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      margin: auto;
      width: 90%;
      height: 2px;
      background: #fee36d;
    } */
  }
  .tool {
    z-index: 1000;
    background: rgba(0, 0, 0, 0.24);

    width: 30%;
    height: 100%;
  }
}
</style>

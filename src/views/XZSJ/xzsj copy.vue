<template>
  <div class="xzsj">
    <!-- <FDTZ />
    <XZQS /> -->
    <div class="threelink">
      <router-link to="/Home/XZSJ/fdtz" tag="li">
        <span>法定图则</span>
      </router-link>
      <router-link to="/Home/XZSJ/xzqs" tag="li">
        <span>现状权属</span>
      </router-link>
      <router-link to="/Home/XZSJ/tdly" tag="li">
        <span>土地利用</span>
      </router-link>
      <router-link to="/Home/XZSJ/csgx" tag="li">
        <span>城市更新单元</span>
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import { showVectorlayers, hideVectorlayers } from "../../util/showtuze";
// import __g from "../../main"
import store from "../../store";
export default {
  data () {
    return {
      onclickdata: 0,
    };
  },
  computed: {},
  watch: {
    $route: {
      handler (to, from) {
        // 删除点击出来的段变形
        __g.polyline.clear();
        store.commit("dataCaseisShow", false);
        store.commit("clickData", {});
        __g.camera.lookAt(
          510190.2778,
          2494828.118,
          5500.464294,
          -33.209282,
          -90,
          -90,
          () => {
            // this.isshowBack = false
          }
        );
        if (to && to.path === "/Home/XZSJ/fdtz") {

          hideVectorlayers();
          showVectorlayers("法定图则");
        } else if (to && to.path === "/Home/XZSJ/xzqs") {
          hideVectorlayers();
          showVectorlayers("现状权属");
        } else if (to && to.path === "/Home/XZSJ/tdly") {
          hideVectorlayers();
          showVectorlayers("土地利用现状");
        } else if (to && to.path === "/Home/XZSJ/csgx") {
          hideVectorlayers();
          showVectorlayers("城市更新单元");
        }
      },
    },
  },
  methods: {},
  created () { },
  mounted () {
    this.$treedata && showtuceng(this.$treedata.xzsjdata);
    showVectorlayers("法定图则");
    __g.camera.lookAt(
      510190.2778,
      2494828.118,
      5500.464294,
      -33.209282,
      -90,
      -90,
      () => {
        // this.isshowBack = false
      }
    );
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.xzsjdata);
    hideVectorlayers();
    __g.polyline.clear();
  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
.threelink {
  position: absolute;
  width: 500px;
  height: 50px;
  top: 80px;
  left: 11%;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 0 0 20px 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #ffffff;
    list-style: none;
    cursor: pointer;

    &.router-link-active {
      color: #fee36d;
       font-weight: 700;
    }
    &.router-link-active::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 2px;
      background: #fee36d;
    }
  }
}
</style>

<template>
  <div class="zsyz">
    <div class="twoLink">
      <router-link to="/Home/ZSYZ/zsly" tag="li">
        <span>招商楼宇</span>
      </router-link>
      <router-link to="/Home/ZSYZ/zslc" tag="li">
        <span>招商楼层</span>
      </router-link>

    </div>
    <router-view />
    <!-- <div class="zsyz_right">
      <RightData> </RightData>
    </div> -->
  </div>
</template>

<script>
// import RightData from "../ZSYZ/RightData/RightData";
import { showtuceng, hidetuceng } from "../../util/showtuceng.js"
export default {
  data () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
  },
  mounted () {


  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.zsyzdata)
  },
  destroyed () { },
  activated () { },
  components: {
    // RightData,
  },
};
</script>

<style lang="scss" scoped>
// .zsyz_right {
//   width: 400px;
//   height: 100%;
//   float: right;
//   // margin-top: 100px;
//   // padding-left: 2%;
//   // padding-right: 2%;
//   background: linear-gradient(270deg, #162026 0%, rgba(0, 0, 0, 0) 100%);
// }
// .zsyz {
//   height: calc(100% - 100px);
//   box-sizing: border-box;
//   // padding-top: 100px;
// }

.twoLink {
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  margin: auto;
  > li {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    list-style: none;
    cursor: pointer;
    position: relative;
    &.router-link-active {
      color: #fee36d;
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

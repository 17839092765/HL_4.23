<template>
  <div class="gnbj">
    <!-- <div class="select">
      <span :class="active === 1 && 'active'" @click="active = 1"
        >用地功能布局</span
      >
      <span :class="active === 2 && 'active'" @click="active = 2"
        >产业功能布局</span
      >
    </div>
    <LandLayout v-if="active === 1" />
    <NewCenter v-if="active === 2" /> -->
    <!-- <LivingCommunity v-if="active === 2" /> -->
    <!-- <ServiceCenter v-if="active === 2" /> -->
    <div class="twolink">
      <router-link to="/Home/GNBJ/ydgn" tag="li">
        <span>用地功能布局</span>
      </router-link>
      <router-link to="/Home/GNBJ/cygn" tag="li">
        <span>产业功能布局</span>
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import NewCenter from "../../components/gnbjCom/NewCenter";
import LivingCommunity from "../../components/gnbjCom/LivingCommunity";
import ServiceCenter from "../../components/gnbjCom/ServiceCenter";
import LandLayout from "../../components/gnbjCom/LandLayout";
export default {
  data () {
    return {
      active: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created () { },
  mounted () {
    // showtuceng(this.$treedata.gnbjdata);
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.gnbjdata);
  },
  destroyed () { },
  activated () { },
  components: {
    NewCenter,
    LivingCommunity,
    ServiceCenter,
    LandLayout,
  },
};
</script>

<style lang="scss" scoped>
.twolink {
  position: absolute;
  top: 80px;
  left: 49%;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 0 0 10px 10px;

  // z-index: 300;
  > li {
    width: 40%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    list-style: none;
    color: #fff;
    position: relative;
    &.router-link-active {
      color: #fee36d;
    }
    &.router-link-active::after {
      content: "";
      position: absolute;
      bottom: 10%;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 2px;
      background: #fee36d;
    }
  }
}
.select {
  display: flex;
  justify-content: space-between;
  width: 330px;
  position: absolute;
  top: 80px;
  left: 847px;
  > span {
    width: 160px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
  }
  > span.active {
    color: #fee36d;
    background: rgba(69, 77, 72, 0.4);
  }
}
</style>

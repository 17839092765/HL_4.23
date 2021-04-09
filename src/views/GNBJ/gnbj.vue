<template>
  <div class="gnbj">
    <div class="select">
      <span :class="active === 1 && 'active'" @click="active = 1"
        >用地功能布局</span
      >
      <span :class="active === 2 && 'active'" @click="active = 2"
        >产业功能布局</span
      >
    </div>
    <LandLayout v-if="active === 1" />
    <NewCenter v-if="active === 2" />
    <!-- <LivingCommunity v-if="active === 2" /> -->
    <!-- <ServiceCenter v-if="active === 2" /> -->
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import NewCenter from "../../components/gnbjCom/NewCenter";
import LivingCommunity from "../../components/gnbjCom/LivingCommunity";
import ServiceCenter from "../../components/gnbjCom/ServiceCenter";
import LandLayout from "../../components/gnbjCom/LandLayout";
export default {
  data() {
    return {
      active: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    showtuceng(this.$treedata.gnbjdata);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.gnbjdata);
  },
  destroyed() {},
  activated() {},
  components: {
    NewCenter,
    LivingCommunity,
    ServiceCenter,
    LandLayout,
  },
};
</script>

<style lang="scss" scoped>
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

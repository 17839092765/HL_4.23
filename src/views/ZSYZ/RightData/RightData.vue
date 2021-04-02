<template>
  <div class="zsls_data">
    <div class="top">
      <RightDataTop></RightDataTop>
    </div>
    <div class="cen">
      <RightDataCenter></RightDataCenter>
    </div>
    <div class="btn">
      <RightDataBottom></RightDataBottom>
    </div>
  </div>
</template>

<script>
import RightDataTop from "../../ZSYZ/RightData/RightDataTop";
import RightDataCenter from "../../ZSYZ/RightData/RightDataCenter";
import RightDataBottom from "../../ZSYZ/RightData/RightDataBottom";

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
  components: {
    RightDataTop,
    RightDataCenter,
    RightDataBottom,
  },
};
</script>

<style lang="scss" scoped>
.zsls_data {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 30.33%;
}
.cen {
  width: 100%;
  height: 41.33%;
}
.btn {
  width: 100%;
  height: 28.33%;
}
</style>

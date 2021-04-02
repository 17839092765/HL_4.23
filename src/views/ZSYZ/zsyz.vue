<template>
  <div class="zsyz">
    <div class="zsyz_right">
      <RightData> </RightData>
    </div>
  </div>
</template>

<script>
import RightData from "../ZSYZ/RightData/RightData";

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
    RightData,
  },
};
</script>

<style lang="scss" scoped>
.zsyz_right {
  width: 400px;
  height: 100%;
  float: right;
  // margin-top: 100px;
  padding-left: 2%;
  padding-right: 2%;
  background: linear-gradient(270deg, #162026 0%, rgba(0, 0, 0, 0) 100%);
}
.zsyz {
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
}
</style>

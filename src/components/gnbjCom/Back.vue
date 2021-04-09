<template>
  <div @click="back" class="back">
    <i></i>
    <div>返回产业布局</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    back() {},
  },
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
.back {
  color: #fff;
  position: absolute;
  bottom: 35px;
  right: 43px;
  width: 195px;
  height: 61px;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    background: rgba(67, 68, 69, 0.6);
    filter: blur(2px);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>

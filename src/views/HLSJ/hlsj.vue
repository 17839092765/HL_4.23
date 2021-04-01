<template>
  <div class="hlsj">
    hlsj
  </div>
</template>

<script>
import treedata from "../../util/treedata.json";
import { showtuceng, hidetuceng } from "../../util/showtuceng";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    showtuceng(treedata.hlsjdata);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(treedata.hlsjdata);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>

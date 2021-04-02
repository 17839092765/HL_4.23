<template>
  <div class="hlsj">
    hlsj
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    showtuceng(this.$treedata.hlsjdata);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.hlsjdata);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>

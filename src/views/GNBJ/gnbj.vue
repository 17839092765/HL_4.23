<template>
  <div class="gnbj">
    gnbj123123123
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
  created() {
    showtuceng(this.$treedata.gnbjdata);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.gnbjdata);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>

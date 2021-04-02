<template>
  <div class="home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "../components/header/header";
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
  components: { Header },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>

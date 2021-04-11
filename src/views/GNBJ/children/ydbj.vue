<template>
  <div class='ydbj'>
    <LandLayout />
  </div>
</template>

<script>
import LandLayout from '../../../components/gnbjCom/LandLayout.vue';
import { showtuceng, hidetuceng } from "../../../util/showtuceng"

export default {
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {
    showtuceng(this.$treedata.gnbjyd)
    if (__g) {
      __g.camera.lookAt(
        510550.781250,
        2495140.000000,
        90.515381,
        -43.167141,
        -25.481180,
      );
    }
    // 07EFC3294AC6FE975EC0BF99DE067C49
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: { LandLayout },
}
</script>

<style lang='scss' scoped>
</style>
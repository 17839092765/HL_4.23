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
        509000.781250,
        2493820.000000,
        2141.515381,
        -53.167141,
        -30.481180,
      );
    }
    // 07EFC3294AC6FE975EC0BF99DE067C49
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng(this.$treedata.gnbjyd)

  },
  destroyed () { },
  activated () { },
  components: { LandLayout },
}
</script>

<style lang='scss' scoped>
</style>
<template>
  <div class='zslc'>11</div>
</template>

<script>
import layers_jjone from "../../../assets/js/jjone.js"
import { showtuceng, hidetuceng } from "../../../util/showtuceng"
export default {
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    showjjone (flag) {
      let jjoneidarr = []
      layers_jjone.forEach(item => {
        jjoneidarr.push(item.id)
      })
      if (flag) {

        __g.infoTree.show(jjoneidarr);
      } else {

        __g.infoTree.hide(jjoneidarr);
      }
    }
  },
  created () {

  },
  mounted () {
    console.log(layers_jjone);
    // showtuceng(layers_jjone)
    this.showjjone(true)
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    this.showjjone(false)

  },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang='scss' scoped>
</style>
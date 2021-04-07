<template>
  <div class='zslc'>11</div>
</template>

<script>
import layers_jjone from "../../../assets/js/jjone.js"
import { showtuceng, hidetuceng } from "../../../util/showtuceng"
import { clear_jj100 } from "../../../util/clickEvt"
// import __g from "../../../main"
export default {
  data () {
    return {
      jjoneidarr: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    jjonedata () {
      layers_jjone.forEach(item => {
        this.jjoneidarr.push(item.id)
      })
    },
    showjjone (flag) {

      if (flag) {

        __g.infoTree.show(this.jjoneidarr);
      } else {

        __g.infoTree.hide(this.jjoneidarr);
      }
    }
  },
  created () {
    this.jjonedata()
  },
  mounted () {
    // console.log(layers_jjone);
    // showtuceng(layers_jjone)
    this.showjjone(true)
    clear_jj100()
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    // clear_jj100()
    this.showjjone(false)
    this.$store.commit("clickData", {})
    __g.tileLayer.stopHighlightActor();



  },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang='scss' scoped>
</style>
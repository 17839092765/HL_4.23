<template>
  <div class="zslc">12321321321</div>
</template>

<script>
import layers_jjone from "../../../assets/js/jjone.js";
import { showtuceng, hidetuceng } from "../../../util/showtuceng";
import { clear_jj100 } from "../../../util/clickEvt";
import { mapState } from "vuex";
import { showdata } from "../../XZSJ/showdata";
export default {
  data() {
    return {
      jjoneidarr: [],
      layerdata: [],
      dataBei: {},
    };
  },
  computed: {
    ...mapState({
      clickData: (state) => showdata(state.clickData),
    }),
  },
  watch: {},
  methods: {
    jjonedata() {
      layers_jjone.forEach((item) => {
        this.jjoneidarr.push(item.id);
      });
    },
    showjjone(flag) {
      //      layers_jjone.forEach((item, index) => {
      //   let lastid_ = item.id;
      //   __g.tileLayer.setTranslation(lastid_, [510447.46875, 2494084.25, 20]);
      // });
      if (flag) {
        __g.infoTree.show(this.jjoneidarr);
      } else {
        __g.infoTree.hide(this.jjoneidarr);
      }
    },
  },
  created() {
    this.jjonedata();
    __g.tileLayer.stopHighlightActor();
  },
  mounted() {
    console.log(this.dataBei, 12111111111111111);
    this.dataBei = this.$store.state.clickData;
    console.log(this.dataBei, 12111111111111111);
    this.showjjone(true);
    clear_jj100();
    __g.infoTree.hide("510E89A04A6F36F2AF26A5A56A36AD69");
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    console.log(this.dataBei, 99988888888888888888888);
    clear_jj100();
    this.showjjone(false);
    __g.infoTree.show("510E89A04A6F36F2AF26A5A56A36AD69");
  },
  destroyed() {
    this.$store.commit("clickData", this.dataBei);
  },
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>

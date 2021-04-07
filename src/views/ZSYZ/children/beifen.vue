<template>
  <div class="zsly">
    <div class="zslycase">
      <div class="zslycase_top">
        <div class="title">
          <span>地标</span>
          <!-- <span>{{clickData}}</span> -->
          <p v-if="clickData[2]">{{ clickData[2].data }}</p>
        </div>
        <div class="classname">
          <span>招商类型</span>
          <span>{{ zhaoshangClass }}</span>
        </div>
        <div class="louyucase"></div>
      </div>
      <div class="zslycase_center">
        <div class="titcase">
          <i class="el-icon-office-building"></i>
          <span>建筑信息</span>
        </div>
        <div class="buildingcase">
          <div class="case" v-for="(item, index) in clickData" :key="index">
            {{ item.name }}
            {{ item.data }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { showtuceng, hidetuceng } from "../../../util/showtuceng.js";
import { showdata } from "../../XZSJ/showdata";
// import __g from "../../../main";
export default {
  data () {
    return {};
  },
  computed: {
    ...mapState({
      clickData: (state) => showdata(state.clickData),
    }),
  },
  watch: {},
  methods: {},
  created () { },
  mounted () {
    showtuceng(this.$treedata.zsyzdata);
    __g.camera.lookAt(
      510264.09375,
      2493521.0,
      650.484497,
      -26.054821,
      -63.835243,
      -30
    );
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng([this.$treedata.zsyzdata[2]]);
    this.$store.commit("clickData", {});
    __g.tileLayer.stopHighlightActor();
  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
.zslycase {
  width: 20%;
  height: calc(100% - 80px);
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.171);
}
</style>

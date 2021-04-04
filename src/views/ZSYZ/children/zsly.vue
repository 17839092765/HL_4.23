<template>
  <div class='zsly'>
    <div class="zslycase">
      <div class="zslycase_top">
        <div class="title">
          <span>地标</span>
          <!-- <span>{{clickData}}</span> -->
          <p v-if="clickData[2]">{{clickData[2].data}}</p>
        </div>
        <div class="classname">
          <span>招商类型</span>
          <span>{{zhaoshangClass}}</span>
        </div>
        <div class="louyucase">

        </div>
      </div>
      <div class="zslycase_center">
        <div class="titcase">
          <i class="el-icon-office-building"></i>
          <span>建筑信息</span>
        </div>
        <div class="buildingcase">
          <div class="case" v-for="item,index in clickData" :key="index">

            {{item.name}}
            {{item.data}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { showtuceng, hidetuceng } from "../../../util/showtuceng.js"
import { showdata } from "../../XZSJ/showdata"
export default {
  data () {
    return {
      louyuName: '1',
      zhaoshangClass: '2'
    };
  },
  computed: {
    ...mapState({
      clickData: state => showdata(state.clickData),
    })
  },
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {
    showtuceng(this.$treedata.zsyzdata);
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {
    hidetuceng([this.$treedata.zsyzdata[2]])

  },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang='scss' scoped>
.zslycase {
  width: 20%;
  height: calc(100% - 100px);
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.295);
}
</style>
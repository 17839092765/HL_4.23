<template>
  <div class='search'>
    <div class="showtab">
      <div class="tit">全球 • 仅华尔街才有此金融地位</div>
      <div class="showtab_box">
        <div class="one">
          <i>icon</i>
          <span>搜房</span>
        </div>
        <div class="two">
          <i>icon</i>
          <span>高级搜索</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
  components: {},
}
</script>

<style lang='scss' scoped>
.search {
  position: absolute;
  bottom: 0;
  // bottom: 0;
  // width: 100%;
  // height: 100px;
  // background: rgba(0, 0, 0, 0.295);
  z-index: 20;
  .showtab {
    width: 500px;
    height: 150px;
    background: rgba(0, 0, 0, 0);

    .tit {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      color: white;
      text-align: left;
      text-indent: 50px;
    }
    .showtab_box {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .one {
        width: 210px;
        height: 75px;
        margin-left: 50px;
        background: rgba(255, 255, 255, 0.205);
        border: 1px solid rgba(255, 255, 255, 0.2);
        // filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .two {
        width: 210px;
        height: 75px;
        margin-left: 15px;
        background: rgba(255, 255, 255, 0.26);
        border: 1px solid rgba(255, 255, 255, 0.2);
        // filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
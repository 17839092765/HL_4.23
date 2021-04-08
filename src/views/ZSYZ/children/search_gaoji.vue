<template>
  <div class='search_gaoji'>
    <div class="searchblock">
      <div class="left">
        <p>
          <span>关键字</span><input type="text" v-model="key" name="" />
        </p>
        <p>
          <span>面积</span><input type="number" v-model="area_start" name="" />
          <span>-</span>
          <input type="number" name="" v-model="area_end" />
          <span>m2</span>
        </p>
      </div>
      <div class="center">
        <p>
          <span>租金</span><input type="number" v-model="money_start" name="" />
          <span>-</span>
          <input type="number" name="" v-model="money_end" />
          <span>元</span>
        </p>
      </div>
      <div class="right">
        <button @click="sumit">确定</button>
        <button @click="reset">清空</button>
      </div>
    </div>
    <div class="showblock">
      show
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
.search_gaoji {
  width: 100%;
  height: 100%;
  .searchblock {
    width: 48%;
    height: 100%;
    background: rgba(0, 0, 0, 0.288);
    float: left;
    margin-right: 10px;
  }
  .showblock {
    width: 48%;
    height: 100%;
    background: rgba(0, 0, 0, 0.199);
    float: left;
  }
}
</style>
<template>
  <div class="headertool">
    <div class="one">1</div>
    <div class="two">1</div>
    <div class="three">
      <i class="el-icon-setting"></i>
    </div>
    <div class="four">
      {{ time }}
    </div>
    <div class="five">1</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      time: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    gettime() {
      this.timer = setInterval(() => {
        this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
  },
  created() {
    this.gettime();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.headertool {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20%;
    height: 100%;
    font-size: 20px;
    /* background: #000; */
  }
}
</style>

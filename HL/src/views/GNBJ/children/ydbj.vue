<template>
  <div class="ydbj">
    <LandLayout />
    <div class="tuli">
      <div class="tulicase">
        <div class="tittop">
          
        </div>
        <div class="box" v-for="(item, index) in tulidata" :key="index">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="list" v-for="(mon, index) in item.case" :key="index">
            <div :style="'background:' + mon.color" class="left"></div>
            <div class="right">
              {{ mon.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandLayout from "../../../components/gnbjCom/LandLayout.vue";
import { showtuceng, hidetuceng } from "../../../util/showtuceng";

export default {
  data() {
    return {
      tulidata: [
        {
          title: "商业类",
          case: [
            {
              color: "#E1B0B9",
              name: "零售商业",
            },
            {
              color: "#B8626E",
              name: "商业综合体",
            },
            {
              color: "#8E2837",
              name: "特色商业街",
            },
          ],
        },
        {
          title: "办公类",
          case: [
            {
              color: "#C1E8F7",
              name: "办公",
            },
            {
              color: "#6EAEC9",
              name: " 研发/子公司",
            },
            {
              color: "#35809F",
              name: "总部",
            },
          ],
        },
        {
          title: "住宅类",
          case: [
            {
              color: "#F8E0C9",
              name: "公寓",
            },
            {
              color: "#DAAF82",
              name: "住宅",
            },
            {
              color: "#DAAF82",
              name: "酒店",
            },
            {
              color: "#72410E",
              name: "保障房",
            },
          ],
        },
        {
          title: "配套及文化设施类",
          case: [
            {
              color: "#EBDAEA",
              name: "幼儿园",
            },
            {
              color: "#D0A3D3",
              name: "文化配套",
            },
            {
              color: "#A17BA4",
              name: "学校",
            },
            {
              color: "#A35EA6",
              name: "文创类",
            },
            {
              color: "#782E7A",
              name: "法院",
            },
          ],
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    showtuceng(this.$treedata.gnbjyd);
    if (__g) {
      __g.camera.lookAt(
      512437.656250,
      2494145.750000,
      1536.795898,
      -31.845427,
      -151.657822,
        -30.48118
      );
    }
    // 07EFC3294AC6FE975EC0BF99DE067C49
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.gnbjyd);
  },
  destroyed() {},
  activated() {},
  components: { LandLayout },
};
</script>

<style lang="scss" scoped>
.tuli {
  width: 680px;
  height: 300px;
  /* background: #000; */
  position: absolute;
  right: 10px;
  top: 150px;
  .tulicase {
    .tittop {
      float: left;
      width: 20px;
      font-size: 18px;
    }
    .box {
      width: 160px;
      margin-left: 5px;
      text-align: left;
      height: 100%;
      float: left;
      .title {
        margin-bottom: 10px;
        font-weight: 600;
      }
      .list {
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        .left {
          width: 30%;
          height: 20px;
          border-radius: 2px;
          float: left;
        }
        .right {
          margin-left: 10px;
          width: 60%;
          height: 20px;
          float: left;
        }
      }
    }
  }
}
</style>

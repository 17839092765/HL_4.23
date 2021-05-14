<template>
  <div class="zslc">
    <div v-if="clickData1[0].name == '楼层' && black" class="rightdatacase">
      <p></p>
      <div class="tittop">
        <i class="icon"></i>
        <span>{{ clickData1[1] ? clickData1[0].data : "..." }}</span>
      </div>
      <!-- <div class="zhaoshangclass">
        {{ "招商类型" }}
      </div> -->
      <div class="zsbox">
        <div class="left">
          <div class="icon"></div>
          <div class="case">
            <p>已入驻单元</p>
            <p>
              {{
                clickData1[3]
                  ? clickData1[3].usestatus.split(",")[0]
                  : "无数据"
              }}个
            </p>
          </div>
        </div>
        <div class="right">
          <div class="icon"></div>
          <div class="case">
            <p>剩余单元</p>
            <p>
              {{
                clickData1[3] ? clickData1[3].usestatus.split(",")[0] : "无数据"
              }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="clickData1[1]" class="ruzhu">
        <div class="tit">入驻企业</div>
        <div
          v-for="(item, index) in clickData1[1]
            ? clickData1[1].data.split(',')
            : [0]"
          :key="index"
          :class="
            item.indexOf('虚位以待') !== -1 ? 'ruzhu_case xuwei' : 'ruzhu_case'
          "
        >
          <p>
            <span>
              {{ item.split("|")[0] }}
            </span>
            <span>
              {{ item.split("|")[1] }}
            </span>
            <!-- <span>{{item}}</span> -->
            <span>{{
              item.indexOf("虚位以待") !== -1
                ? clickData1[2].area.split(",")[index] + "㎡"
                : ""
            }}</span>
          </p>
        </div>
      </div>
      <div @click="blackjj100case" class="black">
        <div class="icon"></div>
        <div class="tit">
          返回楼栋
        </div>
      </div>
    </div>
    <div v-else-if="isjj100" class="jj100data">
      <JJ100CASE />
    </div>
    <div v-else class="nodata">
      暂无数据
    </div>
  </div>
</template>

<script>
import layers_jjone from "../../../assets/js/jjone.js";
import { showtuceng, hidetuceng } from "../../../util/showtuceng";
import { clear_jj100 } from "../../../util/clickEvt";
import { mapState } from "vuex";
import { showdata } from "../../XZSJ/showdata";
import JJ100CASE from "./jj100Case";
export default {
  data() {
    return {
      black: true,
      isjj100: false,
      jjoneidarr: [],
      layerdata: [],
      dataBei: {},
    };
  },
  computed: {
    ...mapState({
      clickData: (state) => showdata(state.clickData ? state.clickData : []),
      clickData1: (state) => showdata(state.clickData ? state.clickData : []),
    }),
  },
  watch: {
    clickData1(a, b) {
      console.log(a, 12313123213213);
      console.log(b, 22222222222222);
      this.black = true;
    },
  },
  methods: {
    blackjj100case() {
      this.isjj100 = true;
      this.black = false;
      clear_jj100();
    },
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
    console.log(this.clickData1, 888777666555);
    console.log(this.clickData1[2].data);
    if (this.clickData1[2].data === "京基100大厦") {
      this.isjj100 = true;
    }
  },
  mounted() {
    this.dataBei = this.$store.state.clickData;
    this.showjjone(true);
    clear_jj100();
    __g.infoTree.hide("510E89A04A6F36F2AF26A5A56A36AD69");
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    // __g.infoTree.show("510E89A04A6F36F2AF26A5A56A36AD69");
    console.log(this.dataBei, 99988888888888888888888);
    clear_jj100();
    this.showjjone(false);
    __g.tileLayer.stopHighlightActor();
  },
  destroyed() {
    this.$store.commit("clickData", this.dataBei);
  },
  activated() {},
  components: { JJ100CASE },
};
</script>

<style lang="scss" scoped>
.zslc {
  width: 100%;
  height: 100%;
}
.rightdatacase {
  // padding: 0 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  font-weight: 600;

  height: calc(100%);
  /* background: rgba(0, 0, 0, 0.329); */
  .black {
    width: 150px;
    height: 50px;
    background: rgba(0, 0, 0, 0.411);
    display: flex;
    position: absolute;
    left: 20%;
    bottom: 10%;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    .icon {
      width: 30%;
      height: 100%;
      background: url("../../../assets/img/4招商引资/icon_返回.svg") no-repeat
        center/cover;
    }
    .tit {
      width: 50%;
      height: 100%;
      line-height: 50px;
      text-align: center;
    }
  }
  .tittop {
    width: 200px;
    height: 40px;
    margin-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url("../../../assets/img/4招商引资/icon_招商楼层.svg")
        no-repeat center;
      margin-top: 10px;
      vertical-align: bottom;
    }
    > span {
      font-size: 20px;
      color: #fff;
      display: inline-block;
      width: 100px;
      height: 30px;
      line-height: 30px;
    }
  }
  .zhaoshangclass {
    width: 149px;
    /* padding: 10px; */
    height: 55px;
    background: #007ad9;
    line-height: 55px;
    margin: 20px 0;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .zsbox {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    box-sizing: border-box;

    > div {
      width: 40%;
      float: left;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: 50px;
        height: 50px;
        border: 1px solid #fff;
        border-radius: 50%;
        background: url("../../../assets/img/4招商引资/icon_已招商单元.svg")
          no-repeat center/cover;
      }
      .case {
        p:nth-of-type(1) {
          font-size: 14px;
        }
        p:nth-of-type(2) {
          color: #00f5f7;
          font-size: 16px;
          margin-top: 10px;
        }
      }
    }
  }
  .ruzhu {
    .tit {
      width: 200px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      font-size: 20px;
      margin: 20px 0;
    }
    .ruzhu_case {
      margin: 3px auto;

      width: 90%;
      height: 50px;
      background: rgba(69, 77, 72, 0.4);
      border-radius: 2px;
      // filter: blur(15px);
      p {
        text-indent: 10px;
        width: 100%;
        height: 100%;
        font-size: 20px;
        line-height: 50px;
        span:nth-of-type(1) {
          /* display: inline-block; */
          width: 30%;
          color: #00f5f7;
          text-overflow: ellipsis;
          white-space: nowrap;
          float: left;
        }
        span:nth-of-type(2) {
          /* display: inline-block; */
          float: left;
          width: 70%;
          font-size: 14px;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .xuwei {
    background: linear-gradient(180deg, #f6faff 0%, #c4c8ce 100%);
    border-radius: 4px;
    opacity: 0.89;
    border: 2px solid rgba(255, 255, 255, 0.6);
    /* filter: blur(15px); */
    span:nth-of-type(1) {
      /* display: inline-block; */
      width: 30% !important;
      color: #00ffa6 !important;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
    }
    span:nth-of-type(2) {
      /* display: inline-block; */
      float: left;
      width: 40% !important;
      font-size: 14px;
      color: #00ffa6 !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span:nth-of-type(3) {
      /* display: inline-block; */
      float: left;
      width: 30% !important;
      font-size: 14px;
      color: #00ffa6 !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

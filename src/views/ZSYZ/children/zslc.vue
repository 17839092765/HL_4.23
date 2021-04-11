<template>
  <div class='zslc'>
    <div class="rightdatacase">
      <div class="tittop">
        <i class="icon"></i>
        <span>{{clickData1[1]?clickData1[0].data:"..."}}</span>
      </div>
      <div class="class">
        {{"招商类型"}}
      </div>
      <div class="zsbox">
        <div class="left">
          <div class="icon"></div>
          <div class="case">
            <p>已入驻单元</p>
            <p>{{clickData1[1]?clickData1[1].data.split(',').length:"..."}}个</p>
          </div>
        </div>
        <div class="right">
          <div class="icon"></div>
          <div class="case">
            <p>剩余单元</p>
            <p>{{}}个</p>
          </div>
        </div>
      </div>
      <div class="ruzhu">
        <div class="tit">入驻企业</div>
        <div v-for="item,index in clickData1[1]?clickData1[1].data.split(','):[0]" :key="index" class="ruzhu_case">
          <p>
            {{item}}
            <!-- <span>{{item}}</span>
            <span>{{item}}</span> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layers_jjone from "../../../assets/js/jjone.js"
import { showtuceng, hidetuceng } from "../../../util/showtuceng"
import { clear_jj100 } from "../../../util/clickEvt"
import { mapState } from "vuex";
import { showdata } from "../../XZSJ/showdata";


// import __g from "../../../main"
export default {
  data () {
    return {
      jjoneidarr: []

    };
  },
  computed: {
    ...mapState({
      clickData1: (state) => showdata(state.clickData ? state.clickData : []),

    }),
  },
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
  beforeUpdate () {
    //[{ "name": "楼层", "data": "63层" }, { "name": "入驻企业", "data": "深圳前海瑞鑫网际网路金融有限公司（63楼部分）、关东地生态农业（深圳）有限公司（6301室）、兴业证券（6307室）" }]
  },
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
.rightdatacase {
  padding: 0 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;

  width: 20%;
  font-weight: 600;

  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.185);
  .tittop {
    width: 200px;
    height: 40px;
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
    }
    > span {
      font-size: 20px;
      color: #fff;
      display: inline-block;
      width: 100px;
      height: 40px;
      line-height: 40px;
    }
  }
  .class {
    width: 149px;
    padding: 10px;
    height: 25px;
    background: #007ad9;
    line-height: 25px;
    margin: 10px 0;
  }
  .zsbox {
    width: 100%;
    height: 50px;
    margin: 20px 0;
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
      width: 80%;
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
          display: inline-block;
          width: 40%;
          color: #00f5f7;
        }
        span:nth-of-type(2) {
          width: 60%;

          color: #fff;
        }
      }
    }
  }
}
</style>
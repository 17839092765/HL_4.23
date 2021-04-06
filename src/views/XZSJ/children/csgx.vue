<template>
  <div class='csgx'>
    <div class="datacase">
      <div id="echarts4"></div>

      <div class="cityshow">
        <div class="img">

          <img v-if="clickData1[0]==1" src="../../../assets/img/updata/1.png" alt="">
          <img v-else-if="clickData1[0]==3" src="../../../assets/img/updata/3.jpg" alt="">
          <img v-else-if="clickData1[0]==5" src="../../../assets/img/updata/5.jpg" alt="">
          <img v-else-if="clickData1[0]==6" src="../../../assets/img/updata/6.jpg" alt="">
          <img v-else-if="clickData1[0]==7" src="../../../assets/img/updata/7.jpg" alt="">
          <img v-else-if="clickData1[0]==9" src="../../../assets/img/updata/9.jpg" alt="">
          <img v-else-if="clickData1[0]==11" src="../../../assets/img/updata/11.jpg" alt="">
          <img v-else src="../../../assets/img/updata/1.png" alt="">
        </div>
        <div v-for="item,index in clickData1[1]" :key="index" class="case">
          <span>
            {{item.name}}
          </span>
          <span>
            {{item.data}}
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { mapState } from "vuex"
import { showdata } from "../showdata"
export default {
  data () {
    return {

    };
  },
  computed: {
    ...mapState({
      // 筛选过得数据
      clickData1: state => showdata(state.clickData),
      // 。原始数据
      clickData: state => state.clickData,
      // 图则内容的显示隐藏
      dataCaseisShow: state => state.dataCaseisShow
    })
  },
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {
    var chartDom = document.getElementById('echarts4');
    var myChart = echarts.init(chartDom);
    var option;
    myChart.on('click', (params) => {


      console.log(params);


      // if (params.seriesName == "法定图则") {
      //   if (params.name === "商业服务业用地") {
      //     Glow(this.ChuLiOs("0.25098039215686274,1,0.00392156862745098,1"))

      //   } else if (params.name === "公共管理与服务设施用地") {
      //     Glow(this.ChuLiOs("0.24705882352941178,1,0,1"))

      //   } else if (params.name === "工业用地") {
      //     Glow(this.ChuLiOs("0,0.7490196078431373,1,1"))

      //   } else if (params.name === "居住用地") {
      //     Glow(this.ChuLiOs("1,1,0,1"))

      //   } else if (params.name === "物流仓储用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   } else if (params.name === "公共设施用地") {
      //     Glow(this.ChuLiOs("0.25098039215686274,1,0.00392156862745098,1"))

      //   } else if (params.name === "交通设施用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   } else if (params.name === "绿地与广场用地") {
      //     Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      //   }
      // }
      // if (params.name === "注记") {

      //   Glow(this.ChuLiOs("1,1,1,1"))
      // } else if (params.name === "已发证") {
      //   Glow(this.ChuLiOs("1,0.8745098039215686,0.5019607843137255,1"))

      // } else if (params.name === "商业服务业用地") {
      //   Glow(this.ChuLiOs("1,1,0,1"))

      // } else if (params.name === "备案") {

      //   Glow(this.ChuLiOs("0.9764705882352941,0.5058823529411764,0.47843137254901963,1"))
      // } else if (params.name === "待处理") {

      //   Glow(this.ChuLiOs("0.49411764705882355,0.6235294117647059,0.996078431372549,1"))
      // } else if (params.name === "军产用地") {

      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))
      // } else if (params.name === "其他用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "公共管理与服务设施用地") {
      //   Glow(this.ChuLiOs("0.24705882352941178,1,0,1"))

      // } else if (params.name === "工业用地") {
      //   Glow(this.ChuLiOs("0,0.7490196078431373,1,1"))

      // } else if (params.name === "居住用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "物流仓储用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "公共设施用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "交通设施用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // } else if (params.name === "绿地与广场用地") {
      //   Glow(this.ChuLiOs("0.6431372549019608,0.8666666666666667,0,1"))

      // }
    });
    option = {
      color: ['#9CE8AA', '#ED494A', '#8565EE', '#FCF46D', '#DF9BE8'],
      backgroundColor: '#00032C',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}个'
      },
      legend: {
        orient: 'horizontal',
        left: 'center',
        show: true,
        data: ['已完工项目', '在建项目', '已批规划未开工项目', '已批计划未批规划项目', '已申报受理项目'],
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: '城市更新',
          type: 'pie',
          radius: ['30%', '70%'],
          center: ['50%', '60%'],
          avoidLabelOverlap: false,
          selectedMode: 'single',
          animationDuration: 2000,
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: '16',
            formatter: '{c}个',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 3, name: '已完工项目' },
            { value: 9, name: '在建项目' },
            { value: 3, name: '已批规划未开工项目' },
            { value: 7, name: '已批计划未批规划项目' },
            { value: 2, name: '已申报受理项目' }
          ]
        }
      ]
    };
    option && myChart.setOption(option);

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


<style lang="scss" scoped>
#echarts4 {
  width: 90%;
  height: 400px;
  margin: 0 auto;
  // padding: 10px;
}
.datacase {
  padding: 20px 10px;
  box-sizing: border-box;
  width: 20%;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.308);
  position: absolute;
  border-radius: 20px 20px 0 0;
  // top: 0;
  right: 0;
  .clickdata {
    overflow-y: scroll;
    width: 100%;
    height: 300px;
    background: rgb(121, 117, 117);
    .title {
      height: 30px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      font-weight: 600;
    }
  }
  .cityshow {
    .img {
      width: 100%;
      height: 100px;
      img {
        width: 50%;
      }
    }
  }
}
</style>

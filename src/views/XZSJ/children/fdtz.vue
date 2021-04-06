<template>
  <div class="fdtz">
    <div class="datacase">
      <div id="echarts1"></div>
      <div v-show="dataCaseisShow" class="clickdata">
        <div class="title">
          {{clickData.title?clickData.title:'Loding...'}}
          <!-- {{clickData1}} -->
        </div>
        <div v-for="item,index in clickData1" :key="index" class="case">
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
    return {};
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
  methods: {},
  created () { },
  mounted () {
    var chartDom = document.getElementById('echarts1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      color: ['#FA013B', '#ED28EE', '#7D684B', '#FFFF00', '#A66EDD', '#2D86E0', '#00B8B8', '#40FF01', '#608545'],
      backgroundColor: '#00032C',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%'
      },
      legend: {
        orient: 'horizontal',
        bottom: '2%',
        show: true,
        data: ['商业服务业用地', '公共管理与服务设施用地', '工业用地', '居住用地', '物流仓储用地', '公用设施用地', '交通设施用地', '绿地与广场用地', '其他用地'],
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: '法定图则',
          type: 'pie',
          radius: ['30%', '45%'],
          center: ['50%', '40%'],
          avoidLabelOverlap: true,//开启后饼图上的文字不会重叠，并且鼠标移入后文字不会消失
          selectedMode: 'single',
          animationDuration: 2000,
          label: {
            show: true,
            position: 'outside',
            color: '#fff',
            fontSize: '16',
            formatter: '{d}%',
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 27.09, name: '商业服务业用地' },
            { value: 11.76, name: '公共管理与服务设施用地' },
            { value: 0.45, name: '工业用地' },
            { value: 15.62, name: '居住用地' },
            { value: 4.57, name: '物流仓储用地' },
            { value: 2.31, name: '公用设施用地' },
            { value: 32.61, name: '交通设施用地' },
            { value: 4.62, name: '绿地与广场用地' },
            { value: 0.97, name: '其他用地' },

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
  beforeDestroy () {

  },
  destroyed () { },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
#echarts1 {
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

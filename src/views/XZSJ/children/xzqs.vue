<template>
  <div class='xzqs'>

    <div class="datacase">
      <div id="echarts3"></div>

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
    console.log(111111);
  },
  mounted () {
    var chartDom = document.getElementById('echarts3');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      color: ['#FD0000', '#017BF6', '#00FF3F', '#FE9E7E', '#00FFFF',],
      backgroundColor: '#00032C',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}个'
      },
      legend: {
        orient: 'horizontal',
        left: 'center',
        show: true,
        data: ['已发证', '备案', '注记', '待处理', '军产用地'],
        textStyle: {
          color: '#fff',
        },

      },
      series: [
        {
          name: '现状权属',
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
            { value: 42, name: '已发证' },
            { value: 16, name: '备案' },
            { value: 25, name: '注记' },
            { value: 35, name: '待处理' },
            { value: 6, name: '军产用地' },

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
#echarts3 {
  width: 90%;
  height: 400px;
  margin: 0 auto;
  // padding: 10px;
}
.datacase {
  padding: 0 10px;
  box-sizing: border-box;
  width: 20%;
  height: calc(100% - 100px);
  background: rgba(0, 0, 0, 0.308);
  position: absolute;
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

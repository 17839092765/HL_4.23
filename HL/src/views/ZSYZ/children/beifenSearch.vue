<template>
  <div refs='modal' class="prop_search">
    <!-- 左侧召开图层列表图标 -->
    <el-tooltip class="item" effect="dark" content="展开查询结果" placement="left">
      <i v-if="!hideshowicon" class="el-icon-s-fold"
        style="position: absolute;right: 1px;color: #fff;top: 12%;cursor:pointer;    font-size: 30px;"
        @click="Hideselecmodal"></i>
    </el-tooltip>
    <!-- 高级搜索栏 -->
    <div v-if="modal3" class="search">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item class="form_search" label="面积(㎡)" :rules="[
      { required: true, message: '面积不能为空'},
      { type: 'number', message: '面积必须为数字值'}
    ]">
          <el-input v-model.number="form.area1" placeholder='1000'></el-input>
          <span style="margin:0px 10px;color:#fff">—</span>
          <el-input v-model.number="form.area2" placeholder='5000'></el-input>
        </el-form-item>
        <el-form-item class="form_search" label="租金(元)">
          <el-input v-model.number="form.money1" placeholder='100'></el-input>
          <span style="margin:0px 10px;color:#fff">—</span>
          <el-input v-model.number="form.money2" placeholder='200'></el-input>
        </el-form-item>
        <el-form-item class="form_search" label="区域">
          <el-select v-model="form.region" placeholder="请选择购买区域">
            <el-option v-for="(item,index) in form.distinct" :label="item.name" :value="item.value" :key="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="form_search" label="重点楼宇">
          <el-select v-model="form.region" placeholder="所有楼宇">
            <el-option v-for="(item,index) in form.building" :label="item.name" :value="item.value" :key="index">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="form_search">
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button type="primary" @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 查询后的数据表格 -->
    <div v-if="modal4" class="selecttab">
      <div class="iconspan">
        <!-- 关闭 -->
        <i class="el-icon-close" style="position: relative;right: 1;left: 92%;color: #fff;top: 20px;cursor:pointer"
          @click="Closemodal"></i>
        <i class="el-icon-s-unfold"
          style="position: relative;  left: 94%; color: rgb(255, 255, 255);top: 20px;cursor: pointer;"
          @click="Hideselecmodal"></i>
        <!-- 返回上级 -->
        <div class="returnicon">
          <!-- <i class=" el-icon-arrow-left" @click='returnfn'></i>
          <span>返回上级</span> -->

          <el-page-header v-show="returnicon" @back="returnfn" content='楼宇信息'>
          </el-page-header>
        </div>
        <!-- 显示隐藏按钮 -->
        <!-- <el-tooltip class="item" effect="dark" content="收起查询结果" placement="right">
        </el-tooltip> -->
      </div>
      <!-- <div class="pageone"> -->
      <el-table :data="tableData" style="width: 100%;background: transparent;" height="240" @row-dblclick='rowdblclick'
        @row-click="rowclick" @selection-change="handleSelectionChange">

        <!-- <el-table-column  type="selection" width="55" fixed align="center">
        </el-table-column> -->
        <el-table-column v-for="(item,index) in tablecolumn" :key="index" :prop="item.prop" :label="item.label"
          :width="item.width" align="center">
        </el-table-column>
      </el-table>

      <!-- 分页栏 -->
      <el-pagination layout="prev, pager, next" :total="total" :current-page='currentpage'
        @current-change='handleCurrentChange' :page-size='pagesize'>
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import connector from '../../../api/common'
// import { movelayer, clear_jj100, lightsearch_tile, lightfeature_tile } from '../assets/js/clickEvt'
export default {
  data () {
    return {
      //查询 前表格
      modal3: false,
      // 查询后表格 
      modal4: false,
      hideshowicon: true,
      returnicon: false,
      title: '高级搜索',
      currentpage: 1,
      pagesize: 5,
      total: 100,
      row: {},
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        area1: '',
        area2: '',
        money1: '',
        money2: '',
        distinct: [
          { name: '北段', value: "north" },
          { name: '中段', value: "center" },
          { name: '南段', value: "south" }],

        building: [
          { name: '所有楼宇', value: "allbuilding" },
          { name: '京基100', value: "jj100" },
          { name: '地王大厦', value: "king" }],
      },
      formdata: [{
        name: '面积',
        data: 'm²'
      }, {
        name: '租金',
        data: '元'
      },
      {
        name: '楼宇',
        data: ''
      }],
      // formdata: [],
      formLabelWidth: '80px',
      Buildingcheck: false,
      tablecolumn: [],
      tablecolumn2: [
        {
          prop: "buildname",
          label: "楼宇名称",
          width: "120",
        },
        {
          prop: "floor",
          label: "楼层",
          width: "100",
        },
        {
          prop: "area",
          label: "面积(㎡)",
          width: "100",
        },
        {
          prop: "rent",
          label: "租金(元/平)",
          width: "120",
        }, {
          prop: "company",
          label: "入驻企业",
          width: "",
        }
      ],
      tableData: [],
      multipleSelection: [],
      tableData2: [{
        date: '京基100',
        name: '10',
        address: '2000',
        money: 100,
        company: '深圳市中荣源投资有限公司（2501室）、深圳日兆伟业有限公司（2508室）'
      }, {
        date: '京基100',
        name: '10',
        address: '2000',
        money: 100,
        company: '深圳市中荣源投资有限公司（2501室）、深圳日兆伟业有限公司（2508室）'
      },
      {
        date: '京基100',
        name: '10',
        address: '2000',
        money: 100,
        company: '深圳市中荣源投资有限公司（2501室）、深圳日兆伟业有限公司（2508室）'
      },
      {
        date: '京基100',
        name: '10',
        address: '2000',
        money: 100,
        company: '深圳市中荣源投资有限公司（2501室）、深圳日兆伟业有限公司（2508室）'
      },
      {
        date: '京基100',
        name: '10',
        address: '2000',
        money: 100,
        company: '深圳市中荣源投资有限公司（2501室）、深圳日兆伟业有限公司（2508室）'
      },
      ],
      tableData1: [{
        date: '京基100',
      },
      {
        date: '帝王大厦',
      },
      {
        date: '华润中心',
      },],
      tablecolumn1: [
        {
          prop: "建筑名称",
          label: "楼宇名称",
          width: "120",
        },
        {
          prop: "建筑编码",
          label: "楼宇编号",
          width: "200",
        },
        {
          prop: "建筑地址",
          label: "地址信息",
          width: "",
        },

      ],

    }
  },
  computed: {
    ...mapState({
      modalbool: state => state.modalbool,
      clickData: state => state.clickData,
      advancedsearch: state => state.advancedsearch,
      searchBool: state => state.searchBool

    }),
  },
  mounted () {
    // this.onSubmit(val);
  },
  methods: {
    //确认查询后请求数据接口，显示表格
    async onSubmit (val) {
      this.onCancel()
      this.returnicon = false
      // debugger
      var request = {
        minArea: this.form.area1,
        maxArea: this.form.area2,
        minRent: this.form.money1,
        maxRent: this.form.money2,
        isFree: true
      }
      // var data = await connector.layer_select(request)
      var data = await connector.buiding_select(request)
      // data.forEach(ele => {
      //   console.log(ele);
      // })
      console.log(data);
      this.tableData1 = data.data.list
      this.tablecolumn = this.tablecolumn1
      this.tableData = this.tableData1
      this.modal4 = true
    },
    //取消筛选查询
    onCancel () {
      this.modal3 = false
      this.$store.commit('advancedsearch', this.modal3)
    },
    //双击点选一行时，获该行的楼层id，根据id请求楼层信息
    async rowdblclick (row) {
      console.log(row);
      let that = this
      this.row = row
      this.hideshowicon = false
      this.modal4 = false
      var rent
      //存在租金的点击事情，请求该楼层的数据
      this.tablecolumn.forEach(element => {
        var data = element.prop
        if (data == 'rent') {
          rent = 'rent'
        }
      });
      if (rent != null) {
        if (row.buildname == '京基100大厦') {
          console.log(1323445, row)
          var arr = []
          arr.push(row.fid)
          // clear_jj100()
          //根据点击事件获取id，偏移该楼层
          // movelayer(arr)
          var tileid = row.fid
          var actorid = 'JJ100_' + row.name.slice(7)
          var lightdata = {
            Id: row.fid,
            Name: actorid
          }
          // lightsearch_tile(lightdata)
          __g.tileLayer.focusActor(tileid, actorid)
          //请求该楼层的信息
          var rcdata = await connector.layer_jj100_one(arr[0])
          var title = '楼层信息'
          var data_show = {
            title: title,
            data: rcdata.data
          }
          this.$store.commit('clickData', data_show)
        }
      } else {
        //不存在请求该大厦的空置数据
        this.returnicon = !this.returnicon
        this.Selectlayer(row)

      }


    },
    // 单击点选一行时，获该行的楼宇id和name，高亮该楼宇
    rowclick (row) {
      var data = {};
      data.Id = "1D9E9EE240796168C21377B678579D20";
      // Name -> ObjectID
      data.ObjectID = row['建筑编码'];
      console.log(data);
      // lightfeature_tile(data)
    },
    //
    handleSelectionChange (val) {
      console.log(val, 'val')
    },
    //x图标关闭按钮
    Closemodal () {
      this.modal4 = false
    },
    //隐藏按钮
    Hideselecmodal () {
      this.hideshowicon = !this.hideshowicon
      this.modal4 = !this.modal4
    },
    // 返回上级的点击事件
    returnfn () {
      this.tablecolumn = this.tablecolumn1
      this.tableData = this.tableData1
      this.returnicon = !this.returnicon
    },
    //页数变化监听
    handleCurrentChange (data) {
      this.currentpage = data
      if (this.searchBool.data) {
        this.searchEVT(this.searchBool)
      } else {
        this.Selectlayer(this.row)
      }
    },
    //请求楼层的筛选数据
    async Selectlayer (row) {
      let that = this
      var buildId = row['建筑编码']
      var request = {
        minArea: this.form.area1,
        maxArea: this.form.area2,
        minRent: this.form.money1,
        maxRent: this.form.money2,
        buildId: buildId,
        pageSize: 5,
        pageNumber: that.currentpage,
        isFree: true
      }
      var data = await connector.buidingOne_select(request)
      this.tableData2 = data.data.list
      this.layerdis()
      this.tablecolumn = this.tablecolumn2
      this.tableData = this.tableData2
      this.modal4 = true
    },
    //提取楼层数
    layerdis () {
      console.log(this.tableData2)
      if (this.tableData2[0].buildname == '京基100大厦') {
        this.tableData2.forEach(item => {
          if (item.roomid != null) {
            item.name = item.floor + '_' + item.roomid

          } else {
            item.name = item.floor
          }
          item.floor = item.floor.slice(7) != '00' ? item.floor.slice(7) + '层' : '100层'
        })
      } else {
        this.tableData2.forEach(item => {
          item.name = item.floor
          let index = item.company.search(/\d/)
          item.floor = item.company.slice(index)
        })
      }
    },
    //搜索框的请求事件
    async searchEVT (newdata) {
      let that = this
      if (newdata.bool && newdata.bool == false) {
        this.modal4 = newdata.bool;
      } else {
        let data = newdata.data
        let request = {
          buildName: data,
          pageSize: 5,
          pageNumber: that.currentpage,
          isFree: true
        }
        let result = await connector.nameOne_select(request)

        this.tableData2 = result.data.list
        if (this.tableData2 != null) {
          this.layerdis()
          this.tablecolumn = this.tablecolumn2
          this.tableData = this.tableData2
          console.log(this.tableData2[0].count)
          this.total = this.tableData2[0].count
          this.modal4 = newdata.bool;
        } else {
          // this.$message.error('不存在相关数据');
          this.modal4 = false
        }
      }
    }
  },
  watch: {
    //监听弹窗的显示隐藏
    advancedsearch (newdata) {
      this.modal3 = newdata
    },
    //搜索框的监听
    searchBool (newdata) {
      this.searchEVT(newdata)
    }

  }
}
</script>

<style lang="scss" scoped>
// @import url("../assets/css/search.less");
.prop_search {
  width: 200px;
  height: 200px;
  position: relative;
  /* top: 10%; */
  top: 100px;
  z-index: 2;
  // background: rgba(35, 36, 36, 0.5);
}

.selecttab {
  // height: 400px;
  overflow: auto;
  // display: flex;
  // justify-content: center;
  // flex-direction: row;
  // background: rgba(6, 70, 120, 1);
  // background: radial-gradient(circle, rgba(0, 66, 119, 0.5) 30%, rgba(6, 70, 120, 0.8) 80%);
  // background: radial-gradient(circle, rgba(0, 66, 119, 0.5) 20%, rgba(6, 70, 120, 0.8) 60%);
  background: rgba(35, 36, 36, 0.5);
  margin: auto;
  width: 40%;
}

.el-table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  color: #fff;
  margin: 2px;

  margin-top: 20px;
  label {
    margin-right: 20px !important;
  }
  input {
    opacity: 1;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 30px;
    height: 20px;
    z-index: 2;
  }
}

.el-table thead {
  color: #fff;
  font-weight: 500;
  margin: 10px;
}

.el-table th,
.el-table tr {
  background-color: transparent;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(30, 30, 30, 0.2);
}

.search {
  // height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: row;
  // background: rgba(6, 70, 120, 1);
  background: rgba(35, 36, 36, 0.3);
  margin: auto;
  margin-left: 70%;
  width: 300px;
}

.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  // width: 50px;
}

.form_search {
  margin-bottom: 22px;
  border-bottom: none;
  margin: 30px 20px;
}

.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: row;
}

.el-button {
  background: transparent;
  padding: 12px 10px;
}

.el-pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  margin-top: 15px;
  margin-bottom: 10px;
}

.iconspan {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.returnicon {
  position: relative;
  color: rgb(255, 255, 255);
  top: 20px;
}

.el-pagination button:disabled {
  color: #c0c4cc;
  background-color: rgba(35, 36, 36, 0.5) !important;
  cursor: not-allowed;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: center center no-repeat rgba(35, 36, 36, 0.5) !important;
  background-size: 16px;
  cursor: pointer;
  margin: 0;
  color: #c0c4cc;
}
</style>
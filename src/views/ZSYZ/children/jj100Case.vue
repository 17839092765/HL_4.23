<template>
  <div class="jj100case">
    <div
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.2)"
      v-if="loading"
      class="loading111"
    ></div>
    <div v-if="!loading" class="jj100data">
      <div class="title">入驻企业</div>

      <div class="databox">
        <div class="leftslider">
          <el-slider
            @input="onChange"
            show-stops
            show-tooltip
            :marks="marks"
            v-model="value"
            vertical
            :min="1"
            :max="100"
            height="500px"
          >
          </el-slider>
        </div>
        <div class="rightdata">
          <div class="top">
            <div class="left">单元</div>
            <div class="right">企业名称</div>
          </div>
          <div
            v-for="(item, index) in jj100arr[newvalue - 1]"
            :key="index"
            class="rightcase"
            @click="goJJ100case(newvalue - 1)"
          >
            <div class="left">
              <p>{{ item[0] }}</p>
            </div>
            <div class="right">
              <p>{{ item[1] }}</p>
            </div>
          </div>
        </div>
        <!-- <div v-for="(item, index) in jj100data" :key="index" class="case">
          <div class="louceng">
            <div
              v-for="(mon, index) in item[0]"
              :key="index"
              class="louceng_case"
            >
              <p>
                {{ mon }}
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import connector from "../../../api/common";
import { mapState } from "vuex";
import { click_EVT_jj100 } from "../../../util/clickEvt";
export default {
  data() {
    return {
      value: [1, 100],
      newvalue: 1,
      marks: {
        1: {
          style: {
            color: "#fff",
            fontSize: "16px",
          },
          label: this.$createElement("strong", "1F"),
        },

        100: {
          style: {
            color: "#fff",
            fontSize: "16px",
          },
          label: this.$createElement("strong", "100F"),
        },
      },
      loading: true,
      jj100data: [],
      jj100ids: [],
      i: 0,
      objId: [
        " JJ100_001",
        "JJ100_002",
        "JJ100_003",
        "JJ100_004",
        "JJ100_005",
        "JJ100_006",
        "JJ100_007",
        "JJ100_008",
        "JJ100_009",
        "JJ100_010",
        "JJ100_011",
        "JJ100_012",
        "JJ100_013",
        "JJ100_014",
        "JJ100_015",
        "JJ100_016",
        "JJ100_017",
        "JJ100_018",
        "JJ100_019",
        "JJ100_020",
        "JJ100_021",
        "JJ100_022",
        "JJ100_023",
        "JJ100_024",
        "JJ100_025",
        "JJ100_026",
        "JJ100_027",
        "JJ100_028",
        "JJ100_029",
        "JJ100_030",
        "JJ100_031",
        "JJ100_032",
        "JJ100_033",
        "JJ100_034",
        "JJ100_035",
        "JJ100_036",
        "JJ100_037",
        "JJ100_038",
        "JJ100_039",
        "JJ100_040",
        "JJ100_041",
        "JJ100_042",
        "JJ100_043",
        "JJ100_044",
        "JJ100_045",
        "JJ100_046",
        "JJ100_047",
        "JJ100_048",
        "JJ100_049",
        "JJ100_050",
        "JJ100_051",
        "JJ100_052",
        "JJ100_053",
        "JJ100_054",
        "JJ100_055",
        "JJ100_056",
        "JJ100_057",
        "JJ100_058",
        "JJ100_059",
        "JJ100_060",
        "JJ100_061",
        "JJ100_062",
        "JJ100_063",
        "JJ100_064",
        "JJ100_065",
        "JJ100_066",
        "JJ100_067",
        "JJ100_068",
        "JJ100_069",
        "JJ100_070",
        "JJ100_071",
        "JJ100_072",
        "JJ100_073",
        "JJ100_074",
        "JJ100_075",
        "JJ100_076",
        "JJ100_077",
        "JJ100_078",
        "JJ100_079",
        "JJ100_080",
        "JJ100_081",
        "JJ100_082",
        "JJ100_083",
        "JJ100_084",
        "JJ100_085",
        "JJ100_086",
        "JJ100_087",
        "JJ100_088",
        "JJ100_089",
        "JJ100_090",
        "JJ100_091",
        "JJ100_092",
        "JJ100_093",
        "JJ100_094",
        "JJ100_095",
        "JJ100_096",
        "JJ100_097",
        "JJ100_098",
        "JJ100_099",
        "JJ100_100",
      ],
    };
  },
  computed: {
    ...mapState({
      jj100arr: (state) => state.jj100Arr,
      jj100ArrIds: (state) => state.jj100ArrIds,
    }),
  },
  watch: {},
  methods: {
    async goJJ100case(index) {
      const { data: result } = await connector.layer_jj100_one(
        this.jj100ArrIds[index]
      );
      let data_show = {
        title: "楼层信息",
        data: result,
      };
      this.$store.commit("clickData", data_show);

      click_EVT_jj100({
        Id: this.jj100ArrIds[index],
        ObjectID: this.objId[index],
      });
    },
    onChange(e) {
      console.log(e);
      this.newvalue = e;
    },
    async getJJ100Case() {
      console.log("开始查询jj100信息");
      let ids = [
        "13BB21E747D0088887B65999351943CA",
        "E2E61AD94CDD21A3EC1C6E95D48BD0FF",
        "ECB43C1C44C5452A489FD78AFCC460F4",
        "CC64481447EAA3625EBB02B12C091D56",
        "0FA42D184FF045F7D2CB7186124B038A",
        "C8F73804494D3135AA69A1B3962C7D8D",
        "CE67E062406F234B450919A2756C3AE1",
        "232E0BDD4CBF36C80E3875B4A9F0650C",
        "068F4C7643997FFA183BBABA8CCF5DC8",
        "53E989824842B64D61C9FE9EEFE55675",
        "F56475A74EEE6005C9FCAE8DB2C0CCF7",
        "9A191F6A4FEC2B1EA24460B06141ECC9",
        "229DCC8548324D7037D1FBBAB4582BB2",
        "4BE7BB4149E4C8A395A90689E579A66B",
        "0E4376DB46A90ADFAA87748B6C2B7C8E",
        "2968FF3243D2F95DB8774993B122A7F0",
        "3AC07BAA4DB419D41A935499AD686802",
        "627BA6684DA168DB815E22A22CA49E80",
        "F82B43F040211DD4731487A7447C24A3",
        "62F69D6A4879E6A970E962A93AF91A6F",
        "4229A02D4023F13F5E3134AE99065048",
        "A83EBB0B432091A4554F7A85A575B285",
        "A5F8FACF49E3845421A2F39C21D66543",
        "794B45E541CD919F4EFCB783B4BFC075",
        "A215651545E56B71E9DB1784DEBBA30A",
        "2BBBA95E426B5CD2D894E78C0CDF435F",
        "B4A7BF334048BF0F83BF00B1C402029C",
        "F9F6FF334D0C9A1C2CAE3CAF27EF3DCB",
        "879665E04954DB575AC9C98EF4F12E82",
        "A59FAB9841E4A6700005A9885C4507CA",
        "7B60A84E4E6A32A3A360B48F82852677",
        "ABCF5C194488B5B9A43C51A9FA078079",
        "B1BB87C144E997C38EE3BCBDB6CDB08F",
        "ADA6B76B4A7EDF43A9B601A5ABB03A2D",
        "0458E37342802EC2A314D39434ED22EE",
        "35C61EBD49891799E7C8ECAEC7090472",
        "2A9383B14606DE3F0A21DFB9836241F5",
        "F7C57067402F103F8615E98742DB6466",
        "3260124A49F083375B4470B7E4D80249",
        "1654D6EA429A35C68BB178A8DCF47558",
        "0EC623B44CF70278E48007830DD8FBA3",
        "E4C2A6C14EE04B186EDB80B68B9A01F4",
        "A7CE12BC4A604B9A00D467AE2382163D",
        "6F6F46294A953AB94EE19C8FBB533480",
        "BB5E52AF49EE63EAE28DCB951B2EE732",
        "4629D9DC4E4775EFDC762185626F97B7",
        "611D4F2B4C9298FFE4A5F39FBD55B502",
        "1133CA4B405EF0267DC358A7F38EA015",
        "5808402A40C0876F1D950CB6EAD1DFDA",
        "7D704C024C6BDB17F3D3539B07231DDA",
        "7A8FAF1444541673E73CC8A281EBFCA7",
        "C0AD468F425BE95F2BF74796C6BEC160",
        "7792CE724CB9BB13544DF0996DD57530",
        "745D26AF4FD8881BC2EB2F8EC8C9B932",
        "6EF19BC64CF64BBAEED4DEB167E23136",
        "312AA0214E41609F2319659DCB08AC9F",
        "E185EA1F4AD77A9C7216EC955126A596",
        "385578944CB71F4BB5640F949C829670",
        "A418BB7B453CFBABB20977B52D9DF5CE",
        "F37E28D64C886BDAF38B4DA2EFC05B2D",
        "3F1D25A0418F8D8E5A1E98BDCE3C3FE2",
        "5E3B54FD4024588723F85A806BE810AB",
        "F38A5C85481CDDD74F227B98BF784DD5",
        "23FB2E8E4526C006F330E29CAE31A303",
        "3C268845463EC15987524281B911F53D",
        "38FE71604AE8F0761E0D3DBBAA0EA901",
        "2697BE3E45F4103D6F2F1DBDB1694172",
        "51689F6B4783DC812A375E89226C20BD",
        "960690A54F5BA1B374A70DB6E10F02A9",
        "ACBDA8374DA949C6C07C57B603B927E8",
        "52E9F16A448EA0BAAA8F1D8630440302",
        "22C0F3214FB4E008D0F652996921705C",
        "07EFDC434AE193819A5BAF989E768954",
        "8B95FA0D4EB7E6B76E2D84BD218C7AD5",
        "709A949145A1FAFFF063E78362B800D0",
        "6EE0260B4F48C0D44EC2A7ADBB68EBAE",
        "F8AFC7F14306A31754F204887EA3263C",
        "960826094E9503DB5B0FADAB1EE8CAC8",
        "76C592074BA897D20843CE9834A2B0F1",
        "18BD20C748A5C1023F74C1AF1027886F",
        "55F68BB9495077451552C8B80E81997D",
        "D3785EB543E1E96E3A7A1E9D9ACEFA04",
        "C878A5024F426949E380F4B8D32114C1",
        "CE0E3AB04BA9A8C1A9B826BEFDD89890",
        "B4E4467A4596A2380C95FC898056E592",
        "5C285BFA499318B648D871A8AE25EE43",
        "5A5377684B17D0F584DEE59DE9598F98",
        "4F9D93674DA434F9A9D064813C7D5EFD",
        "E36EFE504479BACBB531C49996F8A569",
        "0C32C914485FD63490EE77AD01FD4468",
        "C5F0DE8849C937810DEC43ABBD238D1E",
        "B1C2EFC94B5208FD9E44829ED0057C66",
        "2A73450545DF0BE148A3A8A9EEEF4293",
        "BF246848428F3B3B697FAD966F49754E",
        "48F66245451998AA6958D0A5CC5D5CEE",
        "209FA86E4B9593881720B29DFF9D480A",
        "2EE1A991470D4B1D63A5079D4CA44EEE",
        "D03F83344DECC9AFCC0194AEFBFC5C90",
        "1B718B3844C70710AB4DD1B8EC3A59A1",
        "E002EA7C462CB11E2F141694D5EF3FDE",
      ];

      const { data: result } = await connector.layer_jj100_one(ids[this.i]);

      if (typeof result[0] == "object") {
        let a = [];
        console.log(result[0].company.split(","));
        console.log(result);
        result[0].company.split(",").forEach((mon) => {
          console.log(mon.split("|"));
          a.push(mon.split("|"));
        });
        this.jj100data.push(a);
        this.jj100ids.push(result[1]);
      } else {
        this.jj100data.push([["暂无数据"]]);
        this.jj100ids.push(result[0]);
      }
      // if (index === ids.length - 1) {
      //   this.loading = false;
      //   console.log(this.jj100data);
      // }
      this.i++;
      if (this.i < ids.length && this.i == this.jj100data.length) {
        this.getJJ100Case();
      }
      if (this.i === ids.length) {
        this.loading = false;
        this.$store.commit("jj100Arr", this.jj100data);
        this.$store.commit("jj100ArrIds", this.jj100ids);
        console.log(this.jj100data);
      }

      // ids.forEach(async (item, index) => {
      //   const { data: result } = await connector.layer_jj100_one(item);
      //   if (typeof result[0] == "object") {
      //     let a = [];
      //     console.log(result[0].company.split(","));
      //     result[0].company.split(",").forEach((mon) => {
      //       console.log(mon.split("|"));
      //       a.push(mon.split("|"));
      //     });
      //     this.jj100data.push(a);
      //   } else {
      //     this.jj100data.push([["暂无数据"]]);
      //   }
      //   if (index === ids.length - 1) {
      //     this.$store.commit("jj100Arr", this.jj100data);
      //     this.loading = false;
      //     console.log(this.jj100data);
      //     console.log(this.jj100Arr);
      //   }
      // });
    },
  },
  created() {
    if (this.jj100arr.length < 1) {
      this.getJJ100Case();
    } else {
      this.loading = false;
    }
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.jj100case {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .loading111 {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .jj100data {
    width: 100%;
    height: 100%;
    .title {
      width: 40%;
      height: 50px;
      font-size: 22px;
      margin: 10px;
    }

    .databox {
      height: calc(100% - 50px);
      overflow-y: scroll;
      position: relative;
      .leftslider {
        width: 15%;
        height: 80%;
        position: absolute;
        left: 0;
        padding-top: 30px;
        box-sizing: border-box;
      }
      .rightdata {
        width: 85%;
        height: 80%;
        position: absolute;
        left: 20%;
        text-align: center;
        .top {
          height: 50px;
          .left {
            width: 25%;
            float: left;
          }
          .right {
            width: 75%;
            float: left;
          }
        }

        .rightcase {
          width: 100%;
          height: 50px;
          background: rgba(0, 0, 0, 0.432);
          line-height: 50px;
          font-size: 14px;
          cursor: pointer;
          &:nth-child(even) {
            background: #00000000;
          }
          &:hover {
            color: #ead268;
          }
          .left {
            width: 25%;
            float: left;
            text-align: left;
            text-indent: 10px;
          }
          .right {
            width: 75%;
            float: left;
            p {
              text-align: left;

              text-indent: 10px;
              width: 90%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
/*  */
/*  */
/deep/.el-slider__button {
  width: 12px;
  height: 28px;
  background: rgb(0, 0, 0);
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  opacity: 0.85;
  border: 2px solid;
  filter: blur(2px);
}
/deep/.el-slider__bar {
  background: #0e1e26;
}
/deep/ .el-slider__stop {
  background: #0e1e26;
}
</style>

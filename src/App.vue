<template>
  <div id="app">
    <div id="player"></div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { addhighlight } from "./util/children/addhighlight";
import { click_EVT_building, click_EVT_jj100 } from "./util/clickEvt";
import connector from "./api/common";
export default {
  data() {
    return {
      api: null,
      player: null,
    };
  },
  computed: {
    ...mapState({
      allpolygon: (state) => state.allpolygon,
      clickData: (state) => state.clickData,
      hightbuilding: (state) => state.hightbuilding,
    }),
  },
  watch: {},
  methods: {
    //监听三维交互的返回事件
    onLoad() {
      // onResize();
      this.init(true, true);
    },
    onResize() {
      // let leftPanel = document.getElementById('leftPanel');
      // let infoPanel = document.getElementById('infoPanel');
      // let player = document.getElementById('player');
      // player.style.width = `${window.innerWidth - leftPanel.clientWidth - 30}px`;
      // player.style.height = `${window.innerHeight - infoPanel.clientHeight - 50}px`;
    },
    onEvent(data) {
      // console.log(e);
      let that = this;
      console.log(data);
      if (data && data.Id && data.Type == "Polygon") {
        __g.polygon.get(data.Id, (res) => {
          console.log(res);
        });
        addhighlight(this.allpolygon, data);
        __g.camera.lookAt(
          data.MouseClickPoint[0],
          data.MouseClickPoint[1] - 300,
          2000,
          -33.209282,
          -90,
          -90,
          () => {
            // this.isshowBack = false
          }
        );
        // __g.polygon.get(data.Id, (res) => {
        //   console.log(res);
        // })
        var layername = data.Id.slice(0, 6);
        if (layername == "xzqsxx") {
          let data_ = data.Id.slice(6);
          that.requestdata("用地权属信息", data_);
        } else if (layername == "tdlyxz") {
          var data_name = data.Id.slice(6);
          var index = data_name.indexOf("-");
          //用地编号请求用地性质
          let data_tdly = data_name.slice(0, index);
          //id请求数据参数
          let data_tdly_id = data_name.slice(index + 1);
          var index_add = data_tdly.indexOf("+");
          var data_one, data_two;
          if (index_add != -1) {
            data_one = data_tdly.slice(0, index_add);
            data_two = data_tdly.slice(index_add + 1);
            var data = {
              id: data_tdly_id,
              natureid: [data_one, data_two],
            };
            that.requestdata("用地现状信息", data);

            // that.requestdata('用地现状信息', data_two)
          } else {
            var data = {
              id: data_tdly_id,
              natureid: [data_tdly],
            };
            that.requestdata("用地现状信息", data);
          }
        } else if (layername == "fdtzft" || layername == "fdtzlh") {
          let index_fdtz = data.Id.indexOf("-");
          let data_fztz = data.Id.slice(index_fdtz + 1);
          that.requestdata("法定图则信息", data_fztz);
        } else if (layername == "fdtzxx") {
          let index_fdtz = data.Id.indexOf("-");
          let data_fztz = data.Id.slice(index_fdtz + 1);
          that.requestdata("法定图则信息", data_fztz);
        } else if (layername == "cityxx") {
          console.log(data);
          let index_1 = data.Id.indexOf("-");
          let data_1 = data.Id.slice(index_1 + 1);
          that.requestdata("城市更新项目", data_1);
        }
      } else if (data && data.Id && data.Type == "TileLayer") {
        //瓦片图层
        if (data.Type == "TileLayer") {
          // name -> ObjectID
          if (data.ObjectID) {
            var name_jjone = data.ObjectID.slice(0, 5);
            console.log(name_jjone);
            if (name_jjone == "JJ100") {
              //京基100楼层信息
              that.requestdata("楼层信息", data.Id);
              click_EVT_jj100(data, data.Type, this.lastID);
            } else if (data.ObjectID.slice(0, 6) == "440303") {
              // 点击已高亮图层取消高亮和属性框 , id都一样，ObjectID不一样，根据ObjectID判断
              if (
                data.ObjectID &&
                this.hightbuilding &&
                data.ObjectID == this.hightbuilding.ObjectID
              ) {
                console.log(data.Id == this.hightbuilding.Id);
                __g.tileLayer.stopHighlightActor();
                //  __g.infoTree.hide(['BF15EEEC49051728DF0DD585E91B4C0E']);
                var obj = {};
                that.$store.commit("hightbuilding", obj);
                return;
              }
              click_EVT_building(data, data.Type, this.lastID);
              //招商楼宇信息
              this.requestdata("建筑信息", data.ObjectID.slice(0, 19));
              that.$store.commit("hightbuilding", data);
              // __g.tileLayer.highlightActors("BF15EEEC49051728DF0DD585E91B4C0E")
            }
          }
        }
      }
    },
    onReady() {
      //此时可以调用接口了
    },
    log() {},
    initWebSocket() {
      //初始化weosocket
      const wsuri = "127.0.0.1:4322";
      this.websock = new AirCityAPI(wsuri, this.onReady, this.log);
      this.websock.setEventCallback(this.onEvent);
    },
    getMatchServerConfig(host, fn, callbackIndex) {
      console.log(1);
      if ("WebSocket" in window) {
        var url = `ws://${host}`;
        let __fn = fn;

        var ws = new WebSocket(url);
        ws.onopen = function() {
          this.send(
            JSON.stringify({
              command: 6,
              callbackIndex: callbackIndex,
            })
          );
        };
        ws.onmessage = function(event) {
          var o = JSON.parse(event.data);
          __fn(o);
        };
        ws.onclose = function() {};
        ws.onerror = function(event) {};
      } else {
        this.log("Not Support WebSocket!");
      }
    },
    init(withPlayer, withInterface) {
      let _this = this;

      this.getMatchServerConfig(HostConfig.MatchServer, function(o) {
        console.log(o, 111111);
        if (o.result == 0) {
          if (withPlayer) {
            new AirCityPlayer(o.instanceId, "player", HostConfig.Token, true);
          }
          if (withInterface) {
            var ace = new AirCityAPI(o.instanceId, _this.onReady, _this.log);
            ace.setEventCallback(_this.onEvent);
          }
        } else {
          if (withPlayer) {
            let host = HostConfig.instanceId
              ? HostConfig.instanceId
              : HostConfig.AirCityPlayer;
            let acp = new AirCityPlayer(
              host,
              "player",
              HostConfig.Token,
              true,
              true
            );
            //AirCityPlayer对象增加方法enableAutoAdjustResolution，可以设置启用或关闭视频窗口缩放时
            //自动调整分辨率的功能。这个功能默认是启用的，如果想关闭此功能，可以在初始化的时候调用enableAutoAdjustResolution(false)
            //acp.enableAutoAdjustResolution(false);
          }
          if (withInterface) {
            let host = HostConfig.instanceId
              ? HostConfig.instanceId
              : HostConfig.AirCityAPI;
            var ace = new AirCityAPI(host, _this.onReady, _this.log);
            ace.useColorLog = true;
            __g.setEventCallback(_this.onEvent);
          }
        }
      });
    },

    //
    //根据要素id请求数据
    async requestdata(title, data) {
      let that = this;
      let bool = true;
      var arrdata = [];
      // await arr.forEach(async function (data) {
      var rcdata;
      if (title == "法定图则信息") {
        rcdata = await connector.layer_statutory_plan(data);
      } else if (title == "用地现状信息") {
        rcdata = await connector.layer_prop(data);
      } else if (title == "用地权属信息") {
        rcdata = await connector.lawlayer(data);
      } else if (title == "城市更新项目") {
        rcdata = await connector.layer_updatacity(data);
      } else if (title == "楼层信息") {
        rcdata = await connector.layer_jj100_one(data);
      } else if (title == "建筑信息") {
        rcdata = await connector.layer_building(data);
      }

      // arrdata.push(rcdata)
      // });
      this.data_show = {
        title: title,
        data: rcdata.data,
      };
      that.$store.commit("clickData", this.data_show);
      console.log(that.$store.state.clickData);
    },
  },
  created() {
    // this.initWebSocket();
    window.addEventListener("load", this.onLoad, true);
    window.addEventListener("resize", this.onResize, true);
  },
  mounted() {
    // this.api = new AirCityAPI(instanceId, function () {
    //   this.api.misc.setMainUIVisibility(true);
    // }.bind(this));
    // let instanceId = "3232270593-8889-8081-4323"
    // this.player = new AirCityPlayer(instanceId, "player")
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {
    // this.api.destroy();
    // this.player.destroy();
  },
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
#player {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  // background: rgba(0, 0, 0, 0.226);
}
</style>

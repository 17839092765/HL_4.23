<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    //监听三维交互的返回事件
    onEvent(e) {
      console.log(e);
    },

    initWebSocket() {
      //初始化weosocket
      const wsuri = "127.0.0.1:4322";
      this.websock = new AirCityCloud(wsuri, this.onReady, this.log);
      this.websock.setEventCallback(this.onEvent);
    },
    onLoad() {
      this.onResize();
      this.init(true, true);
    },
    onResize() {
      let player = document.getElementById("player");
      player.style.height = "100%";
      player.style.width = "100%";
      player.style.position = "absolute";
    },
    onReady() {},
    log() {
      // console.log(e);
    },
    getMatchServerConfig(host, fn) {
      if ("WebSocket" in window) {
        var url = `ws://${host}`;
        __fn = fn;

        var ws = new WebSocket(url);
        ws.onopen = function() {
          this.send('{"command":6}');
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

      if (location.search.indexOf("ms") != -1) {
        //页面地址加参数： http://192.168.1.222/int.html?ms
        getMatchServerConfig(HostConfig.MatchServer, function(o) {
          if (o.result == 0) {
            if (withPlayer) {
              new AirCityPlayer(o.instanceId, "player", HostConfig.Token, true);
            }
            if (withInterface) {
              var ace = new AirCityCloud(
                o.instanceId,
                _this.onReady,
                _this.log
              );
              ace.setEventCallback(_this.onEvent);

              //更新页面显示
              let host = AirCityCloud.getHostFromInstanceId(o.instanceId);
              if (host) {
                document.getElementById("txtIP").value = host[0];
                document.getElementById("txtPort").value = host[1];
              }
            }
          } else {
            alert("云渲染资源已满，请稍候再试");
          }
        });
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
          var ace = new AirCityCloud(host, _this.onReady, _this.log);
          ace.useColorLog = true;
          ace.setEventCallback(_this.onEvent);
        }
      }
    },
  },
  created() {
    this.initWebSocket();
  },
  mounted() {
    // window.addEventListener('resize', this.onResize, true)
    // window.addEventListener('load', this.onLoad, true)
  },
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

<style lang="scss" scoped></style>

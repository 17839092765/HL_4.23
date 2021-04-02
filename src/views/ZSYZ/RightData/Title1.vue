<template>
  <div class="tag111">
    <div class="top">
      <img src="../../../assets/img/titleImg.png" />
      <span class="tag_text">{{ title }}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  props: ["title"],
  data() {
    return {
      mgs: 5,
    };
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.tag1 {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.left,
.right {
  width: 20%;
  height: 800px;
  margin-top: 60px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  background: transparent;
  border: none;
}
.top {
  display: flex;
}
.tag_text {
  color: #5d80e5;
  font-size: 18px;
  margin-left: 17px;
  justify-content: flex-start;
}
.top11 {
  clear: both;
  height: 150px;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
}
.top1,
.top2,
.top3 {
}
</style>
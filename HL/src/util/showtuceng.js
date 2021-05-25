// import __g from "../main.js"
function showtuceng(data) {
  if (__g) {
    data.map((item) => {
      console.log(item, "显示图层");

      __g.infoTree.show(item.layerid);
    });
  }
}
function hidetuceng(data) {
  if (__g) {
    data.map((item) => {
      console.log(item, "隐藏图层");
      __g.infoTree.hide(item.layerid);
    });
  }
}
export { showtuceng, hidetuceng };

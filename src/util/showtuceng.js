// import __g from "../main.js"
function showtuceng(data) {
  data.map((item) => {
    __g.infoTree.show(item.layerid)
  })
}
function hidetuceng(data) {
  data.map((item) => {
    __g.infoTree.hide(item.layerid)
  })
}
export { showtuceng, hidetuceng }

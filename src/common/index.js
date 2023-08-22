//公共方法
function setLocal(token){
  localStorage.setItem("token_wx",token)
}
function getLocal(){
  return localStorage.getItem("token_wx")
}
function getAllLocal () {
  return localStorage.valueOf();//取出所有的值
}
function clear () {
  localStorage.clear();
}
//抛出 定义的方法
export default {
  setLocal,
  clear,
  getLocal,
  getAllLocal
}

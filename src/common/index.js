//公共方法
function setLocal(token){
  sessionStorage.setItem("token_wx",token)
}
function getLocal(){
  return sessionStorage.getItem("token_wx")
}
function getAllLocal () {
  return sessionStorage.valueOf();//取出所有的值
}
function clear () {
  sessionStorage.clear();
}
function getUserName () {
  return sessionStorage.getItem("wx_userName")
}
//抛出 定义的方法
export default {
  setLocal,
  clear,
  getLocal,
  getAllLocal,
  getUserName,
}

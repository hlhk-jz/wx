<template>
  <div id="app">
    <div id="app1">
      <router-link :to="{name:'HelloWorld'}"  style="float:left;" >测</router-link>
      <router-link :to="{name:'Cj'}" style="float:left; margin-left: 10px;">测试</router-link>
      <router-link :to="{name:'Zj'}"style="float:left; margin-left: 10px;">测试</router-link>
      <router-link :to="{name:'Gj'}"style="float:left; margin-left: 10px;">测试</router-link>
      <div id="app2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #535a59;
  height: 900px;
}
 #app1 {
  padding: 10px 0;
  background-color: #535a59;
  width: 500px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
}
#app2 {
  padding: 30px 0;
  background-color: #535a59;
  width: 500px;
  height: 400px;
}
</style>

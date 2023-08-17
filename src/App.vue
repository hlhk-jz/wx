<template>
  <div id="app">
    <router-view/>
    <router-link :to="{name:'HelloWorld'}">测试</router-link>
    <router-link :to="{name:'Cj'}">cj</router-link>
    <router-link :to="{name:'Zj'}">zj</router-link>
    <router-link :to="{name:'Gj'}">gj</router-link>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>

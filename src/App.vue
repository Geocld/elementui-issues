<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-input></el-input>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="jsx">
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.swiper {
  height: 300px;
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: #eee;
}
</style>

<template>
  <div id="app">
    <section id="side-bar">
      <SideBar></SideBar>
    </section>
    <section id="content">
      <div id="top-bar">
        <TopBar></TopBar>
      </div>
      <div id="stage">
        <Stage></Stage>
      </div>
    </section>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar";
import Stage from "@/components/Stage";
import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    SideBar,
    Stage,
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
body {
  margin: 0;
}
#side-bar {
  float: left;
  background-color: #2c3e50;
  height: 100vh;
  width: 350px;
}
#top-bar {
  background-color: #ededed;
  height: 30px;
}
#stage {
  float: left;
  width: calc(100% - 350px);
  height: calc(100vh - 30px);
}
</style>

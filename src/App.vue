<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div id="side-bar" class="col col-md-3">
        <SideBar></SideBar>
      </div>
      <div class="col col-md-9">
        <div class="row top-bar">
          <TopBar></TopBar>
        </div>
        <div class="row">
          <div class="container">
            <Stage></Stage>
          </div>
        </div>
      </div>
    </div>
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
.top-bar {
  background-color: #ededed;
  height: 30px;
}
.stage {
  float: left;
  width: calc(100% - 350px);
  height: calc(100vh - 30px);
}
.col.gx-0 {
  padding-left: 0;
  padding-right: 0;
}
</style>

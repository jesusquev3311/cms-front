<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <dashboard/>
        </div>
        <div class="col-sm-10">
          <img src="./assets/logo.png">
          <router-view/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/dashboard/dashboard";
export default {
  name: 'App',
  components: {Dashboard}
}
</script>

<style>
#app {
  @import url('./../node_modules/bootstrap/dist/css/bootstrap.min.css');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

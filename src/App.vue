<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <dashboard :authenticated.sync="this.authenticated.value"/>
        </div>
        <div class="col-sm-10">
          <router-view :authenticated.sync="this.authenticated.value" @update="setStatus"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/dashboard/dashboard";
export default {
  name: 'App',
  components: {Dashboard},
  data(){
    return{
      authenticated: {
        type: Boolean,
        value:false
      }
    }
  },
  methods:{
    setStatus(status){
      console.log('here');
      this.authenticated.value = status;
    }
  },
  mounted() {
     if (!this.authenticated.value) this.$router.replace({name:"Login"});
  }
}
</script>

<style lang="scss">

#app {
  @import url('./../node_modules/bootstrap/dist/css/bootstrap.min.css');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 900px;
  background-color: #f5f4fc;
  display: flex;
.row{
  height: 100%;
}
  /*
  Defaults
   */
    .main-title{
      font-size: 32px;
      font-weight: 600;
      margin: 30px 0;
      margin-bottom: 60px;
      text-align: left;
    }

    .cms-sections{
      padding: 60px 20px;
    }
}
</style>

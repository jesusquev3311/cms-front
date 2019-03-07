<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <sidebar/>
        </div>
        <div class="col-sm-10">
            <login :authenticated.sync="this.authenticated" v-if="this.authenticated == false"></login>
          <template v-else>
            <router-view />
          </template>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./components/sidebar/sidebar";
import Login from "./components/login/login";
export default {
  name: 'App',
  components: {Login, sidebar},
  props:{

  },
  data(){
    return{
      authenticated: {
        type: Boolean,
        default:false
      }
    }
  },
  methods:{
    setStatus(status){
      console.log('here');
      this.authenticated = status;
    }
  },
  mounted() {
     // if (!this.authenticated.value) this.$router.replace({name:"Login"});
  }
}
</script>

<style lang="scss">

#app {
  //Bootstrap library
  @import url('./../node_modules/bootstrap/dist/css/bootstrap.min.css');
  //Font Awesome Icons
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  //notifications styles
  @import url('./../node_modules/vuejs-noty/dist/vuejs-noty.css');


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
  a{
    text-decoration: none;
  }
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

    /*Buttons*/
  .cms-btn{
    border: 1px solid #ececec;
    padding: 10px 0px;
    margin-top: 10px;
    width: 100%;
    font-size: 12px;
    transition: all .5s;
  }
  /*Add new btn */
  .cms-add-btn{
    font-size: 23px;
    float: right;
    color: #a89aff;
  }
  /*Edit Button*/
  .cms-edit-btn{
    border-color: #70bbf5;
    color: #70bbf5;
    &:hover{
      background-color: #70bbf5;
      color:#fff !important;
    }
  }
  /*Delete Button*/
  .cms-remove-btn{
    border-color: #ff2b85;
    color: #ff2b85;
    &:hover{
      background-color: #ff2b85;
      border-color: #ff2b85;
      color:#fff;
    }
  }

  /*CMS Form*/
  .cms-form{
    max-width: 80%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;

    padding: 30px;
    .form-control{
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #ededed;
    }
  }

  .center-auto{
    margin: 0 auto;
  }
}
</style>

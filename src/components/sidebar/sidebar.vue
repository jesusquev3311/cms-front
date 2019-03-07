<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <div class="user-info">
        <div class="img-wrapper">
          <img src="../../assets/img/logo.png" alt="Porfile" height="50px" width="100%">
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="menu-item">
            <router-link tag="a" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="menu-item">
            <router-link tag="a" to="/leads">Clients</router-link>
          </li>
          <li class="menu-item">
            <router-link tag="a" to="/login">Log In</router-link>
          </li>
          <li class="menu-item" @click="userLogout">
            <a style="cursor: pointer" >Log Out</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import logout from '../../services/logout'
  export default {
    name: "sidebar",
    data() {
      return {}
    },
    methods:{
      userLogout(){
        logout.Logout().start().then(()=>{
          this.$noty.success("Logout Successfully", {
            killer: true,
            timeout: 2000,
            layout: 'topRight',
          });
          this.$router.push({name: 'Login'})
        }).catch((err)=>{
          this.$noty.error("You are not Logged in", {
            killer: true,
            timeout: 2000,
            layout: 'topRight',
          });
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  #sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #a89aff94;
    padding: 40px;

    .sidebar-header {
      .img-wrapper {
        img {
          border-radius: 0;
          margin-bottom: 30px;
        }
      }
    }
    ul{
      padding: 0;
      li{
        list-style: none;
        a{
          padding: 20px 5px;
          border-bottom: 1px solid;
          display: block;
          color: #000;
          transition: all .5s;
          &:hover{
            color: #007bff;
          }
        }
      }
    }
  }
</style>

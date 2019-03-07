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
          <li class="menu-item">
            <router-link tag="a" to="/logout">Log Out</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {}
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

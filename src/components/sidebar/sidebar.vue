<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <div class="user-info">
        <div class="img-wrapper">
          <img src="../../assets/img/profile.jpg" alt="Porfile" height="100px" width="100px">
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
          border-radius: 100%;
        }
      }
    }
  }
</style>

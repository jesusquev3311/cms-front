<template>
    <div id="dashboard">
        <div class="dashboard-header">
            <div class="user-info">
                <div class="img-wrapper">
                    <img src="../../assets/img/profile.jpg" alt="Porfile" height="100px" width="100px">
                </div>
            </div>
            <div class="dashboard-menu">
                <ul>
                    <li class="menu-item">
                        <router-link tag="a" to="/">Home</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link tag="a" to="/leads">Leads</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link tag="a" to="/clients">Clients</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link tag="a" to="/users">Users</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link tag="a" to="/sales">Sales</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style lang="scss">
    #dashboard{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #d9d9f5;
        padding: 40px;
        .dashboard-header{
            .img-wrapper{
               img{
                   border-radius: 100%;
               }
            }
        }
    }
</style>

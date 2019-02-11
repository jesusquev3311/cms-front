<template>
    <section id="login">
      <form action="#">
        <div class="form-group">
          <label for="user">User</label>
          <input type="text" placeholder="User" id="user" name="user" v-model="user.name" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" name="password" id="password" v-model="user.password" class="form-control">
        </div>
        <button class="btn btn-info">Login</button>
      </form>
    </section>
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          user:{
            name: '',
            password: ''
          }
        }
      }
    }
</script>

<style scoped>

</style>

<template>
    <section id="login">
        <div class="row">
            <div class="col-sm-5">
                <div class="form-wrapper">
                    <h2 class="form-title">Welcome Back</h2>
                    <h3 class="form-subtitle">Please log in to your account</h3>
                </div>
                <form @submit="userLogIn" id="login-form">
                    <div class="form-group">
                        <label for="user">Username:</label>
                        <input type="text" placeholder="User" id="user" name="user" v-model="user.name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" placeholder="Password" name="password" id="password" v-model="user.password" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-info">Login</button>
                </form>
            </div>
        </div>

    </section>
</template>

<script>
    import loginServices from '../../services/login';

    export default {
        name: "login",
        props:['authenticated'],
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            async userLogIn() {
                event.preventDefault();
               await loginServices.Login().loginUser( {
                    username: this.user.name,
                    password: this.user.password
                })
                .then((response) => {
                    console.log('User Logged successfully', response);
                    if ( response.data.success == true){
                        this.$router.push({name: 'Welcome'})
                    } else {
                        console.log('there was an error');
                        this.$router.push({name: 'Login'})
                    }
                }). catch((err)=> console.log(err));


            }
        }
    }
</script>

<style lang="scss">
    #login {
        padding: 60px 0;

        .row {
            justify-content: center;
            align-items: center;
        }
    }

</style>

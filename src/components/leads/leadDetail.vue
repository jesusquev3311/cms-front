<template>
    <section id="lead-detail" class="cms-sections">
        <h3 class="main-title">My Leads
            <router-link to="/leads/" tag="a" class="cms-add-btn"><i class="far fa-plus-square"></i> Leads
            </router-link>
        </h3>


    </section>
</template>

<script>
    import leadService from '../../services/LeadsService';

    export default {
        name: "leadDetail",
        data(){
            return{
                leads:[],
                lead:{}
            }
        },
        mounted(){

        },
        methods:{
            getLead(id){
                leadService.Leads().getOne(id)
            }
        }
    }
</script>

<style scoped>

</style>

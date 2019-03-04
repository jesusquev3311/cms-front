<template>
    <section id="lead-detail" class="cms-sections">
        <h3 class="main-title">{{this.lead.name}}
            <router-link to="/leads/" tag="a" class="cms-add-btn"><i class="far fa-plus-square"></i> Leads
            </router-link>
        </h3>


    </section>
</template>

<script>
    import leadService from '../../services/LeadsService';

    export default {
        name: "leadDetail",
        props:['id'],
        data(){
            return{
                leads:[],
                lead:{}
            }
        },
        mounted(){
          this.getLead(this.id);
        },
        methods:{
            getLead(id){
                leadService.Leads().getOne(id).then((response)=>{
                  this.lead = response.data.lead
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
      <ul>
        <li v-for="lead in leads">
          <span>{{lead._id}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import LeadsService from '../../services/LeadsService'
    export default {
      name: "leads",
      data(){
        return{
          leads: []
        }
      },
      mounted(){
        this.getLeads()
      },
      methods:{
        async getLeads (){
          LeadsService.Leads().getAll().then((response)=>{
            this.leads = response.data
          })
            .catch((err)=> console.log(err))
        }
      }
    }
</script>

<style lang="scss">

</style>

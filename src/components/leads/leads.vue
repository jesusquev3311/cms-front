<template>
    <div>
      <div v-if="leads.length > 0">
            <div class="leads-table">
                <!--table headers-->
                <div class="leads-table-header">
                    <div class="row">
                        <div class="col-sm-2">Name:</div>
                        <div class="col-sm-2">Email:</div>
                        <div class="col-sm-2">Phone:</div>
                        <div class="col-sm-2">Broker:</div>
                        <div class="col-sm-2">Address:</div>
                        <div class="col-sm-2">City:</div>

                    </div>
                </div>
                <div class="leads-table-body">
                    <div v-for="lead in leads" class="row">
                        <div class="col-sm-2">{{lead.name}}</div>
                        <div class="col-sm-2">{{lead.email}}</div>
                        <div class="col-sm-2">{{lead.phone}}</div>
                        <div class="col-sm-2">{{lead.broker}}</div>
                        <div class="col-sm-2">{{lead.address}}</div>
                        <div class="col-sm-2">{{lead.city}}</div>

                    </div>
                </div>

            </div>
      </div>
        <h3 v-else>NO LEADS</h3>

    </div>
</template>

<script>
  import LeadsService from '../../services/LeadsService'
    export default {
      name: "leads",
      data(){
        return{
          leads: [],
          lead:{
            name:'',
            email:''
          }
        }
      },
      mounted(){
        this.getLeads()
      },
      methods:{
        async getLeads (){
          LeadsService.Leads().getAll().then((response)=>{
            this.leads = response.data.leads
          })
            .catch((err)=> console.log(err))
        }
      }
    }
</script>

<style lang="scss">

</style>

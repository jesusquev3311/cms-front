<template>
    <section id="leads-list" class="cms-sections">
        <h3 class="main-title">My Leads</h3>
      <div v-if="leads.length > 0">
            <div class="leads-table">
                <!--table headers-->
                <div class="leads-table-header">
                    <div class="row">
                        <div class="col-sm-2"><span>Name</span></div>
                        <div class="col-sm-2"><span>Email</span></div>
                        <div class="col-sm-2"><span>Phone</span></div>
                        <div class="col-sm-2"><span>Broker</span></div>
                        <div class="col-sm-2"><span>Address</span></div>
                        <div class="col-sm-2"><span>City</span></div>

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

    </section>
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
    #leads-list{
        .leads-table{
            border: 1px solid #ededed;
            .leads-table-header {
                background-color: #fff;
                padding: 20px 30px;
                span{
                    font-weight: 600;
                    font-size: 18px;
                }
            }
            .leads-table-body{
                .row{
                    padding: 10px 15px;
                    background-color: #f8fafb;
                    margin: 0;
                }
            }
        }
    }
</style>

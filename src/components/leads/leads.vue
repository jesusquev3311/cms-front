<template>
  <section id="leads-list" class="cms-sections">
    <h3 class="main-title">My Leads
      <router-link to="/leads/add-lead" tag="a" class="cms-add-btn"><i class="far fa-plus-square"></i> Add New
      </router-link>
    </h3>
    <div v-if="leads.length > 0">
      <!-- Leads Info Cards -->
      <div class="row">
        <template v-for="lead in leads">
          <div class="col-sm-4">
            <div class="lead-item">
              <div class="header">
                <div class="row">
                  <!-- Lead Picture-->
                  <div class="col-sm-4">
                    <div class="img-wrapper">
                      <img src="../../assets/img/profile.jpg" alt="Profile image" style="max-width: 100px">
                    </div>
                  </div>
                  <!-- Lead name -->
                  <div class="col-sm-8">
                    <h3 class="lead-name">{{lead.name}}</h3>
                    <span class="lead-email"><i class="fas fa-at"></i>{{lead.email}}</span>
                    <span class="lead-phone"><i class="fas fa-mobile-alt"></i>{{lead.phone}}</span>
                  </div>
                </div>
              </div>
              <div class="body">
                <!-- Broker info-->
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="lead-subtitle">Broker's info</h4>
                  </div>
                  <div class="col-sm-6">
                    <span v-if="lead.broker" class="lead-info">
                      <b>Broker:</b>
                      {{lead.broker.name}}
                    </span>

                    <span v-else class="lead-info">
                      <b>Broker:</b>
                      No Broker
                    </span>
                  </div>

                  <div class="col-sm-6">
                    <span class="lead-info">
                      <b>Status:</b>
                      {{lead.status}}
                    </span>
                  </div>

                </div>
                <div class="row">
                  <template v-for="product in lead.products">
                    <div class="col-sm-6">
                    <span v-if="product.name" class="lead-info">
                      <b>Product:</b>
                      {{product.name}}
                    </span>
                      <span v-else class="lead-info">
                      <b>Product:</b>
                      No Product
                    </span>
                    </div>

                    <div class="col-sm-6">
                    <span v-if="product.price" class="lead-info">
                      <b>Price:</b>
                      $ {{product.price}}
                    </span>

                      <span v-else class="lead-info">
                      <b>Price:</b>
                      0
                    </span>
                    </div>
                  </template>


                </div>
                <!-- Address Info -->
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="lead-subtitle">General info</h4>
                  </div>
                  <div class="col-sm-6">
                    <span class="lead-info">
                      <b>Company:</b>
                      {{lead.company}}
                    </span>
                  </div>

                  <div class="col-sm-6">
                    <span class="lead-info">
                      <b>City:</b>
                      {{lead.city}}
                    </span>
                  </div>

                  <div class="col-sm-6">
                    <span class="lead-info">
                      <b>Country:</b>
                      {{lead.country}}
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="lead-info">
                      <b>Zip code:</b>
                      {{lead.zipcode}}
                    </span>
                  </div>

                  <div class="col-sm-12">
                    <b>Address:</b><br>
                    {{(lead.address).slice(0,150) + "..."}}
                  </div>

                </div>
              </div>

              <div class="footer">
                <div class="row">
                  <div class="col-sm-6">
                    <router-link :id="lead._id" tag="button" class="btn cms-btn cms-edit-btn" :to="'/leads/'+lead._id"><i class="far fa-edit"></i> edit</router-link>
                  </div>
                  <div class="col-sm-6">
                    <button @click="deleteLead(lead._id)" type="button" class="btn cms-btn cms-remove-btn"><i class="far fa-trash-alt"></i> delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

      </div>
    </div>
    <h3 v-else>NO LEADS</h3>

  </section>
</template>

<script>
  import LeadsService from '../../services/LeadsService'

  export default {
    name: "leads",
    data() {
      return {
        leads: [],
        lead: {
          name: '',
          email: '',
          image: '',
          broker: {
            name: '',
            userId: ''
          },
          address: '',
          city: '',
          zipcode: '',
          country: '',
          phone: '',
          products: {
            product: {
              name: '',
              price: '',
              quantity: ''
            }
          },
          company: '',
          status: ''
        }
      }
    },
    mounted() {
      this.getLeads()
    },
    methods: {
      async getLeads() {
        LeadsService.Leads().getAll().then((response) => {
          this.leads = response.data.leads
        })
          .catch((err) => console.log(err))
      },
      async deleteLead(id){
        LeadsService.Leads().deleteOne(id)
          .then((response)=>{
            alert('Lead Removed', response)
            this.$router.push({name: 'Leads'});
          })
          .catch((err)=>{
            alert('Error, please try again')
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="scss">
  #leads-list {
    .lead-item {
      background-color: #fff;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 30px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

      .lead-name {
        font-size: 23px;
        color: #333;
      }

      .header {
        border-bottom: 1px solid #ededed;
        padding-bottom: 10px;
        margin-bottom: 10px;

        span {
          display: block;
          font-size: 14px;

          i {
            margin-right: 5px;
            color: #afafbd;
            min-width: 16px;
          }
        }
      }

      .body {
        padding-bottom: 10px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ededed;

        .lead-subtitle {
          font-size: 16px;
          color: #afafbd;
          font-weight: bold;
          margin: 5px 0;
        }

        .lead-info {
          display: block;
          font-size: 14px;
        }
      }
    }
  }
</style>

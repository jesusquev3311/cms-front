<template>
  <section id="add-lead" class="cms-sections">
    <div class="col-sm-10 center-auto">
      <h3 class="main-title">Add New Lead
        <router-link to="/leads" tag="a" class="cms-add-btn">Leads</router-link>
      </h3>
    </div>

    <form @submit="addLead" class="cms-form col-sm-10">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Name</label>
            <input type="text" id="lead-name" name="lead-name" v-model="lead.name" class="form-control">
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="lead-email" name="lead-email" v-model="lead.email" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Phone</label>
            <input type="tel" id="lead-phone" name="lead-phone" v-model="lead.phone" class="form-control">
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>Company</label>
            <input type="text" id="lead-company" name="lead-company" v-model="lead.company" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Broker</label>
            <select id="lead-broker" name="lead-broker" v-model="lead.broker.name" class="form-control">
              <option value="">Select Broker</option>
              <option value="Broker Fake">Broker Fake</option>
            </select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>Status</label>
            <select id="lead-status" name="lead-status" v-model="lead.status" class="form-control">
              <option value="">Select Status</option>
              <option value="started">Started</option>
            </select>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>City</label>
            <input type="text" id="lead-city" name="lead-city" v-model="lead.city" class="form-control">
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>Zip code</label>
            <input type="text" id="lead-zipcode" name="lead-zipcode" v-model="lead.zipcode" class="form-control"/>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label>Country</label>
            <input type="text" id="lead-country" name="lead-country" v-model="lead.country" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label>Address</label>
            <textarea class="form-control" id="lead-address" name="lead-address" v-model="lead.address"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="btn cms-btn btn-info"><strong>Send</strong></button>
    </form>
  </section>
</template>
<script>
  import leadService from '../../services/LeadsService'
  export default {
    data() {
      return {
        leads: [],
        lead: {
          name: '',
          email: '',
          image: '',
          broker:{
            name: 'Prueba',
            userId:'1234'
          },
          address: '',
          city: '',
          zipcode: '',
          country: '',
          phone: '',
          products: {
            name:'',
            price:0,
            quantity:10
          },
          company: '',
          status: 'Started'
        }
      }
    },
    mounted(){},
    methods:{
      async addLead(){
        event.preventDefault()
        leadService.Leads().createOne({
          name: this.lead.name,
          email: this.lead.email,
          phone: this.lead.phone,
          broker: {
            name:this.lead.broker.name,
            userId:this.lead.broker.userId
          },
          products: {
            name:this.lead.products.name,
            price: this.lead.products.price,
            qunatity: this.lead.products.qunatity
          },
          company: this.lead.company,
          city: this.lead.city,
          zipcode: this.lead.zipcode,
          country: this.lead.company,
          address: this.lead.address,
          status: this.lead.status
        })
          .then((response)=>{
            console.log('Lead Created', response.data);
            alert('Lead Created successfully', response.data);
            this.$router.push({name: 'Leads'})
          })
          .catch((err)=>{
            console.log(err);
            alert('There was an Error');
          })
      }
    }
  }
</script>

<style lang="scss">

</style>

<template>
    <section id="lead-detail" class="cms-sections">
        <div class="row">
            <div class="col-sm-11 wrapper">
                <h3 class="main-title">
                    <router-link to="/leads/" tag="a" class="cms-add-btn"><i class="fas fa-arrow-left"></i> Leads
                    </router-link>
                </h3>
                <div class="status">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="contact-info">
                                <div class="detail-img">
                                    <img :src="'http://i.pravatar.cc/300?img='+ Math.floor(Math.random() * 71)" alt="Profile Img">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-10">
                            <div class="contact-info">
                                <h3 class="detail-title">{{this.lead.name}}</h3>
                                <h4 class="main-id">ID: {{this.lead._id}}</h4>
                                <h4 class="status-title">Status: <span class="status-mid">{{this.lead.status}}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detail-info">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="contact-info">
                                <h4 class="info-title">Contact Info</h4>
                                <ul>
                                    <li><span>Email:</span> {{this.lead.email}}</li>
                                    <li><span>Phone:</span> {{this.lead.phone}}</li>
                                    <li><span>City:</span> {{this.lead.city}}</li>
                                    <li><span>Zipcode:</span> {{this.lead.zipcode}}</li>
                                    <li><span>Country:</span> {{this.lead.country}}</li>
                                    <li><span>Address:</span> {{this.lead.address}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="contact-info">
                                <h4 class="info-title">General Info</h4>
                                <ul>
                                    <li><span>Company:</span> {{this.lead.company}}</li>
                                    <li v-for="broker in lead.broker"><span>Broker:</span> {{broker.name}}</li>
                                    <li v-for="broker in lead.broker"><span>Broker ID:</span> {{broker._id}}</li>
                                    <li><span>Lead Status:</span> {{this.lead.status}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--notes-->
                    <div class="row">
                        <!--form-->
                        <div class="col-sm-4">
                            <div class="contact-info notes">
                                <h4 class="info-title">Notes</h4>
                                <form @submit="createNote">
                                    <div class="form-group">
                                        <label for="note-title">author</label>
                                        <input type="text" id="note-title" class="form-control" v-model="note.author">
                                    </div>
                                    <div class="form-group">
                                        <label for="note-description">Description</label>
                                        <textarea name="note-description" id="note-description" cols="30" rows="5" class="form-control" v-model="note.description"></textarea>
                                    </div>

                                    <button class="btn cms-edit-btn">send</button>
                                </form>
                            </div>
                        </div>

                        <!--timeline-->
                        <div class="col-sm-8">
                            <div class="contact-info timeline">
                                <h4 class="info-title">Notes Timeline</h4>
                                <ul class="timeline">
                                   <template >
                                        <li v-for="note in notes"  class="timeline-item">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <div class="author">
                                                        <i class="fas fa-arrow-right"></i>
                                                        {{note.author}}
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="description">
                                                        {{note.description}}
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <span v-if="note.createdAt" class="date"><i class="far fa-clock"></i> {{formatNoteDate(note.createdAt)}}</span>
                                                    <span v-else class="date">n/a</span>
                                                </div>
                                            </div>
                                        </li>
                                   </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import leadService from '../../services/LeadsService';

    export default {
        name: "leadDetail",
        props: ['id'],
        data() {
            return {
                leads: [],
                lead: {},
                broker:{},
                notes: [],
                note:{
                    author: '',
                    description: '',
                    date: ''
                }
            }
        },
        mounted() {
            this.getLead(this.id);
        },
        // updated(){
        //     this.getLead(this.id);
        // },
        watch:{
            notes(){
               return this.notes;
            }
        },
        methods: {
            getLead(id) {
                leadService.Leads().getOne(id).then((response) => {
                    this.lead = response.data.lead;
                    this.notes = response.data.lead.notes;
                })
            },
            createNote(){
                event.preventDefault();
                leadService.Leads().addNote(this.lead._id, {
                    author: this.note.author,
                    description: this.note.description
                })
                    .then((response)=>{
                        console.log('created', response);
                        alert('yeah');
                        this.getLead(this.lead._id)
                    })
                    .catch(err => console.log('error', err));
            },
            getNotes(){
                leadService.Leads().getNotes(this.lead._id).then((response)=>{
                    this.notes = response.data;
                    console.log(response)
                })
            },
            formatNoteDate(date){
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let newdate = new Date(date);
                let year = newdate.getFullYear();
                let month = newdate.getMonth('mmmm');
                let day = newdate.getDay();
                this.note.date = `${day}/${month}/${year}`;
                return  `${months[month]} ${day}`;
            }
        }
    }
</script>

<style lang="scss">
    #lead-detail {
        .wrapper {
            margin: 0 auto;

            .status {
                .status-mid{
                    color: gold;
                }
                .status-good{
                    color: limegreen;
                }
                .status-danger{
                    color: red;
                }
                display: block;
                margin-bottom: 30px;
                .row{
                    align-items: center;
                }
                .status-title {
                    span {
                        float: right;
                    }
                }
                .contact-info {
                    background-color: #FFF;
                    padding: 20px;
                    border-radius: 5px;
                    display: block;
                    height: 100%;
                    .detail-img{
                        img{
                            width: 100%;
                        }
                    }
                    .detail-title{
                        font-size: 35px;
                        margin-bottom: 10px;
                    }
                    .detail-id{
                        font-size: 15px;
                    }
                }

            }

            .detail-info{
                .row{
                    display: flex;
                    margin-bottom: 30px;
                }
                .contact-info{
                    background-color: #FFF;
                    padding: 20px;
                    border-radius: 5px;
                    display: block;
                    margin-bottom: 30px;
                    height: 100%;
                    .info-title{
                        font-size: 20px;
                        margin-bottom: 30px;
                    }
                    ul{
                        padding: 0;
                        li{
                            list-style: none;
                            span{
                                font-weight: bold;
                                margin-right: 10px;
                                min-width: 93px;
                                display: inline-block;
                            }
                        }
                    }
                    .btn-note{

                    }
                }
                .timeline{
                    .timeline-item{
                        padding: 10px;
                        background-color: #f5f4fc;
                        border-radius: 5px;
                        margin-bottom: 20px;
                        .row{
                            margin-bottom: 0;
                            align-items: center;
                            .author{
                                font-size: 14px;
                                i{
                                    margin: 0 10px;
                                }
                            }
                            .date{
                                font-size: 12px;
                                font-weight: 500;
                                float: right;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

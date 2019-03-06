<template>
    <section id="lead-detail" class="cms-sections">
        <div class="row">
            <div class="col-sm-11 wrapper">
                <h3 class="main-title">
                    <router-link to="/leads/" tag="a" class="cms-add-btn"><i class="far fa-plus-square"></i> Leads
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
                                <h3 class="main-title">{{this.lead.name}}</h3>
                                <h4 class="status-title">Status: <span>{{this.lead.status}}</span></h4>
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
                                    <li><span>Broker:</span> {{this.lead.broker.name}}</li>
                                    <li><span>Broker ID:</span> {{this.lead.broker._id}}</li>
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
                                <form>
                                    <div class="form-group">
                                        <label for="note-title">author</label>
                                        <input type="text" id="note-title" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="note-description">Description</label>
                                        <textarea name="note-description" id="note-description" cols="30" rows="5" class="form-control"></textarea>
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
                                    <li class="timeline-item"></li>
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
                note:{}
            }
        },
        mounted() {
            this.getLead(this.id);
        },
        methods: {
            getLead(id) {
                leadService.Leads().getOne(id).then((response) => {
                    this.lead = response.data.lead
                })
            }
        }
    }
</script>

<style lang="scss">
    #lead-detail {
        .wrapper {
            margin: 0 auto;

            .status {
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
            }
        }
    }
</style>

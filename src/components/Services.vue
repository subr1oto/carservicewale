<template>

    <Header />

    <!-- Caruosel -->
    <div class="container-fluid bg-secondary booking  wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <div class="py-5">
                        <h1 class="text-white mb-4">Explore our top rated services</h1>
                        <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt
                            voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr
                            ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-dark h-100 d-flex flex-column justify-content-center text-center p-5">
                        <h1 class="text-white mb-4">Book For A Service</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control border-0" placeholder="Your Name"
                                        style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" placeholder="Your Email"
                                        style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0" style="height: 55px;">
                                        <option selected>Select Your Brand</option>
                                        <option value="1">KIA</option>
                                        <option value="2">HONDA</option>
                                        <option value="3">TATA</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0" style="height: 55px;">
                                        <option selected>Select Your Model</option>
                                        <option value="1">KIA</option>
                                        <option value="2">HONDA</option>
                                        <option value="3">TATA</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <select class="form-select border-0" style="height: 55px;">
                                        <option selected>Select Car Type</option>
                                        <option value="1">PETROL</option>
                                        <option value="2">DIESEL</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
        <div class="container">
            <div class="row" data-aos="zoom-in">


                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center services-name">
                    <h5>Schedule Services</h5>
                </div>

                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <h5>Cleaning & Detailing</h5>
                </div>

                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <h5>Denting Painting</h5>
                </div>

                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <h5>AC Services</h5>
                </div>

                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <h5>Battery Service</h5>
                </div>

                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <h5>Wheel Service</h5>
                </div>

            </div>

        </div>
    </section><!-- End Cliens Section -->

    <!-- Service Start -->
    <div class="container-xxl service py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="carServ text-uppercase">// Our Services //</h6>
                <h1 class="mb-5">Explore Our Services</h1>
            </div>

            <div class="container-xxl service py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary text-uppercase">// Our Services //</h6>
                <h1 class="mb-5">Explore Our Services</h1>
                <div class="row">
                    <div class="col-md-12">
                        <div class="offer-tabs nav-pills me-4">
                            <ul class="nav nav-tabs" id="offerTab" role="tablist">
                                <li class="nav-item show">
                                    <a class="nav-link active" id="all-tab" data-bs-toggle="pill" @click="selected='Showall'" data-bs-target="#ShowAll" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">All Brands</a>
                                </li>
                                <li class="nav-item show">
                                    <a class="nav-link" id="all-tab" data-toggle="tab" @click="selected='Nissan'" data-bs-toggle="pill" data-bs-target="#Nissan" href="#all" role="tab" aria-controls="all" aria-selected="false">Nissan</a>
                                </li>
                                <li class="nav-item show">
                                    <a class="nav-link" id="all-tab" data-toggle="tab" @click="selected='Toyota'" data-bs-toggle="pill" data-bs-target="#Toyota" href="#all" role="tab" aria-controls="all" aria-selected="false">Toyota</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="tab-content" id="offerTabContent">
                    <div class="tab-pane fade active show" v-if="selected=='Showall'">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <div class="category-services-image cursor-pointer">
                                            <div class="w-100" style="text-align: center; background: #009F66; font-weight: 500; font-size: 10px; line-height: 180%; color: #FFFFFF; position: absolute; top: 0; border-top-left-radius: 8px; height: 18px;">MOST POPULAR</div>
                                            <a href="#">
                                                <img src="http://themescare.com/demos/gauto-preview/assets/img/offer-toyota.png" alt="offer 1" style="position: relative;">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Toyota Alphard</h3>
                                        </a>
                                        <h4>
                                            $50.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/nissan-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Nissan 370Z</h3>
                                        </a>
                                        <h4>
                                            $75.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/audi-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Audi Q3</h3>
                                        </a>
                                        <h4>
                                            $45.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="tab-content" id="offerTabContent">
                    <div class="tab-pane fade active show" v-if="selected=='Nissan'">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="	http://themescare.com/demos/gauto-preview/assets/img/bmw-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>BMW X3</h3>
                                        </a>
                                        <h4>
                                            $50.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/audi-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Audi Q3</h3>
                                        </a>
                                        <h4>
                                            $75.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/toyota-offer-2.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Toyota Camry</h3>
                                        </a>
                                        <h4>
                                            $55.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="tab-content" id="offerTabContent">
                    <div class="tab-pane fade active show" v-if="selected=='Toyota'">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/nissan-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Nissan 370Z</h3>
                                        </a>
                                        <h4>
                                            $75.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/offer-toyota.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Toyota Alphard</h3>
                                        </a>
                                        <h4>
                                            $50.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-offers">
                                    <div class="offer-image">
                                        <a href="#">
                                            <img src="http://themescare.com/demos/gauto-preview/assets/img/audi-offer.png" alt="offer 1">
                                        </a>
                                    </div>
                                    <div class="offer-text">
                                        <a href="#">
                                            <h3>Audi Q3</h3>
                                        </a>
                                        <h4>
                                            $45.00<span>/ Day</span>
                                        </h4>
                                        <ul>
                                            <li>
                                                <i class="fa fa-car"></i> Model:2017
                                            </li>
                                            <li>
                                                <i class="fa fa-cogs"></i> Automatic
                                            </li>
                                            <li>
                                                <i class="fa fa-dashboard"></i> 20kmpl
                                            </li>
                                        </ul>
                                        <div class="offer-action">
                                            <a href="#" class="offer-btn-1 text-decoration-none">Rent Car</a>
                                            <a href="#" class="offer-btn-2 text-decoration-none">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <!-- Service End -->

    <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue"
import $ from 'jquery';
export default{
    components:{Header, Footer},
    data(){
        return{
            selected: "Showall"
        }
    },
    mounted() {
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();
    }
}

</script>

<style lang="scss" scoped>

</style>
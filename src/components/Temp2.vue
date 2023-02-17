<template>
    <Header />

    <!-- Caruosel -->
    <div class="container-fluid bg-secondary booking wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <div class="py-5">
                        <h1 class="text-white mb-4">Explore our top rated services</h1>
                        <p class="text-white mb-0">
                            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
                            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
                            Sea dolore sanctus sed et. Takimata takimata sanctus sed.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-dark h-100 d-flex flex-column justify-content-center text-center p-5">
                        <h1 class="text-white mb-4">Book For A Service</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-12">
                                    <input type="text" class="form-control border-0" placeholder="Select Your Car"
                                        style="height: 55px" />
                                </div>
                                <div class="col-md-12">
                                    <router-link to="/service">
                                        <button class="btn btn-primary w-100 py-3 float-end" type="submit">
                                            View Services
                                        </button>
                                    </router-link>
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
    </section>
    <!-- End Cliens Section -->

    <!-- Service Start -->
    <div class="container-xxl service py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="carServ text-uppercase">// Our Services //</h6>
                <h1 class="mb-5">Explore Our Services</h1>
            </div>
        </div>
    </div>
    <!-- Service End -->

    <div class="container py-5">
        <div class="row  mb-3">
            <div class="col-md-12 col-xl-9">
                <div class="card rounded-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 col-lg-3">
                                <div class="bg-image ripple rounded ripple-surface">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                        class="w-100" />
                                    <a href="#!">
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <h5>Quant trident shirts</h5>
                                <div class="d-flex flex-row">
                                    <div class="text-danger mb-1 me-2">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <span>310</span>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                <div class="d-flex flex-row align-items-center mb-1">
                                    <h4 class="mb-1 me-1">$13.99</h4>
                                    <span class="text-danger"><s>$20.99</s></span>
                                </div>
                                <h6 class="text-success">Free shipping</h6>
                                <div class="d-flex flex-column mt-4">
                                    <button class="btn btn-primary btn-sm" type="button">Details</button>
                                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                                        Add to wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Regular Service</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="product-image">
                    <img src="../components/images/about.jpg" alt="194x228" class="img-responsive" />
                </div>
            </div>

            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="product-deatil">
                    <h5 class="price-container">
                        <span><i class="fa fa-inr" aria-hidden="true"></i> 13,991</span>
                        <span class="strike-price"><i class="fa fa-inr" aria-hidden="true"></i>
                            18,900</span>
                        <span class="badge badge-success">12% off</span>
                    </h5>
                    <div class="col-md-12 col-sm-12 col-xs-6">
                        <div class="rating">
                            <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                            <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                            <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                            <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                            <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                            <span class="reviews">400 Ratings & 133 Reviews</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p>
                            <i class="fa-solid fa-circle-check text-success"></i>
                            Coolant Top Up (Upto 200ml)
                        </p>
                        <p>
                            <i class="fa-solid fa-circle-check text-success"></i>
                            Windshield Water Top Up
                        </p>
                        <p>
                            <i class="fa-solid fa-circle-check text-success"></i> Engine
                            Oil Replacement
                        </p>
                        <p>
                            <i class="fa-solid fa-circle-check text-success"></i> Engine
                            Oil Replacement
                        </p>
                        <p>
                            <i class="fa-solid fa-circle-check text-success"></i> Battery Water Top Up
                        </p>
                        <p><i class="fa-solid fa-circle-check text-success"></i> Vacuuming </p>
                        <p><i class="fa-solid fa-circle-check text-success"></i> Brake Oil Top Up (Upto 50ml)
                        </p>
                    </div>

                    <div class="col-md-12">
                        <button class="btn btn-primary w-100">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import $ from "jquery";
export default {
    components: { Header, Footer },
    data() {
        return {

        };
    },
    mounted() {
        var spinner = function () {
            setTimeout(function () {
                if ($("#spinner").length > 0) {
                    $("#spinner").removeClass("show");
                }
            }, 1);
        };
        spinner();
    },
};
</script>
<style scoped>
@media (max-width: 767.98px) {
    .border-sm-start-none {
        border-left: none !important;
    }

}
.card{
    width: 120%;
}
</style>>
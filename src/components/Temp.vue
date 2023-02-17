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

    <div class="container">
        <div class="row">

            <div class="col-xs-12 col-md-6 col-sm-12 bootstrap snippets bootdeys">
                <!-- product -->
                <div class="product-content product-wrap clearfix">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="product-image">
                                <img src="../components/images/about.jpg" alt="194x228" class="img-responsive" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="product-deatil">
                                <h4 class="name">Regular Service</h4>
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
                                        <span class='read-more' data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            style="cursor:pointer"> Read more..</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4">
                                    <button class="btn btn-primary mr-auto">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

            <div class="col-xs-12 col-md-6 bootstrap snippets bootdeys">
                <!-- product -->
                <div class="product-content product-wrap clearfix">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="product-image">
                                <img src="../components/images/about.jpg" alt="194x228" class="img-responsive" />
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="product-deatil">
                                <h4 class="name">Regular Service</h4>
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
                                        <span class='read-more' data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            style="cursor:pointer"> Read more..</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4">
                                    <button class="btn btn-primary mr-auto">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

            <div class="col-xs-12 col-md-6 bootstrap snippets bootdeys">
                <!-- product -->
                <div class="product-content product-wrap clearfix">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="product-image">
                                <img src="../components/images/about.jpg" alt="194x228" class="img-responsive" />
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="product-deatil">
                                <h4 class="name">Regular Service</h4>
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
                                        <span class='read-more' data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            style="cursor:pointer"> Read more..</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4">
                                    <button class="btn btn-primary mr-auto">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

            <div class="col-xs-12 col-md-6 bootstrap snippets bootdeys">
                <!-- product -->
                <div class="product-content product-wrap clearfix">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="product-image">
                                <img src="../components/images/about.jpg" alt="194x228" class="img-responsive" />
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="product-deatil">
                                <h4 class="name">Regular Service</h4>
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
                                        <span class='read-more' data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            style="cursor:pointer"> Read more..</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4">
                                    <button class="btn btn-primary mr-auto">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

            <!-- end product -->
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
                        </p> <p>
                            <i class="fa-solid fa-circle-check text-success"></i> Battery Water Top Up</p>
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
body {
    margin-top: 20px;
    background: #eee;
}

.product-content {
    /* border: 2px solid #dfe5e9; */
    margin-bottom: 20px;
    margin-top: 12px;
    background: #fff;
    padding: 4px;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

.product-content .carousel-control.left {
    margin-left: 0;
}

.product-content .product-image {
    background-color: #fff;
    display: block;
    min-height: 238px;
    overflow: hidden;
    position: relative;
}

.product-content .product-deatil {
    /* border-bottom: 1px solid #dfe5e9; */
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff;
}

.product-content .product-deatil h5 a {
    color: #2f383d;
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    padding-left: 0;
    margin-left: 0;
}

.product-content .product-deatil h5 a span {
    color: #9aa7af;
    display: block;
    font-size: 13px;
}

.product-content .product-deatil span.tag1 {
    border-radius: 50%;
    color: #fff;
    font-size: 15px;
    height: 50px;
    padding: 13px 0;
    position: absolute;
    right: 10px;
    text-align: center;
    top: 10px;
    width: 50px;
}

.product-content .description {
    font-size: 15px;
    line-height: 20px;
    padding: 10px 14px 16px 19px;
    background: #fff;
}

.product-content .product-info {
    padding: 11px 19px 10px 20px;
}

.product-content .product-info a.add-to-cart {
    color: #2f383d;
    font-size: 13px;
    padding-left: 16px;
}

.product-content name.a {
    padding: 5px 10px;
    margin-left: 16px;
}

.product-entry .product-deatil h5 a span {
    color: #9aa7af;
    display: block;
    font-size: 13px;
}

.strike-price {
    font-size: 18px;
    margin-left: 15px;
    color: #696969;
    text-decoration: line-through;
}

.product-info.smart-form .rating label {
    margin-top: 0;
}

.product-wrap .product-image span.tag2 {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 10px 0;
    color: #fff;
    font-size: 11px;
    text-align: center;
}

.product-wrap .product-image span.sale {
    background-color: #57889c;
}

.product-wrap .product-image span.hot {
    background-color: #a90329;
}

.shop-btn {
    position: relative;
}

.shop-btn>span {
    background: #a90329;
    display: inline-block;
    font-size: 10px;
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, 0.07);
    font-weight: 700;
    border-radius: 50%;
    padding: 2px 4px 3px !important;
    text-align: center;
    line-height: normal;
    width: 19px;
    top: -7px;
    left: -7px;
}

.description-tabs {
    padding: 30px 0 5px !important;
}

.description-tabs .tab-content {
    padding: 10px 0;
}

.product-deatil {
    padding: 30px 30px 50px;
}

.product-deatil hr+.description-tabs {
    padding: 0 0 5px !important;
}

.product-deatil .carousel-control.left,
.product-deatil .carousel-control.right {
    background: none !important;
}

.product-deatil .glyphicon {
    color: #3276b1;
}
.product-deatil .name {
    margin-top: 0;
    margin-bottom: 0;
}

.product-deatil .name small {
    display: block;
}

.product-deatil .name a {
    margin-left: 0;
}

.product-deatil .price-container {
    font-size: 24px;
    margin: 10px;
    font-weight: 300;
}

.product-deatil .price-container small {
    font-size: 12px;
}

.product-deatil .fa-2x {
    font-size: 16px !important;
}

.product-deatil .fa-2x>h5 {
    font-size: 12px;
    margin: 0;
}

.product-deatil .fa-2x+a,
.product-deatil .fa-2x+a+a {
    font-size: 13px;
}

.product-deatil .certified {
    margin-top: 10px;
}

.product-deatil .certified ul {
    padding-left: 0;
}

.product-deatil .certified ul li:not(first-child) {
    margin-left: -3px;
}

.product-deatil .certified ul li {
    display: inline-block;
    background-color: #f9f9f9;
    padding: 13px 19px;
}

.product-deatil .certified ul li:first-child {
    border-right: none;
}

.product-deatil .certified ul li a {
    text-align: left;
    font-size: 12px;
    color: #6d7a83;
    line-height: 16px;
    text-decoration: none;
}

.product-deatil .certified ul li a span {
    display: block;
    color: #21c2f8;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
}

.product-deatil .message-text {
    width: calc(100% - 70px);
}

@media only screen and (min-width: 1024px) {
    .product-content div[class*="col-md-4"] {
        padding-right: 0;
    }

    .product-content div[class*="col-md-8"] {
        padding: 0 13px 0 0;
    }

    .product-wrap div[class*="col-md-4"] {
        padding-right: 0;
    }

    .product-wrap div[class*="col-md-7"] {
        padding: 0 13px 0 0;
    }

    .product-content .product-info {
        position: relative;
    }
}

.checked {
    color: orange;
}

.reviews {
    font-size: 15px;
    margin-left: 15px;
    color: rgb(52, 107, 153);
}

.badge-success {
    font-size: 12px;
    background: rgb(21, 129, 66);
    margin-left: 5px;
}

p {
    font-size: 14px;
    margin: 10px;
}

.fa-circle-check {
    margin-right: 8px;
}

.btn {
    border-radius: 5px;
}


.read-more {
    color: #0d6efd;
    font-weight: 500;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.product-content {
    margin-bottom: 20px;
    margin-top: 12px;
    background: #fff;
    padding: 4px;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

.product-content .carousel-control.left {
    margin-left: 0;
}

.product-content .product-image {
    background-color: #fff;
    /* display: block; */
    width: 100%;
    overflow: hidden;
    position: relative;
}

.product-content .product-deatil {
    /* border-bottom: 1px solid #dfe5e9; */
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff;
}

.product-content .product-deatil h5 a {
    color: #2f383d;
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    padding-left: 0;
    margin-left: 0;
}

.product-content .product-deatil h5 a span {
    color: #9aa7af;
    display: block;
    font-size: 13px;
}

}
</style>

<template>
    <Header />

    <!-- Caruosel -->
    <div class="container-fluid bg-secondary booking wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
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
            <div class="row">
                <div class="col-lg-2 col-md-4 col-6">
                    <span class="category">Schedule Services</span>
                </div>

                <div class="col-lg-2 col-md-4 col-6 ">
                    <span class="category">Denting Painting</span>
                </div>

                <div class="col-lg-2 col-md-4 col-7">
                    <span class="category">Cleaning & Detailing</span>
                </div>

                <div class="col-lg-2 col-md-4 col-4">
                    <span class="category">AC Service</span>
                </div>

                <div class="col-lg-2 col-md-4 col-6">
                    <span class="category">Battery Service</span>
                </div>

                <div class="col-lg-2 col-md-4 col-6">
                    <span class="category">Wheel Services</span>
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
                                <div class="row">
                                    <div class="col-md-12 col-12">
                                    <div class="rating">
                                        <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                        <span class="reviews">400 Ratings & 133 Reviews</span>
                                    </div>
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
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mt-2" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <!-- <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div> -->
                                <div class="col-lg-6 col-md-6">
                                    <button class="btn btn-primary mr-auto cart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                </div>
                            </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

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
                                <div class="row">
                                    <div class="col-md-12 col-12">
                                    <div class="rating">
                                        <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                        <span class="reviews">400 Ratings & 133 Reviews</span>
                                    </div>
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
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mt-2" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <button class="btn btn-primary mr-auto cart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                </div>
                            </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

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
                                <div class="row">
                                    <div class="col-md-12 col-12">
                                    <div class="rating">
                                        <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                        <span class="reviews">400 Ratings & 133 Reviews</span>
                                    </div>
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
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mt-2" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <button class="btn btn-primary mr-auto cart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                </div>
                            </div>
                    </div>
                </div>
                <!-- end product -->
            </div>

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
                                <div class="row">
                                    <div class="col-md-12 col-12">
                                    <div class="rating">
                                        <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                        <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                        <span class="reviews">400 Ratings & 133 Reviews</span>
                                    </div>
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
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mt-2" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4" style="color: #747977;font-family: Barlow,sans-serif">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <button class="btn btn-primary mr-auto cart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
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

.product-content .product-deatil {
    /* border-bottom: 1px solid #dfe5e9; */
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff;
}

.strike-price {
    font-size: 18px;
    margin-left: 15px;
    color: #696969;
    text-decoration: line-through;
}
.product-deatil {
    padding: 30px 30px 50px;
}

.product-deatil hr+.description-tabs {
    padding: 0 0 5px !important;
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

.read-more {
    color: #0d6efd;
    font-weight: 500;
}
span.category{
    font-size: 20px;
    font-family: "Barlow",sans-serif;
    font-size: 1.25rem;
    color:black;
    cursor: pointer;
}
span.category:hover{
    color:#0d6efd;
    cursor: pointer;
}
.cart{
        width: 95%;
        margin-bottom: 10px;
        padding:12px;
        margin-left:100px;
    }

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
    span.category{
        color:rgb(65, 65, 65);
        font-family: "Barlow",sans-serif;
        font-size: 1rem;
        word-wrap:inherit;
        cursor: pointer;
    }
    .cart{
        width: 95%;
        margin-bottom: 10px;
        padding:15px
    }
    .reviews{
        font-size: 14.5px;
    }
}
</style>

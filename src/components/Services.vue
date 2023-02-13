<template>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, New York, USA</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <router-link to="/" class="nav-item nav-link ">
                    Home
                </router-link>
                <router-link to="/about"  class="nav-item nav-link">
                    About
                </router-link>
                <router-link to="/service"  class="nav-item nav-link active">
                    Services
                </router-link>
                <!-- <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a href="booking.html" class="dropdown-item">Booking</a>
                        <a href="team.html" class="dropdown-item">Technicians</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a> -->
            </div>
            <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Page Header Start -->
    <div class="container-fluid page-header mb-5 p-0" style="background-image: url(https://themewagon.github.io/carserv/img/carousel-bg-2.jpg);">
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- Service Start -->
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
            <!-- <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div class="col-lg-4">
                    <div class="nav w-100 nav-pills me-4">

                        <button class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <i class="fa fa-car-side fa-2x me-3"></i>
                            <h4 class="m-0">Diagnostic Test</h4>
                        </button>
                        <button class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <i class="fa fa-car fa-2x me-3"></i>
                            <h4 class="m-0">Engine Servicing</h4>
                        </button>
                        <button class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <i class="fa fa-cog fa-2x me-3"></i>
                            <h4 class="m-0">Tires Replacement</h4>
                        </button>
                        <button class="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <i class="fa fa-oil-can fa-2x me-3"></i>
                            <h4 class="m-0">Oil Changing</h4>
                        </button>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tab-content w-100">
                        <div class="tab-pane fade show active" id="tab-pane-1">
                            <div class="row g-4">
                                <div class="col-md-6" style="min-height: 350px;">
                                    <div class="position-relative h-100">
                                        <img class="position-absolute img-fluid w-100 h-100" src="./images/service-1.jpg"
                                            style="object-fit: cover;" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-pane-2">
                            <div class="row g-4">
                                <div class="col-md-6" style="min-height: 350px;">
                                    <div class="position-relative h-100">
                                        <img class="position-absolute img-fluid w-100 h-100" src="./images/service-2.jpg"
                                            style="object-fit: cover;" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-pane-3">
                            <div class="row g-4">
                                <div class="col-md-6" style="min-height: 350px;">
                                    <div class="position-relative h-100">
                                        <img class="position-absolute img-fluid w-100 h-100" src="./images/service-3.jpg"
                                            style="object-fit: cover;" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-pane-4">
                            <div class="row g-4">
                                <div class="col-md-6" style="min-height: 350px;">
                                    <div class="position-relative h-100">
                                        <img class="position-absolute img-fluid w-100 h-100" src="./images/service-4.jpg"
                                            style="object-fit: cover;" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i class="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- Service End -->


    <!-- Booking Start -->
    <div class="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <div class="py-5">
                        <h1 class="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                        <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 class="text-white mb-4">Book For A Service</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control border-0" placeholder="Your Name" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" placeholder="Your Email" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0" style="height: 55px;">
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text"
                                            class="form-control border-0 datetimepicker-input"
                                            placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style="height: 55px;">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control border-0" placeholder="Special Request"></textarea>
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
    <!-- Booking End -->


    <!-- Testimonial Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center">
                <h6 class="text-primary text-uppercase">// Testimonial //</h6>
                <h1 class="mb-5">Our Clients Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel position-relative">
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="./images/testimonial-1.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="./images/testimonial-2.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="./images/testimonial-3.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="./images/testimonial-4.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial End -->


    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Opening Hours</h4>
                    <h6 class="text-light">Monday - Friday:</h6>
                    <p class="mb-4">09.00 AM - 09.00 PM</p>
                    <h6 class="text-light">Saturday - Sunday:</h6>
                    <p class="mb-0">09.00 AM - 12.00 PM</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Services</h4>
                    <a class="btn btn-link" href="">Diagnostic Test</a>
                    <a class="btn btn-link" href="">Engine Servicing</a>
                    <a class="btn btn-link" href="">Tires Replacement</a>
                    <a class="btn btn-link" href="">Oil Changing</a>
                    <a class="btn btn-link" href="">Vacuam Cleaning</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script>
import $ from 'jquery';
export default{
    data(){
        return{
            selected: "Showall"
        }
    },
    mounted(){
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
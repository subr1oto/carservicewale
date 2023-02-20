<template>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border carServ" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only" style="overflow: hidden;">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
    <div class="container-fluid  p-0" style="background-color: #F2F2F2 !important;">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-envelope carServ me-2"></small>
                    <small>info@carservicewale.com</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock carServ me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt carServ me-2"></small>
                    <small>8904555007</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-sm-square bg-white carServ me-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 carServ"><i class="fa fa-car me-3"></i>CarServiceWale</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="col-3 d-flex col-sm-3 float-start mx-5 my-1">
                <div style="margin-right: 83%; margin-bottom: 50px;"></div>
                <v-select  placeholder="select a car" v-model="SingleCarData" :options="carObject" label="model" :filterBy="filterList" @search="myFilter">
                    <template #selected-option="option">                 
                        <div class="selected-div" style="background-color: transparent; width: 275px; min-height: 34px; display: flex">                     
                            <img height="28" :src="option.logo" class="selected-logo"/>
                            <div class="span-item">
                                <span style="color: black; position: relative; margin: 5px; top: -5px;">{{ option.model }}</span>                 
                            </div>                     
                            <img height="28" :src="option.image" class="selected-image"/>                     
                        </div>             
                    </template>
                    <template v-slot:option="option">
                        {{ option.model }} <br>
                        <cite>{{ option.brand }}</cite> <br>
                        <cite>{{ option.type }}</cite>
                        <img
                        :src="option.image"
                        style="float: right; border-radius: 40px"
                        width="48"
                        />
                    </template>
                </v-select>
                <div style="margin-right: 19%; margin-bottom: 50px;"></div>
            </div>
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <router-link :to="{ name: 'Home' }" :class="getActiveNavLink('Home')" class="nav-item nav-link menu">
                    Home
                </router-link>
                <router-link :to="{ name: 'About' }" :class="getActiveNavLink('About')" class="nav-item nav-link menu">
                    About
                </router-link>
                <router-link :to="{ name: 'Service' }" :class="getActiveNavLink('Service')" class="nav-item nav-link menu">
                    Services
                </router-link>
                <router-link :to="{ name: 'Login' }" :class="getActiveNavLink('Login')" class="nav-item nav-link menu">
                    Login
                </router-link>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->

</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
export default {
    name: "HeaderComponent",
    async mounted() {
        await this.getData();
    },
    data(){
        return{
            SingleCarData:"",
            carObject: reactive([]),
        }
    },
    methods: {
        filterList: (option, label, search) => {
            let temp = search.toLowerCase();
            return option.model.toLowerCase().indexOf(temp) > -1 || option.brand.toLowerCase().indexOf(temp) > -1 ||
            option.type.toLowerCase().indexOf(temp) > -1
        },

        async myFilter(event) {
            const response = await axios.get(`http://192.168.29.223:8000/car/view-cars?search=${event}`);
            this.carObject = JSON.parse(JSON.stringify(response.data.data.Assets.map(obj => obj)));
            console.log(JSON.parse(JSON.stringify(this.carObject)));
        },
        
        async getData() {
            const response = await axios.get(`http://192.168.29.223:8000/car/view-cars`);
            this.carObject = response.data.data.Assets;
            return response.data;
        },
        getActiveNavLink(name) {
            let classString = "nav-item nav-link "
            if (this.$route.name === name) {
                //If it is true, we append to the class string the "active" value
                classString += "active"
            }
            //Return the class string.
            return classString;
        }
    }
}
</script>

<style>

@import "vue-select/dist/vue-select.css";

.span-item{
    top: 3px;
    position: relative;
    min-width: -webkit-fill-available;
    text-align: center;
}

.vs__actions {
    background-color: transparent !important;
}

.selected-image{
    top: -10px;
    position: relative;
    height: 40px;
    margin-left: -35px
}

.selected-logo{
    height: 46px;
    top: -13px;
    position: relative;
    margin-right: -29px;
}

div#vs1__combobox {
    width: 396px;
    border: 2px solid #688bc7;
    border-radius: 30px;
    height: 46px;
    padding: 7px;
}

.vs--searchable .vs__dropdown-toggle {
    cursor: text;
    height: 44px;
}
input.vs__search {
    background-color: transparent !important;
    height: 23px !important;
    border-radius: 10px;
}
.brand-logo {
    float: left;
    border-radius: 10px;
    width: 19%;
    margin-right: 5px;
    top: -5px;
    position: relative;
    height: 59px;
}

.model-logo {
    float: right;
    border-radius: 11px;
    width: 20%;
    top: -4px;
    position: relative;
    background: transparent;
    height: 54px;
}

.nav-link {
    color: rgb(0, 125, 241);
}

:scope(img){
    height: 50px;
}
</style>
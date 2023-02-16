<template>
    <Header></Header>
    <div class="container">
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-9">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h5>Items in your cart</h5>
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                    <tbody>
                                        <tr>
                                            <td width="90">
                                                <div class="cart-product-imitation">
                                                </div>
                                            </td>
                                            <td class="desc">
                                                <h3>
                                                    <a href="#" class="text-navy">
                                                        Desktop publishing software
                                                    </a>
                                                </h3>
                                                <dl class="small m-b-none">
                                                    <dt>Description lists</dt>
                                                    <dd>A description list is perfect for defining terms.</dd>
                                                </dl>

                                                <div class="m-t-sm">
                                                    <a href="#" class="text-muted"><i class="fa fa-gift"></i> Add gift
                                                        package</a>
                                                    |
                                                    <button class="btn btn-danger float-end"><i class="fa fa-trash"></i> Remove
                                                        item</button>
                                                </div>
                                            </td>

                                            <td>
                                                $180,00
                                                <s class="small text-muted">$230,00</s>
                                            </td>
                                            <td width="65">
                                                <input type="text" class="form-control" placeholder="1">
                                            </td>
                                            <td>
                                                <h4>
                                                    $180,00
                                                </h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-md-3">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h5>Cart Summary</h5>
                        </div>
                        <div class="ibox-content">
                            <span>
                                Total
                            </span>
                            <h2 class="font-bold">
                                $390,00
                            </h2>

                            <hr>
                            <span class="text-muted small">
                                *For United States, France and Germany applicable sales tax will be applied
                            </span>
                            <div class="m-t-sm">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i>
                                        Checkout</a>
                                    <a href="#" class="btn btn-white btn-sm"> Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Header from "./Header.vue"
export default {
    components: {
        Header
    },
    name: "CartPage",
}
</script>

<style scoped>
body {
    margin-top: 20px;
    background: #eee;
}

h3 {
    font-size: 16px;
}

.text-navy {
    color: #1ab394;
}

.cart-product-imitation {
    text-align: center;
    padding-top: 30px;
    height: 80px;
    width: 80px;
    background-color: #f8f8f9;
}

.product-imitation.xl {
    padding: 120px 0;
}

.product-desc {
    padding: 20px;
    position: relative;
}

.ecommerce .tag-list {
    padding: 0;
}

.ecommerce .fa-star {
    color: #d1dade;
}

.ecommerce .fa-star.active {
    color: #f8ac59;
}

.ecommerce .note-editor {
    border: 1px solid #e7eaec;
}

table.shoping-cart-table {
    margin-bottom: 0;
}

table.shoping-cart-table tr td {
    border: none;
    text-align: right;
}

table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
    text-align: left;
}

table.shoping-cart-table tr td:last-child {
    width: 80px;
}

.ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
}

.ibox.collapsed .ibox-content {
    display: none;
}

.ibox:after,
.ibox:before {
    display: table;
}

.ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
}

.ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
}

.ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
}
</style>

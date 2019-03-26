$(document).ready(function () {
    $(".header .user-info .pull-left a").eq(0).attr("href", "login.html");
    $(".header .user-info .pull-left a").eq(1).attr("href", "login.html");
    $(".header .user-info .pull-right> a").eq(1).attr("href", "my-order.html");
    $(".header .user-info .pull-right> a").eq(0).attr("href", "my-point.html");
    $(".header .user-info .pull-right .dropdown").eq(0).find("a").attr("href", "my-order.html");
    $(".header .user-info .pull-right .dropdown").eq(1).find("a").attr("href", "rule-center.html");
    $(".header .user-info .pull-right .dropdown").eq(1).find("a").eq(1).attr("href", "rule-center.html");
    $(".header .user-info .pull-right .dropdown").eq(2).find("a").attr("href", "product.html");
    $(".header .user-info .pull-right .dropdown").eq(3).find("a").attr("href", "inform.html");
    // $(".header .user-info .pull-right .dropdown").eq(4).find("a").preventDefault();
    $(".header .logo-search .logo>a").attr("href", "index.html");
    $(".header .logo-search .search-input a").attr("href", "category.html");
    $(".header .logo-search .shop-car a").attr("href", "shopCar.html");
    $(".nav-bar .nav-list a").attr("href", "category.html");
    $(".nav-bar .pull-left .nav-pills a").attr("href", "activity-flashSale.html");
    $(".nav-bar .pull-left .nav-pills a").eq(0).attr("href", "index.html");
    $(".nav-bar .pull-left .nav-pills a").eq(1).attr("href", "activity-flashSale.html");
    $(".nav-bar .pull-left .nav-pills a").eq(8).attr("href", "activity-flashSale.html");
    $(".right-fixed-guide li").eq(0).find("a").attr("href", "my-order.html");
    $(".right-fixed-guide li").eq(1).find("a").attr("href", "shopCar.html");
    // $(".right-fixed-guide li").eq(2).find("a").preventDefault();
    // $(".right-fixed-guide li").eq(3).find("a").preventDefault();
    $(".header .img-box .carousel-inner a").attr("href", "category.html");
    $(".header .img-box .bottom-box a").attr("href", "inform.html");
    $(".fool-1 .container a").attr("href", "category.html");
    // $(".fixed-guide-left .img").preventDefault();
    $(".fixed-guide-left >a").eq(0).attr("href", "activity-flashSale.html");
    $(".fixed-guide-left >a").eq(1).attr("href", "activity-flashSale.html");
    $(".fool .big-title a").attr("href", "category.html");
    $(".fool .content-box a").attr("href", "category.html");
    $(".fool .part2 a").attr("href", "category.html");
    $(".fool .part3 a").attr("href", "product.html");
    $(".fool .hot-sell a").attr("href", "category.html");
    $(".guess-like .list a").attr("href", "product.html");
    $(".footer .notice a").attr("href", "rule-center.html");
    $(".footer .guide-list a").attr("href", "rule-center.html");
    $(".footer .big-logo").attr("href", "index.html");


})
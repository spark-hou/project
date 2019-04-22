$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container.swiper-1', {
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination.swiper-1',
        },
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
    })
    var mySwiperNew = new Swiper('.swiper-container.swiper-new', {
        slidesPerView: 3,
        spaceBetween: 0,
    })
    var mySwiper2 = new Swiper('.swiper-container.swiper-2', {
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination.swiper-2',
        },
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
    })


    //黑色四边形动画
    var brandTop = $('.all-brand .content').offset().top;
    var brandHeight=$('.all-brand .content').height();
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop > (brandTop-brandHeight)) {
            $('.bg').css('top', '0');
        } else {
            $('.bg').css('top', '12vw');
        }
        if (winTop>$('.swiper-container.swiper-1').height()){
            $('.header.fixed .sepLogo').addClass('dis');
            $('.header.fixed .searchBox').removeClass('search-position');
        }else {
            $('.header.fixed .sepLogo').removeClass('dis');
            $('.header.fixed .searchBox').addClass('search-position');
        }
        var likeTop=$('.guess-like').offset().top;
        if (winTop>likeTop){
            $('.backTop').show();
        } else {
            $('.backTop').hide();
        }
    })
    $('.backTop').click(function () {
        $('html,body').stop(true).animate({
            scrollTop:0,
        },1000)
    })
    // <!--隐藏的搜索页面-->
    $('.search-cover .history-search b').click(function () {
        $(this).parent().hide();
    })
    $('.header.fixed .searchBox').click(function () {
        $('.search-cover').show();
    })
    $('.search-cover .logoImg').click(function () {
        $(this).parents('.search-cover ').hide();
    })
    $('.search-cover i').click(function () {
        window.location.href="../category/index.html";
    })
    $('.news-fool-div >a').attr('href','../category/index.html');
    $('.news-fool-div .swiper-slide a').attr('href','../product/index.html');
    $('.all-brand .swiper-slide a').attr('href','../product/index.html');
    $('.all-brand .brand-list a').attr('href','../product/index.html');

    $('.category-fool-div .swiper-slide a').attr('href','../product/index.html');

    $('.guess-like  a').attr('href','../product/index.html');



})
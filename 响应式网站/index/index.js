$(document).ready(function () {
    $(window).scroll(function () {
        var sTop = $(this).scrollTop();
        if (sTop > 0) {
            $('.header .logo').css('transform', "scale(0.8)");
            $('.header').css({
                'background-color': "rgba(51, 51, 51, 0.8)",
                padding: '18px 40px',

            });

        } else {
            $('.header .logo').css('transform', "scale(1.1)");
            $('.header').css({
                'background-color': "rgba(51, 51, 51, 0)",
                padding: '14px 40px',

            });
        }
    })

    var mySwiper = new Swiper('.swiper-container.swiper-1', {
        autoplay: {
            disableOnInteraction: false,
            delay: 5000,
        },
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar.swiper-1',
        },
        navigation: {
            nextEl: '.swiper-button-next.swiper-1',
            prevEl: '.swiper-button-prev.swiper-1',
        },
        pagination: {
            el: '.swiper-pagination.swiper-1',
        },
    })

    $(".bottom .right .swiper-1").hover(function () {
        $(this).find('span').stop(true).animate({'margin-left': '0px'}, 300);
    }, function () {
        $(this).find('span').stop(true).animate({'margin-left': '70px'}, 300);
        var it = $(this)
        var timer = setTimeout(function () {
            it.find('span').css('margin-left', '-70px');
        }, 400)
    })
//视差滚动
    $('#scene').parallax({
        calibrateX: false,
        calibrateY: true,
        invertX: false,
        invertY: true,
        limitX: 0,
        limitY: false,
        scalarX: 10,
        scalarY: 8,
        frictionX: 0.2,
        frictionY: 0.1,
        originX: 0.0,
        originY: 1.0
    });

    $(".falls .content .tab-list a").hover(function () {
        $(this).find('b').stop(true).animate({'left': '0px'}, 300);
    }, function () {
        $(this).find('b').stop(true).animate({'left': '90px'}, 300);
        var it = $(this)
        var timer = setTimeout(function () {
            it.find('b').css('left', '-90px');
        }, 400)
    })
    //滚动动画
    new WOW().init();

    function pu() {
        var winWidth = $(this).innerWidth();
        var num=winWidth*0.4;
        if (winWidth > 1024) {
            //瀑布流初始化
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 375,
                gutter: 0,
                fitWidth: true
            });
            var height = $('.grid').height() + 600;
            $('.falls .layer').height(height);
            var mySwiper2 = new Swiper('.swiper-container.swiper-2', {
                autoplay: false,
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next.swiper-2',
                    prevEl: '.swiper-button-prev.swiper-2',
                },

            })
            var mySwiper4 = new Swiper('.swiper-container.swiper-4', {
                autoplay: false,
                navigation: {
                    nextEl: '.swiper-button-next.swiper-4',
                    prevEl: '.swiper-button-prev.swiper-4',
                },
                slidesPerView: 8,
                spaceBetween: 10,

            })

        } else {
            $('.item-7').removeClass('item-7');
            //瀑布流初始化
            $('.grid').masonry({
                itemSelector: '.grid-item',
                gutter: 0,
                fitWidth: true
            });
            var mySwiper2 = new Swiper('.swiper-container.swiper-2', {
                autoplay: false,
                navigation: {
                    nextEl: '.swiper-button-next.swiper-2',
                    prevEl: '.swiper-button-prev.swiper-2',
                },

            })
            var mySwiper4 = new Swiper('.swiper-container.swiper-4', {
                autoplay: false,
                navigation: {
                    nextEl: '.swiper-button-next.swiper-4',
                    prevEl: '.swiper-button-prev.swiper-4',
                },
                slidesPerView: 4,
                spaceBetween: 10,

            })

            $('.layer').hide();
            $('.falls').height($('.falls .content .grid').height()+0.18*winWidth+170)
        }
    }

    pu();
    $(window).resize(function () {
        pu();
        window.location.reload()
    })



    // <!--轮播图2-->

    var mySwiper3 = new Swiper('.swiper-container.swiper-3', {
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next.swiper-3',
            prevEl: '.swiper-button-prev.swiper-3',
        },
        pagination: {
            el: '.swiper-pagination.swiper-3',
        },

    })
    //click

    var flag = false;
    $('.m-header .menu i').click(function () {
        if (flag){
            $('.dom').css('margin-left','0');
            $('.m-header').css('left','0');
            $('.m-header .menu i').removeClass('fa-close');
            $('.m-header .menu i').addClass('fa-bars');

            var timer =setTimeout(function () {
                $('.guide-list').hide();
            },300)
            flag = false
        }else {
            $('.dom').css('margin-left','70%');
            $('.m-header').css('left','70%');
            $('.guide-list').show();
            $('.m-header .menu i').removeClass('fa-bars');
            $('.m-header .menu i').addClass('fa-close');
            flag = true
        }
    })

})
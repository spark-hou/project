$(document).ready(function () {
    $('.header .more').click(function () {
        if ($('.guide').is(':visible')) {
            $('.guide').hide();
        } else {
            $('.guide').show();
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
//返回顶部
    $('.backTop').click(function () {
        $('html,body').stop(true).animate({
            scrollTop: 0,
        }, 1000)
    })
    //滚动事件
    $(document).scroll(function () {
        var num = $(".good-brand").offset().top;
        var scroll = $(this).scrollTop();
        if (scroll > num) {
            $('.backTop').show();
        } else {
            $('.backTop').hide();
        }
    })
    //显示购物界面
    var flagBuy = false;
    $('.good-size').click(function () {
        if (flagBuy) {
            $('.choose-good').hide();
            flagBuy = false;
            $('.choose-good-cover').hide();
            $("body").css("overflow", "auto");
        } else {
            $('.choose-good').show();
            flagBuy = true;
            $('.choose-good-cover').show();
            $("body").css("overflow", "hidden");
        }

    });
    //灰色cover
    $('.choose-good-cover').click(function () {
        $('.choose-good').hide();
        flagBuy = false;
        $('.choose-good-cover').hide();
        $("body").css("overflow", "auto");
    })
    //点击x关闭
    $('.choose-good .goods .content b').click(function () {
        $('.choose-good').hide();
        flagBuy = false;
        $('.choose-good-cover').hide();
        $("body").css("overflow", "auto");
    })
    //选择商品size
    $('.choose-good .size li').click(function () {
        $('.choose-good .size li').removeClass('active');
        $(this).addClass('active');
        $('.choose-good .size i').text($(this).text());
        $('.good-size .title b').text($(this).text());
    })
    //改变商品数量
    $('.choose-good .buy-num .add-num .minus').click(function () {
        var num = $('.choose-good .buy-num .add-num input').val();
        if (num <= 1) {
            return;
        } else {
            num--;
            $('.choose-good .buy-num .add-num input').val(num);
        }
    })
    $('.choose-good .buy-num .add-num .plus').click(function () {
        var num = $('.choose-good .buy-num .add-num input').val();

        num++;
        $('.choose-good .buy-num .add-num input').val(num);

    })
    //产品详情切换
    $('.good-info .title span').click(function () {
        $('.good-info .title span').removeClass('active');
        $(this).addClass('active');
        if ($('.good-info .detail').hasClass('active')) {
            $('.detail-box').show();
            $('.parameter-box').hide();
            $('.all-box').height($('.box-1').height());
        } else {
            $('.detail-box').hide();
            $('.parameter-box').show();
            $('.all-box').height($('.box-1').height());
        }
    })
    //促销信息
    $('.good-promotion').click(function () {
        $('.promotion-box').show();
        $('.promotion-cover').show();
        $("body").css("overflow", "hidden");
    })
    $('.promotion-box>b').click(function () {
        $('.promotion-box').hide();
        $('.promotion-cover').hide();
        $("body").css("overflow", "auto");
    })
    $('.promotion-cover').click(function () {
        $('.promotion-box').hide();
        $('.promotion-cover').hide();
        $("body").css("overflow", "auto");
    })
    //设置all-box的高度
    $('.all-box').height($('.box-1').height());
    //切换tab
    $('.header li').click(function () {
        $('.header li').removeClass('active');
        $(this).addClass('active');
        var num = $(this).index() + 1;
        if (num == 1) {
            $('.box-1').css('left', '0');
            $('.box-2').css('left', '100%');
            $('.box-3').css('left', '200%');
            $('.all-box').height($('.box-1').height());
        }
        if (num == 2) {
            $('.box-1').css('left', '-100%');
            $('.box-2').css('left', '0');
            $('.box-3').css('left', '100%');
            $('.all-box').height($('.box-2').height());
        }
        if (num == 3) {
            $('.box-1').css('left', '-200%');
            $('.box-2').css('left', '-100%');
            $('.box-3').css('left', '0');
            $('.all-box').height($('.box-3').height());
        }
    })
    //产品详情切换
    $('.box-2 .good-info .title span').click(function () {
        $('.good-info .title span').removeClass('active');
        $(this).addClass('active');
        if ($('.good-info .detail').hasClass('active')) {
            $('.detail-box').show();
            $('.parameter-box').hide();
            $('.all-box').height($('.box-2').height());
        } else {
            $('.detail-box').hide();
            $('.parameter-box').show();
            $('.all-box').height($('.box-2').height());
        }
    })
    //切换到评论
    $('.box-1 .comment .see-all').click(function () {
        $('.box-1').css('left', '-200%');
        $('.box-2').css('left', '-100%');
        $('.box-3').css('left', '0');
        $('.all-box').height($('.box-3').height());
        $('.header li').removeClass('active');
        $('.header li').eq(2).addClass('active');
    })
    $('.box-1 .comment .title .star').click(function () {
        $('.box-1').css('left', '-200%');
        $('.box-2').css('left', '-100%');
        $('.box-3').css('left', '0');
        $('.all-box').height($('.box-3').height());
        $('.header li').removeClass('active');
        $('.header li').eq(2).addClass('active');
    })
    //底部漂浮购物按钮
    $('.footer a').click(function (e) {
        e.preventDefault();
        $('.choose-good').show();
        flagBuy = true;
        $('.choose-good-cover').show();
        $("body").css("overflow", "hidden");
    })
    $('.header-back .logoImg').click(function () {
        window.history.back();
    })
    $('.shopcar.item').click(function () {
        window.location.href = "../shopCar/index.html";
    })
    $('.button .addToShop').click(function () {
        window.location.href = "../shopCar/index.html";
    })
    $('.button .buy').click(function () {
        window.location.href = "../shopCar/index.html";
    })


})
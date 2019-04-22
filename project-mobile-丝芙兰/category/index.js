$(document).ready(function () {

    $('.search-cover .history-search b').click(function () {
        $(this).parent().hide();
    })
    $('.header.fixed .searchBox').click(function () {
        $('.search-cover').show();
    })
    $('.search-cover .logoImg').click(function () {
        $(this).parents('.search-cover ').hide();
    })
//显示排序列表
    var flag = false;
    $('.sort').click(function () {
        if (flag) {
            $('.tab-cover').hide();
            flag = false;
            $('.tab-cover-grey').hide();
            changeColor();
            $("body").css("overflow", "auto");
        } else {
            $('.tab-cover').show();
            flag = true;
            $('.tab-cover-grey').show();
            changeColor();
            $("body").css("overflow", "hidden");
        }

    });
    //灰色cover
    $('.tab-cover-grey').click(function () {
        $('.tab-cover').hide();
        flag = false;
        $('.tab-cover-grey').hide();
        changeColor();
        $("body").css("overflow", "auto");
    })
    //切换tab选项
    $('.tab-cover a').click(function (e) {
        e.preventDefault();
        $('.menu .item-2').removeClass('active');
        $('.tab-cover a').removeClass('active');
        $(this).addClass('active');
        changeColor();
    })

//判断active
    function changeColor() {
        if ($('.tab-cover a').hasClass('active')) {
            $(".sort").addClass('active');
        } else {
            $(".sort").removeClass('active');
        }
        if ($(".sort").hasClass('active') && $('.tab-cover').is(':visible')) {
            $(".sort .tag").attr('src', './img/up-r.png')
        }
        if ($(".sort").hasClass('active') && !$('.tab-cover').is(':visible')) {
            $(".sort .tag").attr('src', './img/down-r.png')
        }
        if (!$(".sort").hasClass('active') && $('.tab-cover').is(':visible')) {
            $(".sort .tag").attr('src', './img/up-w.gif')
        }
        if (!$(".sort").hasClass('active') && !$('.tab-cover').is(':visible')) {
            $(".sort .tag").attr('src', './img/down-w.gif')
        }
        if ($('.menu .price').hasClass('active')) {
            $('.menu .price').find('img').attr('src', './img/price-down.png');
        } else {
            $('.menu .price').find('img').attr('src', './img/price-d.png');
        }
    }

    changeColor();
    //menu加active
    $('.menu .item-2').click(function () {
        $('.menu .item-1').removeClass("active");
        $('.tab-cover a').removeClass('active');
        $(this).addClass('active');
        changeColor();
    })
    //滚动事件
    $(document).scroll(function () {
        var listTop = $('.good-list').offset().top;
        var scroll = $(this).scrollTop();
        if (scroll > listTop) {
            $('.menu').slideUp();
            7
        } else {
            $('.menu').slideDown();
        }
        var num = $('.good-list').height();
        if (scroll > (num / 2)) {
            $('.back-top').show();
        } else {
            $('.back-top').hide();
        }
    })
//切换布局方式
    var flagLayout = false;
    $('.layout').click(function () {
        if (flagLayout) {
            $('.good-list li').removeClass('active');
            $(this).find('img').attr('src', './img/list-style-2.png');
            flagLayout = false;
        } else {
            $('.good-list li').addClass('active');
            $(this).find('img').attr('src', './img/list-style-1.png');
            flagLayout = true;
        }
    })
    //返回顶部
    $('.back-top').click(function () {
        $('html,body').stop(true).animate({
            scrollTop: 0,
        }, 1000)
    })
    //显示购物界面
    var flagBuy = false;
    $('.good-list .add-shop-car').click(function () {
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
    //筛选
    $('.menu .screen').click(function () {
        if ($('.screen-box').is(':visible')) {
            $('.screen-box').hide();
            $('.screen-cover').hide();
            $('.good-list').css({
                position: 'relative',
                top: 0,
                width: '100%'
            })
        } else {
            $('.screen-box').show();
            $('.screen-cover').show();
            $('.good-list').css({
                position: 'fixed',
                top: 0,
                width: '100%'
            })
        }
    })
    $('.screen-cover').click(function () {
        $('.screen-box').hide();
        $('.screen-cover').hide();
        $('.good-list').css({
            position: 'relative',
            top: 0,
            width: '100%'
        })
    })
    $('.screen-box .sure').click(function () {
        $('.screen-box').hide();
        $('.screen-cover').hide();
        $('.good-list').css({
            position: 'relative',
            top: 0,
            width: '100%'
        })
    })
    $('.screen-box .reset').click(function () {
        $('.screen-item .content span').removeClass('active');
        changB()
    })
    $('.screen-item .content span').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            changB()
        } else {
            $(this).addClass('active');
            changB()
        }
    })

    function changB() {
        $('.screen-item b').each(function (index) {
            var text='';
            $(this).parents('.screen-item').find('.active').each(function (index) {
                text=text+$(this).text()+',';
            })
            $(this).text(text);
        })
    }

    //筛选下拉
    $('.screen-box img').click(function () {
        var num = $(this).attr('src');
        if (num == './img/show.png') {
            $(this).attr('src', './img/hide.png');
            $(this).parents('.screen-item').find('.content').height('100%');
        } else {
            $(this).attr('src', './img/show.png');
            $(this).parents('.screen-item').find('.content').height('12vw');
        }
    })

    $('.header-back .logoImg').click(function(){
        window.history.back();
    })
    $('.watch-list a').attr('href','../product/index.html');
    $('.list a').attr('href','../category/index.html');
    $('.good-list a').attr('href','../product/index.html');
    $('.button .addToShop').click(function () {
        window.location.href="../shopCar/index.html";

    })
    $('.button .buy').click(function () {
        window.location.href="../shopCar/index.html";

    })
    $('.shop-car').click(function () {
        window.location.href="../shopCar/index.html";

    })
})
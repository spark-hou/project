$(document).ready(function () {
    //禁止默认事件
    $(".my-box .my-list li").click(function (e) {
        if ($(this).hasClass("active")){
            e.preventDefault();
        }
    })
    //公告轮播
    jQuery(".txtScroll-top").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "topLoop",
        autoPlay: true,
    });
    // /*<!--隐藏显示二维码-->*/
    $(".header .hover-qr .dropdown-menu li").mouseenter(function () {
        var index = $(this).index();
        var $qr = $(".header .hover-qr .show-qr");
        var $img = $(".header .hover-qr .show-qr img");
        if (index == 2) {
            $qr.css({display: "none",});
            $img.attr("src", "./img/header-footer/qr-21.png");
            $qr.stop(true).fadeIn();
            return

        }
        if (index == 3) {
            $qr.css({display: "none",});
            $img.attr("src", "./img/header-footer/qr-22.png");
            $qr.stop(true).fadeIn();
            return
        }
        if (index == 4) {
            $qr.css({display: "none",});
            $img.attr("src", "./img/header-footer/qr-23.png");
            $qr.stop(true).fadeIn();
            return
        } else {
            $qr.css({display: "none",});
        }
    })

    $(".header .hover-qr .dropdown-menu li").mouseleave(function () {
        $(".header .hover-qr .show-qr").css({display: "none",});
    })

    //nav-list鼠标响应事件
    $(".nav-list .all-classify").hover(function () {
        var index = $(this).index();
        var $detail = $(".header .nav-bar .detail-list .detail");
        $detail.css("display", "none");
        $(this).find(".detail").stop(true).fadeIn();
        //修改list样式
        index++;
        $(this).css("background", "white");
        $(this).children('img').attr("src", './img/header-footer/nav-' + index + '-' + 'red' + '.png')
        $(this).children('span').css("color", "#FF0001")
    }, function () {
        var $detail = $(".header .nav-bar .detail-list .detail");
        $detail.stop(true).fadeOut();
        $(".nav-list .all-classify").each(function (index) {
            $(this).css({
                background: '-webkit-linear-gradient(left, #FF0001, #FF3163)',
                background: ' -o-linear-gradient(right, #FF0001, #FF3163)',
                background: '-moz-linear-gradient(right, #FF0001, #FF3163)',
                background: ' linear-gradient(to right, #FF0001, #FF3163)'
            });
            $(this).children('img').attr("src", './img/header-footer/nav-' + (index + 1) + '-' + 'w' + '.png')
            $(this).children('span').css("color", "white");
        })
    })
    //页面滚动事件
    $(window).scroll(function () {
        var dTop = $(".nav-bar").offset().top;
        var scrollTop = $(this).scrollTop();

        if (dTop < scrollTop) {
            $('.logo-search.fixed').stop().slideDown()
        } else {
            $('.logo-search.fixed').stop().slideUp(10)
        }

        //浮动的getBackTop
        if (scrollTop > 680) {

            $(".right-fixed-guide1").css({
                position: "fixed",
                top: "66px",
                left: "50%",
                "margin-left": "565px",
                "z-index": "50",
                width: '68px',
            })

        } else {

            $(".right-fixed-guide1").css({
                position: 'absolute',
                top: '570px',
                right: '-87px',
                'z-index': '50',
                width: '68px',
            })
        }

        if (scrollTop > 150) {

            $(".right-fixed-guide2").css({
                position: "fixed",
                top: "66px",
                left: "50%",
                "margin-left": "565px",
                "z-index": "50",
                width: '68px',
            })

        } else {

            $(".right-fixed-guide2").css({
                position: 'absolute',
                top: '78px',
                right: '-87px',
                'z-index': '50',
                width: '68px',
            })
        }
        if (scrollTop > 200) {

            $(".right-fixed-guide3").css({
                position: "fixed",
                top: "66px",
                left: "50%",
                "margin-left": "565px",
                "z-index": "50",
                width: '68px',
            })

        } else {

            $(".right-fixed-guide3").css({
                position: 'absolute',
                top: '171px',
                right: '-87px',
                'z-index': '50',
                width: '68px',
            })
        }

    })

    //右浮动框的hover事件
    $(".right-fixed-guide li").hover(function () {
        var index = $(this).index();
        //修改list样式
        index++;
        $(this).css("background", "#F6F6F6");
        $(this).find('.img').attr("src", './img/header-footer/fixed-icon' + index + '-' + 'r' + '.png')
        $(this).find('span').css("color", "#FF0001")

        switch (index) {
            case 1:
                $(".right-fixed-guide li .everyDay").show();
                break;
            case 3:
                $(".right-fixed-guide li .inside-qr").show();
                break;
        }

    }, function () {

        var index = $(this).index();
        //修改list样式
        index++;
        $(this).css("background", "white");
        $(this).find('.img').attr("src", './img/header-footer/fixed-icon' + index + '-' + 'w' + '.png')
        $(this).find('span').css("color", "#333");
        switch (index) {
            case 1:
                $(".right-fixed-guide li .everyDay").hide();
                break;
            case 3:
                $(".right-fixed-guide li .inside-qr").hide();
                break;
        }
    })

    //返回顶部
    $(".right-fixed-guide li").eq(3).click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },1000)
    })



})
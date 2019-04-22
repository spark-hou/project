$(document).ready(function () {
    $('.header .more').click(function () {
        if ($('.guide').is(':visible')) {
            $('.guide').hide();
        } else {
            $('.guide').show();
        }
    })
//返回顶部
    $(document).scroll(function () {
        var goosTop=$(".good-list").offset().top;
        var scroll=$(this).scrollTop();
        if (scroll>goosTop){
            $('.top').show();
        } else {
            $('.top').hide();
        }


    })
    $('.top').click(function () {
        $('body,html').animate({
            scrollTop:0
        },1000)
    })
    $('.header-back .logoImg').click(function () {
        window.history.back();
    })

    $('.goods-img').attr('href','../product/index.html');
    $('.good-list a').attr('href','../product/index.html');
})
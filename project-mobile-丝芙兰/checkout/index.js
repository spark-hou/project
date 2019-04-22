$(document).ready(function () {
    //商品列表点击
    $('.good-list').click(function () {
        $('.good-list-cover').show();
    })
    $('.good-list-cover .header .logoImg').click(function () {
        $('.good-list-cover').hide();
    })
    // <!--支付方式cover-->
    $('.payment').click(function () {
        $('.payment-cover-bg').show();
        $('.payment-cover').show();
    })
    $('.payment-cover-bg').click(function () {
        $('.payment-cover-bg').hide();
        $('.payment-cover').hide();
    })
    $('.payment-cover .close').click(function () {
        $('.payment-cover-bg').hide();
        $('.payment-cover').hide();
    })
    $('.payment-cover button').click(function () {
        $('.payment-cover-bg').hide();
        $('.payment-cover').hide();
        $('.payment p span').text($('.payment-cover input:checked').parent().find('span').text());
    })

    //配送时间cover
    $('.time').click(function () {
        $('.time-cover').show();
    })
    $('.time-cover .logoImg').click(function () {
        $('.time-cover').hide();
    })
    $('.time-cover  button').click(function () {
        $('.time-cover').hide();
        $('.time p span').text($('.time-cover input:checked').parent().find('span').text());
    })

    $('.header-back.logoImg').click(function(){
        window.history.back();
    })
    $('.addAddress').click(function () {
        window.location.href="../myAddress/index.html";
    })
})
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

$('.tab-list ul li').click(function () {
    $('.tab-list ul li').removeClass('active');
    $(this).addClass('active');

})

    $('.header-back .logoImg').click(function(){
        window.history.back();
    })
    $('.content-box').attr('href','../category/index.html');
})
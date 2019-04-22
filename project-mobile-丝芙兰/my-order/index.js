$(document).ready(function () {
    $('.tab li').click(function () {
        $('.tab li').removeClass('active');
        $(this).addClass('active');
        if ($(this).index() == 0) {
            $('.box-one').show();
            $('.no-order').hide();
        } else {
            $('.box-one').hide();
            $('.no-order').show();
        }
    })
    $('.header-back.logoImg').click(function(){
        window.history.back();
    })

})
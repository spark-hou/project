$(document).ready(function () {
    $('.form .name').click(function () {
        $('.changeName').show();
    })
    $('.form .sex').click(function () {
        $('.sex-cover').show();
        $('.sex-box').show();
    })
    $('.form .email').click(function () {
        $('.email-box').show();
    })
    $('.form .password').click(function () {
        $('.password-box').show();
    })
    $('.form .nickName').click(function () {
        $('.nickName-box').show();
    })
    $('.changeName').on('click', '.ready', function () {
        $('.form .name em').text($(this).siblings('input').val());
    })
    $('.cover input').on('change', function () {
        if ($(this).val() == "") {
            $(this).siblings('.sure').removeClass("ready");
        } else {
            $(this).siblings('.sure').addClass("ready");
        }
    })
    $('.cover .logoImg').click(function () {
        $(this).parents('.cover').hide();
    })
    $('.header-back .logoImg').click(function () {
        window.history.back();
    })
    $('.address').click(function () {
        window.location.href='../myAddress/index.html';
    })
})
$(document).ready(function () {
    $('.agree').click(function () {
        if ($(this).hasClass('checked')) {
        $(this).removeClass('checked');
        }else {
            $(this).addClass('checked');
        }
    })
    //切换页面
    $('.num .more').click(function () {
        $('.phone').show();
    })
    $('.phone .logoImg').click(function () {
        $('.phone').hide();
    })
    $('.phone .more').click(function () {
        $('.phone').hide();
    })
    $('.title.ready').click(function () {
        window.location.href="../personal-center/index.html";
    })
})
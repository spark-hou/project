$(document).ready(function () {
    $('.btn-red40').click(function () {
        layer.msg('错误的key！');
    })
    $('.tab').click(function () {
        $(this).siblings('.tab').removeClass('active');
        $(this).addClass('active');
    })
    
    
})
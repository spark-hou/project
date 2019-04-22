$(document).ready(function () {
    // <!--新增收获地址cover-->
    $('.add-address').click(function () {
        $('.add-new').show()
    })
    $('.add-new .logoImg').click(function () {
        $('.add-new').hide();
    })
    // <!--修改收获地址cover-->
    var liIndex = -1;
    $('.address-list li img').click(function () {
        $('.change-add').show();
        liIndex = $(this).parents('li').index();
    })
    $('.change-add  .logoImg').click(function () {
        $('.change-add ').hide();
    })
    $('.change-add  .more').click(function () {
        $('.change-add ').hide();
        $('.address-list li').eq(liIndex).remove();
    })
    $('.header-back .logoImg').click(function () {
        window.history.go(-1);
    })
//改变按钮

    $('.set-default img').click(function () {
        if ($(this).hasClass('select')){
            $(this).removeClass('select');
            $(this).attr('src','./img/radio-left.png');

        } else {
            $(this).addClass('select');
            $(this).attr('src','./img/radio-right.png');

        }
    })

    //新增收货地址



})
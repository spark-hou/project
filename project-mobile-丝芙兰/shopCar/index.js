$(document).ready(function () {
    //改变商品数量
    $('.add-num .minus').click(function () {
        var num = $(this).siblings('input').val();
        if (num <= 1) {
            return;
        } else {
            num--;
            $(this).siblings('input').val(num);
            cal();
        }
    })
    $('.add-num .plus').click(function () {
        var num = $(this).siblings('input').val();

        num++;
        $(this).siblings('input').val(num);
        cal();
    })
//点击显示优惠券页
    $('.coupon').click(function () {
        $('.coupon-cover').show();
        $('body').css('overflow', 'hidden');
    });
    $('.coupon-cover .header .logoImg').click(function () {
        $('.coupon-cover').hide();
        $('body').css('overflow', 'visible');
    })
    //点击显示优惠<!--优惠码cover-->
    $('.coupon-code').click(function () {
        $('.code-cover-bg').show();
        $('.code-cover').show();
        $('body').css('overflow', 'hidden');
    })
    $('.coupon-cover .header .more').click(function () {
        $('.code-cover-bg').show();
        $('.code-cover').show();
        $('body').css('overflow', 'hidden');
    })
    $('.code-cover-bg').click(function () {
        $('.code-cover-bg').hide();
        $('.code-cover').hide();
        $('body').css('overflow', 'visible');
    })
    $('.code-cover .close').click(function () {
        $('.code-cover-bg').hide();
        $('.code-cover').hide();
        $('body').css('overflow', 'visible');
    })
    //优惠券切换
    $('.coupon-cover .choose-coupon span').click(function () {
        $('.coupon-cover .choose-coupon span').removeClass('active');
        $(this).addClass('active')
    })
    //购物车全选
    $('.total .all').click(function () {
        $('.good-list input').prop('checked', $(this).prop('checked'));
        cal();
    })

    function cal() {
        var num = 0;
        var allPrice = 0;
        var $input = $('.good-list li input[name="checkbox"]:checked');
        for (var i = 0; i < $('.good-list li input[name="checkbox"]:checked').length; i++) {
            var val = $input.eq(i).siblings('.content').find('input').val();
            num = num + parseInt(val);
            var price = parseInt($input.eq(i).siblings('.content').find('.price').text());
            allPrice = allPrice + price * val;
        }
        $('.total a b').text(num);
        $('.total .order b').text(allPrice.toFixed(2));
    }

    cal();
    //点击单选
    $('.good-list li input[name="checkbox"]').click(function () {
        if ($('.good-list li input[name="checkbox"]').length == $('.good-list li input[name="checkbox"]:checked').length) {
            $('.total .all').prop('checked', true);
            cal();
        } else {
            $('.total .all').prop('checked', false);
            cal();
        }
    })
    //点击编辑
    $('.edit').on('click', 'span', function () {
        $(this).hide();
        $(this).siblings('p').show();
        $(this).parents('li').find('.size').addClass('show');
    })
    $('.edit').on('click', 'b', function () {
        $(this).parent().hide();
        $(this).parents('li').find('.size').removeClass('show');
        $(this).parent().siblings('span').show();
    })
    $('.edit').on('click', 'i', function () {
        $(this).parents('li').remove();
    })
    //显示选择size
    var flagBuy = false;
    $('.good-list li').on('click', '.show', function () {
        console.log(1)
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
    })
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
        $('.good-size .title b').text($(this).text());
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

    $('.header-back .logoImg').click(function () {
        window.history.back();
    })
    $('.guess-like a').attr('href', '../product/index.html');

})
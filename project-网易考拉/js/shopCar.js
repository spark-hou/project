$(document).ready(function () {
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

//窗口滚动事件
    var barTop = $(".m-total").offset().top;
    //页面载入时调用
    $(window).scroll(function () {
        var windowHeight = $(this).innerHeight();
        var scrollTop = $(this).scrollTop();
        if (barTop > (windowHeight + scrollTop)) {
            $(".m-total").css({
                position: "fixed",
            })
        } else {
            $(".m-total").css({
                position: "relative",
            })
        }


    })
    //购物车里的商品数量
    $(window).on("mouseenter", function () {
        var num = $(".m-cart .goods .actitm").length;
        $(".m-mycart .all-num i").text(num)
    })
    //标题全选选择框
    $("input[name='selectAll']").click(function () {
        var flag = $(this).prop("checked");
        $("input").prop("checked", flag);
        cal();
    })
    //单个商店的复选框
    $("input[name='cartAll']").click(function () {
        var flag = $(this).prop("checked");
        $(this).parent().siblings(".goods").find("input[name='selectGood']").prop("checked", flag);
        cal();
    })
    //单选框
    $(".cartbox").on("click", "input", function () {
        var sum = $(this).parents(".goods").find("input[name='selectGood']").length;
        var checked = $(this).parents(".goods").find("input[name='selectGood']:checked").length;
        $(this).parents(".goods").siblings(".ware").find(".checkbox").prop("checked", sum == checked);
      //取消全选
        var allsum = $(this).parents(".cartbox").find("input[name='selectGood']").length;
        var allcheck = $(this).parents(".cartbox").find("input[name='selectGood']:checked").length;
        $("input[name='selectAll']").prop("checked", allsum == allcheck);
        //开启关闭结算按钮
        var checknum = $("input:checked").length;
        if (checknum > 0) {
            $(".gobuy").removeClass("dis");
        } else {
            $(".gobuy").addClass("dis");
        }
        //选中的商品计算价格，改变颜色
        $("input[name='selectGood']").parents(".actitm").css("background-color", "white");
        $("input[name='selectGood']:checked").parents(".actitm").css("background-color", "#FFFBF0");
        //计算选中的价格
        cal();
    })

    //删除
    $(".del").click(function (e) {
        e.preventDefault();
        var num = $(this).parents(".actitm").siblings().length;
        if (num == 0) {
            $(this).parents(".m-cart").remove();
            cal()
        } else {
            $(this).parents(".actitm").remove();
            cal()
        }

    })
    $(".u-opt").click(function (e) {
        e.preventDefault();
        var num = $(this).parents(".actitm").siblings().length;
        if (num == 0) {
            $(this).parents(".m-cart").remove();
            cal()
        } else {
            $(this).parents(".actitm").remove();
            cal()
        }
    })

    //加减
    //加
    $(".col4 .plus").click(function () {
        var num = parseInt($(this).siblings("input").val());
        num++;
        $(this).siblings("input").val(num);
        if (num > 1) {
            $(this).siblings(".minus").removeClass("dis");
            cal()
        }
    })
    //减
    $(".col4 .minus").click(function () {
        var num = parseInt($(this).siblings("input").val());
        num--;
        if (num < 1) {
            $(this).addClass("dis");
            return;
        } else {
            $(this).siblings("input").val(num);
            cal()
        }
    })
//三级联动
    $("#city-picker").citypicker();

//计算函数
    function cal() {
        $(".gooditm").each(function (index) {
            var price = $(this).find(".newprice span").text();
            var num = $(this).find(".u-setcount input").val();
            $(this).find(".col5 .sum").text((price * num).toFixed(2));
        })
        //选中后计算
        $(".m-cart").each(function (index) {
            var len = $(this).find("input[name='selectGood']:checked").length;
            if (len <= 0) {
                $(this).find(".allsum i").text("0.00");
                $(this).find(".taxbox i").text("0.00");
            } else {
                var sum = 0;
                var tax = 0;
                $(this).find(".actitm").each(function (index) {
                    sum = sum + parseInt($(this).find(".col5 .sum").text());
                    tax = tax + $(this).find(".u-setcount input").val() * $(this).find(".u-taxval i").text();
                })
                $(this).find(".allsum i").text(sum.toFixed(2));
                $(this).find(".taxbox i").text(tax.toFixed(2));
            }
        })
        //所有商品总价
        var len2 = $(".m-cart").find("input[name='selectGood']:checked").length;
        if (len2 <= 0) {
            $(".totalbox .rt .allgoods>.num").text("0");
            $(".totalbox .rt .allgoods>.itm>.num").text("0.00");
            $(".totalbox .rt .allmoney>.itm>i").eq(0).text("0.00");
            $(".totalbox .rt .allmoney>.itm>i").eq(1).text("0.00");
        } else {
            //计算商品总数
            var itmNum = 0;
            //计算总价-不含运费
            var moneySum = 0;
            //总税费
            var taxSum = 0;
            $(".m-cart").find("input[name='selectGood']:checked").each(function (index) {
                itmNum += parseFloat($(this).parents(".gooditm").find(".u-setcount input").val());
                moneySum += parseFloat($(this).parents(".gooditm").find(".col5 .sum").text());
                taxSum += $(this).parents(".gooditm").find(".u-setcount input").val() * $(this).parents(".gooditm").find(".u-taxval i").text()
            })
            $(".totalbox .rt .allgoods>.num").text(itmNum);
            $(".totalbox .rt .allgoods>.itm>.num").text(moneySum.toFixed(2));
            $(".totalbox .rt .allmoney>.itm>i").eq(0).text((taxSum + moneySum).toFixed(2));
            $(".totalbox .rt .allmoney>.itm>i").eq(1).text(taxSum.toFixed(2));
        }

    }

    //删除选中商品
    $(".totalbox .ttbar .opt").click(function () {
        $(".m-cart").find("input[name='selectGood']:checked").each(function () {
            var num = $(this).parents(".actitm").siblings().length;
            if (num == 0) {
                $(this).parents(".m-cart").remove();
                $("body").find("input:checked").prop("checked",false);
                cal();
            } else {
                $(this).parents(".actitm").remove();
                $("body").find("input:checked").prop("checked",false);
                $(".gobuy").addClass("dis");
                cal();
            }
        })
    })
//触发浮动栏
    $('html,body').scrollTop(1);
    $('html,body').scrollTop(0);
    //提交按钮事件
    $(".gobuy").click(function () {
        if ($(this).hasClass("dis")){
            return;
        } else {
            $(".m-cart").find("input:checked").prop("checked",false);
            $(location).attr('href', 'order.html')
        }
    })

})
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
//三级联动
    $("#city-picker1").citypicker();

    //增加地址点击
    $(".addNewAddr").click(function () {
        $('.fool-2').css("display", "block");
        layer.open({
            title: "新增收货地址",
            type: 1,
            anim: 2,
            area: ['615px', '500px'],
            content: $('.fool-2 .m-myaddress'),
            cancel: function (index, layer) {
                $('.fool-2').css("display", "none")
            }
        });

    })
    //提交订单
    $(".z-submitbtn").click(function () {
        if ($("#agree").prop("checked")) {
            $(location).attr('href', 'pay.html');
        } else {
            layer.open({
                title: '提示',
                btnAlign: 'c',
                skin: "my-skin",
                content: '你同意协议吗？'
                , btn: ['同意', '不同意']
                , btn1: function (index, layero) {
                    $("#agree").prop("checked", true);
                    $(location).attr('href', 'pay.html');
                    layer.closeAll();
                }
                , btn2: function (index, layero) {

                }
            });
        }
    })
    //提交地址
    var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
    $(".item-bottom .save").click(function () {
        if (($(".fool-2 .m-myaddress .necessary").val() == "") || !reg.test($(this).parents(".m-myaddress").find(".item-4 input").val())) {
            layer.msg('请填写正确内容');
        } else {
            var newContent = $(".fool-3 .content1").clone(true);
            newContent.removeClass("content1");
            newContent.addClass("show");
            var name = $(this).parents(".m-myaddress").find(".item-3 input").val();
            var place = $(this).parents(".m-myaddress").find(".item-1 input").val();
            var detail = $(this).parents(".m-myaddress").find(".item-2 textarea").val();
            var phone = $(this).parents(".m-myaddress").find(".item-4 input").val();
            $(this).parents(".m-myaddress").find(".item-3 input").val("");
            $(this).parents(".m-myaddress").find(".item-1 input").val("");
            $(this).parents(".m-myaddress").find(".item-2 textarea").val("");
            $(this).parents(".m-myaddress").find(".item-4 input").val("");


            newContent.find(".title i").text(name);
            newContent.find(".place span").text(place);
            newContent.find(".place i").text(detail);
            var arr = phone.split("");
            for (var i = 3; i < 7; i++) {
                arr[i] = "*"
            }
            newContent.find(".place b").text(arr.join(""));
            $(".fool-3 .address").append(newContent);
            addclass();
            see();
            layer.closeAll();


        }
    })

    //默认第一个可见的content加上activity
    function addclass() {
        $(".fool-3 .content.show").eq(0).addClass("active");
        $(".fool-3 .content .title b").hide();
        $(".fool-3 .content.show").eq(0).find(".title b").show();
    }

    addclass();

    //如果可见的content数量为0，出现填写地址

    function see() {
        if (!$(".fool-3 .address>div").hasClass("show")) {
            $(".fool-2").show();
            $(".fool-3").hide();
        } else {
            $(".fool-3").show();
            $(".fool-2").hide();
        }
    }

    see();
    //收货地址的hover事件
    $(".fool-3 .content").hover(function () {
        if ($(this).hasClass("active")) {
            $(this).find(".opspan").show();
            $(this).find(".default").hide();

        } else {
            $(this).find(".opspan").show();
            $(this).find(".default").show();
            $(this).css("background-color", "#F7F7F7")
        }


    }, function () {
        if ($(this).hasClass("active")) {
            $(this).find(".opspan").hide();

        } else {
            $(this).find(".opspan").hide();
            $(this).find(".default").hide();
            $(this).css("background-color", "white")
        }

    })
    //设为默认
    $(".default").click(function () {
        $(".fool-3 .content").removeClass("active");
        $(".fool-3 .content").css("background-color", "white");
        $(".fool-3 .content .default").hide();
        $(".fool-3 .content .title b").hide();
        $(this).parent().find(".title b").show();
        $(this).parent().addClass("active");
        $(this).parent().css("background-color", "#fffbee");

    })
//删除
    $(".fool-3 .del").click(function (e) {
        e.preventDefault();
        $(this).parents(".content").remove();
        see();

    })
    //修改
    var changName = "";
    $(".fool-3 .change").click(function (e) {
        e.preventDefault();
        $(".fool-2 .item-bottom .item-submit.changePlace").show();
        $(".fool-2 .item-bottom .item-submit.save").hide();
        $('.fool-2').css("display", "block");
        layer.open({
            title: "新增收货地址",
            type: 1,
            anim: 2,
            area: ['615px', '500px'],
            content: $('.fool-2 .m-myaddress'),
            cancel: function (index, layer) {
                $('.fool-2').css("display", "none")
            }
        });
        changName = $(this);
    })
    $(".item-bottom .changePlace").click(function () {
        if (($(".fool-2 .m-myaddress .necessary").val() == "") || !reg.test($(this).parents(".m-myaddress").find(".item-4 input").val())) {
            layer.msg('请填写正确内容');
        } else {
            var name = $(this).parents(".m-myaddress").find(".item-3 input").val();
            var place = $(this).parents(".m-myaddress").find(".item-1 input").val();
            var detail = $(this).parents(".m-myaddress").find(".item-2 textarea").val();
            var phone = $(this).parents(".m-myaddress").find(".item-4 input").val();
            $(this).parents(".m-myaddress").find(".item-3 input").val("");
            $(this).parents(".m-myaddress").find(".item-1 input").val("");
            $(this).parents(".m-myaddress").find(".item-2 textarea").val("");
            $(this).parents(".m-myaddress").find(".item-4 input").val("");
            changName.parents(".content").find(".title i").text(name);
            changName.parents(".content").find(".place span").text(place);
            changName.parents(".content").find(".place i").text(detail);
            var arr = phone.split("");
            for (var i = 3; i < 7; i++) {
                arr[i] = "*"
            }
            changName.parents(".content").find(".place b").text(arr.join(""));
            addclass();
            see();
            layer.closeAll();
            $(".fool-2 .item-bottom .item-submit.changePlace").hide();
            $(".fool-2 .item-bottom .item-submit.save").show();
        }
    })
})
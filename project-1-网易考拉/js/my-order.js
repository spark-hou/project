$(document).ready(function () {
    //禁止默认事件
    $(".my-box .my-list li").click(function (e) {
        if ($(this).hasClass("active")){
            e.preventDefault();
        }
    })
    //tab hover事件
    $(".list-content .slideTab li").hover(function () {
        var index = $(this).index();

        if (index == 5) {
            $(".list-content .slideTab .cover").stop().animate(
                {"left": "810px"}
                , 350)

        } else {
            var left = (index * 120) + "px";
            $(".list-content .slideTab .cover").stop().animate(
                {"left": left}
                , 350)
        }
    }, function () {
        var index = $(".list-content .slideTab li.active").index();
        if (index == 5) {
            $(".list-content .slideTab .cover").stop().animate(
                {"left": "810px"}
                , 350)

        } else {
            var left = (index * 120) + "px";
            $(".list-content .slideTab .cover").stop().animate(
                {"left": left}
                , 350)
        }
    })
    //tab 点击事件
    $(".list-content .slideTab li").click(function () {
        var index = $(this).index();
        if (index ==0){
            $(".no-order").hide();
            $(".search-box .button").show();
            $(".orderBox").show();
        } else {
            $(".no-order").show();
            $(".search-box .button").hide();
            $(".orderBox").hide();
        }
        $(".list-content .slideTab li").removeClass("active");
        $(this).addClass("active");
    })
//下拉按钮的点击事件
    $(".my-box .dropdown li ").click(function (e) {
        e.preventDefault();
        $(this).parents(".dropdown").find("i").text($(this).find("a").text());
        $(".no-order").show();
        $(".search-box .button").hide();
        $(".orderBox").hide();
    })
//删除
    $(".oInfo .glyphicon-trash").click(function () {
        $(this).parents(".orderList").remove();
    })

})
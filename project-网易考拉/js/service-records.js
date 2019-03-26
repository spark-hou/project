//tab hover事件
$(".list-content .slideTab li").hover(function () {
    var index = $(this).index();

        var left = (index * 120) + "px";
        $(".list-content .slideTab .cover").stop().animate(
            {"left": left}
            , 350)

}, function () {
    var index = $(".list-content .slideTab li.active").index();

        var left = (index * 120) + "px";
        $(".list-content .slideTab .cover").stop().animate(
            {"left": left}
            , 350)
})
//tab 点击事件
$(".list-content .slideTab li").click(function () {
    var index = $(this).index();
    if (index ==0){
        $(".no-order").show();
    } else {
        $(".no-order").show();
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
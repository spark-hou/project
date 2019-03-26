$(document).ready(function () {
    $(".result .good").hover(function () {
        $(this).find(".z-hover").stop().animate({
            "bottom": "0"
        },100)
        $(this).find(".glyphicon-trash").show();
    }, function () {
        $(this).find(".z-hover").stop().animate({
            "bottom": "-24px"
        },100)
        $(this).find(".glyphicon-trash").hide();
    })
        //删除
    $(".glyphicon-trash").click(function () {
        $(this).parents(".good").remove();
        cal();
    })
//计算
    function cal() {
        var num =$(".good").length;
        $(".filter i").text(num);
    }
    cal();
})
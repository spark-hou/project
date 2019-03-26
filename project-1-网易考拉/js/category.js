$(document).ready(function () {
    $(".bread a").attr("href", "category.html");
    $(".classify-list .part3 a").attr("href", "category.html");
    $(".sell-list a").attr("href", "product.html");

    // <!--分类表格-->更多点击事件
    var flag = false;
    $(".classify-list .list1 .part2 .show").click(function (e) {
        e.preventDefault();
        if (flag) {

            $(".classify-list .list1 .part3").css("height", "24px");
            $(".classify-list .list1 .part2>.show").html('展开 <i class=\"glyphicon glyphicon-menu-down\"></i>');

            flag = false;

        } else {

            $(".classify-list .list1 .part3").css("height", "100%");
            $(".classify-list .list1 .part2>.show").html('收起 <i class=\"glyphicon glyphicon-menu-up\"></i>');
            flag = true;
        }
    })
    // choosebox的hover事件
    $(".classify-list .list4 .part2 .choose").hover(function () {
        $(this).find(".choose-box").show();
    }, function () {
        $(this).find(".choose-box").hide();
    })

//三级联动
    $(".pick-area-one").pickArea({
        // "format":"province/city/county", //格式
        "width": "250",//设置“省市县”文本边框的宽度
        "height": "30",//设置“省市县”文本边框的高度
        "borderColor": "CCCCCC",//设置“省市县”文本边框的色值
        "arrowColor": "#FF2953",//设置下拉箭头颜色
        "listBdColor": "CCCCCC",//设置下拉框父元素ul的border色值
        "color": "#FF2953",//设置“省市县”字体颜色
        "fontSize": "12px",//设置字体大小
        "hoverColor": "#FF2953",
        "paddingLeft": "5px",//设置“省”位置处的span相较于边框的距离
    });
//img的hover事件
    $(".sell-list li .img-list img").mouseenter(function () {
        $(this).siblings("img").removeClass("active");
        $(this).addClass("active");
        var src = $(this).attr("src");
        $(this).parents("li").find(".main-img>img").eq(0).attr("src", src)
    })
    //多选
    $(".more-pick").click(function (e) {
        e.preventDefault();
        $(this).siblings(".part3").css("height", "70px");
        $(this).hide();
    })

    $(".cancel").click(function () {
        $(this).parents(".part3").css("height", "24px");
        $(this).parents(".part3").siblings(".more-pick").show();
        $(this).parents(".part3").find('a').removeClass("active");
    })

    $(".sure").click(function () {
        $(this).parents(".part3").css("height", "24px");
        $(this).parents(".part3").siblings(".more-pick").show();
        $(this).parents(".part3").find('a').removeClass("active");
    })

    $(".part3 a").click(function (e) {
        var height = parseInt($(this).parent().css("height"));
        if (height == 70) {
            e.preventDefault();
            $(this).addClass("active")
        }
    })


})
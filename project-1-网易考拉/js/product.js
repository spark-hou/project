$(document).ready(function () {
    $(".bread a").attr("href","category.html");
    $(".fool-2 .prdlist a").attr("href","category.html");
    $(".fool-2 .newRecomWrap a").attr("href","product.html");
    $(".fool-3 .siderBox a").attr("href","category.html");


    /*
     放大镜实现原理：
     1. “缩略图”窗口与“原图”窗口中放置的是同一个图片，但“缩略图”窗口中的图片被缩小为400px，
     而“原图”窗口中的图片保持原始大小，溢出部分设为隐藏
     2. 先确定缩放比例，我们假定原图大小为1000px，缩略图大小为400px，缩放比例为2.5
     3. 首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）
     4. 其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
     5. 鼠标向右移动，“原图”窗口中的图片向左移动，它们的方向是相反的！这是实现原理中的关键环节
     6. “放大镜”框的大小不是随意设定的，它与放大倍数有关，如果要放大2.5倍，
     则“原图”窗口的大小也应该是“放大镜”框的大小的2.5倍
     */

    // 当鼠标进入“缩略图”窗口时，显示“原图”窗口和“放大镜”框
    $('.thumbnail').mouseover(function (e) {
        $('.origin').css('display', 'block');
        $('.magnifier').css('display', 'block');
    })
    // 当鼠标在“缩略图”窗口中移动时
    $('.thumbnail').mousemove(function (e) {
        // 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）

        // 获取鼠标当前位置
        var pageX = e.pageX;
        var pageY = e.pageY;
        // 获取“缩略图”窗口在整个文档中的偏移位置
        var offsetX = $('.thumbnail').offset().left;
        var offsetY = $('.thumbnail').offset().top;
        // 计算鼠标在缩略图中的相对位置
        var relativeX = pageX - offsetX;
        var relativeY = pageY - offsetY;
        // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
        var magOffsetX = $('.magnifier').width() / 2;
        var magOffsetY = $('.magnifier').height() / 2;
        $('.magnifier').css({
            left: relativeX - magOffsetX + 'px',
            top: relativeY - magOffsetY + 'px'
        });
        // 获取“放大镜”框的新位置，后面会用到
        var magX = $('.magnifier').position().left;
        var magY = $('.magnifier').position().top;

        // 二、处理越界情况

        // 确定边界
        var maxMagX = $('.thumbnail').width() - $('.magnifier').width()
        var maxMagY = $('.thumbnail').height() - $('.magnifier').height()
        // 左边界
        if (magX <= 0) {
            $('.magnifier').css('left', '0px');
        }
        // 右边界
        if (magX >= maxMagX) {
            $('.magnifier').css('left', maxMagX + 'px');
        }
        // 上边界
        if (magY <= 0) {
            $('.magnifier').css('top', '0px');
        }
        // 下边界
        if (magY >= maxMagY) {
            $('.magnifier').css('top', maxMagY + 'px');
        }

        // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动

        // 按照之前确定的缩放比例移动“原图”窗口中的图片
        // 注意：图片的移动方向与鼠标的移动方向是相反的！
        var originX = magX * 2.5;
        var originY = magY * 2.5;
        $('.origin img').css({left: -originX + 'px', top: -originY + 'px'});
    })
    // 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
    $('.thumbnail').mouseout(function () {
        $('.origin').css('display', 'none');
        $('.magnifier').css('display', 'none');
    })

    //轮播图
    jQuery(".picScroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        vis: 4,
        mouseOverStop: false
    });
//轮播图的hover事件
    $(".picList li").mouseenter(function () {
        $(".picList li").removeClass("active");
        $(this).addClass("active");
        var src = $(this).find("img").attr("src");
        $(".PImgBox .thumbnail img").attr("src", src);
        $(".PImgBox .origin img").attr("src", src)
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
    //第二层，标签切换
    $(".fool-2 .guide li").click(function () {
        $(".fool-2 .guide li").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        if (index == 0) {
            $(".fool-2 .group").css("display", "block");
            $(".fool-2 .newRecomWrap").css("display", "none");
        } else {
            $(".fool-2 .group").css("display", "none");
            $(".fool-2 .newRecomWrap").css("display", "block");
        }
    })
    //hover显示二维码
    $(".fool-3 .detail-comment .p-nav .m-buy").hover(function () {
        $(this).addClass("active2");
        $(this).find("i").eq(1).attr("class", "glyphicon glyphicon-menu-up");
        $(this).find("img").css("display", "block");
    }, function () {
        $(this).removeClass("active2");
        $(this).find("i").eq(1).attr("class", "glyphicon glyphicon-menu-down");
        $(this).find("img").css("display", "none");
    })
    //展开按钮，点击事件
    var showFlag = false;
    $(".fool-3 .detail-comment .goodsDetail .show").click(function () {
        if (showFlag) {
            showFlag = false;
            $(".fool-3 .detail-comment .goodsDetail ul").css("height", "62px");
            $(this).html("展开 <i class=\"glyphicon glyphicon-menu-down\"></i>");

        } else {
            showFlag = true;
            $(".fool-3 .detail-comment .goodsDetail ul").css("height", "115px");
            $(this).html("收起 <i class=\"glyphicon glyphicon-menu-up\"></i>");
        }
    })
    //评论栏的滚动事件
    var dTop = $(".fool-3 .detail-comment .p-nav").offset().top;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > dTop) {
            $(".fool-3 .detail-comment .p-nav").css({
                position: "fixed",
                top: 0,
                left: '50%',
                "margin-left": "-345px",
                "z-index": "100000",
            })
            $(".fool-3 .detail-comment .p-nav .add").show();

        } else {
            $(".fool-3 .detail-comment .p-nav").css({
                position: "absolute",
                top: 0,
                left: '',
                "margin-left": "",
                "z-index": "100000",

            })
            $(".fool-3 .detail-comment .p-nav .add").hide();
        }
    })
    //点击事件，评论栏显示隐藏
    $(".detail-comment .p-nav span").click(function () {
        $(".detail-comment .p-nav span").removeClass("active");
        $(this).addClass('active');
        if ($(this).index() == 0) {
            $(".detail-comment .goodsDetail").show();
            var goodsDetail = $(".goodsDetail").offset().top;
            $('html, body').scrollTop(goodsDetail-10)
        } else {
            $(".detail-comment .goodsDetail").hide();
            var userrating = $(".userrating").offset().top;
            $('html, body').scrollTop(userrating-10)
        }
    })
    //加减
    //加
    $(".plus").click(function () {
        var num = parseInt($(this).siblings("input").val());
        num++;
        $(this).siblings("input").val(num);
        if (num > 1) {
            $(this).siblings(".minus").removeClass("dis");
        }
    })
    //减
    $(".minus").click(function () {
        var num = parseInt($(this).siblings("input").val());
        num--;
        if (num < 1) {
            $(this).addClass("dis");
            return;
        } else {
            $(this).siblings("input").val(num);
        }
    })

})
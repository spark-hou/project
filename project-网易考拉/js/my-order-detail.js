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
    $(".j-buyagain").click(function () {
        window.location.href = "order.html";
    })
})
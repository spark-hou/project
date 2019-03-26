$(window).ready(function () {
    jQuery("#picScroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 1,
        trigger: "click"
    });

    $(window).scroll(function () {
        // 滚动浮动事件
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 680) {

            $(".fool-1 .fixed-guide-left").css({
                position: "fixed",
                top: "66px",
                left: "50%",
                "margin-left": "-665px",

            })

        } else {

            $(".fool-1 .fixed-guide-left").css({
                position: 'absolute',
                left: '50%',
                'margin-left': '-665px',
                top: '22px',
            })
        }
    })

    //fool-3----hover事件
    $(".fool-3 .content-box .box-list ul li").hover(function () {
        $(this).children(".like").stop(true).fadeIn('500');
        $(this).children(".enter-box").stop(true).fadeIn('500');
        $(this).children("img").stop(true).animate({
            width: "80px",
            height: "80px"
        }, 500);
        $(this).children("span").stop(true).fadeOut(1);

    }, function () {
        $(this).children(".like").stop(true).fadeOut('500');
        $(this).children(".enter-box").stop(true).fadeOut('500');
        $(this).children("img").stop(true).animate({
            width: "120px",
            height: "120px"
        }, 500)
        $(this).children("span").stop(true).fadeIn(500);
    })


    //fool-model每层的轮播

    for (var i = 1; i < 12; i++) {
        var name = "swiper" + i;
        name = new Swiper('.swiper-container' + i, {
            navigation: {
                nextEl: '.swiper-button-next' + i,
            },
            pagination: {
                el: '.swiper-pagination' + i,
                clickable: true,
            },
            loop: true,
        })
    }
    //批量绑定定时器
    var $button = $('.swiper-button-next');
    var timer = setInterval(function () {
        $button.trigger("click");
    }, 3000)
    // var timer1 = setInterval(function () {
    //     $button.eq(1).trigger("click");
    // }, 3000)
    // var timer2 = setInterval(function () {
    //     $button.eq(2).trigger("click");
    // }, 3000)
    // var timer3 = setInterval(function () {
    //     $button.eq(3).trigger("click");
    // }, 3000)
    // var timer4 = setInterval(function () {
    //     $button.eq(4).trigger("click");
    // }, 3000)
    // var timer5 = setInterval(function () {
    //     $button.eq(5).trigger("click");
    // }, 3000)
    // var timer6 = setInterval(function () {
    //     $button.eq(6).trigger("click");
    // }, 3000)
    // var timer7 = setInterval(function () {
    //     $button.eq(7).trigger("click");
    // }, 3000)
    // var timer8 = setInterval(function () {
    //     $button.eq(8).trigger("click");
    // }, 3000)
    // var timer9 = setInterval(function () {
    //     $button.eq(9).trigger("click");
    // }, 3000)
    // var timer10 = setInterval(function () {
    //     $button.eq(10).trigger("click");
    // }, 3000)
//设置hover事件，清除，设置定时器
    var $part3 = $(".pull-left.part3");

    $part3.hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            $button.trigger("click");
        }, 3000)
    })

    // $part3.eq(1).hover(function () {
    //     clearInterval(timer1);
    // }, function () {
    //     timer1 = setInterval(function () {
    //         $button.eq(1).trigger("click");
    //     }, 3000)
    // })
    //
    // $part3.eq(2).hover(function () {
    //     clearInterval(timer2);
    // }, function () {
    //     timer2 = setInterval(function () {
    //         $button.eq(2).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(3).hover(function () {
    //     clearInterval(timer3);
    // }, function () {
    //     timer3 = setInterval(function () {
    //         $button.eq(3).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(4).hover(function () {
    //     clearInterval(timer4);
    // }, function () {
    //     timer4 = setInterval(function () {
    //         $button.eq(4).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(5).hover(function () {
    //     clearInterval(timer5);
    // }, function () {
    //     timer5 = setInterval(function () {
    //         $button.eq(5).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(6).hover(function () {
    //     clearInterval(timer6);
    // }, function () {
    //     timer6 = setInterval(function () {
    //         $button.eq(6).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(7).hover(function () {
    //     clearInterval(timer7);
    // }, function () {
    //     timer7 = setInterval(function () {
    //         $button.eq(7).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(8).hover(function () {
    //     clearInterval(timer8);
    // }, function () {
    //     timer8 = setInterval(function () {
    //         $button.eq(8).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(9).hover(function () {
    //     clearInterval(timer9);
    // }, function () {
    //     timer9 = setInterval(function () {
    //         $button.eq(9).trigger("click");
    //     }, 3000)
    // })
    // $part3.eq(10).hover(function () {
    //     clearInterval(timer10);
    // }, function () {
    //     timer10 = setInterval(function () {
    //         $button.eq(10).trigger("click");
    //     }, 3000)
    // })


    //分页器hover事件
    $(".swiper-pagination span").mouseenter(function () {
        $(this).trigger("click");
    })
    //左导航栏点击滚动事件
    $(".fixed-guide-left li").find("a").each(function (index) {
        var x = 2050 + (index * 905);
        $(this).click(function (e) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: x
            }, 500)
        })
    })

    //fool-model的爱心hover事件
    $(".fool-model .hot-sell .img-list>a").hover(function () {
        $(this).find("i").stop(true).fadeIn();
    }, function () {
        $(this).find("i").stop(true).fadeOut();
    })

//倒计时显示
    function rest() {
        var arr = [0, 8, 10, 12, 14, 16, 20, 22];
        var now = new Date();
        var nowYear = now.getFullYear();
        var nowMon = now.getMonth();
        var nowDay = now.getDate();
        var nowHour = now.getHours();
        var nowMin = now.getMinutes();
        var nowSec = now.getSeconds();
        var count = -1;
        $.each(arr, function (index) {
            var num = nowHour - arr[index];
            if (num >= 0) {
                count++
            }
        })
        if (count < 7) {
            var targetTime = new Date(nowYear, nowMon, nowDay, arr[count + 1]);
        } else {
            nowDay = nowDay + 1;
            var targetTime = new Date(nowYear, nowMon, nowDay, 0);
        }
        var rest = targetTime - now;
        var hours = parseInt((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((rest % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = parseInt((rest % (1000 * 60)) / 1000);
        var arrTime = [];
        if (hours < 10) {
            hours = "0" + hours;
            var arr1 = hours.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr1[i])
            }

        } else {
            hours = hours.toString();
            var arr2 = hours.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr2[i])
            }

        }
        if (minutes < 10) {
            minutes = "0" + minutes;
            var arr3 = minutes.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr3[i])
            }

        } else {
            minutes = minutes.toString();
            var arr4 = minutes.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr4[i])
            }

        }
        if (seconds < 10) {
            seconds = "0" + seconds;
            var arr5 = seconds.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr5[i])
            }

        } else {
            seconds = seconds.toString();
            var arr6 = seconds.split("");
            for (var i = 0; i < 2; i++) {
                arrTime.push(arr6[i])
            }
        }
        $(".fool-2 .big-title .title .time span").each(function (index) {
            $(this).text(arrTime[index])
        })
        for (var i = 0; i < 2; i++) {
            arrTime.push(arr6[i])
        }
    }

    rest();
    var restTime = setInterval(function () {
        rest();
    }, 1000);


})
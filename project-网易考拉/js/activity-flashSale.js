$(document).ready(function () {
    //href
    $(".m-goodslist a").attr("href","product.html");
//nav点击事件
    $(".tabWrap a").click(function () {
        $(".tabWrap a").removeClass("f-select");
        $(this).addClass("f-select");

    })

//倒计时
    function nav() {
        var arr = [0, 8, 10, 12, 14, 16, 20, 22];
        var now = new Date();
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
        //修改nav的选项
        $(".tabWrap a").each(function (index) {
            if ((index - count) < 0) {
                $(this).removeClass("f-started f-ing f-soon f-select");
                $(this).find("i").remove();
                $(this).find(".status").remove();
                $(this).append($('<b class="status">已结束</b>'));
                $(this).addClass("f-started");
            }

            if ((index - count) == 0) {
                $(this).removeClass("f-started f-ing f-soon f-select");
                $(this).find(".time").append($("<i></i>").text("抢购中"));
                $(this).find(".status").remove();
                $(this).addClass("f-ing f-select");
            }
            if ((index - count) > 0 && index != 8) {
                $(this).removeClass("f-started f-ing f-soon f-select");
                $(this).find("i").remove();
                $(this).find(".status").remove();
                $(this).append($('<b class="status">即将开始</b>'));
                $(this).addClass("f-started");
            }

        })
    }

    nav();
    var navtimer = setInterval(function () {
        nav();
    }, 600000);
//倒计时显示
    function rest() {
        var arr = [0, 8, 10, 12, 14, 16, 20, 22];
        var now = new Date();
        var nowYear=now.getFullYear();
        var nowMon=now.getMonth();
        var nowDay=now.getDate();
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
        if (count<7){
            var targetTime=new Date(nowYear,nowMon,nowDay,arr[count+1]);
        } else {
            nowDay=nowDay+1;
            var targetTime=new Date(nowYear,nowMon,nowDay,0);
        }
        var rest=targetTime-now;
        var hours = parseInt((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((rest % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = parseInt((rest % (1000 * 60)) / 1000);
        if (hours<10){
            hours="0"+hours
        }
        if (minutes<10){
            minutes="0"+minutes
        }
        if (seconds<10){
            seconds="0"+seconds
        }
        $("#time").text(hours+":"+minutes+":"+seconds);

    }

    rest();
    var restTime=setInterval(function () {
        rest();
    },1000)

})
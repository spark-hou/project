$(document).ready(function () {
    //拼图验证
    var flag1 = false;
    $('.verification').slideVerify({
        type: 2,		//类型
        vOffset: 5,	//误差量，根据需求自行调整
        vSpace: 5,	//间隔
        imgName: ['1.jpg', '2.jpg', '3.jpg'],
        imgSize: {
            width: '268px',
            height: '134px',
        },
        blockSize: {
            width: '40px',
            height: '40px',
        },
        barSize: {
            width: '268px',
            height: '40px',
        },
        ready: function () {
        },
        success: function () {
            flag1 = true;

        },
        error: function () {
            layer.msg('请先拖动滑块进行安全验证');
        }

    });
    var flag2 = false;
    $('.verification2').slideVerify({
        type: 2,		//类型
        vOffset: 5,	//误差量，根据需求自行调整
        vSpace: 5,	//间隔
        imgName: ['1.jpg', '2.jpg', '3.jpg'],
        imgSize: {
            width: '268px',
            height: '134px',
        },
        blockSize: {
            width: '40px',
            height: '40px',
        },
        barSize: {
            width: '268px',
            height: '40px',
        },
        ready: function () {
        },
        success: function () {
            flag2 = true;

        },
        error: function () {
            layer.msg('请先拖动滑块进行安全验证');
        }

    });
    //注册切换
    $(".login-box-phone .u-tab a").click(function () {
        if ($(".inputbox2").css("display") == "none") {
            $(this).text("使用短信验证登录");
            $(this).removeClass("tab0");
            $(this).addClass("tab1");
            $(".tel").hide();
            $(".inputbox2").show();
            flag1 = true;
        } else {
            $(this).text("使用密码登录");
            $(this).removeClass("tab1");
            $(this).addClass("tab0");
            $(".tel").show();
            $(".inputbox2").hide();
            flag1 = false;
        }

    })
    //邮箱验证切换
    $(".login-head span").click(function () {
        if ($(this).index() == 0) {
            $(".login-head span").removeClass("active");
            $(this).addClass("active");
            $(".login-box-phone1").show();
            $(".login-box-email").hide();
            flag1 = false;
        } else {
            $(".login-head span").removeClass("active");
            $(this).addClass("active");
            $(".login-box-phone1").hide();
            $(".login-box-email").show();
            flag1 = true;
        }
    })
    //登陆注册切换
    $(".login .login-foot .gotoreg").click(function () {
        $(".login").hide();
        $(".register").show();
    })
    $(".register-head .pull-right a").click(function () {
        $(".login").show();
        $(".register").hide();
    })
    //点击登陆验证
    $("#login-btn").click(function () {
        if ($(".login input:visible").val() != "" && flag1 == true) {
            layer.msg('登陆成功！！！');
        } else {

            layer.msg('请先填写正确信息');
        }

    })
    //注册点击事件
    $("#register-btn").click(function () {

        if ($(".register input:visible").val() != "" && flag2 == true) {
            if (!$("#check2").prop("checked")) {
                layer.open({
                    skin: "my-skin",
                    btnAlign: 'c',
                    title: false,
                    content: '您同意网易条约么'
                    , btn: ['同意', '不同意']
                    , btn1: function (index, layero) {
                        //按钮【按钮一】的回调
                        $("#check2").prop("checked", true);
                        layer.closeAll();
                    }
                    , btn2: function (index, layero) {

                    }
                });
            } else {

                layer.msg('登陆成功！！！');
            }

        } else {

            layer.msg('请先填写正确信息');
        }

    })
    //获取验证码
    $(".pcbtn a").click(function () {
        if ($(this).hasClass("dis")) {
            return;
        } else {
            $(this).addClass("dis");
            var tar = $(this);
            var count = 30;
            tar.text(count + "秒后再发送");
            var timer = setInterval(function () {
                count--;
                tar.text(count + "秒后再发送");
                if (count == 0) {
                    clearInterval(timer);
                    tar.removeClass("dis");
                    tar.text("获取验证码");
                }
            }, 1000)
        }
    })


})
$(document).ready(function () {
    //禁止默认事件
    $(".my-box .my-list li").click(function (e) {
        if ($(this).hasClass("active")) {
            e.preventDefault();
        }
    })
//绑定事件
    $(".btn.btn-able").click(function () {
        $(this).text("已绑定");
        $(this).removeClass("btn-able");
        $(this).addClass("btn-text");
        $(this).siblings(".account-ico").css("background-position-y", "0px")
    })
//更换手机
    $(".a-main .btn-link").click(function (e) {
        e.preventDefault();
        layer.open({
            type: 1,
            title: " 输入手机号",
            skin: 'layui-layer-rim', //加上边框
            area: ['420px', '240px'], //宽高
            content: '<div class="input-group">\n' +
                '      <input type="text" class="form-control" placeholder="输入手机号">\n' +
                '      <span class="input-group-btn">\n' +
                '        <button class="btn btn-default" type="button" id="button">修改</button>\n' +
                '      </span>\n' +
                '    </div>'
        });
    })
    //修改手机号
 $('html,body').on('click',"#button",function () {
     var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
     if (reg.test($(".form-control").val())) {
         var phone = $(".form-control").val();
         var arr = phone.split("");
         for (var i = 3; i < 7; i++) {
             arr[i] = "*"
         }
         $('.a-main .nickname').text(arr.join(""));
         layer.closeAll();
     } else {
         layer.msg('格式错误');
     }
 })

})
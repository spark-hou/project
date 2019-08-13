/*
request_xxx为网页调用应用接口的函数，不用网页开发者实现
callback_xxx为应用返回执行结果的回调函数，网页开发者藉此接收处理返回的数据，
为异步回调。
pid为int类型，当为0时，不需要返回结果
errCode为执行结果，当为0时标示成功，其他为错误码
*/
platformInfo = {
	isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
	isiOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
};

/*
功能：获取Token
pid：可标示本次请求
*/
var request_token = function(pid) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
		window.location.href = "ios://request_token##" + pid;
	} else {
		console.log("is Android");
		console.log("request_token ");
		SmartDev.request_token(pid);
	}
};

/*
功能：获取设备配置项
pid：可标示本次请求
type：获取类型为type的配置项 0为冰箱温室 1为冰箱模式 2为冰箱首页信息 3为设备配置项
*/
var request_config = function(pid, type) {
	if(platformInfo.isiOS) {
		window.location.href = "ios://request_config##" + pid + "##" + type;
	} else {
		SmartDev.request_config(pid, type);
	}
};

/*
功能：设置设备配置项
pid：可标示本次请求
type：获取类型为type的配置项
key：设置key
value：设置value
*/
var set_config = function(pid, type, key, value) {
	if(platformInfo.isiOS) {
		window.location.href = "ios://set_config##" + pid + "##" + type + "##" + key + "##" + value;
	} else {
		if(value.length > 10 || value.length < 2) {
			request_showToast('请输入2~10个字符，仅限汉字及数字！');
			return;
		}
		if(value == value.replace(/[^0-9\u4E00-\u9FA5]/g)) {
			SmartDev.set_config(pid, type, key, value);
		} else {
			request_showToast('请输入2~10个字符，仅限汉字及数字！');
		}
		
	}
};

/*
功能：操作功能按键
pid:可标示本次请求
key:功能按键,1-场景模式， 3联动，4定时，5分享6-支付，7-购物,8返回，9详情，
para：携带参数
*/
var request_button = function(pid, key, para) {
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['request_button', pid, key, para]); 
		//window.location.href = "ios://request_button##" + pid + "##" + key + "##" + para;
	} else {
		console.log("request_button " + key);
		SmartDev.request_button(pid, key, para);
	}
};

var request_userinfo = function() {
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['request_button', pid, key, para]);
	} else {
		console.log("request_userinfo ");
		SmartDev.request_userinfo(new Date());
	}
};

var request_devinfo = function() {
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['request_button', pid, key, para]);
	} else {
		console.log("request_devinfo ");
		SmartDev.request_devinfo(0);
	}
};
var get_CurrentLanguage = function() {
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['request_button', pid, key, para]);
	} else {
		console.log("get_CurrentLanguage ");
		SmartDev.get_CurrentLanguage(0);
	}
};

/*
功能：获取设备状态
pid：可标示本次请求
cloud：0：从设备获取数据刷新，else：从应用获取数据刷新
*/
var request_state = function(pid, cloud) {
	if(platformInfo.isiOS) {
		window.location.href = "ios://request_state##" + pid + "##" + cloud;
	} else {
		SmartDev.request_state(pid, cloud);
		console.log("request_state ");
	}
};

/*
功能：设备操控
pid：可标示本次请求
cmd：指令，指令参数值，int型数组
state：状态，int型数组
ref：经base64编码后数据
*/
var request_control = function(pid, cmd, state, ref) {
	if(platformInfo.isiOS) {
		window.location.href = "ios://request_control##" + pid + "##" + cmd + "##" + state + "##" + ref;
	} else {
		console.log("currentDeviceState:" + currentDeviceState);
		if(currentDeviceState) {
			//mui.toast("在线");
			//request_showToast("在线");
			SmartDev.request_control(pid, cmd, state, ref);
			console.log("request_control ");
		} else {
			//mui.toast(window.langArr.get("tips_devicestate"));
			request_showToast(window.langArr.get("tips_devicestate"));
		}

	}
};

/*
功能： 打开或者关闭返回权限，开启后返回的权限全部由网页控制
on_off : 1:开启 0 关闭

*/

var start_load_html = function(on_off) {
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['start_load_html', on_off]); 
		//window.location.href = "ios://start_load_html##" + on_off;
	} else {
		SmartDev.start_load_html(on_off);
		console.log("start_load_html ");
	}
}

/*
  播放提示音
*/

var play_tone = function() {
	if(platformInfo.isiOS) {
		window.location.href = "ios://play_tone";
	} else {
		SmartDev.android_PlayTone();
	}
}

/*获取当前系统语言的接口*/

var get_CurrentLanguage = function() {
	if(platformInfo.isiOS) {
		window.location.href = "ios://get_CurrentLanguage";
	} else {
		SmartDev.Get_CurrentLanguage();
		console.log("get_CurrentLanguage ");
	}

}

/*只获得token的接口*/
var get_OnlyToken = function() {
	if(platformInfo.isiOS) {
		window.location.href = "ios://get_OnlyToken";
	} else {
		SmartDev.android_getToken();
	}
}

/*获取信息接口*/
var request_info = function(pid) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
		window.location.href = "ios://request_info##" + pid;
	} else {
		console.log("is Android");
		SmartDev.request_info(pid);
	}
};

/*进入消息管理中心的js接口*/

var start_MsgActivity = function(msgid) {
	if(platformInfo.isiOS) {
		window.location.href = "ios://start_MsgActivity##" + msgid;
	} else {
		SmartDev.android_startMsgActivity(msgid);
	}
}
/*启动场景模式的接口
type 1 点击：
     2 定时：
	 3 联动：
*/
var start_SceneManagerActivity = function(type) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
		window.location.href = "ios://start_SceneManagerActivity##" + type;
	} else {
		console.log("is Android");
		SmartDev.android_startSceneManagerActivity(type);
	}
};

/*获取消息接口*/
var get_MessageData = function(level, count) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
		window.location.href = "ios://get_MessageData##" + level + "##" + count;
	} else {
		console.log("is Android");
		SmartDev.android_getMessageData(level, count);
	}
};

/*删除消息接口*/
var get_deletemessage = function(msgid) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
		window.location.href = "ios://get_deletemessage##" + msgid;
	} else {
		console.log("is Android");
		SmartDev.android_deleteMessge(msgid);
	}
};
/*场景同步接口*/
var panelStoreToGateway = function(str) {
	if(platformInfo.isiOS) {
		console.log("is isiOS");
	} else {
		console.log("is Android");
		SmartDev.android_panelStoreToGateway(str);
	}
}
/*
功能：获取设备网络连接状态
pid：可标示本次请求
*/
var request_networkIsConnected = function(pid) {
	if(platformInfo.isiOS) {
		console.log("networkIsConnected: " + pid);
		window.location.href = 'ios://request_networkIsConnected##' + pid;
	} else if(platformInfo.isAndroid) {

	}
};

/*
功能：显示toast消息
*/
var request_showToast = function(text) {
	if(platformInfo.isiOS) {
		console.log("request_showToast: " + text);
		window.location.href = 'ios://showToast##' + text;
	} else if(platformInfo.isAndroid) {
		SmartDev.showToast(text);
	}
};
//注册监听键盘事件
var request_keyboardListener = function(onOff) {
	if(platformInfo.isiOS) {
		
	} else {
		SmartDev.android_keyboardListener(onOff);
	}
}

/*
onOff参数取值含义：
传入1，开始监听，传入0，取消监听
*/
var request_virtualNavListener = function(onOff) {
	console.log('request_virtualNavListener');
	if(platformInfo.isiOS) {
		
	} else {
		SmartDev.android_virtualNavListener(onOff);
	}
}
//多路开关重命名
var edit_name = function(names) {
	console.log('request_virtualNavListener');
	if(platformInfo.isiOS) {
		window.webkit.messageHandlers.JSCtrl.postMessage(['ios_log', 'edit_name' + names]);
		window.webkit.messageHandlers.JSCtrl.postMessage(['edit_name', names]); 
	} else {
		
	}
}

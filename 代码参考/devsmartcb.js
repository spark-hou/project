/*
request_xxx为网页调用应用接口的函数，不用网页开发者实现
callback_xxx为应用返回执行结果的回调函数，网页开发者藉此接收处理返回的数据，
为异步回调。
pid为int类型，当为0时，不需要返回结果
errCode为执行结果，当为0时标示成功，其他为错误码
*/

/*
功能：返回Token
pid：请求的pid
errCode：执行结果
token：返回Token
mode:开发模式
wifiid
deviceid
devname
*/
var native_callback_token = function(pid, errCode, jsonStr) {
	//Todo
	console.log("pid: " + pid + " errCode: " + errCode + " jsonStr: " + jsonStr);
	var obj = eval("(" + jsonStr + ")");
	state = obj["value"];
	var mode = obj["mode"];
	var wifiId = obj["wifiid"];
	var deviceId = obj["deviceid"];
	var token = obj["token"];
	var homeId = obj["homeid"];
	titleJson.title = obj["devicename"];
	console.log("mode: " + mode + " wifiId: " + wifiId + " deviceId: " + deviceId + "   titleJson.title: " + titleJson.title);
	console.log("zwf   homeId" + homeId);
	initGwDevInfoDate(pid, wifiId, deviceId, token, homeId);
	getSensorAlarmMsg(devInfoJson.deviceType);
	initGwFixedUI(devInfoJson.deviceType, titleJson);
	initAllGwUi(devInfoJson.deviceType, titleJson, window.ctrlKey, window.gwdevState)
};

/*
功能：返回设备配置项
pid:请求的pid
errCode：执行结果
data：返回结果
*/
var native_callback_config = function(pid, errCode, jsonStr) {
	//Todo
	console.log("pid-" + pid + " errCode-" + errCode + "data-" + jsonStr);
	if(errCode == 0) {
		console.log("native_callback_config errCode === 0");
		var obj = eval("(" + jsonStr + ")");
		var response = obj["response"];
		console.log("response:" + response);
		var extInfo = response["extInfo"];
		jNames = extInfo;
		console.log("extInfo:" + extInfo);
		var name1 = extInfo[key1];
		var name2 = extInfo[key2];
		var name3 = extInfo[key3];
		console.log('name1---:' + name1);
		console.log('name2---:' + name2);
		console.log('name3---:' + name3);
		if(name1 === null || name1 == '') {
			console.log("name1 null")
			$('p.p-inline').html(window.langArr.get('yilukaiguan') + ':' + window.langArr.get('weimingming'));
		} else {
			$('p.p-inline').html(window.langArr.get('yilukaiguan') + ':' + name1);
		}
		if(name2 === null || name2 == '') {
			console.log("name2 null")
			$('p.p-inline2').html(window.langArr.get('erlukaiguan') + ':' + window.langArr.get('weimingming'));
		} else {
			$('p.p-inline2').html(window.langArr.get('erlukaiguan') + ':' + name2);
		}
		if(name3 !== undefined) {
			console.log("name3 defined")
			if(name3 === null || name3 == '') {
				$('p.p-inline3').html(window.langArr.get('sanlukaiguan') + ':' + window.langArr.get('weimingming'));
			} else {
				$('p.p-inline3').html(window.langArr.get('sanlukaiguan') + ':' + name3);
			}
		} else {
			console.log("name3 undefined")
		}

	}
};
/*
功能：返回设置设备配置项结果
pid:请求的pid
errCode：执行结果 0为成功  －10086为网络异常
*/
var native_callback_set_config = function(pid, errCode) {
	//Todo
	console.log("pid-" + pid + " errCode-" + errCode);
	if(errCode == 0) {
		request_config(0, 3);
	}
};

/*
功能：返回功能按键执行结果
pid：请求的pid
errCode：执行结果
key：请求的key
data：返回的数据
*/
var native_callback_button = function(pid, errCode, key, data) {
	//Todo

};

/*
功能：返回设备状态
pid：请求的pid
errCode：执行结果
state：返回的状态，Json格式字符串包含 int型数组	实例：{"value":[0,1,2]}
*/
var native_callback_state = function(pid, errCode, state) {
	//Todo
	console.log("cxx native_callback_state :" + "pid-" + pid + " errCode-" + errCode + "state-" + state);
	if(requestTimer != null && requestTimer != '') {
		clearTimeout(requestTimer);
	}
	if(state == null || state == 'null') {
		networkError();
	}
	if(devInfoJson.deviceType === "009" || devInfoJson.deviceType === "010") {
		request_config(0, 3);
	} else {
		getSensorAlarmMsg(devInfoJson.deviceType);
	}
	var json = JSON.parse(state);
	if(json != null) {
		if(json.online) {
			console.log("设备在线！");
			currentDeviceState = true;
		} else {
			console.log("设备离线！");
			currentDeviceState = false;
			request_showToast(window.langArr.get('deviceoffline'));
			window.setTimeout(function() {
				request_button(0, 8, 0);
			}, 1000);
		}
	}

	//处理每个块对应的json数据，刷新界面
	refresh_gwstate_value(state, devInfoJson.deviceType);
	freshGwdevUI(devInfoJson.deviceType, window.gwdevState);
	initAllGwUi(devInfoJson.deviceType, titleJson, window.ctrlKey, window.gwdevState)
};

/*
功能：返回操作结果,可返回预处理状态，真实状态在callback_state中返回
pid：请求的pid
errCode：执行结果
state：返回的状态，Json格式字符串包含 int型数组	实例：{"value":[0,1,2]}
*/
var native_callback_control = function(pid, errCode, state) {
	//Todo
	//处理每个块对应的json数据，刷新界面
	//是否需要存储 点击后的预处理状态的状态值？？==
	console.log("native_callback_control ,pid :" + pid + " errCode:" + errCode + "       --state :" + state)

};
var native_unsolicited_state = function(type, errCode, state) {
	console.log(" native_unsolicited_state type-" + type + " errCode-" + errCode + "state-" + state);
	if(state == null || state == 'null') {
		networkError();
	}
	var json = JSON.parse(state);
	if(json.online) {
		console.log("设备在线！");
		currentDeviceState = true;
	} else {
		console.log("设备离线！");
		currentDeviceState = false;
		request_showToast(window.langArr.get('deviceoffline'));
		window.setTimeout(function() {
			request_button(0, 8, 0);
		}, 1000);
	}
	refresh_gwstate_value(state, devInfoJson.deviceType);
	freshGwdevUI(devInfoJson.deviceType, window.gwdevState);
	initAllGwUi(devInfoJson.deviceType, titleJson, window.ctrlKey, window.gwdevState)
}
/*
 *物理back键的回调函数
 * */
var native_callback_returnLocation = function() {
	console.log("-------------native_callback_returnLocation-----------");
	//文菲做的界面可以做区分，默认进入设备主界面，int数值区分是哪个界面
	console.log("currentPage" + currentPage);
	switch(currentPage) {
		case 0: //模式选择界面
			window.location.href = "myscenes.html";
			break;

		case 1: //电量统计界面
			window.location.href = "avaandeem.html";
			break;

		case 2: //多路开关重命名界面
			window.location.href = "multiswitch.html";
			break;

		case 3: //晾衣架选择时间
			window.location.href = "driverairer.html";
			break;

		case 4: //安全模式面板选择模式
			window.location.href = "securitymode.html";
			break;
		default:
			request_button(0, 8, 0);
			break;
	}

}
var native_callback_language = function(language) {
	console.log(" native_callback_language : " + language);
	//加载不同的语言

}

var native_callback_getringname = function(name) {
	console.log(" native_callback_getringname name: " + name);
}

var native_callback_datastoragepath = function(path) {
	console.log(" native_callback_datastoragepath path: " + path);
}

var native_callback_onlygettoken = function(token) {
	console.log(" native_callback_onlygettoken token: " + token);
}
var requestTimer;
var native_callback_info = function(pid, errCode, jsonStr) {
	//Todo	
	if(pid === '10086') {
		if(currentPage === 0) {
			setTimeout('refreshSceneList()', 500);
		}
		return;
	}
	/*if(pid === '10087') {//修改设备名称
		var obj_ = eval("(" + jsonStr + ")");
		titleJson.title = obj_["devicename"];
		return;
	}*/
	devInfoJson.pid = parseInt(new Date().getTime() / 1000)
	request_state(devInfoJson.pid, 0);
	requestTimer = window.setTimeout(function() {
		networkError();
	}, 10000);
	console.log("pid: " + pid + " errCode: " + errCode + " jsonStr: " + jsonStr);
	var obj = eval("(" + jsonStr + ")");
	state = obj["value"];
	var mode = obj["mode"];
	var wifiId = obj["wifiid"];
	var deviceId = obj["deviceid"];
	var token = obj["token"];
	var homeId = obj["homeid"];
	titleJson.title = obj["devicename"];
	console.log("mode: " + mode + " wifiId: " + wifiId + " deviceId: " + deviceId + "   titleJson.title: " + titleJson.title);
	console.log("zwf   homeId" + homeId);
	initGwDevInfoDate(pid, wifiId, deviceId, token, homeId);

	if(mode == 0 || mode == 2) { //测试
		url_hicloud = "http://api.wg.hismarttv.com/wg/ss/";
	} else if(mode == 1) { //1-开发
		url_hicloud = "http://219.147.31.20/wg/ss/";
	}
	initGwFixedUI(devInfoJson.deviceType, titleJson);
	initAllGwUi(devInfoJson.deviceType, titleJson, window.ctrlKey, window.gwdevState)
};

function networkError() {
	request_showToast(window.langArr.get("networkError"));
	window.setTimeout(function() {
		request_button(0, 8, 0);
	}, 1000);
}
var native_callback_getmessagedata = function(datalist) {
	//Todo
	console.log(" native_callback_getmessagedata datalist: " + datalist);
	/*datalist = [{"msgCustomerMsgId":"74731","infoText":"","infoWarning":"Dear [13646484697],There is gas leakage detected in your smart home[我家] at [2016年09月09日 21:18],Please check.<br>"}
	,{"msgCustomerMsgId":"74732","infoText":"","infoWarning":"Dear [13646484697],There is gas leakage detected in your smart home[我家] at [2016年09月09日 21:18],Please check.<br>"}]*/
	/*warningJson.warnings = ['**故障需要维修', '电池电量低，请及时更换电池', '333']*/

	if(datalist != "[]") {
		warningJson.warnings = new Array();
		alarmMsgid = new Array();
		datalist = JSON.parse(datalist);
		for(i = 0; i < datalist.length; i++) {
			if(i > 1) {
				break;
			}
			alarmMsgid.push(datalist[i].msgCustomerMsgId);
			warningJson.warnings.push(datalist[i].infoWarning);
		}
		switch(devInfoJson.deviceType) {
			case gworder.mapinfo.devTypeGw.magnetsensor:
			case gworder.mapinfo.devTypeGw.infrareddetector:
			case gworder.mapinfo.devTypeGw.wlemergencybutton:
			case gworder.mapinfo.devTypeGw.audiblevisualalarm:
			case gworder.mapinfo.devTypeGw.gatelock:
			case gworder.mapinfo.devTypeGw.leakdetector:
			case gworder.mapinfo.devTypeGw.smokedetector:
			case gworder.mapinfo.devTypeGw.gasdetector:
			case gworder.mapinfo.devTypeGw.fuelgasdetector:
			case gworder.mapinfo.devTypeGw.emergencybutton:
				showGwWarningText(warningJson.warnings);
				break;
			default:
				break;
		}
	} else {
		console.log("warnMsg is []");
	}

};

var native_callback_deletemessage = function(result) {
	//Todo
	console.log(" native_callback_deletemessage result: " + result);
	if(result == "true") {
		switch(warnIndex) {
			case 0:
				/*window.alarmMsgid.splice(0,1);
				warningJson.warnings.splice(0,1);*/
				$("div#warningItem0").hide();
				break;
			case 1:
				/*window.alarmMsgid.splice(1,1);
				warningJson.warnings.splice(1,1);*/
				$("div#warningItem1").hide();
				break;
		}
	} else {
		console.log("delete msg failer !");
	}
};

/*
功能：返回设备网络连接状态
pid:请求的pid
result：返回结果 false-未连接 true-连接
*/
var native_callback_networkIsConnected = function(pid, result) {
	//Todo
	console.log("pid-" + pid + " result-" + result);
	if(pid == 10086) {
		request_showToast(window.langArr.get("networkBreak"));
	}
};
//display参数为1时，表示弹出软键盘，display为0，表示收起键盘
var native_callback_keyboardChange = function(display) {
	switch(currentPage) {
		case 2:
			if(display === '1') {
				$('#shadow_div').css('height', '21%');
				$('#edit_div').css('height', '79%');
				$('#shadow_div3').css('height', '13%');
				$('#edit_div3').css('height', '87%');
			} else if(display === '0') {
				$('#shadow_div').css('height', '66%');
				$('#edit_div').css('height', '34%');
				$('#shadow_div3').css('height', '58%');
				$('#edit_div3').css('height', '42%');
			}
			break;
	}
};
/*
功能：返回设备控制栏显示或隐藏的事件

var native_callback_displayChanged = function() {
	//Todo
	console.log("native_callback_displayChanged");
	switch(currentPage) {
		case 3:
			$('#time_list_div').css('max-height', 410 * getScale() + 'px');
			break;
	}
};*/

/* 应用端回调，传回虚拟键盘变化事件
display取值
1：显示
0：隐藏
*/
var native_callback_virtualNavChange = function(display) {
	console.log('virtualNavChange : ' + display);
	/*switch(currentPage) {
		case 3:
			$('#time_list_div').css('max-height', 410 * getScale() + 'px');
			break;
	}*/
};

var native_callback_userinfo = function(pid, i) {
	console.log('native_callback_userinfo pid : ' + pid);
	console.log('native_callback_userinfo jsonStr is : ' + i);
};

var native_callback_devinfo = function(pid, i) {
	console.log('native_callback_devinfo pid : ' + pid);
	console.log('native_callback_devinfo jsonStr is : ' + i);
};
var native_callback_language = function(language) {
	console.log('native_callback_language language : ' + language);
};
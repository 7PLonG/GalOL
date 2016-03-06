//全局变量
var COMICWINHEIGHT = 0; //展示窗宽高
var COMICWINWIDTH = 0;

function init() {
	$("#build").click(function() {
		$("#begin").addClass("f-dn");
		setcomicWin();
	comicMove("#comicWin",60);
		edit();
		
	})
}

function setcomicWin() {
	//设置预览CG窗口大小。匹配正常成品比例
	//改进：可以在这里传入形参用来动态生成新比例模式。满足未来需求
	$("#setSpace").show();
	var comicWin = $("#comicWin")[0];
	var comicWH = $("#comicWH")[0];
	$("#setUp").click(function() {
		var setWH = $(".comicWH :checked")[0].value;
		COMICWINWIDTH = setWH.split("*")[0] <= 800 ? 800 : window.screen.availWidth * 0.6;
		COMICWINHEIGHT = COMICWINWIDTH / setWH.split("*")[0] * setWH.split("*")[1];
		$("#setSpace").hide();
		$("#workSpace").show();
		$("#comicWin").css({"width": (COMICWINWIDTH + "px"),"height": (COMICWINHEIGHT + "px")});
	})
	
}

function edit() {
	//即使效果的编辑窗口
	$d = $("#editor")[0].contentWindow.document; // IE、FF都兼容
	$d.designMode = "on";
	$d.contentEditable = true;
	$d.open();
	$d.close();
	$('#pulish').click(function() {
		// 获取iframe的body内容，用于显示插入
		alert($('#editor').contents().find('body').html());
		$('#novelPre').html($('#editor').contents().find('body').html());
	});
}
//		function workspaceMove() {
//			//初始创建窗口后，如果鼠标移出窗口，comc则自动缩到上方，流出一条，同时，后面novelpre从后浮出。
//			function comicHide(id) {
//				$(id).mouseout(function() {
//					$(this).animate("top": -750, 1000)
//				})
//			}
//
//			function novelpreHide() {
//			}
//		}
function comicMove(id,remain) {
	$(id).mouseout(function() {
		console.log("111");
		console.log(COMICWINHEIGHT);
		$(this).stop(true,false).animate({
			"top": (-COMICWINHEIGHT + remain) + "px"
		}, 1000)
	}).mouseover(function() {
		console.log("222");
		$(this).stop(true,false).animate({
			"top": 0 + "px"
		}, 1000)
	})
}
init()
		
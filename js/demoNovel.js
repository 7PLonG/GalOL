//头文件、基础信息： 
//ID、 中文名称、 英文名称、作者、社团、状态（未完成、初稿、坑...）、分级、
// 窗口分辨率，角色{姓名，对应立绘，对应头像，对应文字框颜色 }
//章节树：只载入章、节、 忽略NOTE，NOTE节点可在点击详情时再加载
{
	{
		"father": [], //null  起始点
		"id": "",
		"children": ["", "", ""],
		"about": ""
	}, {
		"father": [], //null  起始点
		"id": "",
		"children": ["", "", ""],
		"about": ""
	}, {
		"father": [], //null  起始点
		"id": "",
		"children": ["", "", ""],
		"about": ""
	}, {
		"father": [], //null  起始点
		"id": "",
		"children": ["", "", ""],
		"about": ""
	}
}
//NOTE节点数据格式,option代表在该NOTE后插入选项设置，
{
	"belong": "",
	"father": "",
	"num": "",
	"date": "",
	"option": {
		{
			"next": null
		}, [{
				"name": "",
				"change": "",
				"jump":""
			}, {}, {}, {}, {},

		]
	}
}
//应该把所有节note的选项和/数值/跳转都单列，而不是和NOTE耦合。
//
//
//
{
	name:
}


//入口函数  1 全局属性配置  关键字 requirejs.config      define(  配根目录 根require 在一个根目录下)
requirejs.config({
	baseUrl:'js/lib',//管理加载根路径 相对根 不加扩展
	paths:{
		'app':'../app',             //这是我们自己的js  相对于根目录 所以要回去js 已经帮我找到跟目录
		'jquery':'jquery-3.1.1',     //下边要用  这里是找到位置
		'myutil':"../app/myutil"     //没有define
 	},   //自己的文件


	shim:{
		'myutil':{
			exports:'createXHR'
		}
		
	}

})
//alert('hello word')  
//加载自己模块--app 注意回调理的顺序 根注入对象顺序  3--强调 通过文件 js/app/myfn1.js
define(['jquery','myutil'],function($,xhr) {// defined帮我们定义模块  还定义模块依赖能  1字符串数组依赖声明      2callback

	console.log($)
/*	var xhr=xhr();
	xhr.open('get',url.getBaseUrl()+"/books")
	xhr.send(null)
	xhr.onreadystatechange=function () {
		if(xhr.readyState==4) {

			$('div').css(myStyle).html(xhr.responseText)
		}
	}*/


})   



//用函数把依赖注入函数参数中
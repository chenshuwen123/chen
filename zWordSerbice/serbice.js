var express =require('express');
var app =express();
var fs =require("fs");
//定义变量存取数据
var navData =null;
var menuDate=null;
var banerData=null;
var cityWalk=null
// //异步 要用相对路径不要用决定路径
fs.readFile('data/nav.json',function(err,data){
	console.log('你好')
		if(err)
		console.log(err);
		navData=data
		fs.readFile('data/index/menu.json',function (err1 ,d){
			if(err1)
				console.log(err1)
			menuDate=d;
			fs.readFile('data/index/cityWalkList.json',function (errc,datac) {
				if(errc)
					console.log(errc)
				cityWalk=datac
			fs.readFile('data/index/banner.json',function(err2,data2) {
				if(err2)
				console.log(err2)
				banerData=data2;
				app.listen(7000);
				console.log('服务以启动')	
			})
		})
		})
		
	})
//提供web服务功能
app.use(express.static('www'));
app.all('/*',function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();

})
//写接口
app.get('/znav',function(req,res){
	console.log('请求');
	res.header('Content-type','application/json');
	res.send(navData);
})

app.get('/imgChang',function(req,res){
	console.log('111111')
	res.header('Content-type','application/json');
	res.send(banerData);
})
app.get('/zmenu',function(req,res){
	console.log('请求');
	res.header('Content-type','application/json');
	res.send(menuDate);
})
app.get('/cityWalk',function(req,res) {
	res.header('Content-type','application/json');
	res.send(cityWalk)
})


//自己建立服务器创建 http请求模块
var http=require('http');

app.get('/serch',function(req,res) {

	//获取用户传过来的的数据
	//http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword='+ keyword&timer=
	console.log('我是出入框启动文件')
	var keyword=req.query['value'];
	console.log(keyword)
	var data=req.query['time'];
	var option={
		host:'z.qyer.com',
		path:'/qcross/home/ajax?action=sitesearch&keyword='+ keyword,
		method:'get'
	}
	httpSearch(keyword,function(info) {
		res.send(JSON.parse(info))
	} );

})
	
	function httpSearch(kw,callback) {
		http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kw,function(httpRes){
			var buffers=[];
			httpRes.on('data',function(chunk) {
				buffers.push(chunk);
			});
			httpRes.on('end',function(chunk){
				var wData=Buffer.concat(buffers); //把buffers拼接在一起
				var dataStr=wData.toString('utf8');
				callback(dataStr);
			});
		}).on('error',function(e) {
			console.log(e)
		})

	}






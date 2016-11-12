

//定义模块  形式特别多  1简单值对
define({
	baseUrl:'http://localhost',
	port:'7000',
	getBaseUrl:function () {
		return this.baseUrl+":"+this.port;
	}
});



define(['jquery','myutil','app/myfn'],function($,x,url){
	
	function getNavData(){
		var xhr =x();//创建ajax 对象
		xhr.open('get',url.getBaseUrl()+'/serch');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
		if(xhr.readyState===4){
			alert(1)
		
				

			}
		}
	}
	return getNavData;
})


define(['jquery','myutil','app/myfn'],function($,x,url){
	
	function getNavData(root){
		var xhr =x();//创建ajax 对象
		xhr.open('get',url.getBaseUrl()+'/znav');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
		if(xhr.readyState===4){
			console.log(1)
			var navs =JSON.parse(xhr.responseText);
			console.log(navs);
			navs.forEach(function(elem,index){
				var a1=document.createElement('a')
				var li=document.createElement('li');
				if(elem['dymicImageUrl']!="") {
					var img=document.createElement('img')
					// img.src=elem['dymicImageUrl']
					img.src="images/wanletag.gif"
					li.appendChild(img);
				}
				a1.innerHTML=elem['name'];
				a1.setAttribute('href',elem['url']);
				var h=elem['url'];		
				root.appendChild(li);	
				li.appendChild(a1);
				
				})
			}
		}
	}
	return getNavData;
})

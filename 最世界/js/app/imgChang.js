


define(['jquery','myutil','app/myfn'],function($,x,url) {
	console.log('我被执行了麽我是图片获取的')
		function imgChang(imgChang) {
			var xhr=x();
			xhr.open('get',url.getBaseUrl()+'/imgChang')
			xhr.send(null);
			xhr.onreadystatechange=function (e) {
				if(xhr.readyState===4) {
					var imgs=JSON.parse(xhr.responseText)
					imgs.forEach(function (elem,index){
						var img=$('<img></img>')
						img.attr('src',elem["imgUrl"])	
						var a=$('<a></a>')
						a.attr('width','1580px');
						a.attr('height','420px');
						a.attr('display','inherit')
						a.attr('href',elem['href'])
						a.append(img);
						imgChang.append(a);


					})
				
				}
			}

		}
		return imgChang;
})

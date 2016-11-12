


define(['jquery','myutil','app/myfn'],function($,x,url){

	// function cityWalk(city){
		var u=url.getBaseUrl()+'/cityWalk'
		$.get(u,fn)
		function fn(data) {
			console.log(data.length)
			data.forEach(function(elem,index) {
				// var a=('<a href="" class="img_content"></a>') //装图片
				// $('.city-ul').append(a);
				// var  text_div=$('<div class="text_div">')
				// $('.city-ul').append(text_div)
				// var text_span=$('<span class="text_span"></span>');
				// $('.text_div').append(text_span);
				
			


				var img1=$('<img>')
				img1.attr('src',elem["imgurl"])
				$('.img_content').eq(index).append(img1)
				$('.text_span').eq(index).html(elem[ "address"])
				$('.text_numS').eq(index).html(elem['browseCount'])
				$('.show_num').eq(index).html(elem['soldCount'])
				$('.text_h3').eq(index).html(elem[ "title"])
				$('.oldPrice').eq(index).html(elem['oldPrice'])
				$('.newPrice').eq(index).html(elem['newPrice'])

				var  num=elem["introduce"].length;
				for(var i=0;i<num;i++){
					var li=$('<li>')
					li.html(elem["introduce"][i])
					$('.text_div ul').eq(index).append(li)
				}

			})
		}



})
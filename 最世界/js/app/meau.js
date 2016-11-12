


define(['jquery','myutil','app/myfn'],function ($,x,url) {
	function menuChang(menuContent) {
		var xhr=x();
		xhr.open('get',url.getBaseUrl()+'/zmenu');
		xhr.send(null);
		xhr.onreadystatechange=function () {
			if(xhr.readyState===4) {
				var menus=JSON.parse(xhr.responseText);
				 
				menus.forEach(function (elem,index) {
					// 图片de
					var imgsM="images/ulList_bg_"+index+'.png';
					var img=$('<img></img>')//图片
					img.attr('src',imgsM).css('width','25px').css('height','25px');
					var a=$('<a href="#"></a>')
					var li=$('<li class="click_div"></li>')	
					li.append(a)
					li.append(img);														
					menuContent.append(li);
					var h3=$('<h3>');
					h3.html(elem['title'])
					var p=$('<p></p>')
					p.html(elem['mainCity']);			
					li.append(h3);
					li.append(p)
			
					var divS=$('<div>') //大盒子
					divS.css({'float':'left','border':'1px solid #333','position':'absolute','left':'260px',background:"#fff"
						,'display':'none'}).attr('class','hover_show ')			
					
					li.append(divS)

						var divLeft=$('<div>');
						divLeft.css({'width':'40%','height':"400px",'float':'left','marginLeft':"20px"});
						divS.append(divLeft)
						var divRight=$('<div>')
						divRight.css({'width':'40%','height':"400px",'float':'left','marginLeft':"20px"});
						divS.append(divRight)

					for(var i=0;i<4;i++){			
						var ulR=$('<ul></ul>')
						for(var k in elem["moreCity"][i]){
								var h3=$('<h3></h3>')
								h3.css({'width':'300px','height':'35px','borderBottom':'1px solid #333','lineHeight':'35px','fontSize':'20px'})
								ulR.css({'width':'100%','height':'28%','margin':"10px 10px 50px 10px"})

								if(k=='cityName'){
									h3.html(elem["moreCity"][i][k])
									if(i==0 || i==1){
										divLeft.append(h3)
									}else{
										divRight.append(h3)
								}					
								
							}else if( k=='items'){
								var length=elem["moreCity"][i]['items'].length
								 for(var j=0;j<length;j++){	
								 	var li=$('<li>')			 	
									var aa=$('<a></a>')							
									li.append(aa);
									ulR.append(li)	
																	
									if(i==0 || i==1){
										if(index==3 && i==1){
											aa.html(elem["moreCity"][1]['items'][j]);
											divRight.append(ulR);
										}


										if(index==5 ){	
											var img=$('<img>')
											li.css({'width':'80px','height':'60px','float':'left','marginLeft':"10px",'margin':'10px 8px 0px 0px'})
											img.attr('src',elem["moreCity"][i]['items'][j]).css({width:'80px','height':'80px'})
											aa.append(img);
											divLeft.css('width','46%')
											divLeft.append(ulR)
											divRight.css('display','none')
											
										}else{
											li.css({'height':'30px','float':'left','marginLeft':"15px"})
											aa.html(elem["moreCity"][i]['items'][j]);
											divLeft.append(ulR);
										}							
									}else{	
											
											li.css({'height':'30px','float':'left','marginLeft':"15px"})					
											aa.html(elem["moreCity"][i]['items'][j]);
											divRight.append(ulR)
																																							
										 }
											

									 }
								 }
								
							}
							
						}
				var imG=$('<img>');
				var lis1=$('<li>');
				lis1.css('width',"80px")
					imG.css({width:'300px','height':'200px','margin':'0px 0 0 30px '})
					imG.attr('src',elem["moreCityImg"])
					lis1.append(imG);
					ulR.append(lis1)
					divRight.append(ulR)



		//	划过显对应的div示
				$('.click_div').mouseenter(function () {
						var index=$(this).index();
						$(this).css('background','#fff')
						$('.hover_show').eq(index).css('display','block').parent().siblings().children('div').css('display','none')
					$(this).mouseleave(function() {
							$(this).css('background','');
							 $('.hover_show').eq(index).css('display','none')
						})

					})
					

					
				})
				
			}
		}
	}
	return menuChang;

})
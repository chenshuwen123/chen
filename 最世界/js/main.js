

requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'app':'../app',           
		'jquery':'jquery-3.1.1',    
		'myutil':"../app/myutil"    
 	},  
	shim:{
		'myutil':{
			exports:'createXHR'
		}
		
	}

})
// 获取的东西必须放在一个 defined下
define(['jquery','app/nav','app/imgChang',"app/meau"],function($,nav,imgChang,meau) {
	console.log('我被执行了')
	var root=document.querySelector('#nav ul');
	nav(root)
	var imgs=$('.content_img');
	imgChang(imgs)
	// 菜单
	var meauContent=$('.hover_ul_first')
	meau(meauContent)
	var div=$('<div>')
	 div.css({"width":'180px','background':'#fff','position':'absolute','top':'22px','z-index':'1'}).attr('class','divd')
	$('.input_header').focus(function(){
	 	 $('.header_form').append(div);
		  // 鼠标按下事件
		$('.input_header').keyup(function(){
		 if($(this).val()!=''){
			var inputValue=$(this).val();
			//发送ajax数据
				$.ajax({
					url:'http://localhost:7000/serch?value='+inputValue+'&time='+Date.parse(new Date()),
					type:'get',
					success:ResultData
				})
			}
		})
		function ResultData(data){
		// 清空数据div
		$('.divd').empty()
		  var d=data.data['list'];	
		  var uls=$('<ul>')
		  d.forEach(function(elem,index){
		  	if(elem['type_name']=='item'){
		  		var img=$('<img>')
		  		img.css({'marginLeft':'5px'})
		  		var pen_name=$('<p>')
		  		pen_name.html(elem['en_name']+elem['cn_name']).css('color','#333').css('width','80%')
		  		var p_blong_name=$('<p>');
		  		p_blong_name.css('color','#333').css('width','80%').html(elem['belong_name'])
		  		
		  		img.attr('src',elem['src']).css({'float':'left','width':'30px','height':"30px"});
		  		var li=$('<li>')
		  		li.css({'height':'40px','lineHeight':'20px'})
		  		var a=$('<a>');
		  		a.attr('href',elem['url'])
		  		a.css({'display':'inhert','width':'100%','height':'100%','src':elem['src']})
		  		a.append(img);
		  		a.append(pen_name)
		  		a.append(p_blong_name)	
		  		li.append(a);
		  		uls.append(li);
		  		div.append(uls)
		  	}
		  	if(elem['type_name']=='word') {
		  		var li=$('<li>')
		  		var a1=$('<a>');
		  		
		  		a1.html(elem['word'])
		  		a1.attr('href',elem['url'])
		  		li.append(a1);
		  		uls.append(li);
		  		div.append(uls)
		  		a1.css({'color':'#333','fontSize':"20px"})
		  	}
		  })
		
		}
	})


	

})   



//用函数把依赖注入函数参数中
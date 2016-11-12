


$(function (){
	function headerMouse(msy,show) {
		$(msy).on('mouseenter',function (index){
			console.log($(this))
			var index=$(this).index();
			$(this).children('div').fadeIn();
			$(this).on('mouseleave',function(){
				$(this).children('div').fadeOut();
			})
		})
	}
	headerMouse($('.header_mouseenter'),$('.heade_show1'))

	/*$('.header_btn img').mouseenter(function () {
		$(".input_header").animate({'width':'150px'},'show')
	
		$('.header_form').on('mouseleave',function (){
			$(".input_header").animate({'width':'0px'},'show')
		})

	})*/

	$('#header li a').mouseenter(function (){
		$('#header li a').css('color','')
		$(this).css('color','#10b041')
		$(this).mouseleave(function (){
			$(this).css('color','')
		})

	})
	//app
	$('.logImg1').mouseenter(function () {
		$('.logImg2').css('top','5px')
		$('.logImg1').mouseleave(function () {
			$('.logImg2').css('top','10px')
		})
	})

	$('#nav a').mouseenter(function () {	
		$(this).css('color','#00b0a0').css('background','grey')
		$(this).mouseleave(function (){
			$(this).css('color','').css('background','')
		})
	})
	var imgNum=0;
	function imgL() {
		var marginLeft=imgNum*(-1580);	
		imgNum++;
		if(imgNum==5){
			imgNum=0;
		}else{
			$('.content_img').css("marginLeft",marginLeft+'px');
		}

	}
	var  timer=setInterval(imgL,2000)

	//菜单
	$('.main_hover li').mouseenter(function () {
		$(this).siblings().children('div').fadeOut();
		$(this).children('div').fadeIn();
		$(this).css('background','#fff')
		$(this).mouseleave(function() {
			$(this).children('div').fadeOut();
			$(this).css('background','')
		})
	})

	// tabd 划过显示对应的div 换菜单方法封装一个函数 多次用到 may 划过的对象 changDiv要显示的div
	function tabMoveChange(msy,changDiv) {
		msy.eq(0).children().css('color','green').css('border-bottom','2px solid green')	
		msy.mouseenter(function () {
			var index=$(this).index();
			changDiv.eq(index).fadeIn().siblings().css('display','none')
			$(this).children().css('color','green').css('border-bottom','2px solid green').parent().siblings().children().css('color','').css('border-bottom','');
		})

	}

	tabMoveChange($('.tab_right li'),$('.tab_showDiv'))//第一个机酒自由行
	tabMoveChange($('.tab1_right li'),$('.tab1_showDiv'))//城市玩乐
	tabMoveChange($('.tab_right_zhuTi li'),$('.tab_showDiv_zhuTi'))//主题推荐
/*	$('.tab_right li').mouseenter(function () {
		var index=$(this).index();
		$(this).children().css('color','red').parent().siblings().children().css('color','')
		console.log(index+'111111111111----------------------------')
		$('.tab_showDiv').eq(index).fadeIn().siblings().css('display','none')
		$(this).mouseleave(function () {
			$(this).css('color','')
		})
	})*/


	$('.tab_showDiv li').mouseenter(function() {
		$(this).css('opacity','0.8').siblings().css('opacity','1');
	})

	
})
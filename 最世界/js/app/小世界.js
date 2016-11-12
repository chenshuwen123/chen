

$(function () {
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
	headerMouse($('.hover_ul_first li'),$('.hover_show'))
	headerMouse($('.nav_showL'),$('.nav_rm'))  //显示一个在显示另一个


})
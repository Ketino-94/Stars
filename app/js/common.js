$(function() {

	$('.toggle-menu').on('click', function(){
		$('.menu').fadeIn();
		return false;
	})
	$('body').on('click', function(){
		$('.menu').fadeOut();
	})

	$('.main__slider__comment:after').on('click', function(){
		$('.main__slider__comment').fadeOut();
	})

	
});


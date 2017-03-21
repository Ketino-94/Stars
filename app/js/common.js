$(function() {

	$('.toggle-menu').on('click', function(){
		$('.menu').fadeIn();
		return false;
	})
	$('body').on('click', function(){
		$('.menu').fadeOut();
	});


	$('.main__slider__comment:after').on('click', function(){
		$('.main__slider__comment').fadeOut();
	});



	$('.scrollup').mouseover( function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('.scrollup').fadeIn('fast');
		} else {
			$('.scrollup').fadeOut('fast');
		}
	});


	$('.main__slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: '<button type="button" class="slick-prev"></button>',
	  nextArrow: '<button type="button" class="slick-next"></button>',
	});


	
	
});


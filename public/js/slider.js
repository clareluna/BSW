$(document).ready(function(){
	$('.main-slider').slick({
		dots: true,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		mobileFirst: true,
		arrows: false,
		autoplay: true
	});
});
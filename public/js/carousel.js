var slides = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];

$(function() {
	$('#slideshow').on('click', function() {
		var src = $(this).attr('src');
		console.log(src);
	});
});
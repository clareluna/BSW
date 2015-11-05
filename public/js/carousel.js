$(function() {
	var imgs = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg'];
	var i = 1;

	function changeSlide() {
		console.log('hello world');
		$('#slideshow').attr('src', imgs[i]);
		i++;
		if (i === 3) { i = 0; }
	}
	setInterval(changeSlide, 3000);	
});
$(function() {

	var slides = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg'];

	function changeSlide(arr) {
		$('#slideshow').attr('src', arr[0]);
		var i = 1;
		setInterval(function() {
			$('#slideshow').attr('src', arr[i]);
			i++;
			if (i >= arr.length) {
				i = 0;
			}
		}, 3500);
	}
	changeSlide(slides);
});

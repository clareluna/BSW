// $(function() {

// 	var slides = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg'];

// 	function changeSlide(arr) {
// 		$('#slideshow').attr('src', arr[0]).delay(2500).fadeOut(1000);
// 		var i = 1;
// 		setInterval(function() {
// 			$('#slideshow').fadeIn(1000).attr('src', arr[i]).delay(1500).fadeOut(1000);
// 			i++;
// 			if (i >= arr.length) {
// 				i = 0;
// 			}
// 		}, 3500);
// 	}
// 	changeSlide(slides);
// });

$(function() {
  function changeSlide(el) {
    $(el).fadeIn(2500, function() {
      $(this).fadeOut(2500, function() {
        changeSlide(this.nextElementSibling || this.parentElement.firstElementChild)
      });
    });
  }
  changeSlide($(".slideshow:first"));
});
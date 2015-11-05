// $(function() {
//   function changeSlide(el) {
//     $(el).fadeIn(2500, function() {
//       $(this).delay(3000).fadeOut({duration: 2500, start: function() {
// 				changeSlide(this.nextElementSibling || this.parentElement.firstElementChild)}
// 			});
//     });
//   }
//   changeSlide($(".slideshow:first"));
// });

$(function() {
	function slideDisplay() {
		var imgs = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg'];
		// var src = $('.slideshow').attr('src');
		
		setInterval(function() {
			for (var i = 0; i < imgs.length; i++) {
				$('#slideshow').attr('src', imgs[i]);
			}
		}, 3000);

	}
	slideDisplay();
});

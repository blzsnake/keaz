import $ from 'jquery';
import 'slick-carousel';

(function() {

	$('#mainSlider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 1000
	});

})();

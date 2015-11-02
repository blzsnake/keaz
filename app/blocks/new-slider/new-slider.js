import $ from 'jquery';
import 'slick-carousel';

(function() {

	$('#newSlider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 1000,
		slidesToShow: 1,
		nextArrow: $('.new-slider__arrow_next'),
		prevArrow: $('.new-slider__arrow_prev')
	});

})();

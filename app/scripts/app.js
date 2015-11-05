import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../blocks/main-slider/main-slider';
import '../blocks/new-slider/new-slider';


$(() => {
	// Code here
	$('.footer__mobile').on('click', function(){
		$(this).next('div').fadeToggle(500);
	});
});

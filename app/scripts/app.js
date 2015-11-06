import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../blocks/main-slider/main-slider';
import '../blocks/new-slider/new-slider';


$(() => {
	$('.js-filter-option').on('click', function() {
		$(this).toggleClass('is-active');
	});

	$('.js-toggl').off().on('click', function() {
		console.log($._data( $(".js-toggl")[0], "events"));
		$(this).toggleClass('is-active');

	});
});

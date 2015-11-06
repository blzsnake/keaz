import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../blocks/main-slider/main-slider';
import '../blocks/new-slider/new-slider';


$(() => {
'use strict';
	$('.js-filter-option, .js-filter-title').on('click', function() {
		$(this).toggleClass('is-active');
	});

	$('.js-toggl').on('click', function(e) {
		$(this).closest('.product-toggl').toggleClass('is-active');
	});

	$('.js-switch').on('click', function () {
		var $this = $(this),
			$tabs = $('.tabs__container'),
			active = 'is-active';
		if ($this.hasClass(active)) {
			$this.removeClass(active);
			$tabs.removeClass(active);
		} else {
			$('.js-switch').removeClass(active);
			$this.addClass(active);
			$tabs.eq($this.index()).addClass(active);
		}

	});

});

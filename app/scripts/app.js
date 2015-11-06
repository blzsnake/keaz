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
			$tabs.removeClass(active)
			.eq($this.index()).addClass(active);
		}

	});

	$('.js-list').on('click', function () {
		var $this = $(this),
			$lists = $('.catalog-list,.catalog-tile'),
			$list = $('.catalog-list'),
			$tile = $('.catalog-tile'),
			active = 'is-active';
			console.log($lists, $list, $tile);
		if ($this.hasClass(active)) {
			$this.removeClass(active);
			$lists.removeClass(active);
		} else {
			$('.js-list').removeClass(active);
			$this.addClass(active);
			$lists.removeClass(active);
			if ($this.index() === 0) {
				$list.addClass(active);
			} else {
				$tile.addClass(active)
			}
		}
	});

});

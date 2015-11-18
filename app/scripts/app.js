import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../blocks/main-slider/main-slider';
import '../blocks/new-slider/new-slider';


$(() => {
'use strict';

	var	active = 'is-active';

	$('.js-filter-option, .js-filter-title').on('click', function() {
		$(this).toggleClass(active);
	});

	$('.js-toggl').on('click', function(e) {
		$(this).closest('.product-toggl').toggleClass(active);
	});

	$('.js-switch').on('click', function () {
		var $this = $(this),
			$tabs = $('.tabs__container'),
			active = active;
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
			$tile = $('.catalog-tile');
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

	$('.js-dropdown').on('click', function() {
		var $this = $(this);

		if ($this.hasClass(active)) {
			$this.removeClass(active);
		} else {
			$('.js-dropdown').removeClass(active);
			$(this).addClass(active);
		}
	});

	$('.js-category').on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		if ($this.hasClass(active)) {
			$this.removeClass(active);
		} else {
			$('.js-category').removeClass(active);
			$(this).addClass(active);
		}
	});

});

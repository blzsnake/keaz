import $ from 'jquery';

(function() {
	$('.js-filter-option').on('click', function() {
		$(this).toggleClass('is-active');
	});

	$('.js-toggl').on('click', function() {
		console.log('1');
		$(this).toggleClass('is-active');

	});
})();

import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../blocks/main-slider/main-slider';
import '../blocks/new-slider/new-slider';

$(() => {
	// Code here


	$(document).ready(function (){	

		$('.footer__mobile').on('click', function(){
			$(this).next('div').fadeToggle(500).css('display', 'inline-block');
		});


		$(window).resize(function(){
			var winBr = $(window).width();
			if(winBr>600){
				$('div.footer__list').css('display', 'inline-block')
			}
			else{
				$('div.footer__list').css('display', 'none')
			}
		});     

	});


	
});
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

export function interview() { 
	$(document).ready(function () {
		$('.interview__slider').slick({
			 dots: true,
			 arrows: true,
			 autoplay: true,
			 autoplaySpeed: 6000,
			 infinite: true, // Бесконечный слайдер
			 slidesToShow: 4, // Показывать 3 слайда
			 slidesToScroll: 1, // Перемещаться по одному слайду
			 responsive: [
				  {
						breakpoint: 1920,
						settings: {
							 slidesToShow: 4,
							 slidesToScroll: 1
						}
				 },
				 {
					breakpoint: 1440,
					settings: {
						 slidesToShow: 3,
						 slidesToScroll: 1
					}
			  },
				  {
						breakpoint: 768,
						settings: {
							 slidesToShow: 2,
							 slidesToScroll: 1
						}
				  },
				  {
						breakpoint: 577,
						settings: {
							 slidesToShow: 1,
							 slidesToScroll: 1
						}
				  }
			 ]
		});
	});
}
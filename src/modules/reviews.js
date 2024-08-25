import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

$(document).ready(function () {
	$('.reviews__slider').slick({
		 dots: true,
		 arrows: true,
		 autoplay: true,
		 autoplaySpeed: 6000,
		 infinite: true, // Бесконечный слайдер
		 slidesToShow: 3, // Показывать 3 слайда
		 slidesToScroll: 1, // Перемещаться по одному слайду
		 responsive: [
			  {
					breakpoint: 1920,
					settings: {
						 slidesToShow: 3,
						 slidesToScroll: 1
					}
			  },
			  {
					breakpoint: 1024,
					settings: {
						 slidesToShow: 2,
						 slidesToScroll: 1
					}
			  },
			  {
					breakpoint: 576,
					settings: {
						 slidesToShow: 1,
						 slidesToScroll: 1
					}
			  }
		 ]
	});
});
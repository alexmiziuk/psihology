import { getScrollBarSize } from './utils.js';

export function toggleBurgerMenu() {
	const toggleButton = document.getElementById('toggleBurger');
	const burger = document.querySelector('.burger');
	const burgerLayer = document.querySelector('.burger-layer');
	const burgerMenuContainer = document.querySelector('.burger-menu__container');
	const burgerMenu = document.querySelector('.burger-menu');

	toggleButton.addEventListener('click', function () {
		burger.classList.toggle('active-burger');
		if (burger.classList.contains('active-burger')) {
			burgerLayer.classList.add('burger-layer-active');
			var scrollBarSize = getScrollBarSize();
			if (scrollBarSize && scrollBarSize[1] > 0) {
				document.body.style.paddingRight = scrollBarSize[1] + 'px';
			}
			document.body.style.overflow = 'hidden';
		} else {
			burgerLayer.classList.remove('burger-layer-active');
			document.body.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		}
	});

	// Закрывать меню при клике на пункт меню и добавлять класс активности
	const handleMenuItemClick = () => {
		const menuItems = document.querySelectorAll('.burger-menu__item');
		menuItems.forEach(item => {
			item.addEventListener('click', () => {
				burger.classList.remove('active-burger');
				burgerLayer.classList.remove('burger-layer-active');
				document.body.style.paddingRight = '';
				document.body.style.overflow = 'auto';

				// Удалить класс активности у всех пунктов меню
				menuItems.forEach(item => {
					item.classList.remove('burger-menu__item--active');
				});

				// Добавить класс активности к текущему пункту меню
				item.classList.add('burger-menu__item--active');
			});
		});

	}

	burgerLayer.addEventListener('click', () => {
		burger.classList.remove('active-burger');
		burgerLayer.classList.remove('burger-layer-active');
		document.body.style.paddingRight = '';
		document.body.style.overflow = 'auto';
	});
	burgerMenu.addEventListener('click', (event) => {
		event.stopPropagation();
	});
	burgerMenuContainer.addEventListener('click', (event) => {
		event.stopPropagation();
	});

	handleMenuItemClick();
}
// Dropdown menu

document.addEventListener('DOMContentLoaded', function () {
	const menuItems = ['my-expertise', 'my-works', 'contacts'];

	menuItems.forEach(itemId => {
		const menuItem = document.getElementById(itemId);
		let enterTimeout, leaveTimeout; // Таймеры для ховера и выхода

		menuItem.addEventListener('mouseenter', function () {
			clearTimeout(leaveTimeout); // Очищаем таймер ухода
			const submenu = this.querySelector(`.submenu__${itemId}`);
			submenu.style.display = 'block';
			submenu.style.transition = 'all 0.5s ease';
			enterTimeout = setTimeout(() => {
				submenu.style.opacity = '1';
				submenu.style.visibility = 'visible';
				submenu.style.zIndex = '1';
			}, 100); // Ожидание перед показом меню
		});

		menuItem.addEventListener('mouseleave', function () {
			clearTimeout(enterTimeout); // Очищаем таймер входа
			const submenu = this.querySelector(`.submenu__${itemId}`);
			enterTimeout = setTimeout(() => {
				submenu.style.opacity = '0';
				submenu.style.visibility = 'hidden';
				submenu.style.zIndex = '-1';
				setTimeout(() => {
					submenu.style.display = 'none';
				}, 300); // Соответствует времени перехода
			}, 100); // Ожидание перед скрытием меню
		});

		menuItem.addEventListener('click', function (event) {
			event.stopPropagation();
			clearTimeout(leaveTimeout); // Очищаем таймер ухода на случай быстрого клика
			const submenu = this.querySelector(`.submenu__${itemId}`);
			submenu.style.display = 'block';
			submenu.style.transition = 'all 0.3s ease'; // Уменьшаем время перехода
			submenu.style.opacity = '1';
			submenu.style.visibility = 'visible';
			submenu.style.zIndex = '1';
		});
	});
});

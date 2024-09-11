// Dropdown menu

document.addEventListener('DOMContentLoaded', function () {
	const menuItems = ['my-expertise', 'my-works', 'contacts'];
	const navMenuItems = document.querySelectorAll(".nav__menu-item");
	const submenuWrapperExpertise = document.querySelector(".submenu__my-expertise");
	const submenuWrapperWorks = document.querySelector(".submenu__my-works");
	const submenuWrapperContacts = document.querySelector(".submenu__contacts");
	const subMenuItems = document.querySelectorAll(".submenu__item");
	const navMenuItemsDropdowns = document.querySelectorAll(".nav__menu-item--dropdown");
	const body = document.querySelector("body");


	body.addEventListener("click", function (event) {
		event.stopPropagation();
		navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
			navMenuItemDropdown.classList.remove('active');
		});
		submenuWrapperExpertise.style.display = 'none';
		submenuWrapperWorks.style.display = 'none';
		submenuWrapperContacts.style.display = 'none';
		submenuWrapperExpertise.style.visibility = 'hidden';
		submenuWrapperWorks.style.visibility = 'hidden';
		submenuWrapperContacts.style.visibility = 'hidden';
		submenuWrapperExpertise.style.zIndex = '-1';
		submenuWrapperWorks.style.zIndex = '-1';
		submenuWrapperContacts.style.zIndex = '-1';
		submenuWrapperExpertise.style.opacity = '0';
		submenuWrapperWorks.style.opacity = '0';
		submenuWrapperContacts.style.opacity = '0';
		submenuWrapperExpertise.style.transition = 'all 0.3s ease';
		submenuWrapperWorks.style.transition = 'all 0.3s ease';
		submenuWrapperContacts.style.transition = 'all 0.3s ease';
	});

	navMenuItems.forEach(navMenuItem => {
		navMenuItem.addEventListener("click", function (event) {
			event.stopPropagation();
			navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
				if (navMenuItem.id === navMenuItemDropdown.id) {
					navMenuItemDropdown.classList.add('active');
				} else {
					navMenuItemDropdown.classList.remove('active');
				}
			});
			if (submenuWrapperExpertise.style.display === 'block' ||
				submenuWrapperWorks.style.display === 'block' ||
				submenuWrapperContacts.style.display === 'block') {
				submenuWrapperExpertise.style.transition = 'all 0.3s ease';
				submenuWrapperWorks.style.transition = 'all 0.3s ease';
				submenuWrapperContacts.style.transition = 'all 0.3s ease';
				submenuWrapperExpertise.style.opacity = '0';
				submenuWrapperWorks.style.opacity = '0';
				submenuWrapperContacts.style.opacity = '0';
				submenuWrapperExpertise.style.visibility = 'hidden';
				submenuWrapperWorks.style.visibility = 'hidden';
				submenuWrapperContacts.style.visibility = 'hidden';
				submenuWrapperExpertise.style.zIndex = '-1';
				submenuWrapperWorks.style.zIndex = '-1';
				submenuWrapperContacts.style.zIndex = '-1';
				submenuWrapperExpertise.style.display = 'none';
				submenuWrapperWorks.style.display = 'none';
				submenuWrapperContacts.style.display = 'none';
			}
		});
	});

	subMenuItems.forEach(subMenuItem => {
		subMenuItem.addEventListener("click", function (event) {
			event.stopPropagation();
			navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
				if (subMenuItem.id === navMenuItemDropdown.id) {
					navMenuItemDropdown.classList.add('active');
				} else {
					navMenuItemDropdown.classList.remove('active');
				}
			});
			if (submenuWrapperExpertise.style.display === 'block' ||
				submenuWrapperWorks.style.display === 'block' ||
				submenuWrapperContacts.style.display === 'block') {
				submenuWrapperExpertise.style.transition = 'all 0.3s ease';
				submenuWrapperWorks.style.transition = 'all 0.3s ease';
				submenuWrapperContacts.style.transition = 'all 0.3s ease';
				submenuWrapperExpertise.style.opacity = '0';
				submenuWrapperWorks.style.opacity = '0';
				submenuWrapperContacts.style.opacity = '0';
				submenuWrapperExpertise.style.visibility = 'hidden';
				submenuWrapperWorks.style.visibility = 'hidden';
				submenuWrapperContacts.style.visibility = 'hidden';
				submenuWrapperExpertise.style.zIndex = '-1';
				submenuWrapperWorks.style.zIndex = '-1';
				submenuWrapperContacts.style.zIndex = '-1';
				submenuWrapperExpertise.style.display = 'none';
				submenuWrapperWorks.style.display = 'none';
				submenuWrapperContacts.style.display = 'none';
			}
		});
	});

	menuItems.forEach(itemId => {
		const menuItem = document.getElementById(itemId);
		let enterTimeout, leaveTimeout; // Таймеры для ховера и выхода

		menuItem.addEventListener('click', function (event) {
			event.stopPropagation();
			clearTimeout(enterTimeout); // Очищаем таймер ухода на случай быстрого клика
			const submenu = this.querySelector(`.submenu__${itemId}`);
			submenu.style.display = 'block';
			submenu.style.transition = 'all 0.3s ease'; // Уменьшаем время перехода
			enterTimeout = setTimeout(() => {
				submenu.style.opacity = '1';
				submenu.style.visibility = 'visible';
				submenu.style.zIndex = '1';
				navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
					if (menuItem.id === navMenuItemDropdown.id) {
						navMenuItemDropdown.classList.add('active');
					} else {
						navMenuItemDropdown.classList.remove('active');
					}
				});
			}, 100); // Ожидание перед показом меню
		});

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
			clearTimeout(leaveTimeout); // Очищаем таймер входа
			const submenu = this.querySelector(`.submenu__${itemId}`);
			submenu.style.transition = 'all 0.3s ease';
			submenu.style.opacity = '0';
			submenu.style.visibility = 'hidden';
			submenu.style.zIndex = '-1';
			navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
				navMenuItemDropdown.classList.remove('active');
			});
			leaveTimeout = setTimeout(() => {
				submenu.style.display = 'none';
			}, 100); // Соответствует времени перехода
			// Ожидание перед скрытием меню
		});
	});
});

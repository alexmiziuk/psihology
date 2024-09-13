// Dropdown menu

const menuItems = ['my-expertise', 'my-works', 'contacts'];
const navMenuItems = document.querySelectorAll(".nav__menu-item");
const submenuWrapperExpertise = document.querySelector(".submenu__my-expertise");
const submenuWrapperWorks = document.querySelector(".submenu__my-works");
const submenuWrapperContacts = document.querySelector(".submenu__contacts");
const subMenuItems = document.querySelectorAll(".submenu__item");
const navMenuItemsDropdowns = document.querySelectorAll(".nav__menu-item--dropdown");
const body = document.querySelector("body");

export function navMenu() {
	function hiddenElement() {
		const elements = [
			submenuWrapperExpertise,
			submenuWrapperWorks,
			submenuWrapperContacts
		];

		elements.forEach(element => {
			element.style.display = 'none';
			element.style.visibility = 'hidden';
			element.style.zIndex = '-1';
			element.style.opacity = '0';
			element.style.transition = 'all 0.3s ease';
		});
	}

	function closeDropdownsOnBodyClick() {
		body.addEventListener("click", function (event) {
			event.stopPropagation();
			navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
				navMenuItemDropdown.classList.remove('active');
			});
			hiddenElement();
		});
	}

	function closeDropdownsOnNavMenuItemClick() {
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
					hiddenElement();
				}
			});
		});
	}

	function closeDropdownsOnSubMenuItemClick() {
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
					hiddenElement();
				}
			});
		});
	}

	function visibleElement(effect, element) {
		element.style.transition = effect; // время перехода
		element.style.opacity = '1';
		element.style.visibility = 'visible';
		element.style.zIndex = '1';
	}

	function initializeDropdownMenu(menuItems) {
		menuItems.forEach(itemId => {
			const menuItem = document.getElementById(itemId);
			let enterTimeout, leaveTimeout; // Таймеры для ховера и выхода

			function openDropdownOnNavMenuItemClick() {
				menuItem.addEventListener('click', function (event) {
					event.stopPropagation();
					clearTimeout(enterTimeout); // Очищаем таймер ухода на случай быстрого клика  
					const submenu = this.querySelector(`.submenu__${itemId}`);
					submenu.style.display = 'block';
					enterTimeout = setTimeout(() => {
						visibleElement('all 0.3s ease', submenu);
						navMenuItemsDropdowns.forEach(navMenuItemDropdown => {
							if (menuItem.id === navMenuItemDropdown.id) {
								navMenuItemDropdown.classList.add('active');
							} else {
								navMenuItemDropdown.classList.remove('active');
							}
						});
					}, 100); // Ожидание перед показом меню  
				});

			}

			function openDropdownOnNavMenuItemHover() {
				menuItem.addEventListener('mouseenter', function () {
					clearTimeout(enterTimeout); // Очищаем таймер ухода  
					const submenu = this.querySelector(`.submenu__${itemId}`);
					submenu.style.display = 'block';
					enterTimeout = setTimeout(() => {
						visibleElement('all 0.5s ease', submenu);
					}, 100); // Ожидание перед показом меню  
				});
			}

			function closeDropdownOnNavMenuItemHover() {
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
			}

			openDropdownOnNavMenuItemClick();
			openDropdownOnNavMenuItemHover();
			closeDropdownOnNavMenuItemHover();
		});
	}
	closeDropdownsOnBodyClick();
	closeDropdownsOnNavMenuItemClick();
	closeDropdownsOnSubMenuItemClick();
	initializeDropdownMenu(menuItems);
}
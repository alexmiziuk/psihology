
document.addEventListener('DOMContentLoaded', function () {

	// Dropdown menu

	const menuItems = ['my-expertise', 'my-works', 'contacts'];

	menuItems.forEach(itemId => {
		const menuItem = document.getElementById(itemId);

		/* menuItem.addEventListener('mouseenter', function () {
			const submenu = this.querySelector(`.submenu-${itemId}`);
			submenu.style.display = 'block';
			submenu.style.transition = 'all 1s ease';
			setTimeout(() => {
				submenu.style.opacity = '1';
				submenu.style.visibility = 'visible';
				submenu.style.zIndex = '1';
			}, 100);
		});
 */
		menuItem.addEventListener('mouseleave', function () {
			const submenu = this.querySelector(`.submenu-${itemId}`);
			submenu.style.opacity = '0';
			submenu.style.visibility = 'hidden';
			setTimeout(() => {
				submenu.style.display = 'none';
			}, 600);
		});

		menuItem.addEventListener('click', function (event) {
			event.stopPropagation();
			const submenu = this.querySelector(`.submenu-${itemId}`);
			submenu.style.display = 'block';
			submenu.style.transition = 'all 0.6s ease';
			setTimeout(() => {
				submenu.style.opacity = '1';
				submenu.style.visibility = 'visible';
				submenu.style.zIndex = '1';
			}, 100);
		});
	});

	
});

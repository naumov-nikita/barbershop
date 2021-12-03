'use	strict';

window.addEventListener('DOMContentLoaded', () => {

	const links = document.querySelectorAll('a');

	links.forEach((link) => {
		link.addEventListener("click",(e) => {
		e.preventDefault();

		});
	});

});
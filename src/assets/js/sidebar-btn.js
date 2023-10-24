const sitebarBtn = document.getElementById('sidebar-btn')
const sitebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const header = document.querySelector('.header')


sitebarBtn.addEventListener('click', function () {
	sitebar.classList.toggle('close');
	if (sitebar.classList.contains('close')) {
		main.style.padding = '10rem 0 0 0'
		header.style.width = '100%'
	} else {
		main.style.removeProperty('padding')
		header.style.removeProperty('width')
	}


})

function createTabs() {
	const tabs = document.querySelector('.tabs')
	tabs.insertAdjacentHTML('afterbegin', `
	
	<div class="tabs__nav">
		<button class="tabs__nav-btn" type="button" data-tab="#tab_1">Проекты JS</button>
		<button class="tabs__nav-btn" type="button" data-tab="#tab_2">Нативные сайты</button>
		<button class="tabs__nav-btn" type="button" data-tab="#tab_3">Интернет магазины</button>
	</div>
	<div class="tabs__content">
		<div class="tabs__item" id="tab_1">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit ea fugit ratione non
				voluptatibus, expedita error velit perferendis voluptas alias illo ipsa natus suscipit incidunt
				maxime. Accusantium, incidunt minus?</p>

			<a href="#">Проекты</a>
		</div>
		<div class="tabs__item" id="tab_2">
			<p></p>
		</div>
		<div class="tabs__item" id="tab_3">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit ea fugit ratione non
				voluptatibus, expedita error velit perferendis voluptas alias illo ipsa natus suscipit incidunt
				maxime. Accusantium, incidunt minus?</p>
		</div>
	</div>
	`)
}

createTabs()


const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(tabOpen)

function tabOpen(item) {
	item.addEventListener('click', function () {
		let currentBtn = item
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active')
			})
			tabsItems.forEach(function (item) {
				item.classList.remove('active')
			})
			currentBtn.classList.add('active')
			currentTab.classList.add('active')

		}
	})

}

document.querySelector('.tabs__nav-btn').click()
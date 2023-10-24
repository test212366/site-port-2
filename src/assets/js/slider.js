new Swiper('.image-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	grabCursor: true,
	slidesPerView: 6,
	spaceBetween: 1,
	loop: true,

	autoplay: {
		delay: 3000,
	},
	speed: 600,
})
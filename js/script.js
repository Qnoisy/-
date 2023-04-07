const clientsSwiper = new Swiper('.clients-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	spaceBetween: 32,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.clients__button.swiper-button-next',
	  prevEl: '.clients__button.swiper-button-prev',
	},
  
	breakpoints: {
		500: { slidesPerView: 1 },
		900: { slidesPerView: 2 },
		1300: { slidesPerView: 3 },
	  },
  });

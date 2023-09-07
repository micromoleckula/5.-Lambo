const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      0: {slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween:20,
      }
    }
});
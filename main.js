var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 3000, // Adjust the speed to make the transition smooth
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

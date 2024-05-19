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

// menu

const menuIcon = document.getElementById("icon");
const slideMenu = document.getElementById("slide-menu");
const closeIcon = document.getElementById("close-icon");
const links = document.querySelectorAll(".nav-link");

menuIcon.onclick = () => {
  slideMenu.classList.add("active");
};
closeIcon.onclick = () => {
  slideMenu.classList.remove("active");
};
links.forEach((ele) => {
  ele.onclick = () => {
    slideMenu.classList.remove("active");
  };
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 3000, // Adjust the speed to make the transition smooth
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
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

let scroll_top = document.querySelector(".scroll_top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scroll_top.style.opacity = "1";
  } else {
    scroll_top.style.opacity = "0";
  }
});

scroll_top.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let isChecked = document.querySelector(
  ".top-check-hostile .switch input"
).checked;

const priceElements = document.querySelectorAll(".plan-price span");

function updatePrices() {
  priceElements.forEach((span) => {
    const originalPrice = span.getAttribute("data-original-price");
    if (isChecked) {
      const currentPrice = parseFloat(originalPrice) * 3;
      span.textContent = currentPrice.toFixed(2);
    } else {
      span.textContent = originalPrice;
    }
  });
}

priceElements.forEach((span) => {
  if (!span.hasAttribute("data-original-price")) {
    span.setAttribute("data-original-price", span.textContent);
  }
});

document
  .querySelector(".top-check-hostile .switch input")
  .addEventListener("change", function () {
    isChecked = this.checked;
    updatePrices();
  });

// Initialize Preloader
(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  }, calcvulateNavbarTop());

})(jQuery);

// Change Navbar Top
window.addEventListener("scroll", calcvulateNavbarTop);

function calcvulateNavbarTop () {
  const navbar = document.getElementById("navbar");
  const alert = document.getElementById("alert");
  const alertHeight = alert.clientHeight;
  const closeBtn = document.getElementById("closeAlert");
  if (alertHeight - window.scrollY >= 0) {
    navbar.style.top =  `${alertHeight - window.scrollY}px`;
  } else {
    navbar.style.top = 0;
  }
  closeBtn.addEventListener("click", () => {
    navbar.style.top = 0;
  });
}

// Initialize the Features Swiper
const swiperFeatures = new Swiper(".swiper-features", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,  // Time between slides (in milliseconds)
    disableOnInteraction: false,  // Keeps autoplay running after user interaction
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize the Reviews Swiper
const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,  // Time between slides (in milliseconds)
    disableOnInteraction: false,  // Keeps autoplay running after user interaction
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize the Best Fares Swiper
const swiperBestFares = new Swiper(".swiper-best-fares", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,  // Time between slides (in milliseconds)
    disableOnInteraction: false,  // Keeps autoplay running after user interaction
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize WOW Animated
new WOW().init();

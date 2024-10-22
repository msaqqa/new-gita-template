// // Initialize Preloader
// (function ($) {
//   "use strict";
//   $(window).on(
//     "load",
//     function () {
//       $("#preloader").fadeOut("slow", function () {
//         $(this).remove();
//       });
//     },
//     calcvulateNavbarTop()
//   );
// })(jQuery);

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease"; // Adjust duration as needed
    preloader.style.opacity = 0;

    // Wait for the transition to complete before removing the element
    setTimeout(() => {
      preloader.remove();
    }, 500); // Match this duration with the CSS transition
  }

  calcvulateNavbarTop(); // Call your function directly
});

// Change Navbar Top
window.addEventListener("scroll", calcvulateNavbarTop);

function calcvulateNavbarTop() {
  const navbar = document.getElementById("navbar");
  const alert = document.getElementById("alert");
  const alertHeight = alert.clientHeight;
  const closeBtn = document.getElementById("closeAlert");
  if (alertHeight - window.scrollY >= 0) {
    navbar.style.top = `${alertHeight - window.scrollY}px`;
  } else {
    navbar.style.top = 0;
  }
  closeBtn.addEventListener("click", () => {
    navbar.style.top = 0;
  });
}

// Toggle Classes for Collapse in the Search Page
document.addEventListener("DOMContentLoaded", function () {
  const collapseEditSearch = document.getElementById("collapseEditSearch");
  const collapseFilter = document.getElementById("collapseFilter");
  // Apply fade class only on mobile (smaller than 768px)
  function applyFadeOnMobile() {
    if (collapseEditSearch && collapseFilter) {
      if (window.innerWidth < 768) {
        collapseEditSearch.classList.remove("show");
        collapseEditSearch.classList.add("fade");

        collapseFilter.classList.remove("show");
        collapseFilter.classList.add("fade");
      } else {
        collapseEditSearch.classList.remove("fade");
        collapseEditSearch.classList.add("show");

        collapseFilter.classList.remove("fade");
        collapseFilter.classList.add("show");
      }
    }
    return;
  }

  // Call the function when the page loads
  applyFadeOnMobile();

  // Handle window resize
  window.addEventListener("resize", applyFadeOnMobile);
});

// Initialize WOW Animated
new WOW().init();

// Initialize the Features Swiper
const swiperFeatures = new Swiper(".swiper-features", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // Time between slides (in milliseconds)
    disableOnInteraction: false, // Keeps autoplay running after user interaction
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
    delay: 3000, // Time between slides (in milliseconds)
    disableOnInteraction: false, // Keeps autoplay running after user interaction
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

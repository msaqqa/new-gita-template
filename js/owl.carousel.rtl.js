$(document).ready(function () {
  // Initialize the Main Carousel with RTL enabled
  var mainCarousel = $(".main-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    rtl: true, // Enable RTL
    lazyLoad: true,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-arrow-right"></i>',
      '<i class="fa-solid fa-arrow-left-long fa-xl"></i>',
    ], // Adjusted icons for RTL
  });

  // Initialize the Gallery Slider
  var galleryCarousel = $(".gallery-carousel").owlCarousel({
    items: 6,
    margin: 20,
    loop: true,
    nav: true,
    center: true,
    rtl: true, // Enable RTL
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
  });

  // Sync the gallery with the main carousel
  galleryCarousel.find(".gallery-item img").on("click", function () {
    var index = $(this).closest(".owl-item").index();
    mainCarousel.trigger("to.owl.carousel", [index, 300]);
  });

  // Sync main carousel with gallery
  mainCarousel.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    galleryCarousel.trigger("to.owl.carousel", [currentIndex, 300]);
  });
});

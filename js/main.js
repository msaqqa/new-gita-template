// Initialize Preloader
$(window).on("load", function () {
  $("#preloader").fadeOut("slow", function () {
    $(this).remove();
  });
});

// Change Navbar Top
$(window).addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const alert = document.getElementById("alert");
  const alertHeight = alert.clientHeight;
  const closeBtn = document.getElementById("closeAlert");
  if (window.scrollY > alertHeight) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = `${alertHeight}px`;
  }
  closeBtn.addEventListener("click", () => {
    navbar.style.top = 0;
  });
});

// Initialize the first Swiper

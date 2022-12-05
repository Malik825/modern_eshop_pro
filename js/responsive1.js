const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  562: {
    items: 1,
  },

  960: {
    items: 3,
  },

  1000: {
    items: 3,
  },
};
const responsive2 = {
  0: {
    items: 1,
  },
  320: {
    items: 2,
  },
  562: {
    items: 2,
  },
  768: {
    items: 2,
  },
  960: {
    items: 1,
  },

  1000: {
    items: 1,
  },
};
$(function () {
  $("#testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1200,
    loop: true,
    delay: 10,
    margin: 20,
    items: 1,
    nav: true,
    dots: false,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    autoplayHoverPause: true,
  });
  $("#blog_slider").owlCarousel({
    autoplay: true,
    smartSpeed: 1200,
    loop: true,
    delay: 10,

    items: 3,
    nav: true,
    dots: false,
    navText: [
      $(".owl-navigation2 .owl-nav-prev"),
      $(".owl-navigation2 .owl-nav-next"),
    ],

    autoplayHoverPause: true,
    responsive: responsive,
  });
  $("#product_box").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1200,
    loop: true,
    nav: true,
    dots: false,
    // navText: [$('.owl-navigation .owl-nav-prev4'), $('.owl-navigation .owl-nav-next4')],

    autoplayHoverPause: true,
    responsive2,
  });
  $(this).on("scroll", (e) => {
    $(".categoryInList").removeClass("active");
    $(".navigation").removeClass("active");
    $("body").removeClass("active");
    $(".sub_menu").removeClass("active");
    if ($(this).scrollTop() > 60) {
      $(".main-header").addClass("fixed");
      $(".sliderButtons").css({
        opacity: "0",
        visibility: "hidden",
      });
    } else {
      $(".sliderButtons").css({
        opacity: "1",
        visibility: "visible",
      });
      $(".main-header").removeClass("fixed");
    }
  });
  $(window).on("load", (e) => {
    setTimeout((e) => {
      $(".popUp").addClass("active");
    }, 4000);
  });

  $(".popUpClose").click((e) => {
    $(".popUp").removeClass("active");
  });

  $(".subscribe").click(() => {
    $(".popUp").addClass("active");
  });
  $("#menuHandler").on("click", (e) => {
    e.preventDefault();
    $(".sub_menu").toggleClass("active");
  });
  $("#categoryHandler").on("click", (e) => {
    e.preventDefault();
    $(".categoryInList").toggleClass("active");
  });

  $(".hamburger").on("click", (e) => {
    $(".navigation").addClass("active");
    $(".hamburger").addClass("inActive");
    $("body").addClass("active");
  });
  $(".closeNav").on("click", (e) => {
    $(".hamburger").removeClass("inActive");

    $("body").removeClass("active");
    $(".navigation").removeClass("active");
  });
  $("#cart-icon").on("click", (e) => {
    $(".navigation").removeClass("active");
  });
});

let slides = document.querySelectorAll(".home-slider"),
  slidesLenth = slides.length;
let index = 0;

function next(e) {
  e.preventDefault();
  slides[index].classList.remove("active");
  index = (index + 1) % slidesLenth;
  slides[index].classList.add("active");
}

function prev(e) {
  e.preventDefault();

  slides[index].classList.remove("active");
  index = (index - 1 + slidesLenth) % slides.length;
  slides[index].classList.add("active");
}
document.querySelector(".sliderButtons .prev").addEventListener("click", prev);
document.querySelector(".sliderButtons .next").addEventListener("click", next);

const shoeProductContainer = [...document.querySelectorAll(".shoeBox")];

const shoeNextBtn = [...document.querySelectorAll(".shoeProducts .next-btn")];
const shoePrevBtn = [...document.querySelectorAll(".shoeProducts .prev-btn")];

shoeProductContainer.forEach((item, i) => {
  let shoeContainerDimentions = item.getBoundingClientRect();
  let shoeContainerWidth = shoeContainerDimentions.width;

  shoeNextBtn[i].addEventListener("click", (e) => {
    item.scrollLeft += shoeContainerWidth;
  });
  shoePrevBtn[i].addEventListener("click", (e) => {
    item.scrollLeft -= shoeContainerWidth;
  });
});
const lapProductContainer = [...document.querySelectorAll(".laptopBox")];

const lapNextBtn = [...document.querySelectorAll(".laptopProduct .next-btn")];
const lapPrevBtn = [...document.querySelectorAll(".laptopProduct .prev-btn")];

lapProductContainer.forEach((item, i) => {
  let lapContainerDimentions = item.getBoundingClientRect();
  let lapContainerWidth = lapContainerDimentions.width;

  lapNextBtn[i].addEventListener("click", (e) => {
    item.scrollLeft += lapContainerWidth;
    console.log(item);
  });
  lapPrevBtn[i].addEventListener("click", (e) => {
    item.scrollLeft -= lapContainerWidth;
  });
});

let filterBtn = document.querySelectorAll(".filter-buttons .buttons");
let filterItem = document.querySelectorAll(".allProducts  .product-item");

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");

      if (item.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  };
});

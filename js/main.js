
// product-slider

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    780: {
      items: 2
    },
    900: {
      items: 2
    },
    1000: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
})

// close

// horizon-slider-start
var swiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$('.slider').slick({

  slidesToScroll: 1,
  arrows: false,
  dots: true,
  vertical: true,
  autoplay: true,
  verticalSwiping: true,
  // autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        dots: false
      }
    }
  ]
});



const showButton = document.getElementById('showButton');
const hiddenDiv = document.getElementById('hiddenDiv');
showButton.addEventListener('click', function () {
  hiddenDiv.classList.toggle('hidden');
});

const showButtonOne = document.getElementById('showButtonOne');
const hiddenDivOne = document.getElementById('hiddenDivOne');
showButtonOne.addEventListener('click', function () {
  hiddenDivOne.classList.toggle('hidden');
});

// horizon-slider-close





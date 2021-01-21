const navList = document.querySelector("nav ul");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  navList.classList.toggle("burgerShow");
});

function sizeFunction() {
  var w = window.innerWidth;

  if (w >= 992) {
    navList.classList.remove("burgerShow");
  }
}

// (function () {
//   new InstagramFeed({
//     username: "919youngvet",
//     container: document.getElementById("instagram-feed1"),
//     display_profile: false,
//     display_biography: true,
//     display_gallery: true,
//     display_captions: true,
//     callback: null,
//     styling: true,
//     items: 8,
//     items_per_row: 4,
//     margin: 0.5,
//     lazy_load: true,
//     on_error: console.error,
//   });
// })();

(function ($) {
  $(document).ready(function () {
    var galLink = $("a.gal_link");

    galLink.lightbox();
  });
})(jQuery);

const wrapLight1 = document.getElementById("wrapLight1");
const wrapLight2 = document.getElementById("wrapLight2");
const wrapButton1 = document.getElementById("wrapBtn1");
const wrapButton2 = document.getElementById("wrapBtn2");
const wrapClose1 = document.getElementById("wrapCloseBtn1");
const wrapClose2 = document.getElementById("wrapCloseBtn2");
wrapButton1.addEventListener("click", () => {
  wrapLight1.style.visibility = "visible";
});
wrapButton2.addEventListener("click", () => {
  wrapLight2.style.visibility = "visible";
});

wrapClose1.addEventListener("click", () => {
  wrapLight1.style.visibility = "hidden";
});
wrapClose2.addEventListener("click", () => {
  wrapLight2.style.visibility = "hidden";
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$("#video-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#slider-area").owlCarousel({
  loop: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// const imgs = document.getElementById("imgs");
// const leftBtn = document.getElementById("left");
// const rightBtn = document.getElementById("right");

// const img = document.querySelectorAll("#imgs img");

// let idx = 0;

// let interval = setInterval(run, 2000);

// function run() {
//   idx++;
//   changeImage();
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = img.length - 1;
//   }

//   imgs.style.transform = `translateX(${-500 * idx}px)`;
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

// rightBtn.addEventListener("click", () => {
//   idx++;
//   changeImage();
//   resetInterval();
// });

// leftBtn.addEventListener("click", () => {
//   idx--;
//   changeImage();
//   resetInterval();
// });

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

// (function ($) {
//   $(document).ready(function () {
//     var galLink = $("a.gal_link");

//     galLink.lightbox();
//   });
// })(jQuery);

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

// const pacBtn1 = document.getElementById("pacBtn");
// pacBtn1.style.display = "none";

const wrap = document.getElementById("wrapper");
wrap.style.display = "none";

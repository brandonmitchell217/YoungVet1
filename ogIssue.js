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

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const promoContainer = document.getElementById("promoLandingWrap");
const promoContent = document.querySelectorAll(".promoContentOverlay");

left.addEventListener("mouseenter", () =>
  promoContainer.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  promoContainer.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  promoContainer.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  promoContainer.classList.remove("hover-right")
);

$(function () {
  $(".promoContentOverlay").simpleLightbox();
});

function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "200%",
    triggerElement: ".about-title",
    triggerHook: 0,
  })
    .setPin(".about-title")
    // .addIndicators()
    .addTo(controller);
}
splitScroll();

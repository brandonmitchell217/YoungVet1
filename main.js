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
const container = document.getElementById("promoLandingWrap");
const promoContent = document.querySelectorAll(".promoContentOverlay");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

$(function () {
  $(".promoContentOverlay").simpleLightbox();
});

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

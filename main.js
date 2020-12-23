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

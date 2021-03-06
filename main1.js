gsap.to(".navLogo", {
  duration: 1,
  ease: "power1.in",
  x: 140,
  rotation: 360,
});

gsap.to("#navList", {
  duration: 3,
  ease: "power1.in",
  opacity: 1,
});

gsap.to("#navList li a", {
  duration: 2.5,
  ease: "power1.in",
  textShadow: "0 2px 8px red",
});

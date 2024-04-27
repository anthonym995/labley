// scrolling active
var navbar = document.querySelector(".navbar");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// scroll reveal
const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  reset: true,
});

sr.reveal(".sq1, .sq3", {
  origin: "left",
});
sr.reveal(".sq2, .sq4", {
  origin: "right",
});

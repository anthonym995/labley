
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
    origin: 'top',
    distance: '100px',
    duration: 800,
    reset: true
});

sr.reveal('.sq1', {});
sr.reveal('.sq2', {});
sr.reveal('.sq3', {});
sr.reveal('.sq4', {});
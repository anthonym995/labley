
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
 

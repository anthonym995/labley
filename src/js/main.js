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
  reset: false,
});

// banner
sr.reveal(".freebtn", {
  origin: "bottom",
  distance: "80px",
});

sr.reveal(".trialbtn", {
  origin: "bottom",
  distance: "80px",
  delay: "200",
});

// about section

sr.reveal(".about-lebely", {
  origin: "right",
  distance: "80px",
});

sr.reveal(
  ".client-text, .client-text2, .label-text, .free-trial-text, .price-img, .arrow-img",
  {
    origin: "right",
    distance: "80px",
  }
);
sr.reveal(".read, .register-text, .info-img", {
  origin: "bottom",
  distance: "80px",
});


// client
sr.reveal(".sq1, .sq3", {
  origin: "left",
});
sr.reveal(".sq2, .sq4", {
  origin: "right",
});

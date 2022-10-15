const hamburger = document.querySelectorAll(".hamburger");
const aside = document.querySelector("#side-nav");

hamburger.forEach((icon) => {
  icon.addEventListener("click", () => {
    aside.classList.toggle("show-side-nav");
  });
});

let logo = document.querySelectorAll(".logo");
let slideLeft = document.querySelectorAll(".slideL");
let slideRight = document.querySelectorAll(".slideR");
let drop = document.querySelectorAll(".dropping-in");

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add("flip");
    } else {
      entry.target.classList.remove("flip");
    }
  });
});

logo.forEach((logo) => {
  observer.observe(logo);
});

let slidingLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add("slide-left");
    }
  });
});

slideLeft.forEach((item) => {
  slidingLeft.observe(item);
});

let slidingRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add("slide-right");
    }
  });
});

slideRight.forEach((item) => {
  slidingRight.observe(item);
});

let droppingIn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add("drop-in");
      console.log("slide down worked");
    }
  });
});

drop.forEach((item) => {
  droppingIn.observe(item);
});

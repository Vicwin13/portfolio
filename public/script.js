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
let box = document.querySelectorAll(".box");
let touch = document.querySelector(".touch");
let button = document.querySelector(".butt");

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
    }
  });
});

drop.forEach((item) => {
  droppingIn.observe(item);
});

let flipSideWays = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add("flipSide");
    } else {
      entry.target.classList.remove("flipSide");
    }
  });
});

box.forEach((item) => {
  flipSideWays.observe(item);
});

droppingIn.observe(touch);

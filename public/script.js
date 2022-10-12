const hamburger = document.querySelectorAll(".hamburger");
const aside = document.querySelector("#side-nav");

hamburger.forEach((icon) => {
  icon.addEventListener("click", () => {
    aside.classList.toggle("show-side-nav");
    console.log("worked");
  });
});

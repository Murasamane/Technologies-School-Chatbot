"use script";
const burgerBtn = document.querySelector(".burger--btn");
const mainNavigation = document.querySelector(".main__navigation");
const navigationLinks = document.querySelectorAll(".navigation__anchor");
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  if (window.scrollY > 0) {
    header.classList.add("fixed__header");
    main.classList.add("main__fixed");
  } else {
    header.classList.remove("fixed__header");
    main.classList.remove("main__fixed");
  }
});

burgerBtn.addEventListener("click", () => {
  if (mainNavigation.style.display === "none") {
    mainNavigation.style.display = "block";
  } else {
    mainNavigation.style.display = "none";
  }
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNavigation.style.display = "none";
  });
});

const resetMenu=()=>{
  if(window.innerWidth>=650){
    mainNavigation.style.display="block";
  }else if(window.innerWidth<650){
    mainNavigation.style.display="none";
  }
}
window.addEventListener("resize",resetMenu);
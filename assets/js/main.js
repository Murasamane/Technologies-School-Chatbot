"use script";
const burgerBtn = document.querySelector(".burger--btn");
const mainNavigation = document.querySelector(".main__navigation");
const navigationLinks = document.querySelectorAll(".navigation__anchor");
const chatBtn = document.querySelector(".chatbot__open__btn");
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

const menuEvent = () => {
  mainNavigation.style.display = "none";
};

const menuResizeEvent = () => {
  if (window.innerWidth < 650) {
    navigationLinks.forEach((link) => {
      link.addEventListener("click", menuEvent);
    });
  } else if (window.innerWidth >= 650) {
    navigationLinks.forEach((link) => {
      link.removeEventListener("click", menuEvent);
    });
  }
};

const resetMenu = () => {
  if (window.innerWidth >= 650) {
    mainNavigation.style.display = "block";
    menuResizeEvent();
  } else if (window.innerWidth < 650) {
    mainNavigation.style.display = "none";
    menuResizeEvent();
  }
};
window.addEventListener("resize", resetMenu);

document.querySelectorAll(".chatbot__btns").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(chatBtn);
    if (chatBtn.className == "chatbot__open__btn") {
      chatBtn.className = "chatbot__close__btn";
      document
        .getElementById("chatbotIframe")
        .setAttribute("style", "display: block;");
    } else {
      chatBtn.className = "chatbot__open__btn";
      document
        .getElementById("chatbotIframe")
        .setAttribute("style", "display: none");
    }
  });
});

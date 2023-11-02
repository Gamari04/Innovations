const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});


const questions = document.querySelectorAll(".ask");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    var answer = question.querySelector(".answer");
    answer.classList.toggle("open");
  });
});

const asking = document.querySelectorAll(".why_us");
asking.forEach((posez) => {
  posez.addEventListener("click", function () {
    var thiswhy = posez.querySelector(".thats_why");
    thiswhy.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", { 
  loop: true,// Option loop: true permet au carrousel de boucler infiniment

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const learning = document.querySelectorAll(".learn");
learning.forEach((lire) => {
  lire.addEventListener("click", function () {
    var reading = lire.querySelector(".read");
    reading.classList.toggle("ouvre");
  });
});



const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

// var questions = document.querySelectorAll(".question");
// questions.forEach(function(question) {
//     question.addEventListener("click", function() {
//         // Sélectionner la réponse associée à la question
//         var answer = question.querySelector(".answer");
//         answer.classList.toggle("active");
//     });
// });
const questions = document.querySelectorAll(".ask");
questions.forEach((question) => {
  question.addEventListener("click", function () {
     var answer = question.querySelector(".answer");
    answer.classList.toggle("open");
  });
});
const asking = document.querySelectorAll(".why_us");
asking.forEach((posez)=>{
    posez.addEventListener("click", function () {
      var thiswhy = posez.querySelector(".thats_why");
      thiswhy.classList.toggle("active")
    });
})


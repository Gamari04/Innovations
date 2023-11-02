const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});



// const formulaire = document.getElementById("monFormulaire");
// const inputs = formulaire.querySelectorAll("input");

// formulaire.addEventListener("submit", function(event){
//   event.preventDefault();
//   inputs.forEach((input)=>{
//         if(input.value.trim()===""){
//          input.nextElementSibling.textContent= invalid;
//         }else if(input.dataset.type==='name' && input.value === '/^[a-zA-Z]$/'){
//           input.nextElementSibling.textContent= invalid;
//         }
//         else if(input.dataset.type==='email' && input.value === '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/'){
//           input.nextElementSibling.textContent= invalid;
//         } else if(input.dataset.type==='number' && input.value === '/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/'){
//           input.nextElementSibling.textContent= invalid;
//         }
//         else{
//           input.nextElementSibling.textContent="";
//         }
//     });
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nom").value;
  const email = document.getElementById("Email").value;
  const validet = document.querySelectorAll(".validation");
  var nameRegex = /^[a-zA-Z]+$/;
  console.log(validet);
  console.log(name);
  if (name == "" || name.match(nameRegex)) {
    // validet.forEach((item) => {
    //   item.style.display = "block";
    // });
    alert("enter a valid name");
  }
  
  if(email == " " || email !== "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/"){
    alert("enter a valid email");
  }
  
 
  //  else if (email == " " && email !== "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/")
    
  //  {
  //   // validet.forEach((item) => {
  //   //   item.style.display = "block";
  //   // });
  // } 
});
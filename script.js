const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

const butaoHome = document.querySelector("#home")
const butaoSobre = document.querySelector("#sobre")
const butaoEventos = document.querySelector("#eventos")
const butaoIntegrantes = document.querySelector("#integrantes")
const butaoRevista = document.querySelector("#revista")


// fechar menu quando ao clicar 
document.addEventListener("click", (event) =>{
  if(event.target.className === `fa-solid fa-bars` || event.target.className === `open-menu-btn`){
    return
  } else if(event.target.className != `fa-solid fa-xmark` && window.getComputedStyle(closeBtn).getPropertyValue('display') === "block"){
    closeNav()
  }
})


// show/hide nav menu

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// Close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

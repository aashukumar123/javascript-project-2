const showPopupBtn = document.querySelector(".login-btn");
showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup");
});

const hidePopupBtn =document.querySelector(".form-popup  .close-btn");
  hidePopupBtn.addEventListener("click",()=> showPopupBtn.click());

  const loginSignuplink =document.querySelectorAll(".form-box .bottom-link a");
  const formpopup = document.querySelector(".form-popup");

  loginSignuplink.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
       formpopup.classList[link.id==="signup-link" ? 'add' : 'remove']("show-signup");
    });
  }) ;
  const navbarMenu =document.querySelector(".navbar .links");
  const menuBtn=document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", ()=> {
    navbarMenu.classList.toggle("show-menu");
  });
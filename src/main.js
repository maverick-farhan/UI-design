let body = document.querySelector("body");
let menupage = document.querySelector(".menu-page");
let openMenu = document.querySelector(".open-icon");
let closeMenu = document.querySelector(".close-icon");

openMenu.addEventListener("click", () => {
  menupage.style.display = "block";
  menupage.style.transition = "all .3s ease";
  body.style.overflow = "hidden";
});
closeMenu.addEventListener("click", () => {
  menupage.style.display = "none";
  body.style.overflow = "visible";
});

//Links Section

const a = document.querySelectorAll("#menupage-links li>a");
a.forEach((elem) => {
  elem.addEventListener("click", () => {
    menupage.style.display = "none";
    body.style.overflow = "visible";
    return true;
  });
});

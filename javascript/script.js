//For NavBar Menu
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("ri-close-line");
  navbar.classList.toggle("open");
};

//For When Scrolling Nav Bar/header
let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  if (currentScrollPos === 0) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }

  prevScrollPos = currentScrollPos;
});

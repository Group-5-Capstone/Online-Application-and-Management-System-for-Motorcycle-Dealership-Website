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

//For Password Eye
const eyeIcons = document.querySelectorAll(".eye-icon");
eyeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passwordInput = icon.previousElementSibling;
    const passwordInputType = passwordInput.getAttribute("type");
    if (passwordInputType === "password") {
      passwordInput.setAttribute("type", "text");
      icon.classList.remove("ri-eye-close-line");
      icon.classList.add("ri-eye-line");
    } else {
      passwordInput.setAttribute("type", "password");
      icon.classList.remove("ri-eye-line");
      icon.classList.add("ri-eye-close-line");
    }
    passwordInput.focus();
  });
});


//For Registration Form
function toggleRegisterForm() {
  var content2 = document.getElementById("Content2");
  content2.style.transform = "translateX(0%)"; /* Slide in from the right */
  content2.style.zIndex = 2;
  content2.style.right = "0%";
  content2.style.transition = "all 0.6s ease-in-out";
}

function closeForm() {
  var content2 = document.getElementById("Content2");
  content2.style.transform = "translateX(-100%)";
  content2.style.zIndex = 2;
  content2.style.transition = "all 0.6s ease-in-out";
}

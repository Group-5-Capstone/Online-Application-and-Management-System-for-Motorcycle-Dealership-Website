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

// Add event listener to the "Log In" link
document.getElementById("loginLink").addEventListener("click", showLoginForm);

// Function to show the login form and hide the registration form
function showLoginForm() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var content2 = document.getElementById("Content2");
  content2.style.transform = "translateX(0%)"; /* Slide in from the right */
  content2.style.zIndex = 2;
  content2.style.right = "0%";
  content2.style.transition = "all 0.6s ease-in-out";

  // Show login form
  loginForm.style.transform = "translateX(0%)";
  loginForm.style.display = "flex";
  loginForm.style.zIndex = 3;
  loginForm.style.transition = "all 0.6s ease-in-out";

  // Hide registration form
  registerForm.style.transform = "translateX(0%)";
  registerForm.style.zIndex = 2;
  registerForm.style.transition = "all 0.6s ease-in-out";
  registerForm.style.display = "none";
}

// Function to show the registration form and hide the login form
function showRegistrationForm() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  // Show registration form
  registerForm.style.display = "flex";
  registerForm.style.zIndex = 3;
  registerForm.style.transition = "all 0.6s ease-in-out";
  registerForm.style.transform = "translateX(0%)";

  // Hide login form
  loginForm.style.zIndex = 2;
  loginForm.style.transition = "all 0.6s ease-in-out";
  loginForm.style.transform = "translateX(0%)";
  loginForm.style.display = "none";
}

// JavaScript to handle the dropdown functionality and icon change
const toggleBtn = document.getElementById("toggleBtn");
const navLinks = document.getElementById("navLinks");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  // Toggle the class to change the icon
  if (navLinks.classList.contains("show")) {
    toggleIcon.classList.remove("ri-arrow-down-s-fill");
    toggleIcon.classList.add("ri-arrow-up-s-fill");
  } else {
    toggleIcon.classList.remove("ri-arrow-up-s-fill");
    toggleIcon.classList.add("ri-arrow-down-s-fill");
  }
});

function toggleProductSection() {
  // Get the element with the id "Content3"
  const content3Section = document.getElementById("Content3");

  // Scroll to the "Content3" section when the button is clicked
  content3Section.scrollIntoView({ behavior: "smooth", block: "start" });
}
// Add a click event listener to the "Read more" button
const readMoreButton = document.getElementById("readMoreButton");
readMoreButton.addEventListener("click", toggleProductSection);

function toggleMapSection() {
  // Get the element with the id "Content3"
  const content3Section = document.getElementById("Content3");

  // Scroll to the "Content3" section when the button is clicked
  content3Section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleInquireSection() {
  // Get the element with the id "Content3"
  const content3Section = document.getElementById("Content2");

  // Scroll to the "Content3" section when the button is clicked
  content3Section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleApplicationSection() {
  // Get the element with the id "Content3"
  const content3Section = document.getElementById("Content3");

  // Scroll to the "Content3" section when the button is clicked
  content3Section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleTopSection() {
  // Get the element with the id "Content3"
  const content3Section = document.getElementById("Content1");

  // Scroll to the "Content3" section when the button is clicked
  content3Section.scrollIntoView({ behavior: "smooth", block: "start" });
}




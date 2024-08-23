// Title: index.html
// Author: Jocelyn Dupuis
// Date: 07/05/2024
// Description: Script for Dark Mode


// Dark Mode Variables
const darkMode = document.getElementById("darkMode");
const themeText = document.getElementById("themeText");
const currentTheme = localStorage.getItem("theme");

// Sets theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeText.innerText = currentTheme === "dark" ? "Light Mode" : "Dark Mode"; 
}

// Dark Mode Toggle Event
darkMode.addEventListener("click", function (event) {
  event.preventDefault();

  let theme = "light";
  if (document.documentElement.getAttribute("data-theme") === "light") {
    theme = "dark";
  }

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Toggles text inside <span>
  themeText.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
});

// Hamburger Menu
document.querySelector(".ham").addEventListener("click", function () {
  const menuItems = document.querySelector("nav .right");
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
});
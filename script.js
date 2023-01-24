// START DEVELOPING THE MENU PAGE AND HAMBURGER MENU
const openMenu = document.querySelector("#nav-bar");
const closeMenu = document.querySelector("#cancel");
const panel = document.querySelector("#panel");

document.getElementById("cancel").style.display = "none";
document.getElementById("nav-list").style.display = "none";
document.getElementById("panel").style.padding = "0"

openMenu.addEventListener("click", function () {
  document.getElementById("panel").style.width = "275px";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("nav-list").style.display = "block";
  document.getElementById("panel").style.padding = "34px 27px 0 32px";
})

closeMenu.addEventListener("click", function () {
  document.getElementById("panel").style.width = "0"
  document.getElementById("cancel").style.display = "none";
  document.getElementById("nav-list").style.display = "none";
  document.getElementById("panel").style.padding = "0";
})
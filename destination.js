function myFunction(x) {
  if (x.matches) {
    document.getElementById("nav-bar").style.display = "block";
  } else {
    document.getElementById("nav-bar").style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 767px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes


// START DEVELOPING THE MENU PAGE AND HAMBURGER MENU
const openMenu = document.querySelector("#nav-bar");
const closeMenu = document.querySelector("#cancel");
const panel = document.querySelector("#panel");

document.getElementById("cancel").style.display = "none";
document.getElementById("nav-list").style.display = "none";
document.getElementById("panel").style.padding = "0";

openMenu.addEventListener("click", function () {
  document.getElementById("nav-bar").style.display = "none";
  document.getElementById("panel").style.width = "275px";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("header").style.width = "50%";
  document.getElementById("cancel").style.margin = "0";
  document.getElementById("nav-list").style.display = "block";
  document.getElementById("panel").style.padding = "50px 27px 0 32px";
});

closeMenu.addEventListener("click", function () {
  document.getElementById("panel").style.width = "0";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("nav-list").style.display = "none";
  document.getElementById("panel").style.padding = "0";
  document.getElementById("nav-bar").style.display = "block";
  document.getElementById("header").style.width = "100%";
});

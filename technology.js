// function myFunction(x) {
//   if (x.matches) {
//     document.getElementById("engineer-nav-bar").style.display = "block";
//   } else {
//     document.getElementById("engineer-nav-bar").style.display = "none";
//   }
// }

// var x = window.matchMedia("(max-width: 767px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes

const openMenuVehicle = document.querySelector("#vehicle-nav-bar");
const openMenuSpaceport = document.querySelector("#spaceport-nav-bar");
const openMenuCapsule = document.querySelector("#capsule-nav-bar");
const closeMenuVehicle = document.querySelector("#vehicle-cancel");
const closeMenuSpaceport = document.querySelector("#spaceport-cancel");
const closeMenuCapsule = document.querySelector("#capsule-cancel");

document.getElementById("vehicle-panel").style.padding = "0";
document.getElementById("spaceport-panel").style.padding = "0";
document.getElementById("capsule-panel").style.padding = "0";
document.getElementById("vehicle-cancel").style.display = "none";
document.getElementById("spaceport-cancel").style.display = "none";
document.getElementById("capsule-cancel").style.display = "none";
document.getElementById("vehicle-nav-list").style.display = "none";
document.getElementById("spaceport-nav-list").style.display = "none";
document.getElementById("capsule-nav-list").style.display = "none";

openMenuVehicle.addEventListener("click", function () {
  document.getElementById("vehicle-nav-bar").style.display = "none";
  document.getElementById("vehicle-panel").style.width = "275px";
  document.getElementById("vehicle-cancel").style.display = "block";
  document.getElementById("vehicle-nav-list").style.display = "block";
  document.getElementById("vehicle-panel").style.padding = "75px 25px 0 25px";
});

closeMenuVehicle.addEventListener("click", function () {
  document.getElementById("vehicle-nav-bar").style.display = "block";
  document.getElementById("vehicle-panel").style.width = "0";
  document.getElementById("vehicle-panel").style.padding = "0";
  document.getElementById("vehicle-cancel").style.display = "none";
  document.getElementById("vehicle-nav-list").style.display = "none";
});

openMenuSpaceport.addEventListener("click", function () {
  document.getElementById("spaceport-nav-bar").style.display = "none";
  document.getElementById("spaceport-panel").style.width = "275px";
  document.getElementById("spaceport-cancel").style.display = "block";
  document.getElementById("spaceport-nav-list").style.display = "block";
  document.getElementById("spaceport-panel").style.padding =
    "75px 25px 0 25px";
});

closeMenuSpaceport.addEventListener("click", function () {
  document.getElementById("spaceport-nav-bar").style.display = "block";
  document.getElementById("spaceport-panel").style.width = "0";
  document.getElementById("spaceport-panel").style.padding = "0";
  document.getElementById("spaceport-nav-list").style.display = "none";
  document.getElementById("spaceport-cancel").style.display = "none";
});

openMenuCapsule.addEventListener("click", function () {
  document.getElementById("capsule-nav-bar").style.display = "none";
  document.getElementById("capsule-panel").style.width = "275px";
  document.getElementById("capsule-cancel").style.display = "block";
  document.getElementById("capsule-nav-list").style.display = "block";
  document.getElementById("capsule-panel").style.padding = "75px 25px 0 25px";
});

closeMenuCapsule.addEventListener("click", function () {
  document.getElementById("capsule-nav-bar").style.display = "block";
  document.getElementById("capsule-panel").style.width = "0";
  document.getElementById("capsule-nav-list").style.display = "none";
  document.getElementById("capsule-panel").style.padding = "0";
  document.getElementById("capsule-cancel").style.display = "none";
});
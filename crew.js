function myFunction(x) {
  if (x.matches) {
    document.getElementById("engineer-nav-bar").style.display = "block";
  } else {
    document.getElementById("engineer-nav-bar").style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 767px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes



const openMenuCommander = document.querySelector("#commander-nav-bar");
const openMenuSpecialist = document.querySelector("#specialist-nav-bar");
const openMenuPilot = document.querySelector("#pilot-nav-bar");
const openMenuEngineer = document.querySelector("#engineer-nav-bar");
const closeMenuCommander = document.querySelector("#commander-cancel");
const closeMenuSpecialist = document.querySelector("#specialist-cancel");
const closeMenuPilot = document.querySelector("#pilot-cancel");
const closeMenuEngineer = document.querySelector("#engineer-cancel");

document.getElementById("commander-panel").style.padding = "0";
document.getElementById("specialist-panel").style.padding = "0";
document.getElementById("pilot-panel").style.padding = "0";
document.getElementById("engineer-panel").style.padding = "0";
document.getElementById("commander-cancel").style.display = "none";
document.getElementById("specialist-cancel").style.display = "none";
document.getElementById("pilot-cancel").style.display = "none";
document.getElementById("engineer-cancel").style.display = "none";
document.getElementById("commander-nav-list").style.display = "none";
document.getElementById("specialist-nav-list").style.display = "none";
document.getElementById("pilot-nav-list").style.display = "none";
document.getElementById("engineer-nav-list").style.display = "none";

openMenuCommander.addEventListener("click", function () {
  document.getElementById("commander-nav-bar").style.display = "none";
  document.getElementById("commander-panel").style.width = "275px";
  document.getElementById("commander-cancel").style.display = "block";
  document.getElementById("commander-nav-list").style.display = "block";
  document.getElementById("commander-panel").style.padding = "75px 25px 0 25px";
});

closeMenuCommander.addEventListener("click", function () {
  document.getElementById("commander-nav-bar").style.display = "block";
  document.getElementById("commander-panel").style.width = "0";
  document.getElementById("commander-panel").style.padding = "0";
  document.getElementById("commander-cancel").style.display = "none";
  document.getElementById("commander-nav-list").style.display = "none";
});

openMenuSpecialist.addEventListener("click", function () {
  document.getElementById("specialist-nav-bar").style.display = "none";
  document.getElementById("specialist-panel").style.width = "275px";
  document.getElementById("specialist-cancel").style.display = "block";
  document.getElementById("specialist-nav-list").style.display = "block";
  document.getElementById("specialist-panel").style.padding = "75px 25px 0 25px";
});

closeMenuSpecialist.addEventListener("click", function () {
  document.getElementById("specialist-nav-bar").style.display = "block";
  document.getElementById("specialist-panel").style.width = "0";
  document.getElementById("specialist-panel").style.padding = "0";
  document.getElementById("specialist-nav-list").style.display = "none";
  document.getElementById("specialist-cancel").style.display = "none";
});

openMenuPilot.addEventListener("click", function () {
  document.getElementById("pilot-nav-bar").style.display = "none";
  document.getElementById("pilot-panel").style.width = "275px";
  document.getElementById("pilot-cancel").style.display = "block";
  document.getElementById("pilot-nav-list").style.display = "block";
  document.getElementById("pilot-panel").style.padding = "75px 25px 0 25px";
});

closeMenuPilot.addEventListener("click", function () {
  document.getElementById("pilot-nav-bar").style.display = "block";
  document.getElementById("pilot-panel").style.width = "0";
  document.getElementById("pilot-nav-list").style.display = "none";
  document.getElementById("pilot-panel").style.padding = "0";
  document.getElementById("pilot-cancel").style.display = "none";
});

openMenuEngineer.addEventListener("click", function () {
  document.getElementById("engineer-nav-bar").style.display = "none";
  document.getElementById("engineer-panel").style.width = "275px";
  document.getElementById("engineer-nav-list").style.display = "block";
  document.getElementById("engineer-cancel").style.display = "block";
  document.getElementById("engineer-panel").style.padding = "75px 25px 0 25px";
});

closeMenuEngineer.addEventListener("click", function () {
  document.getElementById("engineer-nav-bar").style.display = "block";
  document.getElementById("engineer-panel").style.width = "0";
  document.getElementById("engineer-panel").style.padding = "0";
  document.getElementById("engineer-nav-list").style.display = "none";
  document.getElementById("engineer-cancel").style.display = "none";
});

// Use the DOM to get buttons from work Page
var gwc = document.getElementById("gwc");
var penncs = document.getElementById("penncs");
var cobare = document.getElementById("cobare");
var thirtyFourth = document.getElementById("thirtyFourth");

// Get the Modal
var gwcModal = document.getElementById("gwcModal");
var penncsModal = document.getElementById("penncsModal");
var cobareModal = document.getElementById("cobareModal");
var thirtyFourthModal = document.getElementById("thirtyFourthModal");
var modal = document.getElementsByClassName("modal");

// get variable for close button
var gwcSpan = document.getElementsByClassName("close")[0];
var penncsSpan = document.getElementsByClassName("close")[1];
var cobareSpan = document.getElementsByClassName("close")[2];
var thirtyfourthSpan = document.getElementsByClassName("close")[3];

//Add event listener for each variables
gwc.addEventListener("click", gwcDisplay);
penncs.addEventListener("click", penncsDisplay);
cobare.addEventListener("click", cobareDisplay);
thirtyFourth.addEventListener("click", thirtyFourthDisplay);

gwcSpan.addEventListener("click", closeBox);
penncsSpan.addEventListener("click", closeBox);
cobareSpan.addEventListener("click", closeBox);
thirtyfourthSpan.addEventListener("click", closeBox);

//Functions which display text box
function gwcDisplay() {
  gwcModal.style.display = "block";
}

function penncsDisplay() {
  penncsModal.style.display = "block";
}

function cobareDisplay() {
  cobareModal.style.display = "block";
}

function thirtyFourthDisplay() {
  thirtyFourthModal.style.display = "block";
}

function closeBox() {
  gwcModal.style.display = "none";
  penncsModal.style.display = "none";
  cobareModal.style.display = "none";
  thirtyFourthModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gwcModal) {
    gwcModal.style.display = "none";
  }
  if (event.target == penncsModal) {
    penncsModal.style.display = "none";
  }
  if (event.target == cobareModal) {
    cobareModal.style.display = "none";
  }
  if (event.target == thirtyFourthModal) {
    thirtyFourthModal.style.display = "none";
  }
};

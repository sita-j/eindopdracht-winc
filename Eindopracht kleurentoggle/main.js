// Get button
let getBody = document.querySelector("body");
const hamburgermenu = document.querySelector(".hamburgermenu");
let getColormenu = document.querySelector(".colormenu");

// Add event listeners
hamburgermenu.addEventListener("click", () => {
  getColormenu.style.visibility = "visible";
});

// Get buttons
const btnGrey = document.querySelector("#btn-grey");
const btnRed = document.querySelector("#btn-red");
const btnOrange = document.querySelector("#btn-orange");
const btnPurple = document.querySelector("#btn-purple");
const btnGreen = document.querySelector("#btn-green");

// Style background color met addEventListener
btnGrey.addEventListener("click", () => {
  getBody.style.backgroundColor = "grey";
  getColormenu.style.visibility = "hidden";
});

btnRed.addEventListener("click", () => {
  getBody.style.backgroundColor = "red";
  getColormenu.style.visibility = "hidden";
});

btnOrange.addEventListener("click", () => {
  getBody.style.backgroundColor = "orange";
  getColormenu.style.visibility = "hidden";
});

btnPurple.addEventListener("click", () => {
  getBody.style.backgroundColor = "purple";
  getColormenu.style.visibility = "hidden";
});

btnGreen.addEventListener("click", () => {
  getBody.style.backgroundColor = "green";
  getColormenu.style.visibility = "hidden";
});

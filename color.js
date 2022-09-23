"use strict";
const colors = [
  "#fff",
  "#f4f2f2",
  "#000",
  "rgba(133, 122, 200)",
  "#f15025",
  "red",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   let para = document.createElement("p");
  //   let text = document.createTextNode("sorrow");
  //   para.appendChild(text);
  //   document.body.appendChild(para);
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});
function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}

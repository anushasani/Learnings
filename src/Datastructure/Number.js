// <!-- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n-->
var divNode = document.getElementById("UserId");
let label = document.createElement("label");
label.innerHTML = "Enter Any Number :";
divNode.appendChild(label);

let inputNode = document.createElement("input");
inputNode.setAttribute("id", "inputId");

divNode.appendChild(inputNode);
let input = document.getElementById("inputId");

let sumNode = document.createElement("button");
sumNode.setAttribute("Id", "sumId");
sumNode.innerText = "Sum";
sumNode.style.marginLeft = "20px";
let productNode = document.createElement("button");
productNode.setAttribute("Id", "productId");
productNode.innerText = "Product";
productNode.style.marginLeft = "20px";
divNode.appendChild(sumNode);
divNode.appendChild(productNode);

document.addEventListener("DOMContentLoaded", function () {
  let sumButton = document.getElementById("sumId");
  let productButton = document.getElementById("productId");

  sumButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    sumOfNum(inputValue);
  });
  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    productOfNum(inputValue);
  });
});

function sumOfNum(inputValue) {
  let sum = 0;

  for (let i = 0; i <= inputValue; i++) {
    sum += i;
  }
  let pNode = document.createElement("p");

  pNode.innerHTML = "Total sum is " + sum;
  divNode.appendChild(pNode);
}
function productOfNum(inputValue) {
  let product = 1;
  for (let i = 1; i <= inputValue; i++) {
    product *= i;
  }
  let pNode = document.createElement("p");

  pNode.innerHTML = "Total product is " + product;
  divNode.appendChild(pNode);
}

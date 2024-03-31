// <!-- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n-->
var divNode = document.getElementById("UserId");
let label = document.createElement("label");
label.innerHTML = "Enter Any Number :";
divNode.appendChild(label);

let inputNode = document.createElement("input");
inputNode.setAttribute("id", "inputId");

divNode.appendChild(inputNode);
let input = document.getElementById("inputId");

let productNode = document.createElement("button");
productNode.setAttribute("Id", "productId");
productNode.innerText = "Multiplication";
productNode.style.marginLeft = "20px";

divNode.appendChild(productNode);

document.addEventListener("DOMContentLoaded", function () {
  let productButton = document.getElementById("productId");

  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    productOfNum(inputValue);
  });
});

function productOfNum(inputValue) {
  let product = [];
  for (let i = 1; i <= 12; i++) {
    product.push(inputValue * i);
  }
  let pNode = document.createElement("p");

  pNode.innerHTML = "Total product is " + product;
  divNode.appendChild(pNode);
}

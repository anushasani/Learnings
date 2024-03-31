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
productNode.innerText = "PrimeNumber";
productNode.style.marginLeft = "20px";

divNode.appendChild(productNode);

document.addEventListener("DOMContentLoaded", function () {
  let productButton = document.getElementById("productId");

  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    primeNum(inputValue);
  });
});

function primeNum(inputValue) {
  let result = [];
  for (let i = 0; i < inputValue; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  pNode = document.createElement("p");
  pNode.innerHTML = "The list of prime Number is:" + result;
  divNode.appendChild(pNode);
  function isPrime(n) {
    if (n === 0 || n === 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

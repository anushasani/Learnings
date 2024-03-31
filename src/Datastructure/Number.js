// <!-- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n-->
var divNode = document.getElementById("UserId");
let label = document.createElement("label");
label.innerHTML = "Enter Any Number :";
divNode.appendChild(label);

let inputNode = document.createElement("input");
inputNode.setAttribute("id", "inputId");

divNode.appendChild(inputNode);
let input = document.getElementById("inputId");

let enterNode = document.createElement("button");
enterNode.setAttribute("id", "Enter");
enterNode.innerText = "Submit";
divNode.appendChild(enterNode);

let enterButton = document.getElementById("Enter");

enterButton.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("inputId");
  var inputValue = input.value;
  console.log("inputValue", inputValue);
  sumOfNum(inputValue);
});

function sumOfNum(inputValue) {
  let sum = 0;
  let totalsum = [];
  for (let i = 1; i <= inputValue; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      totalsum.push(i);
    }
  }
  let sumValue = document.createElement("p");
  sumValue.innerHTML = totalsum.join(",") + " " + " Total is :" + sum;

  divNode.appendChild(sumValue);
}

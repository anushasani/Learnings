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
productNode.innerText = "guessedNumber";
productNode.style.marginLeft = "20px";

divNode.appendChild(productNode);

document.addEventListener("DOMContentLoaded", function () {
  let productButton = document.getElementById("productId");

  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    guessGame(inputValue);
  });
});
function guessGame(inputValue) {
  const secretNumber = Math.floor(Math.random() * 100);
  console.log("guess", secretNumber);
  let tries = 0;

  do {
    if (!isNaN(inputValue)) {
      tries++;
      console.log("tries", tries);
      if (inputValue > secretNumber) {
        let pNode = document.createElement("p");
        pNode.innerHTML = "Nummber is larger than the secret number";
        divNode.appendChild(pNode);
      } else if (inputValue < secretNumber) {
        let pNode = document.createElement("p");
        pNode.innerHTML = "Nummber is Smaller than the secret number";
        divNode.appendChild(pNode);
      } else {
        let pNode = document.createElement("p");
        pNode.innerHTML =
          "Congratulations! You guessed the secret number in " +
          tries +
          " tries.";
        divNode.appendChild(pNode);
      }
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  } while (secretNumber === inputValue);
}

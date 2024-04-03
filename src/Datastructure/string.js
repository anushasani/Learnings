// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].

function listOfDigit(str) {
  let numberString = str.toString();
  let name = [];
  for (let i = 0; i < numberString.length; i++) {
    name.push(parseInt(numberString[i]));
  }
  return name;
}

let str = 2342;

console.log("list of digit", listOfDigit(str));

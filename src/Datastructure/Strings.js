// Write a function that returns the elements on odd positions in a list
function returnOdd(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

const arr = [45, 76, 2, 1, 4, 5, 35, 45];

console.log("Odd Number in the list are : " + returnOdd(arr));

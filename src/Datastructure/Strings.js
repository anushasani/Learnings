// Write a function that computes the running total of a list

function sumOfList(arr) {
  let sum = 0;
  let runningTotalList = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    runningTotalList.push(sum);
  }
  return runningTotalList;
}

const arr = [1, 2, 3, 4, 5];

console.log("Total of a List is : ", sumOfList(arr));

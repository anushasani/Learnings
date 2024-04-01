// Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumOfArray(arr) {
  let i = 0;
  let sum = 0;

  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumOfArray(arr, sum = 0) {
  if (arr.length === sum) {
    return 0;
  }

  return arr[sum] + sumOfArray(arr, sum + 1);
}

let arr = [1, 2, 3, 4, 5];
console.log("Total sum is ", sumOfArray(arr));

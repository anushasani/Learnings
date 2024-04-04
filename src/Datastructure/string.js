// Function to print factorial of a number with interative approch :

function factorilNumber(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log("Factorial of is : ", factorilNumber(5));

// step 1 : res = 1

// i=1  res = res * 1;

// i=2 res = res * 2;
// .
// .
// .
// .
// i =5

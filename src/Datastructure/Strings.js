// Factorial of a number ;

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("factorial of n is :", factorial(3));

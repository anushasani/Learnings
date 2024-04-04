// Find the Number Of Trailing Zeros In A Factorial

function traileringZeros(n) {
  let res = 0;

  let powerOf5 = 5;

  while (n >= powerOf5) {
    res = res + Math.floor(n / powerOf5);
    powerOf5 = powerOf5 * 5;
  }

  return res;
}

console.log("trailingZeros of n number is  :  ", traileringZeros(200));

// step 1 :  5!  = 120 is 1

// n/5^1 + n/5^2 + n/5^3 .....

// finding  number of digist in  a givenn Number

// example : n = 34567

//Step 1 : n > 0; it is to check number present
//step 2 :  n/10
//step3 : count ++

function countDigit(n) {
  let count = 0;
  n = parseInt(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let n = 23468; //5
console.log("The number in the digit k : ", countDigit(n));

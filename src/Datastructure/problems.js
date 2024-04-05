//Brutfore code for Highest Common factor or Greatest Common divisor :

// function HCF(a, b) {
//   let min = 0;

//   if (a < b) {
//     min = a;
//   } else {
//     min = b;
//   }

//   for (let i = min; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       return i;
//     }
//   }
// }

// console.log("Heighest Common factor", HCF(20, 15));
//Eculied Algorithm says : find a largest number and
// replace the LN with  difference between smallest and largest
//Repeat step 1 and step 2 till both numbers are equal
//Return any one number

function HCFByEuclids(a, b) {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a !== 0) {
    return a;
  } else {
    return b;
  }
}

console.log("Highest Comman factor by eculids: ", HCFByEuclids(45, 78));

//12 8
//4  8
//4 0

// a/2 or b/2 > a%2 or b%2
//  log(min(a,b))

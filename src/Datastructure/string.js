function fibnaccis(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibnaccis(n - 1) + fibnaccis(n - 2);
  }
}

function fibonaccisSequence(nTerms) {
  let sequence = [];
  for (let i = 0; i < nTerms; i++) {
    sequence.push(fibnaccis(i));
  }
  return sequence;
}

const nTerms = 10;

console.log(fibonaccisSequence(nTerms));

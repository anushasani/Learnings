function practice(num) {
  for (const n of num) {
    console.log(n, num[n]);
  }
}

const num = [11, 22, 33, 44, 55];

console.log(practice(num));

function sortedOrNot(a, n) {
  let i = 0;
  while (i < n) {
    if (a[i] <= a[i + 1]) {
      i++;
    } else {
      return -1;
    }
  }
  return 1;
}

let arr = [1, 2, 4, 3, 5];
let n = 5;
console.log(sortedOrNot(arr, n));

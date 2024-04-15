function productArray(arr) {
  let value = 1;
  const map = new Map();
  for (let i = 1; i < arr.length; i++) {
    value *= arr[i];
    map.set(i, value);
  }

  return res;
}

const arr = [1, 2, 3, 4];
console.log(productArray(arr));

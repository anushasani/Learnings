//Sorting Algorithm :

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5

const sortingAlgorithm = (array, n) => {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }

  return array;
};
let n = 6;
const array = [13, 46, 24, 52, 20, 9];

console.log(sortingAlgorithm(array, n));

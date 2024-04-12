//Brut force approch of two sum

// function twoSum1(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// const res1 = twoSum1([2, 7, 11, 15], 9);
// console.log(res1);

function twoSum2(arr, target) {
  const map = new Map();
  for (const index in nums) {
    const pairedValue = target - nums[index];
    if (map.has(pairedValue)) return [map.get(pairedValue), index];
    map.set(nums[index], index);
  }
}

const res2 = twoSum2([2, 7, 11, 15], 9);
console.log(res2);

/// nums = [2, 7, 11, 15] target = 9;

// {
//"2" : 0,                       obj[9-7],1 => [0,1]
//

// }

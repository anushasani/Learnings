//finding Sum of two in Arrys :

function sumOfTwo(nums, target) {
  const map = new Map();

  for (const index in nums) {
    const pairValue = target - nums[index];
    if (map.has(pairValue)) return [map.get(pairValue), index];

    map.set(nums[index], index);
  }
}
const nums = [2, 7, 11, 15];
const target = 9;

console.log(sumOfTwo(nums, target));

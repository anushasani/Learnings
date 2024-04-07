//finding Sum of two in Arrys :

function dupblicateContains(nums) {
  const map = new Map();

  for (const index in nums) {
    if (map.has(nums[index])) return true;
    map.set(nums[index]);
  }
  return false;
}
const nums = [1, 2, 3];

console.log(dupblicateContainsSet(nums));

function dupblicateContainsSet(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}

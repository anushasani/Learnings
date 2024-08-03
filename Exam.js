var findShortestSubArray = function (nums) {
  let maxFrequence = 0;
  let freq = {};
  let first = {};
  let shortestSubArray = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
      first[num] = i;
    }
    console.log("first", first);
    if (freq[num] > maxFrequence) {
      maxFrequence = freq[num];
      shortestSubArray = i - first[num] + 1;
    }

    if (freq[num] === maxFrequence) {
      shortestSubArray = Math.min(shortestSubArray, i - first[num] + 1);
    }
  }

  return shortestSubArray;
};
let nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums));

// two sum

function twoSum(arr, target) {
  const map = new Map();

  for (const i in arr) {
    const pairedValue = target - arr[i];
    if (map.has(pairedValue)) return [i, map.get(pairedValue)];
    map.set(arr[i], i);
  }
}

const res1 = twoSum([2, 7, 11, 15], 9);
console.log(res1);

/// nums = [2, 7, 11, 15] target = 9;

// {
//"2" : 0,                       obj[9-7],1 => [0,1]
//

// }

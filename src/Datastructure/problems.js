//merge interval

function mergeInterval(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let pair = intervals[0];
  const result = [];

  for (const i of intervals) {
    if (pair[1] >= i[0]) {
      pair[1] = Math.max(pair[1], i[1]);
    } else {
      result.push(pair);
      pair = i;
    }
  }

  result.push(pair);
  return result;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(mergeInterval(intervals));

// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

function concatenateLists(list1, list2) {
  let temp = [];
  for (let i = 0; i < list1.length; i++) {
    temp.push(list1[i].concat(list2[i]));
  }
  return temp;
}

function listsSplit(list1, list2) {
  return list1.concat(list2);
}

const list1 = ["a", "b", "c"];
const list2 = [1, 2, 3];
console.log(concatenateLists(list1, list2));
console.log(listsSplit(list1, list2));

// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

//  One Method
function concatenateLists(list1, list2) {
  let temp = [];
  for (let i = 0; i < list1.length; i++) {
    temp.push(list1[i]);
    temp.push(list2[i]);
  }
  return temp;
}

const list1 = ["a", "b", "c"];
const list2 = [1, 2, 3];
console.log(concatenateLists(list1, list2));
console.log(splitMethod(list1, list2));

function splitMethod(list1, list2) {
  let l = list1.length + list2.length;

  let r = [];
  let k = 0;
  let a = 0;

  for (let i = 0; i < l; i++) {
    if (i % 2 === 0) {
      r[i] = list1[k++];
    } else {
      r[i] = list2[a++];
    }
  }
  return r;
}

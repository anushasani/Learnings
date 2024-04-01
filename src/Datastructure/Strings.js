function reverseList() {
  let length = element.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const temp = element[i];
    element[i] = element[length - 1 - i];
    element[length - 1 - i] = temp;
  }
}

const element = [78, 34, 67, 23, 90, 69];
reverseList(element);
console.log("Reverse List : " + element);

let element = [78, 34, 67, 23, 90, 69];

function largestNumber() {
  let Largest = element[0];
  for (let i = 0; i < element.length; i++) {
    if (element[i] > Largest) {
      Largest = element[i];
      console.log(Largest + "is the largest");
    }
  }
  return Largest;
}
largestNumber();

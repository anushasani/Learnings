// Write a function that checks whether an element occurs in a list

function elementOccurs(arr, selectedValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === selectedValue) {
      return console.log("yes it is present in the element");
    }
  }
  return console.log("No it is present in the element");
}

const arr = [34, 5, 7, 2, 59, 4, 2, 3];
elementOccurs(arr, 10);

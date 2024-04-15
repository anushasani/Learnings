// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

function rotateRight(k) {
  let arr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift(i));
  }
  console.log(arr);
}

rotateRight(7);

function rotateleft(k) {
  let arr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop(i));
  }
  console.log(arr);
}

rotateleft(1);

// Using splice method

function rotateUseSplice(k) {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let deletedArray = arr.splice(0, k);

  console.log("arr", arr);

  for (let i = 0; i < deletedArray.length; i++) {
    arr.splice(arr.length, 0, deletedArray[i]);
  }
  console.log(arr);
}
rotateUseSplice(3);

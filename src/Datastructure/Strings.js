// Write a function that tests whether a string is a palindrome.'
function palindrome(str) {
  let start = 0;
  let clearStrings = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let end = clearStrings.length - 1;
  while (start < end) {
    if (clearStrings[start] !== clearStrings[end]) {
      return "Not a palindrome";
    }
    start++;
    end--;
  }
  return "palindrome";
}

let str = "A man, a plan, a canal, Panama";

palindrome(str);
console.log("The given string is :", palindrome(str));

//Check  whether it is a Anagram.

const Anagram = function (s, t) {
  //   s = s.toLowerCase().split("").sort().join("");
  //   t = t.toLowerCase().split("").sort().join("");
  //   return s === t;

  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

let s = "anagram";
let t = "nagaram";
console.log(Anagram(s, t));

// rat tar

// {
// r :1
//a :1
//t :1
// }

// {
// r :1
//a :1
//t :1
// }

/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

declare a function with a string parameter
the function should take the argument and return the argument but reversed

edge case :
base case :
recursive step :
recursive base :
***********************************************************************/
// return str.split('').reverse().join("")

function reverse(...str) {
  return str.reverse().join("")

}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

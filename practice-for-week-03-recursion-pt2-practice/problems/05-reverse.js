/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

declare a function with a string parameter
the function should take the argument and return the argument but reversed

***********************************************************************/
//-------------------------------------------------
// return str.split('').reverse().join("")
//------------------------ for loop ---------------
//  let arr = []
//  for(let i = str.length; i >= 0; i--) {
//   let letter = str[i - 1]
//   arr.push(letter)
//  }
//  return arr.join('')
//-------------------------------------------------
function reverse(str) {


}

//-------- default parameter ----------------------
// function reverse(str,arr = []) {
//   let array = str.split('')
//   if(str.length == 0) {
//     return arr.join('')
//   } else {
//     arr.unshift(array[0])
//     str = array.slice(1)
//     return reverse(str.join(''),arr)
//   }
// }
// ----------------------------------------------------
//------------------------------------------------------
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

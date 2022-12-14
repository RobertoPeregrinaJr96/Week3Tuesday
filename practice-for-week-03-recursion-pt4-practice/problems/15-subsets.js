/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:


Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// const subsets = (arr) => {
//   // Your code here
//   if(arr[0] === undefined) return []
//   if(arr[0]){

//     return [arr[0], ...subsets(arr.slice(1))]
//   }
// }
//-------------------------------------------------------
const subsets = (arr) => {
  if (arr.length === 0) return [[]];
  let last = arr[arr.length - 1];
  let subs = subsets(arr.slice(0, arr.length - 1));
  let newSubs = subs.map((sub) => {
      return sub.concat(last);
  });
  return subs.concat(newSubs);
}
//--------------------------------------------------------------------------------
// const subsets = (arr) => {
//   if (arr.length === 0) return [[]];

//   let current = arr.pop();

//   let x = subsets(arr);

//   let subArray = [];

//   for (let i = 0; i < x.length; i++) {
//     subArray.push([...x[i], current]);
//   }

//   return x.concat(subArray);
// };
//-------------------------------------------------------
console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}

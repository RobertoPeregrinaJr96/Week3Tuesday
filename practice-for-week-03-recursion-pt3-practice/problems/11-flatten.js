/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.



***********************************************************************/

function flatten(arr) {
  // Your code here
  debugger
  if(arr[0] === undefined) return []
  if (arr.length === 0) return []

  if (arr.length === 1) {
    return arr
  }
  if (arr.length === 2) {
    let arr2 = arr[1]
    //return typeof arr2 === "object" ? [arr[0], ...flatten(arr2)] : [arr[0], arr2]
    return Array.isArray(arr2) ? [arr[0], ...flatten(arr2)] : [arr[0], arr2]
  }
}
//////---------------------------------------------------------------------------
// function flatten(arr, newArr = []) {
//   if (arr.length === 0) return arr;

//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       return flatten(item, newArr)
//     }
//     else {
//       newArr.push(item)
//     }
//   })
//   return newArr
// }
//--------------------------------------------------------------------
// function flatten(arr, newArr = []) {
//   if (!arr.length) return newArr

//   for (let i in arr) {
//     let el = arr[i]

//     if (Array.isArray(el)) {
//       flatten(el, newArr)
//     } else {
//       newArr.push(el)
//     }
//   }
//   return newArr
// };

//--------------------------------------------------------------------
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;

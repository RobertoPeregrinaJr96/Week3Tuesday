/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!


***********************************************************************/


//--------------- using for loop --------------------------------------------
// for(let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// return total
//--------------------------------------------------------------------------
// function sumArray(arr) {
//   if (arr.length === 0) return 0
//   let first = sumArray(arr.slice(1))
//   let sec = arr[0]
//   return first + sec
// }


//---------------------------------------------------
// function sumArray(arr, sum = 0) {
//   if (arr.length === 0) return sum
//   sum += arr.pop()
//   return sumArray(arr, sum)
// }
//---------------------------------------------------------
// function sumArray(arr) {

//    return sumArray(arr.slice(1)) + arr[0]
// }
//--------------------------------------------------------
//
//-------- default parameter ----------------------
// function sumArray(arr, sum = 0) {
//       if(arr.length === null) {
//         return []
//       } else if (arr.length === 0) {
//         return sum
//       } else if (arr.length >= 1){
//         sum += arr[0]
//         arr.shift()
//         return sumArray(arr, sum)
//       }
// }


console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}

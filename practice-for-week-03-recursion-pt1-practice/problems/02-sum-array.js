/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!


***********************************************************************/
/*
declare a function with the parameter of arr(array)
the function should take the argument and add every element together
return the sum

base case : arr === []
recursive step : arr[0] -> add the element : arr.shift() -> closer to base case
recursive case : sumArray(arr.shift())
*/
//--------------- using for loop --------------------------------------------
// for(let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// return total
//--------------------------------------------------------------------------
//000000000000000000000000000000000000000000000000000000000 semi-done
function sumArray(arr) {
  let total = 0;
  if (!arr.length) {
    return total
  } else {
    let sum = arr[0] + sumArray(arr.slice(1))
    total += sum
  }
  return total

  // arr.shift()
  // //console.log(arr)
  // sumArray(arr)

  // //console.log(total)

}

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

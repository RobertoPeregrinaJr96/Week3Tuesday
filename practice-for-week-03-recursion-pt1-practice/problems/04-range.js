/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.


***********************************************************************/
/*
declare a function with the parameters of start(number) and end(number)
the function should take the arguments and return an array of elements that are iterations of *end* that begins at *start*
if the *start* point is greater then the *end* point then return []


edge case : start > end -> return empty array
base case : start === end
recursive step : (start < end) -> conditional that enables to move forward;
newArray.push(start) -> the act to reach the base case
recursive case : range(start + 1, end) -> keeps iterating until it meets the base case
*/
//-------------for loop --------------------------------------
//
// let newArray = []
// if(start > end) return newArray
//   for(let i = start ; i < end; i++) {
//     newArray.push(i)
//   }
//   return newArray
//------------------------------------------------------------
//00000000000000000000000000000000000000000000000 semi-done
let newArray = [];
function range(start, end) {
    if(start > end) {
      return []
    }
    if(start === end) {
      return newArray
    } else {
      newArray.push(start)
      //console.log(newArray)
      range(start + 1, end)
    }
    return newArray
}


//console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
//console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

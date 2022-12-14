/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.


***********************************************************************/

function range(start, end) {

  if (end < start) return []
  if (start === end - 1) return [start]

  return [start, ...range(start + 1,end)]
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
//-------------for loop --------------------------------------
//
// let newArray = []
// if(start > end) return newArray
//   for(let i = start ; i < end; i++) {
//     newArray.push(i)
//   }
//   return newArray
//------------------------------------------------------------
//-------- default parameter ----------------------
// const range = (start,end, ran = []) => {
//   if(start > end ) {
//     return []
//   }
//   if (start === end ){
//     return ran
//   } else if (start <= end) {
//     ran.push(start)
//     start++
//     return range(start,end,ran)
//   }
//   return ran
// }
// //---------------------------------
// function range(start, end) {
//   if (start > end) {
//     return [];
//   }
//   if (start === end) {
//     return [];
//   }

//   return [start, ...range(start+1, end)];
// }
//---------------------------------------


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

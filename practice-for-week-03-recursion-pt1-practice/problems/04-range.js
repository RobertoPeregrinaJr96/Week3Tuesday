/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.


***********************************************************************/

//-------------for loop --------------------------------------
//
// let newArray = []
// if(start > end) return newArray
//   for(let i = start ; i < end; i++) {
//     newArray.push(i)
//   }
//   return newArray
//------------------------------------------------------------

const range = (start,end, ran = []) => {

  if(start > end ) {
    return []
  }
  if (start === end ){
    return ran
  } else if (start <= end) {
    ran.push(start)
    start++
    return range(start,end,ran)
  }
  return ran
}


console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.


***********************************************************************/
/*
declare a fucntion sumToN with the parameter of n
the function should take the argument of n and return the sum of all the iterations from 0
if there is a falsy value present then return null

edge case : if n < 0
base case : if n === 0
recursive step : n - 1 : total + 1
resursive base : sumToN(n - 1)
*/
// -----------Using a for loop to see how it should iterate ----------
// if (n < 0) {
//   return null
// }
// for (let i = 0; i <= n; i++) {
//   total += i
// }
//return total
//--------------------------------------------------------------------

let total = 0;
function sumToN(n) {
 // console.log(n)
  if(n < 0){
    return null
  } else if (n === 0) {
    console.log(total)
    return total
  } else {
    total += n
    sumToN(n - 1)
    //console.log(n)

  }
}

//console.log(sumToN(5)) // returns 15
//console.log(sumToN(1))  // returns 1
//console.log(sumToN(9))  // returns 45
//console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

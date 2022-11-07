/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.


***********************************************************************/
/*
declare a fucntion sumToN with the parameter of n
the function should take the argument of n and return the sum of all the iterations from 0
if there is a falsy value present then return null
*/
// -----------Using a for loop to see how it should iterate ----------

//--------------------------------------------------------------------


function sumToN(n, sum = 0) {
  if(n <= sum) {
    return null
  }
  if (n === 0) {
    return sum
  } else {
    sum += n
    return sumToN(n - 1, sum)
  }
  return sum
}

console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

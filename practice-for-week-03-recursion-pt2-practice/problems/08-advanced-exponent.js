/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

***********************************************************************/
//function advancedExponent(b, n) {
//   if (n === 0) return 1;
//   if (n === 1) return b;

//   if (n > 1 && n % 2 === 0) return advancedExponent(b, n / 2) ** 2
//   if (n > 1 && n % 2 !== 0) return b * (advancedExponent(b, (n - 1) / 2) ** 2)
// }
//}
//---------------------------------------------------------------------------
// function advancedExponent(b, n) {
//   if (n === 0) return 1;
//   if (n === 1) return b;

//   if (n % 2 === 0) {
//     let even = advancedExponent(b, n / 2);
//     return even * even;
//   } else {
//     let odd = advancedExponent(b, (n - 1) / 2);
//     return b * odd * odd;
//   }
// }

//--------------------------------------------------------------------------
// function exponent(num, power, sum = 1) {
//   if (power == 0) {
//     return sum
//   } else if (power < 0) {
//     sum *= (1 / num)
//     return exponent(num, power + 1, sum)
//   } else if (power > 0) {
//     sum *= num
//     return exponent(num, power - 1, sum)
//   }
// }

// function advancedExponent(b, n, num = 0) {

//   if (n === 0) return 1
//   else if (n === 1) return b

//   if (n % 2 === 0) {
//     num = exponent(b, n / 2)
//     return (num * num)
//   } else {
//     num = exponent(b, (n - 1) / 2)
//     //console.log(num)

//     return ((num * num) * b)
//   }
// }
// //------------------------------------------------------------
function advancedExponent(b, n, sum = 1) {
  if (n === 0) {
    return sum
  }
  if (n >= 1) {
    return advancedExponent(b, n - 1, sum) ** 2
    return sum
  }
}
//-----------------------------------------------------------
//   if (n > 21 && n % 2 === 0) {

//     return (num * num) / b
//   } else {
//     return 'odd'
//   }
// }
//-------------------------------------------------
//console.log(advancedExponent(2, 100001))
//console.log(advancedExponent(2, 100000))
console.log(advancedExponent(2, 0)); // 1
console.log(advancedExponent(2, 1)); // 2
console.log(advancedExponent(2, 2)); // 4
console.log(advancedExponent(2, 3)); // 8
console.log(advancedExponent(2, 4)); // 16 //2 * 2 * 2 * 2
console.log(advancedExponent(2, 5)); // 32 //2 * 2 * 2 * 2 * 2
console.log(advancedExponent(2, 6)); // 64
console.log(advancedExponent(2, 7)); // 128
console.log(advancedExponent(2, 8)); // 256
console.log(advancedExponent(2, 9)); // 512
console.log(advancedExponent(2, 10)); // 1024
console.log(advancedExponent(2, 11)); // 2048
console.log(advancedExponent(2, 12)); // 4096
//For each of the examples above, figure out how many times your code should
//be recursively calling `advancedExponent`. Find a way to visually see how many
//times `advancedExponent` is being recursively called.
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = advancedExponent;
} catch (e) {
  module.exports = null;
}

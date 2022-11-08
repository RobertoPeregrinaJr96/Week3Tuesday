/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

***********************************************************************/

// function exponent(num, power, i = 0) {
//     if (power < 0) {
//         num = 1 / num;
//         power = -power
//     }
//     if (power === 1) return num
//     if (i + 2 < power) {
//         num = num * num

//     }
//     if (i + 2 === power) return num * num
//     i++
//     return exponent(num, power, i)










// }


//--------------default parameter-----------------------
function exponent(num, power, sum = 1) {
    if (power == 0) {
        return sum
    } else if (power < 0) {
        sum *= (1 / num)
        return exponent(num,power + 1, sum)
    } else if (power > 0){
        sum *= num
        return exponent(num, power - 1, sum)
    }
}


console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}

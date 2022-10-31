/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.


***********************************************************************/
/*
declare a function with the parameters of flavor(array) and favorite(string)
the function should take the argument and return and returns a Boolean value
if the string is present in the array then return True
if the string is not present in the array then return False

edge case : flavors === []
base case :
recursive step : falvors[0] === favorite -> compare elements
falvors.shift() -> to remove the first element to move forward
recusive base : iceCreamShop(falvors, favorite)
*/

function iceCreamShop(flavors, favorite) {
    if(flavors.length === 0) {
      return false
    } else if(flavors[0].includes(favorite)){
      return true
    }
    return iceCreamShop(flavors.slice(1), favorite)

}

//console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
console.log(iceCreamShop([], 'honey lavender')); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}

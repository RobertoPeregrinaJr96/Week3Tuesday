/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.


edge case :
base case :
recursive step :
recursive base :

***********************************************************************/
//  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX NOT DONE

function addToTwelve(arr) {
    if(arr[0] + arr[1] === 12){
      return true
    } else {
      console.log(arr.slice(1))
      addToTwelve(arr.slice(1))
    }
}

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

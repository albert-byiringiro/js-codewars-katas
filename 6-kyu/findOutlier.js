/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

*/

// declare a function called findOutlier with array parameter
function findOutlier(arr) {
    // declare variable that will store both odd and even numbers
    let odds = [];
    let evens = [];

    // declare a for loop go through the array
    for (let i = 0; i < arr.length; i++) {
        // append each element to the corresponding variable above
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }
    // check if conditions if length equal to one for each variable and return that variable
    if (odds.length === 1) {
        return odds[0];
    }
    if (evens.length === 1) {
        return evens[0];
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))


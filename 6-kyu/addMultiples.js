/*

Multiples of 3 or 5
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

*/

let solution = (num) => {
    return num < 1 ? 0 : [...new Array(num).keys()].filter(n => n % 3 === 0 || n % 5 === 0).reduce((a, b) => a + b);
}

console.log(solution(10))
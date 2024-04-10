/*

Kata 2: Sum of the first nth term of Series
Instructions
Your task is to write a function which returns the sum of the following series up to nth term (parameter).

*/

function sumOfNth(n) {
    return [...Array(n)].reduce((sum, curr, i) => sum + 1 / (3 * i + 1), 0).toFixed(2);
}

console.log(sumOfNth(3))


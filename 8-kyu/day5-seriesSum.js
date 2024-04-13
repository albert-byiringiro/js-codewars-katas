/*

Kata 2: Sum of the first nth term of Series
Instructions
Your task is to write a function which returns the sum of the following series up to nth term (parameter).

*/

function sumOfNth(n, sum = 0) {
    return n === 0
        ? sum.toFixed(2)
        : SeriesSum(n - 1, sum += 1 / (3 * n - 2));
}

console.log(sumOfNth(3))


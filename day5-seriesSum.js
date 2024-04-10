/*

Kata 2: Sum of the first nth term of Series
Instructions
Your task is to write a function which returns the sum of the following series up to nth term (parameter).

*/

function sumOfNth(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1);
    }

    return sum.toFixed(2);
}

console.log(sumOfNth(2))


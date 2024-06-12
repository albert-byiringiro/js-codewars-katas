/*8kyu
input: an array of numbers
output: return the sum of all the numbers after squaring them.

steps:
define function
use reduce method to turn sum of the each element squared.

*/


let squareSum = (numbers) => {
    return numbers.reduce((sum, curr) => sum += curr ** 2, 0)
}

let arr = [0, 3, 4, 5];
console.log(squareSum(arr))
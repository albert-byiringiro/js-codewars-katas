/*

Question 1: Sum of Array Elements
Description: Write a function sumArray that takes an array of numbers and returns the sum of all the elements.

*/
function sumArray(arr) {
    // your code here
    return arr.reduce((acc, curr) => acc + curr)
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -5, 7, 3])); // 15

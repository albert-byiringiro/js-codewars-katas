/*

Instructions
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

*/

function lowestSum(arr) {
    let arrOfPositives = arr.sort((a, b) => a - b).filter((num) => num > 0);

    return arrOfPositives[0] + arrOfPositives[1];
}

console.log(lowestSum([19, 5, 42, 2, 77, -1]))
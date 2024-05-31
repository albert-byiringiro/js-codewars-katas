/*
## Moving Zeros To The End

https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript/5ace60f73a33e62d1c00021a

input: array
output: new array with all zeros at the end of the array.
steps:
declare a function zeroMover with paramenter ar
filter for elements which are not zeros
filter for elements which are zeros
return: concat the first filter to the second filter

new thing learnt: filter returns an array of elements that meet the passed condition.
*/

let zeroMover = (arr) => {
    return arr.filter(a => a !== 0).concat(arr.filter(a => a === 0))
}

let arr = [1, 8, 0, 9, 1, 0, 1];

console.log(zeroMover(arr))
/*

JavaScript Array Methods Implementation
In this question, we would like you to demonstrate your understanding of array methods in JavaScript by implementing the following four methods from scratch: myMap, myFilter, myReduce, and myForEach.

Instructions:

You are not allowed to use the built-in map, filter, reduce, or forEach methods in your implementation.
Your implementations should work with arrays of any type.

Each method should take a callback function as its argument and execute that callback function for each element in the array (except for myReduce, which can take an optional second argument as the initial accumulator value).

The methods should return a new array (except for myForEach, which should return undefined).
Array Methods to Implement:

myMap(callbackFn): Creates a new array with the results of calling the provided function on every element in the calling array.
myFilter(callbackFn): Creates a new array with all elements that pass the test implemented by the provided function.

myReduce(callbackFn, initialValue?): Applies the callback function against an accumulator and each element in the array to reduce it to a single value. Optionally, an initialValue can be provided as the initial value of the accumulator.

myForEach(callbackFn): Executes a provided function once for each array element.


Hints:

For myMap, you'll need to create a new array, loop through each element, apply the callback function to each element, and push the result into the new array.

For myFilter, you'll need to create a new array, loop through each element, apply the callback function to test if the element passes the condition, and push the element into the new array if it passes the test.

For myReduce, you'll need to loop through each element, apply the callback function with the accumulator, and update the accumulator accordingly.

For myForEach, you'll need to loop through each element and execute the callback function for each element.


*/


// MY MAP ARRAY METHOD

Array.prototype.myMap = function (callback) {
    let resultArray = [];
    let x = this.length;
    for (let index = 0; index < x; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const originalArray = [1, 2, 3];
const doubleArray = originalArray.myMap((val) => {
    return val * 2;
})

console.log(doubleArray)


// MY ARRAY REDUCE METHOD

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let x = this.length;

    for (let index = initialValue !== undefined ? 0 : 1; index < x; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;
}

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);

console.log(sum);

// MY FOREACH ARRAY METHOD
Array.prototype.myForEach = function (callback) {
    let x = this.length;
    let resultsArray = [];
    for (let index = 0; index < x; index++) {
        callback(this[index], index, this);
    }
}

const array = [1, 2, 3, 4, 5, 6, 6, 7, 8];
array.myForEach((number, index) => {
    console.log(`Element at index ${index}: ${number}`);
})

// create a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith.This time you're going to use forEach inside of mapWith instead of using a for loop.

let map = (array, callback) => {
    let output = [];

    array.forEach(element => {
        output.push(callback(element));
    })

    return output;
}

const multiplyBy2 = input => input * 2;

console.log(map([1, 2, 3], multiplyBy2));
let forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}

let passThrough = num => num;

console.log(forEach([9, 10, 11], passThrough));
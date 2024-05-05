function map(array, callback) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }

    return output;
}

function addTwo(num) {
    return num + 2;
}

console.log(map([1, 2, 3], addTwo));
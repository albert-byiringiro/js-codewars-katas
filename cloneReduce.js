const reduce = (array, callback, initialValue) => {
    let accumulator = initialValue;

    array.forEach(element => {
        accumulator = callback(accumulator, element);
    })
    return accumulator;
}

let sumArr = (a, b) => { return a + b };

console.log(reduce([1, 2, 3], sumArr, 0))
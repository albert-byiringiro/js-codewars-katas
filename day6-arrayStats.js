function arrayStats(arr) {
    let array = [...arr];
    let sum = 0;
    let min = Math.min(...array);
    let max = Math.max(...array);
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let average = sum / array.length

    return {
        "sum": sum,
        "average": average,
        "min": min,
        "max": max,
    };
}

console.log(arrayStats([8, 3, 2, 1]))
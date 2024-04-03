function sumPositives(array) {
    return array.filter((n) => n > 0).reduce((sum, pos) => sum += pos, 0);
}

console.log(sumPositives([12, 9, -7, 3]));
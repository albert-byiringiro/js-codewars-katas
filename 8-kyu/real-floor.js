function getRealFloor(n) {
    if (n === 1 || n === 0) {
        return 0
    }

    if (n === 13 || n === 14) {
        return;
    }

    if (n >= 2 && n < 13) {
        return n - 1
    }

    if (n >= 15) {
        return n - 2
    }

    return n

}

console.log(getRealFloor(12))
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(i);
    }
    return sum;
}

console.log(sumTo(6));
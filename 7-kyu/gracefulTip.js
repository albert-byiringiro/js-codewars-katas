const gracefulTip = (bill) => {
    const total = bill * 1.15;
    if (bill < 10) return Math.ceil(total);
    const magnitude = 10 ** Math.floor(Math.log10(total));
    const roundTo = magnitude / 2;

    return Math.ceil(total / roundTo) * roundTo;
}

console.log(gracefulTip(99));
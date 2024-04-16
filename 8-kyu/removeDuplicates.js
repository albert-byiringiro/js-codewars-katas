function remdup(arr) {
    let wdup = [];
    for (let a of arr) {
        if (!wdup.includes(a)) {
            wdup.push(a);
        }
    }
    return wdup;
}

console.log(remdup([1, 1, 2]));


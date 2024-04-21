function rainDrops(n) {
    let result = [];
    if (n % 3 === 0 && n % 5 === 0) {
        result.push("PlingPlong");
    } else if (n % 3 === 0) {
        result.push("Pling");
    } else if (n % 5 === 0) {
        result.push("Plang");
    } else if (n % 7 === 0) {
        result.push("Plong");
    } else {
        return n.toString();
    }

    return result.join("");
}

console.log(rainDrops(15));
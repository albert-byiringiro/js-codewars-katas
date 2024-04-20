function compressString(string) {
    let arrStr = string.toUpperCase().split("");
    let count = 1;
    let compressed = [];

    for (let index = 0; index < arrStr.length; index++) {
        const element = arrStr[index];
        const nextElement = arrStr[index + 1];

        if (element === nextElement) {
            count++;
        } else {
            compressed.push(element, count);
            count = 1;
        }

    }

    return compressed.join("");
}

console.log(compressString("ACABBCCAA"));
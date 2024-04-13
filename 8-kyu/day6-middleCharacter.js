function getMiddle(string) {
    let strHalf = string.length / 2;
    let middle = "";
    if (strHalf % 2 === 0) {
        middle += string.slice(strHalf - 1, strHalf + 1);
    } else {
        middle += string.charAt(strHalf)
    }

    return middle;
}

console.log(getMiddle("Buit"))
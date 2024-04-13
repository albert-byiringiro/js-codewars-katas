function getMiddle(s) {
    let strHalf = s.length / 2;
    let middle = "";
    if (s.length % 2 === 0) {
        middle += s.slice(strHalf - 1, strHalf + 1);
    } else {
        middle += s.charAt(strHalf)
    }

    return middle;
}

console.log(getMiddle("Buit"))
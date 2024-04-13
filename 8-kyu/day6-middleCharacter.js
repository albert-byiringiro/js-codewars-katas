function getMiddle(s) {
    let strHalf = s.length / 2;
    return (s.length % 2 === 0) ? s.slice(strHalf - 1, strHalf + 1) : s.charAt(strHalf);
}

console.log(getMiddle("Buit"))
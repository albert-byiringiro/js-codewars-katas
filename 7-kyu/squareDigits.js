function squareDigits(num) {
    let nString = num.toString();
    let final = [...nString].map((item => Number(item) * item)).join("");
    return parseInt(final)
}

console.log(squareDigits(9119))
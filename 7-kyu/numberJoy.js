// Especially Joyful numbers

function numberJoy(n) {
    let s = n.toString().split("").reduce((s, v) => s + +v, 0);

    let sr = +s.toString().split("").reverse().join("");
    return s * sr == n;
}

console.log(numberJoy(1729));
console.log(numberJoy(1458));

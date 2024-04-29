// Especially Joyful numbers

function numberJoy(n) {
    // your code
    let arr = [...n.toString()];
    let sum = 0;

    for (let num of arr) {
        let na = parseInt(num);
        sum += na;
    }

    let reversed = [...sum.toString()].reverse().join("");

    let rev = parseInt(reversed);

    let checker = sum * rev;

    if (checker === n) {
        return true;
    } else {
        return false;
    }
}

console.log(numberJoy(1729));
console.log(numberJoy(1458));

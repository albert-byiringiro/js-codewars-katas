/*

Instructions
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

*/

function highAndLow(str) {
    // turn the string into a sorted array of numbers
    let strArr = str.split(" ").sort((a, b) => a - b);
    let hLow = Math.max(...strArr) + " " + Math.min(...strArr);

    return hLow;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
/*

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

*/
let missingLetter = (arr) => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    if (/[A-Z]/g.test(arr.join(""))) {
        alphabets = alphabets.toUpperCase();
    }

    let sub = alphabets.slice(alphabets.indexOf(arr[0]), alphabets.indexOf(arr[arr.length - 1]) + 1);

    for (const s of sub) {
        if (!arr.includes(s)) {
            return s;
        }
    }
};



missingLetter(["a", "b", "c", "d", "f"]);
missingLetter(["O", "Q", "R", "S"]);

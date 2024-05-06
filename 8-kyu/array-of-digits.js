// Write a JavaScript program to convert a specified number into an array of digits.

const arrayOfDigits = (num) => {
    // create an empty array for holding the digits to the number;


    return [...`${num}`].map(i => i);
}

console.log(arrayOfDigits(58903))
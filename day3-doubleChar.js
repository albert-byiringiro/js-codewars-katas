/*

Instructions
Given a string, you have to return a string in which each character (case-sensitive) is repeated once

*/

function repeatChar(str) {
    return str.split("").map((char) => char.repeat(2)).join("");

}

console.log(repeatChar("Meek"))
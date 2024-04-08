/*

Instructions
Given a string, you have to return a string in which each character (case-sensitive) is repeated once

*/

function repeatChar(str) {
    let doubleString = '';
    for (let i = 0; i < str.length; i++) {
        doubleString += str[i] + str[i];
    }

    return doubleString;

}

console.log(repeatChar("Meek"))
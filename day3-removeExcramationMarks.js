/*

Instructions
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function RemoveExclamationMarks(str) {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            newString += str[i];
        }
    }

    return newString;
}

console.log(RemoveExclamationMarks("Ru!k!ara!"))
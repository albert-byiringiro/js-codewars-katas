/*

Instructions
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function RemoveExclamationMarks(str) {
    return str.replace(/!/gi, "");
}

console.log(RemoveExclamationMarks("Ru!k!ara!"))
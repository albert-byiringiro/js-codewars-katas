/*

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

*/

function spinWords(string) {
    let str = string.split(" ");
    reversed = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            let rev = str[i].split("").reverse();
            reversed.push(rev.join(""))
        } else {
            reversed.push(str[i]);
        }
    }
    return reversed.join(" ")
}

console.log(spinWords("Hey fellow warriors in Rw"))
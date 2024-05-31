/*
## Simple Pig Latin

https://www.codewars.com/kata/simple-pig-latin/train/javascript/5a7a6ccbfd8c06d91100005c

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched

input: string
output: new string = string with first character as the last word + ay
*/

let pigIt = str => {
    let words = str.split(" ");
    let mod = words.map(word => {
        return word.substr(1) + word.charAt(0) + "ay";
    });

    return mod
}

console.log(pigIt("Nyiramaritete nindirimbo yImpala"))
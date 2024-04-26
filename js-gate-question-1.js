// write a function that takes a sentence and return the longest word reversed, and its first character in capital letters.

// declare a function
function reverseLongestWord(str) {
    let strArr = str.toLowerCase().split(" ");
    let longestWord = "";

    for (let index = 0; index < strArr.length; index++) {
        const current = strArr[index];
        if (current.length > longestWord.length) {
            longestWord = strArr[index];
        }
    }
    let reverseWord = longestWord.split("").reverse();

    reverseWord[0] = reverseWord[0].toUpperCase();

    return reverseWord.join("");
}


console.log(reverseLongestWord("This world is not my home."));
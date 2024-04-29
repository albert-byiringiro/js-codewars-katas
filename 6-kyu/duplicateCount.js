/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

*/

function duplicateCount(text) {
    //...
    let count = {};
    //   split the text into array
    let arr = text.toLowerCase().split("");
    //   declare counting variable
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }

    let duplicateCount = 0;

    for (let [key, value] of Object.entries(count)) {
        if (value > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;

}


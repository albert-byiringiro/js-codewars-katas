/*

Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings. const input = ["Hello123", "World456", "49", "Another789"]; const output = extractWordsAndNumbers(input);  // console.log(output); output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output
*/

// define a function extractorWordsAndNumbers with arr as an parameter
let extractWordsAndNumbers = (arr) => {
    // define let extractor, which is an array that takes in our new splitted array
    let extractor = [];
    // iterate over the array argument with a for..of loop
    for (const element of arr) {
        // define a let matches which takes in array that is divided in matches of any character that is not a number (\D+) and any character that is a number (\d+);
        let matches = element.match(/(\D+)|(\d+)/g);
        // check if the matches is not null or empty
        if (matches) {
            // spread each match element with both non-number and number characters and then push them into the extractor array above
            extractor.push(...matches)
        }
    }

    // return the extractor array
    return extractor;
}

const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

console.log(output)
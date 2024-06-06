/*8kyu
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

# Strategy

input: string
output: the string without 1st and last characters

## Strategy
1. define function with 1 parameter
2. add conditional statement
3. slice the string from the first to the second last


*/

const removeChar = (str) => {
    return str.slice(1, -1);
};

console.log(removeChar('eloquent'))
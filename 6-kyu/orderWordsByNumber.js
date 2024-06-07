

/*6kyu - unfinished
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

#STRATEGY
input: string with words combined with numbers
output: string with words sorted based on the numbers inside them;

Steps
1. define function with parameter
2. if word is empty is empty, return empty string 
3. else,
3.1 split the sentenance into array of words
3.2 sort the words
3.2.1 pass in call back function
3.2.2 return function findNumberInFunction(firstP) - findNumberInFunction(secondP)
return: words are ordered according to the numbers they contain


*/

function order(words) {
    const array = words.split(' ');
    const sortedArray = [];

    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"))







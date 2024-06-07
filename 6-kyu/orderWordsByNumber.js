

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


let order = (words) => {
    if (words.length === 0) return "";
    return words.split(" ").sort((a, b) => findNumberInWord(a) - findNumberInWord(b)).join(" ")
}

const findNumberInWord = (word) => {
    for (const char of word) {
        if (!isNaN(char)) {
            return parseInt(char, 10)
        }
    }

    return -1;
}
console.log(order("is2 Thi1s T4est 3a"))






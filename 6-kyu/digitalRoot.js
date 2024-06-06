/*6kyu
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

# Strategy
input: a number
output: return a single digit under 10, if not sum it until they 

## steps
1. define a function with a parameter
2. make the number a string and then to an array of number
3. check if the number is lest than 10, then return that number
4. else turn the stringified numbers into a int before adding them. use the reduce method to add the digits.
5. return a recursive function of with the sum if they are over 10



*/

const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    } else {
        const sumOfNum = n.toString().split("").reduce((sum, curr) => sum + Number(curr), 0);
        return digitalRoot(sumOfNum)
    }
}

console.log(digitalRoot(942))
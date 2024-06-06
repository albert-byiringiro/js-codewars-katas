/*8kyu
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Strategy: 

input: string, repeatingNumber
output: string repeated by number entered.

## Steps:
define function with 2 parameters
return string with string method repeat passed in the argument of the repeatingNumber parameter.


*/

let repeatStr = (n, s) => {
    return s.repeat(n);
}

console.log(repeatStr(5, "I"))
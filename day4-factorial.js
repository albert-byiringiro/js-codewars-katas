// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

function factorial(n) {
    if (n <= 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)) //120
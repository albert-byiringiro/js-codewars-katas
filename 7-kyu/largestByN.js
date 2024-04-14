/*

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]


*/

function largest(n, array) {
    // Find the n highest elements in a list
    let sorted = array.sort((a, b) => b - a);

    console.log(sorted)
    let largs = [];
    // step 1: 
    for (let i = 0; i < n; i++) {
        largs.push(sorted[i]);
    }

    return largs;
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
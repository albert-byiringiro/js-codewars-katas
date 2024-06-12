/*6kyu
input: 2 arrays
output: return one array with all the duplicates removed.

*/

const arrayDiff = (a, b) => {
    return a.filter(e => !b.includes(e))
}

console.log(arrayDiff([1, 2, 3], [1, 2]))
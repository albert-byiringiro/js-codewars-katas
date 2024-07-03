const smaller = (nums) => {
    return nums.map((num, i) => nums.slice(i).filter(n => n < num).length)
}

console.log(smaller([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 0])); // Output: [1, 1, 0]
console.log(smaller([5, 4, 6, 2, 1])); // Output: [3, 2, 3, 1, 0]

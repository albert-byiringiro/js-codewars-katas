

const smaller = (nums) => {
    // Create a result array of the same length as nums, initialized with 0s
    const result = new Array(nums.length).fill(0);

    // Iterate through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // For each element, count how many of the subsequent elements are smaller
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                result[i]++;
            }
        }
    }

    return result;
    // }

    console.log(smaller([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
    console.log(smaller([1, 2, 0])); // Output: [1, 1, 0]
    console.log(smaller([5, 4, 6, 2, 1])); // Output: [3, 2, 3, 1, 0]

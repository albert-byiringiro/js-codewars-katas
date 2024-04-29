// Sum Numbers
// Sum Numbers
function sum(numbers) {
    "use strict";
    return numbers.reduce((sum, num) => sum += num, 0);
};


sum([8, 9, 2])
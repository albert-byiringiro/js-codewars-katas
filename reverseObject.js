/*

Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

*/
let reverseObject = (obj) => {
    let newObject = {};

    for (const [key, value] of Object.entries(obj)) {
        newObject[value] = key;
    }
    return newObject;
}

const originalObj = { aa: "1", bf: "3", cq: "5" };
const reversedObj = reverseObject(originalObj);
console.log(reversedObj);
/*
Questions: Create a JavaScript function named activeUsers that takes two parameters, an array of users and age. This function should return the new array containing the extracted names of active users older than a given age

Answer:----
------

input: array of users and age
output: new array of extracted names of active users older than a given age.

steps:
define function activeUsers that takes 2 parameters
define new array for the names
iterate over the array
check condition where  active users and greater than passed age.
return extracted names

*/

let activeUsers = (users, age) => {
    const older = [];
    for (const user of users) {
        if (user.isActive && user.age > age) {
            older.push(user.name)
        }
    }

    return older;
}


const users = [
    { id: 1, name: "john", age: 60, isActive: true },
    { id: 2, name: "king", age: 75, isActive: false },
    { id: 3, name: "jasper", age: 20, isActive: true },
    { id: 4, name: "Samy", age: 30, isActive: true },
    { id: 5, name: "Emma", age: 40, isActive: false },
];
console.log(activeUsers(users, 25))

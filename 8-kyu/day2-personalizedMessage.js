/*

Instructions
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

name equals owner => 'Hello boss'
otherwise => 'Hello guest'

*/

function personalizedMessage(name, owner) {
    if (name === owner) {
        return "Hello Boss";
    } else {
        return "Hello Guest";
    }
}

console.log(personalizedMessage("albert", "albert"))
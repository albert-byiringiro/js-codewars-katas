// in checking for equality, objects are compared by their reference.

/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

// define function likes with parameter
// check the length of the array
function likes(arr) {
    let names = arr || [];
    switch (names.length) {
        case 0: return `no one likes this`; break;
        case 1: return `${arr[0]} likes this`; break;
        case 2: return `${arr[0]} and ${arr[1]} like this`; break;
        case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; break;
        default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} like this`; break;
    }
}

console.log(likes(["Peter", "Rukara"]));
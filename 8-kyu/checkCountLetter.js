const strCount = (str, letter) => {
    /*
    input: str, letter to check
    output: count of occurences of the letter in the string
    
    steps:
    declare let count=0
    convert string to an array
    iterate through the array
    check if array contains the letter: if so increment the count other wise don't
    
    */

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count++;
}

console.log(strCount('Hello', 'l'));


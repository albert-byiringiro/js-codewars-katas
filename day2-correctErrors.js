/*

Instructions
When documents (especially pretty old ones written with a typewriter), are digitized character recognition software often make mistakes.

Your task is correct the errors in the digitized text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

function correctErrors(str) {
    let arr = [];
    str.split("").map((char) => {
        if (char === "5") {
            arr.push("S");
        } else if (char === "0") {
            arr.push("O");
        } else if (char === "1") {
            arr.push("I");
        } else {
            arr.push(char);
        }
    });

    return arr.join("")
}

console.log(correctErrors("M00kn155"))
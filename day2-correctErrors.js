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
    return str.replace(/5/g, "S").replace(/0/g, "O").replace(/1/, "I");
}

console.log(correctErrors("M00kn15s"))


/*
THREE THINGS I HAVE LEARNT:
1. I have learnt about the replace method. It takes up 2 arguments which are: the pattern and the replacement. But it replaces the first occurence of the pattern
2. I have learnt about the replaceAll method (which can be used when not using the regex). It takes up 2 arguments which are: the pattern and the replacement. But it replaces the all occurences of the pattern
3. I have learnt about method chaining

*/
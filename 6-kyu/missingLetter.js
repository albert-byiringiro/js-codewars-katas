/*

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

*/
let missingLetter = (arr) => {
    const sub = Array.from({length:arr.length+1}).map((n,i)=>String.fromCharCode(arr[0].charCodeAt()+i));
  
    for(let s of sub){
      if(!arr.includes(s)){
        return s;
      }
    }
    console.log(sub);
  }
  
  missingLetter(["a", "b", "c", "d", "f"]);
  missingLetter(["O", "Q", "R", "S"]);
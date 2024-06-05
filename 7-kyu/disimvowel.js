let disemvowel = (str) => {
    let vowels = new Set(["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"]);
    return newArr = [...str].filter((item) => !vowels.has(item)).join("")
}

console.log(disemvowel("This website is for losers LOL!"));

let getCount = (str) => {
    let vowels = new Set(["a", "e", "o", "u", "i"]);
    return [...str].reduce((count, curr) => vowels.has(curr) ? count + 1 : count, 0);
}
console.log(getCount("abracadabra"))
function reverseLongestWord(sentence) {
    const arrStr = sentence.split(" ");
    const longestWord = arrStr.reduce((longest, current) => longest.length > current.length ? longest : current)

    return arrStr.join(" ").replace(longestWord, longestWord.split("").reverse().join(""))
}

console.log(reverseLongestWord("The quick brown fox jumped over the lazy dog"))
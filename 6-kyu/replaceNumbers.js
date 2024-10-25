function replaceNumbers(text) {
    let result = '';
    for (let char of text) {
        if (char >= '0' && char <= '9') {
            result += '!';
        } else {
            result += char;
        }
    }
    return result;
}
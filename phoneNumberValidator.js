function validatePhoneNumber(string) {
    if (string.length === 10) {
        return true;
    } else if (string[3] === "-" && string[7] === "-") {
        return true;
    } else if (string[3] === " " && string[7] === " ") {
        return true;
    } else {
        return false;
    }
}

validatePhoneNumber("123 456 7890")
validatePhoneNumber("123-45-67890");

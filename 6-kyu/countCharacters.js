const count = (string) => {
    let count = {};

    string.split("").forEach((c) => count[c] ? count[c]++ : count[c] = 1)

    return count;
}
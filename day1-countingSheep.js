function countingSheep(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let sheep = array[i];
        if (typeof sheep === "boolean" && sheep === true) {
            count++;
        }
    }

    return count;
}

let sheep = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true, "true", undefined, null];

console.log(countingSheep(sheep));
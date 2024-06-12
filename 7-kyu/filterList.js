const filter_list = (l) => {
    // Return a new array with the strings filtered out
    return l.filter(f => typeof f === "number");
}


console.log(filter_list([1, 2, 'a', 'b']));
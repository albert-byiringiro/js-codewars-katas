// 8 kyu Sort My Textbooks

function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
}

console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));
console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));
console.log(sorter(['Algebra', 'History', 'Geometry', 'English']));
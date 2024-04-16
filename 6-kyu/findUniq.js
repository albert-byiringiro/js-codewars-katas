function findUniq(array){
    return [...new Set(array)];
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
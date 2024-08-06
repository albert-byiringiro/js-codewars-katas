export function x(n: number) {
    let arr = Array.from({length: n}, () => new Array(n).fill(0));

    for(let i = 0; i < n ; i++){
        arr[i][i] = 1;
        arr[i][n-1-i] = 1;
    }

    return arr;
}
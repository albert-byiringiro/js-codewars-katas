const sumUnique = (arr) => {
    const uniqueElement = new Set(arr)
    let sum = 0;
    
    for(let num of uniqueElement) {
        let count = 0;
        for(let element of arr) {
            if(num === element) {
                count++
            }
        }
        
        if (count === 1) {
            sum += num
        }
    }
    return sum
}

console.log(sumUnique([1,2,3,2,4]))
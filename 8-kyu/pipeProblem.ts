export function pipeFix(numbers: number[]): number[]{
    if(numbers.length ===0) return [];
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const arr = [];
    
    for(let i=min; i<=max; i++){
      arr.push(i)
    }
    
    return arr;
  }
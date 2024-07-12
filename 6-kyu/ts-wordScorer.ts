// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/typescript

export const high = (str: string): string => {
    let score = str.split(" ").map(word => {
      return word.split("").reduce((sum, chara) => sum += chara.charCodeAt(0)-96, 0);
    })
    
    return str.split(" ")[score.indexOf(Math.max(...score))];
  }
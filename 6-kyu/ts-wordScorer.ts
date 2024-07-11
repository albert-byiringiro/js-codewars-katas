// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/typescript

export const high = (str: string): string => {
    let st = str.split(" ").map(s => {
      return [s, s.split("").reduce((o, c) => o+=c.charCodeAt(0)-96, 0)];
    })
    
    let result = st.sort((a, b) => Number(b[1])-Number(a[1]))[0][0];
    return result as string;
  }
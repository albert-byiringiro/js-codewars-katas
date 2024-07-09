// https://www.codewars.com/kata/58223370aef9fc03fd000071

export const dashatize = (num: number) : string => {
    let numero: string[] = Math.abs(num).toString().split('');
    numero = numero.map((n,i)=> parseInt(n)%2!==0?`${i!==0 ? '-' : '' }${n}${i!==numero.length-1?'-':''}`:n)
    return numero.join('').replaceAll('--','-');
  };
  
  dashatize(28369)
  dashatize(5311)
  dashatize(-1)
  
  
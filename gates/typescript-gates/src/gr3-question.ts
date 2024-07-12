/*
debug this:

const setRange = (range: number): number => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

setRange([true, { name: 'Patrick', age: 3}]);


*/ 

interface Person{
    name: string
    age: number
}

const setRange = (range: [boolean, Person]): {x: boolean, y:boolean} => {
    const x = range[0];
    const y = range[1];
  
    return { x, y: y.age > 10 };
  };
  
  setRange([true, { name: 'Patrick', age: 3}]);
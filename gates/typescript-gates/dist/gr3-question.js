"use strict";
/*
debug this:

const setRange = (range: number): number => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

setRange([true, { name: 'Patrick', age: 3}]);


*/
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y: y.age > 10 };
};
setRange([true, { name: 'Patrick', age: 3 }]);

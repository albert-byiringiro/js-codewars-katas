// define a function with 2 parameters
// step 1: json.stringify each array
// step 2: compare each array
// return true if so and false if not

function deepEqualArrays(arr1, arr2){
  let ar1 = JSON.stringify(arr1);
  let ar2 = JSON.stringify(arr2);
  return (ar1 === ar2 ? true : false);
}

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "Ne York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array1, array2));

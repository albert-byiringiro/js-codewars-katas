function sqlJoin(array1, array2) {
    // iterate through the lookup from the second array
    const array2Map = new Map(array2.map(item => [item.id, item]));

    // iterate through the first array
    const result = array1.map(item1 => {
        const item2 = array2Map.get(item1.id)

        if (item2) {
            return { ...item1, ...item2 }
        }
    }).filter(item => item !== undefined)

    return result;
}


// Sample data
const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

const result = sqlJoin(employees, salaries);

console.log(result)
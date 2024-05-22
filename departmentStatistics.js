/*

You are given an array of objects representing employees in a company. Each object contains the following properties: name, age, and department. Your task is to write a function to calculate the average age of each department's employees. The function should return an object containing the department name and the summation of employees' age in each department.


//Example Input:
const employees = [
{ name: 'Alice', age: 30, department: 'Engineering' },
{ name: 'Bob', age: 25, department: 'Marketing' },
{ name: 'Charlie', age: 35, department: 'Engineering' },
{ name: 'David', age: 40, department: 'HR' },
{ name: 'Eve', age: 28, department: 'Marketing' },
];

output:
{
Engineering: 65,
Marketing: 53,
HR: 40
} // Expected output

*/

let departmentAgeStatistics = (employees) => {
    // define the counter checker for the employees
    let departmentSums = {};
    for (const employee of employees) {
        const { age, department } = employee;
        if (!departmentSums[department]) {
            // if there's no such department, add it with age as it's value
            departmentSums[department] = age;
        } else {
            departmentSums[department] += age;
        }
    }

    // create the average of all the age per department
    let departmentAverages = {};
    for (const department in departmentSums) {
        let totalAge = departmentSums[department];
        let numEmployees = employees.filter((emp) => emp.department === department).length;
        departmentAverages[department] = Math.round(totalAge / numEmployees);
    }

    return departmentSums;
}

const employees = [
    { name: 'Alice', age: 30, department: 'Engineering' },
    { name: 'Bob', age: 25, department: 'Marketing' },
    { name: 'Charlie', age: 35, department: 'Engineering' },
    { name: 'David', age: 40, department: 'HR' },
    { name: 'Eve', age: 28, department: 'Marketing' },
];

console.log(departmentAgeStatistics(employees));

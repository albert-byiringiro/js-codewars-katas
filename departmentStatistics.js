function departAge(employees) {
    // define
    let departmentSums = {};
    employees.forEach((employee) => {
        const { age, department } = employee;
        if (!departmentSums[department]) {
            departmentSums[department] = age;
        } else {
            departmentSums[department] += age;
        }
    })

    const departmentAverages = {};
    for (const department in departmentSums) {
        const totalAge = departmentSums[department];
        const numEmployees = employees.filter((emp) => emp.department === department).length;
        departmentAverages[department] = Math.round(totalAge / numEmployees);
    }

    return departmentAverages;
}
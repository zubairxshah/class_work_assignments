
/* Part 3: Array with Types and Indexing - Employee Salaries
You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses. */

type Employee = {
    name: string,
    hoursWorked : number,
    hourlyRate : number,
    salary : number,
}

const employee : Employee[] = [
    {
        name : 'Shah',
        hoursWorked : 25,
        hourlyRate : 700,
        salary : 0
    },
    {
        name : 'Arif',
        hoursWorked : 26,
        hourlyRate : 650,
        salary : 0
    },
    {
        name : 'Murtaza',
        hoursWorked : 18,
        hourlyRate : 800,
        salary : 0
    }

];

function increasedSalary(employee: Employee): number {
    let updatedSalary = employee.hourlyRate * employee.hoursWorked;
    if (employee.hoursWorked >= 20) {
        updatedSalary *= 1.1;
    }
    return updatedSalary;
}

employee.forEach(person => {
    const newSalary = increasedSalary(person);
    person.salary = newSalary; 
    console.log(person);
});

// coding done by M. Zubair Shah
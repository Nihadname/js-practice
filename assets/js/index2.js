class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, salary) {
        super(name, surname);
        this.salary = salary;
    }

}
class Company {
    constructor(name, address, employees) {
        this.name = name;
        this.address = address;
        this.employees = employees;
    }
    addEmployee = function (employee) {
        if (employee) {
            if (this.employees.length >= 3) {
                const len = this.employees.length;
                employee.salary = this.employees[len - 1].salary + this.employees[len - 2].salary + this.employees[len - 3].salary;
            }
            this.employees.push(employee);
        }
    }
    getAllEmployee() {
        this.employees.forEach(employee => {
            console.log(`Name: ${employee.name}, Surname: ${employee.surname}, Salary: ${employee.salary}`);
        });
    }
    }



let employee1 = new Employee("Nihad1", "ibadzade1", 2340);
let employee2 = new Employee("Nihad2", "ibadzade2", 2340);
let employee3 = new Employee("Nihad3", "ibadzade3", 2340);
let employee4 = new Employee("Nihad4", "ibadzade4", 2340)
let Company1 = new Company("P518", "mastaga", [])
Company1.addEmployee(employee1);
Company1.addEmployee(employee2);
Company1.addEmployee(employee3);
Company1.addEmployee(employee4);


Company1.getAllEmployee();


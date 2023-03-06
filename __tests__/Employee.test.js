const Employee = require("../lib/Employee");

const employee = new Employee('Tayo', '2410', 'tayohas@gmail.com');

test('can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Tayo');
    expect(employee.id).toBe('2410');
    expect(employee.email).toBe('tayohas@gmail.com');
});

test('can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Tayo');
});

test('can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('2410');
});

test('can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('tayohas@gmail.com');
});

test('can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
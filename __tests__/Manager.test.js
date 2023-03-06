const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


const manager = new Manager('Tayo', '2410', 'tayohas@gmail.com', '001');

test('can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Tayo');
    expect(manager.id).toBe('2410');
    expect(manager.email).toBe('tayohas@gmail.com');
    expect(manager.officeNumber).toBe('001');
});

test('can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Tayo');
});

test('can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('2410');
});

test('can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('tayohas@gmail.com');
});

test('can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('001');
});

test('can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
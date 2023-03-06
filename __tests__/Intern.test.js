const Intern = require("../lib/Intern");


const intern = new Intern('Tayo', '2410', 'tayohas@gmail.com', 'Toronto');

test('can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Tayo');
    expect(intern.id).toBe('2410');
    expect(intern.email).toBe('tayohas@gmail.com');
    expect(intern.school).toBe('Toronto');
});

test('can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Tayo');
});

test('can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('2410');
});

test('can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('tayohas@gmail.com');
});

test('can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Toronto');
});

test('can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

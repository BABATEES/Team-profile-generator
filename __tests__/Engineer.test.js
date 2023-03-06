const Engineer = require("../lib/Engineer");

const engineer = new Engineer('Tayo', '2410', 'tayohas@gmail.com', 'BABATEES');

test('can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Tayo');
    expect(engineer.id).toBe('2410');
    expect(engineer.email).toBe('tayohas@gmail.com');
    expect(engineer.githubUsername).toBe('BABATEES');
});

test('can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Tayo');
});

test('can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('2410');
});

test('can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('tayohas@gmail.com');
});

test('can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('BABATEES');
});

test('can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

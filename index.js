const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { Interface } = require("node:readline/promises");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Manager name? (Required)',
            
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your manager employee ID (Required)',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your manager email address (Required)',
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your manager office number (Required)',
            
        },
    ]).then(response => {
        console.log(response);
        const manager = new Manager(response.name, response.employeeId, response.email, response.officeNumber);
        employees.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select role you would like to add:',
            choices: ['add an engineer', 'add an intern', 'finished building the Team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    ===============
    Add  New Engineer
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your engineer? (Required)',
            
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your engineer employee ID (Required)',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your engineer email address (Required)',
            
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your engineer Github username. (Required)',
            
        }
    ]).then(response => {
        console.log(response);
        const engineer = new Engineer(response.name, response.employeeId, response.email, response.githubUsername);
        employees.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ===============
    Add New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern? (Required)',
            
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your intern employee ID (Required)',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your intern email address (Required)',
            
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your intern school name. (Required)',
           
        }
    ]).then(response => {
        console.log(response);
        const intern = new Intern(response.name, response.employeeId, response.email, response.school);
        employees.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ===============
    My Team is ready!
    ===============
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
}

promptManager()
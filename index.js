// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')


const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [

    // Project Name
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project"
    },


    // Description

    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project"
    },

    // Table of Contents



    // Installation

    {
        type: 'input',
        name: 'installation',
        message: "What command should be run to install?",
        default: 'npm install'
    },

    // Usage

    {
        type: 'input',
        name: 'usage',
        message: "What does need to know abuut the repo"
    },

    // License

    {
        type: 'list',
        name: 'license',
        message: "What license do you need?",
        choices: [ 'MIT', 'Mozilla-Public' ]
    },

    // Contribution

    {
        type: 'input',
        name: 'contribution',
        message: "What steps does the user need to take to contribute?"
    },

    // Testing

    {
        type: 'input',
        name: 'testing',
        message: "What tests does the user needs to run?",
        default: 'npm test'
    },

    // Questions

    {
        type: 'input',
        name: 'questions',
        message: "For any questions contact:",
        default: "For any questions contact:"
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('ReadMe.md', generateMarkdown({
            ...answers
        }))
    })
}

// Function call to initialize app
init();

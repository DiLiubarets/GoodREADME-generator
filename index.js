const inquirer = require('inquirer')
const fs = require('fs')
const generatorMarkdown = require('./utils/generateMarkdown')


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Project Tittle?",
        name: "projectTittle"
    },
    {
        type: "input",
        message: "Description for you project...",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? (Write NONE if no instructions) ",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "instruction"
    },
    {
        type: "input",
        message: "Select a license",
        choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
   
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
    if (err){
        throw err
    }
})
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(answer => {
const response = generatorMarkdown(answer)

writeToFile('README.md', response)
})
}

// function call to initialize program
init();




// fs.appendFile('README.md', ('# ' + answer.username + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.projectTittle + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.projectDescription + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.installation + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.instruction + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.license + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
// fs.appendFile('README.md', ('# ' + answer.email + '\n')+'\n', err => {
//     if(err){
//         throw err
//     }
// })
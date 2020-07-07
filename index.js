const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Project Tittle?",
        name: "Title"
    },
    {
        type: "input",
        message: "Description of your project?",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? (Write NONE if no instructions) ",
        name: "Install"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select a license",
        name: "License",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "None"
        ]
    },
    {
        type: "input",
        message: "Are there any Contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How to test the app",
        name: "Test"
    },
    {
        type: "input",
        message: "Questions?",
        name: "Questions"
    },
    {
        type: "input",
        message: "Your Github UserName",
        name: "Github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
];

// Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          throw err;
        }
        console.log("ReadMe was created");
      });
    }


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}


// function call to initialize program
init();

// Impost packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Js varbiables
const questions = [
    {
        type:"input",
        message: "Please enter your project name:",
        name:"projectname",
    },
    {
        type:'input',
        message:'Provide a description of your project:',
        name:'description'
    },
    {
        type:"input",
        message:"Please enter installation instrutions:",
        name:"installation"
        },
    {
        type:"input",
        message:"What is the usage information for this application?",
        name:"usageinfo"
    },
    {
        type:"iput",
        message:"Please enter any credits for this application:",
        name:"credit",

    },
    {
        tpye:"list",
        choices: [
            "please contact the author to be added as a collaborator to this project and to discuss contribution guidelines.",
            "No contributions are being acctpted at this time.",
            ],
        message: "Please select an option for contributtion duidelines:",
        name:"contribution",
    },
    {
        type:"input",
        message: "Please enter test infomation:",
        name:"test",
    },
    {
        type:"list",
        choices:[
             "MIT License",
            "GNU GPL v3",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "No license"
            ],
        message: "Please choose a license for your project: ",
        name: "license"
    },
    {
        type:"input",
        message: "Please enter your GitHub user name:",
        name: "github",
    },
    {
        type:"input",
        message: "Please enter your emaill address:",
        name: "email",
    },
    {
        type:"input",
        message: "Please enter your full name for the licence:",
        name: "nameLicense",

    },
    {
        type:"input",
        message: "Please enter the year the appication was created",
        name: "yearCreated",
    }
];

// function to write README file
const promptUser =() => {
    inquirer.prompt([...questions]).then((reponse) => {
        writeToFile("SAMELE_README.md",generateMarkdown(reponse));
    });
};

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  };

// function to initialize app
const init = () => {
    promptUser();
};

// Function call to initialize app
init();

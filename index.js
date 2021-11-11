const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')


// after bringing in the information above, I need to create empty object for data 
// and create functions to begin asking questions
workRoster = [];
function quesInfo (){
    
    inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is your manager's name?"
    },{
        type:"input",
        name:"id",
        message:"What is your manager's Id?"
    },{
        type:"input",
        name:"officeNumber",
        message:"What is your manager's office number?"
    },{
        type:"input",
        name:"email",
        message:"What is your manager's email?"
    },{
        type:"list",
        message:"Do you want to add more members?",
        name:"options",
        choices:["intern", "engineer","none"]
    }
    ]).then((answers)=>{
        let manager = new Manager(
            answers.name,
            answers.id,
            answers.officeNumber,
            answers.email);
        quesInfo.push(manager);
        return addAnother(answers.whatKind)
    })
}; 

const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')


// after bringing in the information above, I need to create empty object for data 
// and create functions to begin asking questions
workRoster = [];
workId = [];
const html = [];
function engQues (){
    
    inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is engineer's github name?"
    },{
        type:"input",
        name:"name",
        message:"What is your engineer's name?"
    },{
        type:"list",
        message:"Do you want to add more members?",
        name:"options",
        choices:["intern", "engineer","none"]
    }
    ]).then((answers)=>{
        let engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email);
        workRoster.push(engineer);
        return addAnother(answers.whatKind)
    })
}; 
function manInfo (){
    
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
        manInfo.push(manager);
        return addAnother(answers.whatKind)
    })
};
function intQues (){
    
    inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is intern's school name?"
    },{
        type:"list",
        message:"Do you want to add more members?",
        name:"options",
        choices:["intern", "engineer","none"]
    }
    ]).then((answers)=>{
        let intern = new Intern(
            answers.name,
            answers.id,
            answers.email);
        intQues.push(intern);
        return addAnother(answers.whatKind)
    })
}; 

// I need to create a team of employees
let renderWorkers = roster => {

    let engEmployee = engineer => {
        return `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2>${engineer.name}</h2>
              <i class="fas fa-glasses"></i>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${engineer.id}</li>
              <li class="list-group-item">Email:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
          </div>
    `;
    };


    html.push(roster.filter(employee => employee.getRole() === 'engineer')
    .map(engineer => engEmployee(engineer))
    .join(''));
    return html.join("");
}

//I need to generate a page to display

module.exports = roster => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team</title>
</head>
<body>
    <header class="bg-dark">
        <h1>My Team</h1>
    </header>
    <Main>
    ${renderWorkers(roster)}
    </Main>
</body>
</html>
    `;
};

function makeTeam() {
    fs.writeFileSync("roster.html", renderWorkers(workRoster), 'utf-8');
}

engQues();
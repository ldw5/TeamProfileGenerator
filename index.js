const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const path = require('path');


// after bringing in the information above, I need to create empty object for data 
// and create functions to begin asking questions

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "roster.html");
const render = require("./src/roster");
const workRoster = [];
const workId = [];

function start (){

    
}

// I need to create a team of employees to display to html
let renderWorkers = roster => {

    let engEmployee = engineer => {
        return `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h2><i class="fas fa-glasses"></i>${manager.getName()}</h2>
            <h3 class="card-header"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${engineer.getId()}</li>
              <li class="list-group-item">Email:<a href='mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
          </div>
    `;
    };

    let manEmployee = manager => {
        return `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2><i class="fas fa-glasses"></i>${manager.getName()}</h2>
              <h3 class="card-header"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${manager.getId()}</li>
              <li class="list-group-item">Email:<a href='mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Github:<a href="https://github.com/${manager.getGithub()}">${manager.getGithub()}</a></li>
            </ul>
          </div>
    `;
    };

    let intEmployee = intern => {
        return `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2><i class="fas fa-glasses"></i>${intern.getName()}</h2>
              <h3 class="card-header"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${intern.getId()}</li>
              <li class="list-group-item">Email:<a href='mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">Github:<a href="https://github.com/${intern.getGithub()}">${intern.getGithub()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
    `;
    };


    const html = [];

    html.push(roster
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engEmployee(engineer))
        .join("")
    );
    html.push(roster
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => manEmployee(manager))
    );
    html.push(roster
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => intEmployee(intern))
        .join("")
    );

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


engQues();
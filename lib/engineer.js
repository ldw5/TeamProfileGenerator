const Employee = require('./employee')

// Need to add engineer class with required methods
class Engineer extends Employee{
constructor(name,email,id,github){
    super(name,email,id);
    this.github = github;
}
// this returns the elements that have the specific name, id, email, role, and github of that attribute
getGithub(){
    return this.github;
}

getRole(){
    return "Engineer"
}
}
module.exports = Engineer;
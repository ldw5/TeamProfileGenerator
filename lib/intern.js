const Employee = require('./employee');
//Need to add intern class with required methods
class Intern extends Employee {
    constructor(name,email,id,school){
        this.school = school;
        super(name,email,id);
    }
//this returns the elements that have these specific attributes
    getRole(){
        return 'Intern'
    }

    getSchool(){
        return this.school;
    }
}
module.exports = Intern;
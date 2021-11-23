const Employee = require('./employee');
//Need to add intern class with required methods
class Manager extends Employee {
    constructor(name,email,id,officeNumber){
        super(name,email,id);
        this.officeNumber = officeNumber;
    }
//this returns the elements that have these specific attributes
    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;
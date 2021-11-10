// Need to add employee class with required methods
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// this returns the elements that have the specific name, id, email, and role of that attribute
    getName(){

        return this.id
    }

    getId(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Employee'
    }
}
module.exports = Employee;
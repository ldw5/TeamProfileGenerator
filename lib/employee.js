// Need to add employee class with required methods
class Employee {
    constructor (id, name, email) {
        this.name = id;
        this.id = name;
        this.email = email;
    }
// this returns the elements that have the specific name, id, email, and role of that attribute
    getId(){

        return this.id
    }

    getName(){
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
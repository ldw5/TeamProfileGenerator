//test logic
const Employee = require('../lib/employee')
describe('employee',() =>{
    describe('name',()=>{
    it('should return a name', ()=>{
        const name = 'jordan'
        const worker = new Employee('jordan','goat@yahoo.com','45')
        expect(name).toEqual(worker.getName())
    })
    })
    describe('email',()=>{
        it('should return an email', ()=>{
            const email = 'goat@yahoo.com'
            const worker = new Employee('jordan','goat@yahoo.com','45')
            expect(email).toEqual(worker.getEmail())
        })
        })
    describe('id',()=>{
        it('should return an id number', ()=>{
            const id = '45'
            const worker = new Employee('jordan','goat@yahoo.com','45')
            expect(id).toEqual(worker.getId())
        })
        })    
});
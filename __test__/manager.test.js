//test logic
const Manager = require('../lib/manager')
describe('manager',() =>{
    describe('name',()=>{
    it('should return a name', ()=>{
        const name = 'jordan'
        const manWorker = new Manager('jordan','goat@yahoo.com','45','1234567')
        expect(name).toEqual(manWorker.getName())
    })
    })
    describe('email',()=>{
        it('should return an email', ()=>{
            const email = 'goat@yahoo.com'
            const manWorker = new Manager('jordan','goat@yahoo.com','45','1234567')
            expect(email).toEqual(manWorker.getEmail())
        })
        })
    describe('id',()=>{
        it('should return an id number', ()=>{
            const id = '45'
            const manWorker = new Manager('jordan','goat@yahoo.com','45','12344567')
            expect(id).toEqual(manWorker.getId())
        })
        })
        describe('officeNumber',()=>{
            it('should return a phone number', ()=>{
                const numberM = '1234567'
                const manWorker = new Manager('jordan','goat@yahoo.com','45','1234567')
                expect(numberM).toEqual(manWorker.getOfficeNumber())
            })
            })       
});
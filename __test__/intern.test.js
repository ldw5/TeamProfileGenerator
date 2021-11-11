//test logic
const Intern = require('../lib/intern')
describe('intern',() =>{
    describe('name',()=>{
    it('should return a name', ()=>{
        const name = 'jordan'
        const itWorker = new Intern('jordan','goat@yahoo.com','45','bdw4')
        expect(name).toEqual(itWorker.getName())
    })
    })
    describe('email',()=>{
        it('should return an email', ()=>{
            const email = 'goat@yahoo.com'
            const itWorker = new Intern('jordan','goat@yahoo.com','45','bdw4')
            expect(email).toEqual(itWorker.getEmail())
        })
        })
    describe('id',()=>{
        it('should return an id number', ()=>{
            const id = '45'
            const itWorker = new Intern('jordan','goat@yahoo.com','45','bdw4')
            expect(id).toEqual(itWorker.getId())
        })
        })
        describe('school',()=>{
            it('should return a school', ()=>{
                const school = 'OU'
                const itWorker = new Intern('jordan','goat@yahoo.com','45','bdw4')
                expect(school).toEqual(itWorker.getSchool())
            })
            })       
});
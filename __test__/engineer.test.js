//test logic
const Engineer = require('../lib/engineer')
describe('engineer',() =>{
    describe('name',()=>{
    it('should return a name', ()=>{
        const name = 'jordan'
        const engWorker = new Engineer('jordan','goat@yahoo.com','45','bdw4')
        expect(name).toEqual(engWorker.getName())
    })
    })
    describe('email',()=>{
        it('should return an email', ()=>{
            const email = 'goat@yahoo.com'
            const engWorker = new Engineer('jordan','goat@yahoo.com','45','bdw4')
            expect(email).toEqual(engWorker.getEmail())
        })
        })
    describe('id',()=>{
        it('should return an id number', ()=>{
            const id = '45'
            const engWorker = new Engineer('jordan','goat@yahoo.com','45','bdw4')
            expect(id).toEqual(engWorker.getId())
        })
        })
        describe('github',()=>{
            it('should return an id number', ()=>{
                const gitId = 'bdw4'
                const engWorker = new Engineer('jordan','goat@yahoo.com','45','bdw4')
                expect(gitId).toEqual(engWorker.getGithub())
            })
            })       
});
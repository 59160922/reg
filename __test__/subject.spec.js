const expect =require('chai').expect
const subject = require('../subject')

describe('subject',()=>{
    
        it('Should return list of subjects',()=>{
            let s = student.getStudent(1)
            let timetable = s.getTimetable()
            expect(timetable).to.be.an('array')

        })
    
})
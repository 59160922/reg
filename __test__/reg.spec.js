const request = require('supertest')
const chai = require('chai')
const app = require('../app')

chai.should()


describe('reg API',()=>{
    describe('GET /student/:id/timetable',()=>{
        it('should return 200 OK with a time table object',(done)=>{
            request(app).get('/student/59160922/timetable')
                .expect(200)
                .end((err,res)=>{
                    let timetable = res.body
                    timetable.should.be.an('array')
                    let subject = timetable[0]
                    subject.should.have.property('subjectNo')
                    subject.should.have.property('subjectName')
                    subject.should.have.property('startTime')
                    subject.should.have.property('endTime')
                    subject.should.have.property('day')

                    done()
                })
        })
      
    })
    // describe('GET /subject/:id',()=>{
    //     its('should return 200 OK with a object subject',(done)=>{
    //         request(app).get('/subject/88749559')
    //             .expect(200)
    //             .end((err,res)=>{
    //                 res.body.should.to.be.an('Object')
    //                 res.body.should.to.have.a.property('subjectId')
    //                 res.body.should.to.have.a.property('subject')
    //                 res.body.should.to.have.a.property('time')
    //                 res.body.should.to.have.a.property('credit')
    //                 res.body.should.to.have.a.property('take')
    //                 res.body.should.to.have.a.property('entry')
    //                 res.body.should.to.have.a.property('left over')
    //                 res.body.should.to.have.a.property('status')
    //                 done()
                    
    //             })
    //     })
    // })
})
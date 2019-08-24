function Student(id){
    this.id = id
    this.getTimetable = () =>{
        return[
            {subjectNo: '001',subjectName:'Software Testing',startTime:'1400',endTime:'1600',day:"monday"}
        ]
    }
}

function getStudent(id){
    return new Student(id)
}

module.exports.getStudent = getStudent
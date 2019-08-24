function Subject(id){
    this.id = id
    this.getSubjectArr = () =>{
        return[
            {subjectNo: '001',subjectName:'Software Testing',credit:'3',group:'1',take:'28',entry:'28',status:"W"}
        ]
    }
}

function getSubject(id){
    return new Subject(id)
}

module.exports.getSubject = getSubject
const express = require("express");
const app = express();
const student = require('./student')



app.use(express.json());


app.get("/", (req, res) => res.send({ message: "Hello World" }));
app.get("/student/:id/timetable", (req, res) => {
    let s = student.getStudent(req.param.id)
    let timetable = s.getTimetable()
    res.send(timetable)
})

module.exports = app
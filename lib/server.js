const studentControllers = require("./controllers/studentControllers");
const express = require("express");
const app = express();
app.use (express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "API Welcome!"});
});

app.get("/students", (request, response) => {
    const students = studentControllers.getAllStudents();
    response.json(students);
});

app.get("/students/certification", (request, response) => {
    const students = studentControllers.getStudentsByCertification();
    response.json(students);
});

app.get("/students/credits", (request, response) => {
    const students = studentControllers.getStudentsWithCreditsOver500();
    response.json(students);
});

app.listen(port, () => {
    console.log(`API in localhost: ${port}`);
});
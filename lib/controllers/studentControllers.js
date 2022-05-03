const studentService = require("../service/studentService");

class studentControllers {
    static getAllStudents() {
        const path = "visualpartners.json";
        return studentService.getAllStudents(path);
    }
    static getStudentsByCertification() {
        const path = "visualpartners.json";
        return studentService.getStudentsByCertification(path);
    }
    static getStudentsWithCreditsOver500() {
        const path = "visualpartners.json";
        return studentService.getStudentsWithCreditsOver500(path);
    }
}

module.exports = studentControllers;
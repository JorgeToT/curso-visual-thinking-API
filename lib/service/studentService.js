const Reader = require("../utils/Reader");

class studentService {
    static getAllStudents(path) {
        return Reader.ReadJSONFile(path);
    }
    static getStudentsByCertification(path) {
        return studentService.getAllStudents(path).filter(student => student.haveCertification === true).map(student => student.email);
    }
    static getStudentsWithCreditsOver500(path) {
        return studentService.getAllStudents(path).filter(student => student.credits > 500).map(student => student.name);
    }
}

module.exports = studentService;
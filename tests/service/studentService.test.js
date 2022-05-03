const studentService = require("../../lib/service/studentService");

describe("Test for students service", () => {
    test ("Get all students", () => {
        const students = studentService.getAllStudents("tests/service/visualpartnerstest.json").length;
        expect(students).toBe(2);
    });
    test ("Get email by certification", () => {
        const email = studentService.getStudentsByCertification("tests/service/visualpartnerstest.json");
        expect(email).toContain("Todd@visualpartnership.xyz");
    });
    test("Get students with credits over 500", () => {
        const students = studentService.getStudentsWithCreditsOver500("tests/service/visualpartnerstest.json");
        expect(students).toContain("Warren");
    }); 
});
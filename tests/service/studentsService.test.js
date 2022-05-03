const Reader = require("../../lib/utils/Reader");

describe("Test for students service", () => {
    test ("Get all students", () => {
        const students = Reader.ReadJSONFile("tests/service/visualpartnerstest.json").length;
        expect(students).toBe(2);
    });
    test ("Get email by certification", () => {
        const email = Reader.ReadJSONFile("tests/service/visualpartnerstest.json").filter(student => student.haveCertification === true).map(student => student.email);
        expect(email).toContain("Todd@visualpartnership.xyz");
    });
    test("Get students with credits over 500", () => {
        const students = Reader.ReadJSONFile("tests/service/visualpartnerstest.json").filter(student => student.credits > 500).map(student => student.name);
        expect(students).toContain("Warren");
    }); 
});
const Reader = require("../../lib/utils/Reader");
describe("Read JSON from github: ", () => {
    test("Read JSON", () =>{
        const json = Reader.ReadJSONFile("visualpartners.json");
        expect.arrayContaining(json);
    });
});
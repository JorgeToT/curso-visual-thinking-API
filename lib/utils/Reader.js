const fs = require("fs");
class Reader {
    static ReadJSONFile(path) {
        const json = JSON.parse(fs.readFileSync(path));
        return json;
    }
}

module.exports = Reader;
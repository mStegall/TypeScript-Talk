"use strict";
const fs = require('fs');
const path = require('path');
function readJsonFromFile(file) {
    let data = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    let dataJson = JSON.parse(data);
    return dataJson;
}
exports.readJsonFromFile = readJsonFromFile;
function writeJsonToFile(data, file) {
    let Json = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, file), Json);
}
exports.writeJsonToFile = writeJsonToFile;
//# sourceMappingURL=fileRead.js.map
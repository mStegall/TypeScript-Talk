"use strict";
var fs = require('fs');
var path = require('path');
function readJsonFromFile(file) {
    var data = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    var dataJson = JSON.parse(data);
    return dataJson;
}
exports.readJsonFromFile = readJsonFromFile;
function writeJsonToFile(data, file) {
    var Json = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, file), Json);
}
exports.writeJsonToFile = writeJsonToFile;
//# sourceMappingURL=fileRead.js.map
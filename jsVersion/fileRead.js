const fs = require('fs');
const path = require('path');

module.exports = {
    readJsonFromFile,
    writeJsonToFile
}

function readJsonFromFile(file) {
    let data = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    let dataJson = JSON.parse(data);
    return dataJson;
}


function writeJsonToFile(data, file) {
    let Json = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, file), Json);
}

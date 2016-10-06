import * as fs from 'fs';
import * as path from 'path';

export function readJsonFromFile(file: string){
    let data = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    let dataJson = JSON.parse(data);
    return dataJson;
}

export function writeJsonToFile(data, file: string) {
    let Json = JSON.stringify(data)
    fs.writeFileSync(path.join(__dirname, file), Json)
}

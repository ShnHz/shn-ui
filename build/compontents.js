const fs = require('fs-extra');
const path = require('path');

function isDir(dir) {
    return fs.lstatSync(dir).isDirectory();
}

function transformStr3(str) {
    var re = /-(\w)/g;
    return str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
    });
}

// function firstUpperCase(str) {
//     return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
// }

const json = {};
const dir = path.join(__dirname, '../packages');
const files = fs.readdirSync(dir);
files.forEach(file => {
    const absolutePath = path.join(dir, file);
    if (isDir(absolutePath)) {
        let fileKey = transformStr3(file.replace('shn-', ''))
        json[fileKey] = `D:/projects/shn/shn-ui/packages/${file}/index.js`;
    }
});

console.log(JSON.stringify(json));
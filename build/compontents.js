const fs = require('fs-extra');
const path = require('path');

function isDir(dir) {
    return fs.lstatSync(dir).isDirectory();
}

const json = {};
const dir = path.join(__dirname, '../packages');
const files = fs.readdirSync(dir);
files.forEach(file => {
    const absolutePath = path.join(dir, file);
    if (isDir(absolutePath)) {
        json[file] = `./packages/${file}`;
    }
});

console.log(JSON.stringify(json));

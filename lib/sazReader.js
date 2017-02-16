"use strict";
const constants_1 = require('./constants');
const fs = require('fs');
const path = require('path');
function sazReader() {
    return new Promise((resolve) => {
        fs.readdir(constants_1.SAZ_DIR, (err, files) => {
            if (err) {
                throw err;
            }
            resolve(files.map(file => path.resolve(constants_1.SAZ_DIR, file)));
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sazReader;

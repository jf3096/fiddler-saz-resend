"use strict";
const encoding = require('encoding');
let rawRequest = require('request');
if (process.env != 'deployment') {
    rawRequest = rawRequest.defaults({ 'proxy': 'http://localhost:8888' });
}
function request(option) {
    return new Promise(resolve => {
        rawRequest(option, (err, res, body) => {
            if (err) {
                throw err;
            }
            if (typeof body === `string`) {
                try {
                    //TODO: 研究更好的方式处理字符串编码问题
                    body = JSON.stringify(JSON.parse(body));
                }
                catch (e) {
                }
            }
            resolve(body);
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = request;

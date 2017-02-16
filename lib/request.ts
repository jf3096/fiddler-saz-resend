const encoding = require('encoding');
let rawRequest = require('request');

if (process.env != 'deployment') {
    rawRequest = rawRequest.defaults({'proxy': 'http://localhost:8888'});
}

export default function request(option) {
    return new Promise(resolve => {
        rawRequest(option, (err, res, body: any) => {
            if (err) {
                throw err;
            }
            if (typeof body === `string`) {
                try {
                    //TODO: 研究更好的方式处理字符串编码问题
                    body = JSON.stringify(JSON.parse(body));
                } catch (e) {
                }
            }
            resolve(body);
        });
    })
}
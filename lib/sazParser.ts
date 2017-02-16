const rawSazParser = require('saz-parser');

type requestOptions = any[];

export default function sazParser(filePath: string): Promise<requestOptions> {
    return new Promise(resolve => {
        rawSazParser(filePath, function (err, sessions) {
            if (err) {
                throw err;
            }
            resolve(
                Object.keys(sessions).map((key) => {
                    const session = sessions[key];
                    session.request.body = session.request.content;
                    delete session.request.protocol;
                    delete session.request.content;
                    return session.request;
                })
            );
        });
    })
}
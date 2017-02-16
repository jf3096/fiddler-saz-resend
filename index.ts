import sazReader from './lib/sazReader';
import sazParser from './lib/sazParser';
import request from './lib/request';

export default async function makeSazRequest() {
    const filePaths = await sazReader();
    const bodiesList = await Promise.all(await filePaths.map(async(filePath) => {
        const requestOptions = await sazParser(filePath);
        return await Promise.all(requestOptions.map(async requestOption => await request(requestOption)))
    }));
    console.log(bodiesList);
}

makeSazRequest();
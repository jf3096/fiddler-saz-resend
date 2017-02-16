import {SAZ_DIR} from './constants';
import * as fs from 'fs';
import * as path from 'path';

export default function sazReader(): Promise<string[]> {
    return new Promise((resolve) => {
        fs.readdir(SAZ_DIR, (err, files: string[]) => {
            if (err) {
                throw err;
            }
            resolve(files.map(file => path.resolve(SAZ_DIR, file)));
        });
    });
}
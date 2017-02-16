"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const sazReader_1 = require('./lib/sazReader');
const sazParser_1 = require('./lib/sazParser');
const request_1 = require('./lib/request');
function makeSazRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const filePaths = yield sazReader_1.default();
        const bodiesList = yield Promise.all(yield filePaths.map((filePath) => __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield sazParser_1.default(filePath);
            return yield Promise.all(requestOptions.map((requestOption) => __awaiter(this, void 0, void 0, function* () { return yield request_1.default(requestOption); })));
        })));
        console.log(bodiesList);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeSazRequest;
makeSazRequest();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPairs = void 0;
const fromPairs = (args) => {
    let objeto = {};
    args.forEach((elemento) => {
        objeto[elemento[0]] = elemento[1];
    });
    return objeto;
};
exports.fromPairs = fromPairs;
//# sourceMappingURL=fromPairs.js.map
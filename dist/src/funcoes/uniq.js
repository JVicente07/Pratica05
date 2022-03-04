"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
const uniq = (args) => {
    let novoArray = [];
    args.forEach(arg => {
        if (novoArray.includes(arg) === false) {
            novoArray.push(arg);
        }
    });
    return novoArray;
};
exports.uniq = uniq;
//# sourceMappingURL=uniq.js.map
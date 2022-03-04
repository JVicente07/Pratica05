"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
const chunk = (valores, tamanho) => {
    let aux = [];
    let vetor = [];
    for (let i = 0; i < valores.length;) {
        for (let j = 0; j < tamanho && i < valores.length; j++) {
            aux.push(valores[i]);
            i++;
        }
        vetor.push(aux);
        aux = [];
    }
    return vetor;
};
exports.chunk = chunk;
//# sourceMappingURL=chunk.js.map
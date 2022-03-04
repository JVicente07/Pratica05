"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumirDaFila = exports.escreveNaFila = exports.leArquivo = exports.escreveArquivo = exports.zerarAquivo = void 0;
const promises_1 = require("fs/promises");
const path_1 = require("path");
const ARQUIVO_DE_FILA = `${(0, path_1.resolve)('.')}/files/fila.txt`;
async function zerarAquivo() {
    try {
        await escreveArquivo('');
    }
    catch (err) {
        console.log(err);
    }
}
exports.zerarAquivo = zerarAquivo;
async function escreveArquivo(texto) {
    try {
        await (0, promises_1.writeFile)(ARQUIVO_DE_FILA, texto);
    }
    catch (err) {
        console.log(err);
    }
}
exports.escreveArquivo = escreveArquivo;
async function leArquivo() {
    try {
        const texto = await (0, promises_1.readFile)(ARQUIVO_DE_FILA, 'utf8');
        return texto;
    }
    catch (err) {
        console.log(err);
    }
}
exports.leArquivo = leArquivo;
async function escreveNaFila(texto) {
    try {
        const textoAtual = await leArquivo();
        console.log('texto encontrado anteriormente no arquivo', textoAtual);
        const novoTexto = textoAtual ? `${textoAtual}\n${texto}` : texto;
        try {
            await escreveArquivo(novoTexto);
            console.log('texto escrito no arquivo');
        }
        catch (err) {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.escreveNaFila = escreveNaFila;
async function consumirDaFila() {
    try {
        const textoAtual = await leArquivo();
        console.log('texto encontrado anteriormente no arquivo:\n', textoAtual);
        const [linhaConsumida, ...linhas] = textoAtual.split('\n');
        console.log('======== linha consumida:\n\t', linhaConsumida);
        try {
            await escreveArquivo(linhas.join('\n'));
            console.log('texto escrito no arquivo\n');
            return linhaConsumida;
        }
        catch (err) {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err);
    }
    return '';
}
exports.consumirDaFila = consumirDaFila;
//# sourceMappingURL=fila.js.map
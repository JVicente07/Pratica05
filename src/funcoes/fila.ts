import { writeFile, readFile } from 'fs/promises';
import { text } from 'node:stream/consumers';
import { resolve } from 'path';

const ARQUIVO_DE_FILA = `${resolve('.')}/files/fila.txt`;

/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquvos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */

 export async function zerarAquivo(): Promise<void> {
   try{
     await escreveArquivo('');
   }
   catch(err){
     console.log(err);
   }
}

export async function escreveArquivo(texto: string): Promise<void> {
  try{
    await writeFile(ARQUIVO_DE_FILA,texto);
  }
  catch(err){
      console.log(err);
  }
}

export async function leArquivo():Promise<string>{
  try{
    const texto = await readFile(ARQUIVO_DE_FILA,'utf8');
    return texto;
  }
  catch(err){
    console.log(err);
  }
}

export async function escreveNaFila(texto: string): Promise<void> {
  try{
    const textoAtual = await leArquivo();
    console.log('texto encontrado anteriormente no arquivo', textoAtual);
    const novoTexto = textoAtual ? `${textoAtual}\n${texto}` : texto;
    try{
      await escreveArquivo(novoTexto);
      console.log('texto escrito no arquivo');
   }
   catch(err){
      console.log(err);
    }
  }
  catch(err){
    console.log(err);
  }
}

 export async function consumirDaFila(): Promise<string> {
  try{
    const textoAtual = await leArquivo();
    console.log('texto encontrado anteriormente no arquivo:\n', textoAtual);
    const [linhaConsumida, ...linhas] = textoAtual.split('\n');
    console.log('======== linha consumida:\n\t', linhaConsumida);
    try{
      await escreveArquivo(linhas.join('\n'));
      console.log('texto escrito no arquivo\n');
      return linhaConsumida;
    }
    catch(err){
      console.log(err);
    }
  }
  catch(err){
    console.log(err);
  }  
  return '';
}
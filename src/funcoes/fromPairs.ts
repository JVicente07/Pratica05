import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: any[][]): Record<string, unknown> => {
  let objeto : Record<string, unknown> = {};
  args.forEach((elemento) => {
      objeto[elemento[0]] = elemento[1]
  })     
  return objeto;
};
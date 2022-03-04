/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  let novoArray = [];  
  args.forEach(arg => {
     if (novoArray.includes(arg) === false){
      novoArray.push(arg)
     }
     })
  
    return novoArray ;
};


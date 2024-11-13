//cria uma constante de lista de listas de letras
const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
//flat transforma a lista de listas em apenas uma lista de letras e reduce retorna o tamanho da lista
let resultado = letras.flat().reduce((acumulador, objeto, numero) => {
if (objeto) {
    acumulador += 1;
} else {
    acumulador = 1;
}
return acumulador;
}, 0);
//o algoritmo cria uma lista de listas e depois transforma em apenas uma lista e resultado recebe o tamanho dessa nova lista
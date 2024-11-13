//cria uma constante que recebe uma string do prompt
const inputTamanho = prompt('Digite o tamanho da lista de números');
//cria uma variavel que recebe a string de cima transformada em inteiro
let tamanho = parseInt(inputTamanho)
//cria uma variavel que recebe a instância de um arraydo tamanho de tamanho e cada um dos itens é um null
let lista = new Array(tamanho).fill(null);
// map faz a iteração em lista e retorna uma lista composto de cada indice + 1 e logo após aplica um reduce que retorna a multiplicação de cada indice e retorna para a variavel lista a resultado
lista = lista
 .map((item, index) => index + 1
)
.reduce((acumulador, item) => acumulador * item);

//cria uma variavel que recebe a instância de um array do tamanho dito no prompt e cada um dos itens é do tipo null, após isso map itera e retorna uma lista de cada indice + 1 e por fim essa lista passa pelo reduce que retorna a soma dessa lista de indices
let lista2 = new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item, 0);


//o algoritmo pega um numero pelo prompt e cria duas listas uma de soma dos indices e uma de multiplicação de cada indice, lembrando que cada indice é composto de indice mais 1
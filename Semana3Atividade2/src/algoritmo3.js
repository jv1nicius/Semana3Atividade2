//cria uma constante de lista de objetos
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
//map faz a iteracao na lista de cima e pega cada objeto
const estudantesMedias = estudantes.map((estudante) => {
    //cria a constante que recebe a soma de todas as notas do estudante
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    //descontroi o estudante recebendo apenas o nome
    let {nome} = estudante;
    //e retorna um objeto de nome e a media
    return { nome, media: total / estudante.notas.length };
});

//cria uma constante que recebe o resultado da filtragem de notas dos estudantes pegando apenas as médias maiores que 90
const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90
);

//o algoritmo cria os estudantes, faz as médias e cria uma lista de melhores notas
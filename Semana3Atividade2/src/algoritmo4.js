const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
const funcionariosPorDepartamento = funcionarios.reduce(
(acumulador, funcionario) => {
    const departamento = funcionario.departamento;
    if (!acumulador[departamento]) {
    acumulador[departamento] = [];
    }
    acumulador[departamento].push(funcionario);
    return acumulador;
},
{},
);

const mediasSalarioPorDepartamento = Object.keys(
funcionariosPorDepartamento,
).map((departamento) => {
const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario,
    0,
);
return {
    departamento: departamento,
    media: total / funcionariosPorDepartamento[departamento].length,
};
});


const maioresPagamentos = mediasSalarioPorDepartamento.filter(
(departamento) => departamento.media > 65000,
);
   
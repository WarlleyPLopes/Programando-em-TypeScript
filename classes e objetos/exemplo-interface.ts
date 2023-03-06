interface Pessoa {
  idade: number;
  sexo?: string;
}

function imprimirIdade(pessoa: Pessoa) {
  console.log(pessoa.idade);
}

let jao = { nome: "joao", idade: 21 };

imprimirIdade(jao);

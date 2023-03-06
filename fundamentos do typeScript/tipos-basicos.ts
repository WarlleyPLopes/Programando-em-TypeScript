//Boolean
let estaPago: boolean = true;

//Number
let idade: number = 20;
let valor: number = 29.99;

//String
let empresa: string = "AlgaWorks";

// Template Srings
let nome: string = "João";
console.log(`Olá, meu nome o é ${nome} e tenho ${idade} anos.`);
let concatenacaoTradicional =
  "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";

//Arrays
let notas: number[] = [8, 6, 7, 9];

//Tuple
let alunos: [string, number, string] = ["João", 10, "Warlley"];
console.log(`Aluno ${alunos[0]}. Nota ${alunos[1]}.`);

//Enum
enum Cor {
  verde,
  Amarelo,
  Azul,
  Branco,
}
let corFundo: Cor = Cor.verde;

//Any
let algumValor: any = 4;
algumValor = "Agora é uma string";
algumValor = true;
//Biblioteca de terceiros...
//Migração de JavaScript para TypeScript
//Outro exemplo: array com vários tipos de dados

//Void
function alerta(): void {
  //... alert('Operação não permitida')
}

//null e undefined -> Não faz muito sentido!
let u: undefined = undefined;
let n: null = null;
//Null e undefined são subtipos dos outros tipos

nome = null;
nome = undefined;

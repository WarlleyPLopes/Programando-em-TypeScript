//Boolean
var estaPago = true;
//Number
var idade = 20;
var valor = 29.99;
//String
var empresa = "AlgaWorks";
// Template Srings
var nome = "João";
console.log("Ol\u00E1, meu nome o \u00E9 ".concat(nome, " e tenho ").concat(idade, " anos."));
var concatenacaoTradicional = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
//Arrays
var notas = [8, 6, 7, 9];
//Tuple
var alunos = ["João", 10, "Warlley"];
console.log("Aluno ".concat(alunos[0], ". Nota ").concat(alunos[1], "."));
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 0] = "verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
var corFundo = Cor.verde;
//Any
var algumValor = 4;
algumValor = "Agora é uma string";
algumValor = true;
//Biblioteca de terceiros...
//Migração de JavaScript para TypeScript
//Outro exemplo: array com vários tipos de dados
//Void
function alerta() {
    //... alert('Operação não permitida')
}
//null e undefined -> Não faz muito sentido!
var u = undefined;
var n = null;
//Null e undefined são subtipos dos outros tipos
nome = null;
nome = undefined;

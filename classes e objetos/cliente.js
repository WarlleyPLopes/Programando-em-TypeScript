var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Cliente;
}());
var warlley = new Cliente("Warlley", 21);
var apresentacao = warlley.apresentar();
console.log(apresentacao);
var daniel = new Cliente("Daniel", 23);
var apresentacao2 = daniel.apresentar();
console.log(apresentacao2);

class Cliente {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  }
}

let warlley: Cliente = new Cliente("Warlley", 21);
let apresentacao: string = warlley.apresentar();
console.log(apresentacao);

let daniel: Cliente = new Cliente("Daniel", 23);
let apresentacao2: string = daniel.apresentar();
console.log(apresentacao2);

class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  pagarImporto(taxa: number = 7.5) {
    console.log(`Pagando ${(this.salario * taxa) / 100} de imposto`);
  }
}

class Secretario extends Funcionario {}

class Executivo extends Funcionario {
  pagarImporto(taxa: number = 27.5) {
    console.log(`Executivo paga mais!`);
    super.pagarImporto(taxa);
  }
}

let sarah: Secretario = new Secretario("Sarah", 2000);
sarah.pagarImporto();

const karen: Funcionario = new Funcionario("Warlley", 1500);
karen.pagarImporto();

let jorge = new Executivo("Jorge", 30000);
jorge.pagarImporto();
